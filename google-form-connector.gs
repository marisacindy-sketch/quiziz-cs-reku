var FORM_EDITORS = ['marisacindy@reku.id', 'marisa@reku.id'];
var SETTINGS_KEY = 'quiziz-weekly-settings';
var SUBMISSIONS_FILE_NAME = 'quiziz-cs-reku-submissions.json';
var DEFAULT_TRAINEE_ROSTER = [
  'Frans William Tobing | frans.william@reku.id | Customer Success Associate',
  'Abimas Ramadhan | abimas.ramdhan@reku.id | Customer Success Associate',
  'Ahmad Wahyudi | ahmad.wahyudi@reku.id | Customer Success Associate',
  'Ayodia Fikri Rizal Moenir | ayodiafikri@reku.id | Customer Success Associate',
  'Dzulfahmi Fauzan | dzulfahmifauzan@reku.id | Customer Success Associate',
  'Edi Kurniawan | edi.kurniawan@reku.id | Customer Success Associate',
  'Alvian Asrori | alvian.asrori@reku.id | Customer Success Associate',
  'Moza Eliza | moza.eliza@reku.id | Customer Success Associate',
  'Riski Fadilah Ardian | riski.fadilah@reku.id | Customer Success Associate',
  'Rizky Afrianzie | rizky.afrianzie@reku.id | Customer Success Associate',
  'Tasya Salma Ramdini Putri | tasya.salma@reku.id | Customer Success Associate',
  'Willyansya Heka | willyansyaheka@reku.id | Customer Success Associate',
].join('\n');

function doGet(e) {
  if (e.parameter && e.parameter.action === 'get_submissions') {
    return submissionsResponse(e.parameter.callback);
  }

  if (e.parameter && e.parameter.action === 'save_settings') {
    var settings = e.parameter.settings ? JSON.parse(e.parameter.settings) : {};
    return settingsResponse(e.parameter.callback, saveWeeklySettings(settings));
  }

  if (e.parameter && e.parameter.action === 'get_settings') {
    return settingsResponse(e.parameter.callback);
  }

  return HtmlService.createHtmlOutput(
    '<p>Quiziz CS Reku connector is live. Copy this web app URL into the Quiziz Google Form connector field.</p>'
  );
}

function doPost(e) {
  var payload = parsePayload(e);
  if (payload.action === 'save_submission') {
    return jsonResponse(saveRemoteSubmission(payload.submission || {}));
  }

  if (payload.action === 'save_settings') {
    var settingsResult = saveWeeklySettings(payload.settings || {});
    return jsonResponse(settingsResult);
  }

  if (payload.action !== 'create_or_update_monthly_form') {
    return jsonResponse({ ok: false, error: 'Unsupported action.' });
  }

  var result = createOrUpdateMonthlyForm(payload);
  if (e.parameter && e.parameter.payload) {
    return redirectPage(result);
  }
  return jsonResponse(result);
}

function parsePayload(e) {
  if (e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }
  return JSON.parse((e.postData && e.postData.contents) || '{}');
}

function defaultWeeklySettings() {
  return {
    openDay: 5,
    openTime: '13:00',
    closeDay: 0,
    closeTime: '23:59',
    durationMinutes: 90,
    activeProduct: 'General',
    expectedEmails: DEFAULT_TRAINEE_ROSTER,
  };
}

function getWeeklySettings() {
  var raw = PropertiesService.getUserProperties().getProperty(SETTINGS_KEY);
  if (!raw) return defaultWeeklySettings();
  try {
    var settings = Object.assign(defaultWeeklySettings(), JSON.parse(raw));
    if (!String(settings.expectedEmails || '').trim()) settings.expectedEmails = DEFAULT_TRAINEE_ROSTER;
    return settings;
  } catch (error) {
    return defaultWeeklySettings();
  }
}

function saveWeeklySettings(settings) {
  var next = Object.assign(defaultWeeklySettings(), settings || {});
  if (!String(next.expectedEmails || '').trim()) next.expectedEmails = DEFAULT_TRAINEE_ROSTER;
  next.updatedAt = new Date().toISOString();
  PropertiesService.getUserProperties().setProperty(SETTINGS_KEY, JSON.stringify(next));
  return { ok: true, settings: next };
}

function settingsResponse(callback, payload) {
  payload = payload || { ok: true, settings: getWeeklySettings() };
  if (callback) {
    return ContentService
      .createTextOutput(String(callback) + '(' + JSON.stringify(payload) + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return jsonResponse(payload);
}

function submissionsResponse(callback) {
  var payload = { ok: true, submissions: readRemoteSubmissions() };
  if (callback) {
    return ContentService
      .createTextOutput(String(callback) + '(' + JSON.stringify(payload) + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return jsonResponse(payload);
}

function remoteSubmissionKey(submission) {
  var email = String(submission.email || '').toLowerCase();
  var product = String(submission.activeProduct || '');
  var month = String(submission.submittedAt || '').slice(0, 7);
  return [email, product, month].join('__');
}

function saveRemoteSubmission(submission) {
  if (!submission || !submission.email) {
    return { ok: false, error: 'Missing submission email.' };
  }
  var clean = Object.assign({}, submission);
  clean.email = String(clean.email || '').toLowerCase();
  clean.syncedAt = new Date().toISOString();

  var submissions = readRemoteSubmissions();
  var key = remoteSubmissionKey(clean);
  submissions = submissions.filter(function(item) {
    return remoteSubmissionKey(item) !== key;
  });
  submissions.push(clean);
  submissions.sort(function(a, b) {
    return new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0);
  });
  writeRemoteSubmissions(submissions);
  return { ok: true, submission: clean, count: submissions.length };
}

function submissionStoreFile() {
  var files = DriveApp.getFilesByName(SUBMISSIONS_FILE_NAME);
  if (files.hasNext()) return files.next();
  return DriveApp.createFile(SUBMISSIONS_FILE_NAME, '[]', MimeType.PLAIN_TEXT);
}

function readRemoteSubmissions() {
  try {
    var text = submissionStoreFile().getBlob().getDataAsString() || '[]';
    var parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeRemoteSubmissions(submissions) {
  submissionStoreFile().setContent(JSON.stringify(submissions || []));
}

function createOrUpdateMonthlyForm(payload) {
  var props = PropertiesService.getUserProperties();
  var key = 'quiziz-form-' + payload.month + '-' + payload.product;
  var existingId = props.getProperty(key);
  var form = existingId ? FormApp.openById(existingId) : FormApp.create(payload.formTitle);

  props.setProperty(key, form.getId());
  form.setTitle(payload.formTitle);
  form.setDescription(
    'Quiz bulanan ini dirancang untuk mengukur pemahaman dan keterampilan tim Customer Success dalam menjalankan tugas sehari-hari.' +
      '\nPeserta memiliki waktu ' + (payload.durationMinutes || 90) + ' menit untuk menyelesaikan seluruh soal.' +
      '\nQuiz ini bersifat open book, sehingga peserta diperbolehkan menggunakan materi atau referensi yang tersedia sebagai panduan dalam menjawab.' +
      '\n\nProduct: ' + payload.product +
      '\nMonth: ' + payload.month
  );

  try {
    form.setIsQuiz(true);
  } catch (error) {}

  try {
    form.deleteAllResponses();
  } catch (error) {}

  form.getItems().slice().reverse().forEach(function(item) {
    form.deleteItem(item);
  });

  var roster = payload.roster || [];
  var positionChoices = uniqueValues(roster.map(function(person) { return person.position; })).filter(Boolean);
  var nameChoices = uniqueValues(roster.map(function(person) { return person.name; })).filter(Boolean);
  if (!positionChoices.length) positionChoices = ['Customer Success Associate'];
  if (!nameChoices.length) nameChoices = ['Name'];

  var emailItem = form.addTextItem().setTitle('Email').setRequired(true);
  var positionItem = form.addListItem().setTitle('Posisi').setChoiceValues(positionChoices);
  var nameItem = form.addListItem().setTitle('Nama').setChoiceValues(nameChoices);
  var questionItems = (payload.questions || []).map(function(question) {
    var item = form
      .addParagraphTextItem()
      .setTitle(question.title)
      .setHelpText(question.question || '');

    try {
      item.setPoints(Number(question.points || 10));
    } catch (error) {}

    return item;
  });

  (payload.responses || []).forEach(function(response) {
    var formResponse = form.createResponse();
    formResponse.withItemResponse(emailItem.createResponse(response.email || ''));
    formResponse.withItemResponse(positionItem.createResponse(choiceOrDefault(response.position, positionChoices)));
    formResponse.withItemResponse(nameItem.createResponse(choiceOrDefault(response.name, nameChoices)));

    (response.answers || []).forEach(function(answer, index) {
      if (questionItems[index]) {
        formResponse.withItemResponse(questionItems[index].createResponse(answer.answer || ''));
      }
    });

    formResponse.submit();
  });

  var shareStatus = shareFormWithEditors(form);

  return {
    ok: true,
    editUrl: form.getEditUrl(),
    liveUrl: form.getPublishedUrl(),
    formId: form.getId(),
    title: form.getTitle(),
    shareStatus: shareStatus,
  };
}

function uniqueValues(values) {
  var seen = {};
  return (values || []).filter(function(value) {
    var clean = String(value || '').trim();
    if (!clean || seen[clean]) return false;
    seen[clean] = true;
    return true;
  });
}

function choiceOrDefault(value, choices) {
  var clean = String(value || '').trim();
  if (clean && choices.indexOf(clean) !== -1) return clean;
  return choices[0] || '';
}

function shareFormWithEditors(form) {
  var status = [];
  try {
    FORM_EDITORS.forEach(function(email) {
      try {
        form.addEditor(email);
        status.push(email + ': form editor added');
      } catch (error) {
        status.push(email + ': form editor failed - ' + error.message);
      }
    });
  } catch (error) {
    status.push('Form editor sharing failed - ' + error.message);
  }

  try {
    var file = DriveApp.getFileById(form.getId());
    FORM_EDITORS.forEach(function(email) {
      try {
        file.addEditor(email);
        status.push(email + ': drive editor added');
      } catch (error) {
        status.push(email + ': drive editor failed - ' + error.message);
      }
    });
  } catch (error) {
    status.push('Drive sharing skipped - ' + error.message);
  }

  return status;
}

function redirectPage(result) {
  var editUrl = result.editUrl || 'https://forms.google.com/';
  var liveUrl = result.liveUrl || '';
  var shareStatus = (result.shareStatus || []).map(function(line) {
    return '<li>' + escapeHtml(line) + '</li>';
  }).join('');
  var html =
    '<!doctype html><html><head><base target="_top">' +
    '</head><body style="font-family:Arial,sans-serif;padding:24px;line-height:1.45;">' +
    '<h2>Google Form is ready</h2>' +
    '<p>The connector created or updated the Form and tried to add editor access for the owner emails.</p>' +
    '<p><a style="display:inline-block;padding:12px 16px;border-radius:8px;background:#159f7a;color:#fff;text-decoration:none;" href="' +
    escapeHtml(editUrl) +
    '" target="_blank">Open Google Form editor</a></p>' +
    (liveUrl ? '<p><a href="' + escapeHtml(liveUrl) + '" target="_blank">Open live respondent link</a></p>' : '') +
    (shareStatus ? '<h3>Share status</h3><ul>' + shareStatus + '</ul>' : '') +
    '</body></html>';
  return HtmlService.createHtmlOutput(html);
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
