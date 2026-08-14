var CONNECTOR_VERSION = '2026-08-14-v9';
var FORM_EDITORS = ['marisacindy@reku.id', 'marisa@reku.id'];
var SETTINGS_KEY = 'quiziz-weekly-settings';
var QUESTIONS_KEY_PREFIX = 'quiziz-cs-reku-questions';
var SUBMISSIONS_KEY_PREFIX = 'quiziz-cs-reku-submissions';
var PASSWORD_RESETS_KEY = 'quiziz-password-resets';
var STORE_CHUNK_SIZE = 7000;
var PRODUCT_ORDER = ['General', 'Kripto Spot', 'US Stock', 'Perpetuals'];
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
  'Squad Lead Name | lead@reku.id | Customer Success Squad Lead / QC',
].join('\n');

function doGet(e) {
  try {
    var action = (e.parameter && e.parameter.action) || '';
    if (action === 'get_settings') return jsonpOrJson(e, { ok: true, version: CONNECTOR_VERSION, settings: getWeeklySettings() });
    if (action === 'save_settings') return jsonpOrJson(e, saveWeeklySettings(parseJson(e.parameter.settings, {})));
    if (action === 'get_password_resets') return jsonpOrJson(e, { ok: true, version: CONNECTOR_VERSION, resets: readPasswordResets() });
    if (action === 'save_password_reset') return jsonpOrJson(e, savePasswordReset(e.parameter.email));
    if (action === 'get_questions') return jsonpOrJson(e, { ok: true, version: CONNECTOR_VERSION, questions: readRemoteQuestions() });
    if (action === 'get_submissions') return jsonpOrJson(e, { ok: true, version: CONNECTOR_VERSION, submissions: readRemoteSubmissions() });
    if (action === 'save_submission') {
      return jsonpOrJson(e, saveRemoteSubmission(parseJson(e.parameter.submission, {}).submission || parseJson(e.parameter.payload, {}).submission || {}));
    }
    if (action === 'save_submissions') {
      return jsonpOrJson(e, saveRemoteSubmissions(parseJson(e.parameter.submissions, {}).submissions || parseJson(e.parameter.payload, {}).submissions || []));
    }
  } catch (error) {
    return connectorPage({ ok: false, error: error.message, stack: error.stack });
  }

  return connectorPage({ ok: true, live: true });
}

function doPost(e) {
  try {
    var payload = parsePayload(e);
    var action = payload.action || '';
    var result;

    if (action === 'save_submission') result = saveRemoteSubmission(payload.submission || {});
    else if (action === 'save_submissions') result = saveRemoteSubmissions(payload.submissions || []);
    else if (action === 'save_settings') result = saveWeeklySettings(payload.settings || {});
    else if (action === 'save_password_reset') result = savePasswordReset(payload.email);
    else if (action === 'save_questions') result = saveRemoteQuestions(payload.questions || []);
    else if (action === 'create_or_update_monthly_form') result = createOrUpdateMonthlyForm(payload);
    else result = { ok: false, version: CONNECTOR_VERSION, error: 'Unsupported action: ' + action };

    if (e.parameter && e.parameter.payload) {
      if (action === 'create_or_update_monthly_form') return redirectPage(result);
      return connectorPage(result);
    }

    return jsonResponse(result);
  } catch (error) {
    var failed = { ok: false, version: CONNECTOR_VERSION, error: error.message, stack: error.stack };
    if (e && e.parameter && e.parameter.payload) return connectorPage(failed);
    return jsonResponse(failed);
  }
}

function parsePayload(e) {
  if (e.parameter && e.parameter.payload) return parseJson(e.parameter.payload, {});
  if (e.postData && e.postData.contents) return parseJson(e.postData.contents, {});
  return e.parameter || {};
}

function parseJson(text, fallback) {
  try {
    return JSON.parse(String(text || ''));
  } catch (error) {
    return fallback;
  }
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
  var raw = PropertiesService.getScriptProperties().getProperty(SETTINGS_KEY);
  if (!raw) return defaultWeeklySettings();
  var settings = Object.assign(defaultWeeklySettings(), parseJson(raw, {}));
  if (!String(settings.expectedEmails || '').trim()) settings.expectedEmails = DEFAULT_TRAINEE_ROSTER;
  return settings;
}

function saveWeeklySettings(settings) {
  var next = Object.assign(defaultWeeklySettings(), settings || {});
  if (!String(next.expectedEmails || '').trim()) next.expectedEmails = DEFAULT_TRAINEE_ROSTER;
  next.updatedAt = new Date().toISOString();
  PropertiesService.getScriptProperties().setProperty(SETTINGS_KEY, JSON.stringify(next));
  return { ok: true, version: CONNECTOR_VERSION, settings: next };
}

function readPasswordResets() {
  return parseJson(PropertiesService.getScriptProperties().getProperty(PASSWORD_RESETS_KEY), {});
}

function savePasswordReset(email) {
  var cleanEmail = String(email || '').trim().toLowerCase();
  if (!cleanEmail || cleanEmail.indexOf('@') === -1) {
    return { ok: false, version: CONNECTOR_VERSION, error: 'Missing trainee email.' };
  }
  var resets = readPasswordResets();
  resets[cleanEmail] = new Date().toISOString();
  PropertiesService.getScriptProperties().setProperty(PASSWORD_RESETS_KEY, JSON.stringify(resets));
  return { ok: true, version: CONNECTOR_VERSION, email: cleanEmail, resetAt: resets[cleanEmail], resets: resets };
}

function saveRemoteSubmission(submission) {
  if (!submission || !submission.email) return { ok: false, version: CONNECTOR_VERSION, error: 'Missing submission email.' };

  var result = saveRemoteSubmissions([submission]);
  if (!result.ok) return result;
  return {
    ok: true,
    version: CONNECTOR_VERSION,
    submission: result.saved[0],
    count: result.count,
  };
}

function saveRemoteSubmissions(submissionsToSave) {
  if (!Array.isArray(submissionsToSave) || !submissionsToSave.length) {
    return { ok: false, version: CONNECTOR_VERSION, error: 'No submissions to save.' };
  }

  var cleaned = submissionsToSave
    .filter(function(submission) { return submission && submission.email; })
    .map(normalizeSubmission);
  if (!cleaned.length) return { ok: false, version: CONNECTOR_VERSION, error: 'Missing submission email.' };

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var submissions = readRemoteSubmissions();
    var keys = {};
    cleaned.forEach(function(item) {
      keys[remoteSubmissionKey(item)] = true;
    });
    submissions = submissions.filter(function(item) {
      return !keys[remoteSubmissionKey(item)];
    });
    submissions = submissions.concat(cleaned);
    submissions.sort(function(a, b) {
      return new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0);
    });
    writeRemoteSubmissions(submissions);
    return { ok: true, version: CONNECTOR_VERSION, saved: cleaned, count: submissions.length };
  } finally {
    lock.releaseLock();
  }
}

function readRemoteQuestions() {
  try {
    var text = readLargeProperty(QUESTIONS_KEY_PREFIX) || '[]';
    var parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeQuestion).filter(function(question) {
      return question.id && question.product && question.question;
    });
  } catch (error) {
    return [];
  }
}

function saveRemoteQuestions(questionsToSave) {
  if (!Array.isArray(questionsToSave) || !questionsToSave.length) {
    return { ok: false, version: CONNECTOR_VERSION, error: 'No questions to save.' };
  }
  var cleaned = questionsToSave.map(normalizeQuestion).filter(function(question) {
    return question.id && question.product && question.question;
  });
  if (!cleaned.length) return { ok: false, version: CONNECTOR_VERSION, error: 'No valid questions to save.' };

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    writeLargeProperty(QUESTIONS_KEY_PREFIX, JSON.stringify(cleaned));
    return { ok: true, version: CONNECTOR_VERSION, questions: cleaned, count: cleaned.length };
  } finally {
    lock.releaseLock();
  }
}

function connectorPage(result) {
  var ok = Boolean(result && result.ok);
  var title = ok
    ? (result.live ? 'Quiziz CS Reku connector is live' : 'Quiziz sync saved')
    : 'Quiziz sync failed';
  var saved = result && result.saved ? result.saved.length : result && result.submission ? 1 : 0;
  var count = result && result.count !== undefined ? result.count : '-';
  var error = result && result.error ? '<p style="color:#b42318;"><strong>Error:</strong> ' + escapeHtml(result.error) + '</p>' : '';
  var stack = result && result.stack ? '<pre style="white-space:pre-wrap;background:#fff4f4;border:1px solid #ffd0d0;padding:12px;border-radius:8px;">' + escapeHtml(result.stack) + '</pre>' : '';
  var html =
    '<!doctype html><html><body style="font-family:Arial,sans-serif;padding:24px;line-height:1.45;">' +
    '<h2>' + escapeHtml(title) + '</h2>' +
    '<p>Version: ' + escapeHtml(CONNECTOR_VERSION) + '</p>' +
    (ok && !result.live ? '<p><strong>ok:true</strong></p><p>Saved submissions: ' + saved + '</p><p>Total stored: ' + count + '</p>' : '') +
    (ok && result.live ? '<p>Copy this Web app URL into Quiziz CS Reku.</p>' : '') +
    error +
    stack +
    '</body></html>';
  return HtmlService.createHtmlOutput(html);
}

function normalizeSubmission(submission) {
  var clean = Object.assign({}, submission);
  clean.email = String(clean.email || '').trim().toLowerCase();
  clean.activeProduct = clean.activeProduct || getWeeklySettings().activeProduct || 'General';
  clean.submittedAt = clean.submittedAt || new Date().toISOString();
  clean.quizPeriod = clean.quizPeriod || String(clean.submittedAt).slice(0, 7);
  clean.answers = clean.answers || {};
  clean.syncedAt = new Date().toISOString();

  var profile = profileFromRoster(clean.email);
  clean.name = clean.name || profile.name || nameFromEmail(clean.email);
  clean.position = clean.position || profile.position || '';
  return clean;
}

function normalizeQuestion(question) {
  var clean = Object.assign({}, question || {});
  return {
    id: String(clean.id || '').trim(),
    product: choiceOrDefault(clean.product, PRODUCT_ORDER),
    number: Number(clean.number || 0) || '',
    question: String(clean.question || '').trim(),
    answer: String(clean.answer || '').trim(),
    points: Number(clean.points || 10) || 10,
  };
}

function remoteSubmissionKey(submission) {
  var email = String(submission.email || '').toLowerCase();
  var product = String(submission.activeProduct || '');
  var period = String(submission.quizPeriod || submission.submittedAt || '').slice(0, 10);
  return [email, product, period].join('__');
}

function readRemoteSubmissions() {
  try {
    var text = readLargeProperty(SUBMISSIONS_KEY_PREFIX) || '[]';
    var parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeRemoteSubmissions(submissions) {
  writeLargeProperty(SUBMISSIONS_KEY_PREFIX, JSON.stringify(submissions || []));
}

function readLargeProperty(prefix) {
  var props = PropertiesService.getScriptProperties();
  var count = Number(props.getProperty(prefix + '-chunks') || 0);
  if (!count) return props.getProperty(prefix) || '';
  var parts = [];
  for (var index = 0; index < count; index += 1) {
    parts.push(props.getProperty(prefix + '-' + index) || '');
  }
  return parts.join('');
}

function writeLargeProperty(prefix, value) {
  var props = PropertiesService.getScriptProperties();
  var previousCount = Number(props.getProperty(prefix + '-chunks') || 0);
  var text = String(value || '');
  var nextCount = Math.max(1, Math.ceil(text.length / STORE_CHUNK_SIZE));
  for (var index = 0; index < nextCount; index += 1) {
    props.setProperty(prefix + '-' + index, text.slice(index * STORE_CHUNK_SIZE, (index + 1) * STORE_CHUNK_SIZE));
  }
  for (var cleanup = nextCount; cleanup < previousCount; cleanup += 1) {
    props.deleteProperty(prefix + '-' + cleanup);
  }
  props.setProperty(prefix + '-chunks', String(nextCount));
  props.deleteProperty(prefix);
}

function createOrUpdateMonthlyForm(payload) {
  var props = PropertiesService.getScriptProperties();
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

  var roster = normalizeRoster(payload.roster || rosterFromText(getWeeklySettings().expectedEmails));
  var positionChoices = uniqueValues(roster.map(function(person) { return person.position; })).filter(Boolean);
  var nameChoices = uniqueValues(roster.map(function(person) { return person.name; })).filter(Boolean);
  if (positionChoices.indexOf('Customer Success Associate') === -1) positionChoices.unshift('Customer Success Associate');
  if (positionChoices.indexOf('Customer Success Squad Lead / QC') === -1) positionChoices.push('Customer Success Squad Lead / QC');
  if (!nameChoices.length) nameChoices = ['Name'];

  var emailItem = form.addTextItem().setTitle('Email').setRequired(true);
  var positionItem = form.addListItem().setTitle('Posisi').setChoiceValues(positionChoices).setRequired(true);
  var nameItem = form.addListItem().setTitle('Nama').setChoiceValues(nameChoices).setRequired(true);
  var questionItems = (payload.questions || []).map(function(question) {
    var item = form
      .addParagraphTextItem()
      .setTitle(question.title)
      .setHelpText(question.question || '')
      .setRequired(true);

    try {
      item.setPoints(Number(question.points || 10));
    } catch (error) {}

    return item;
  });

  (payload.responses || []).forEach(function(response) {
    var profile = profileFromRoster(response.email || '');
    var formResponse = form.createResponse();
    formResponse.withItemResponse(emailItem.createResponse(response.email || ''));
    formResponse.withItemResponse(positionItem.createResponse(choiceOrDefault(response.position || profile.position, positionChoices)));
    formResponse.withItemResponse(nameItem.createResponse(choiceOrDefault(response.name || profile.name, nameChoices)));

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
    version: CONNECTOR_VERSION,
    editUrl: form.getEditUrl(),
    liveUrl: form.getPublishedUrl(),
    formId: form.getId(),
    title: form.getTitle(),
    shareStatus: shareStatus,
  };
}

function profileFromRoster(email) {
  var target = String(email || '').trim().toLowerCase();
  var found = rosterFromText(getWeeklySettings().expectedEmails).filter(function(person) {
    return String(person.email || '').toLowerCase() === target;
  })[0];
  return found || { name: '', email: target, position: '' };
}

function rosterFromText(text) {
  return String(text || '')
    .split(/\n+/)
    .map(function(line) {
      var parts = line.split('|').map(function(part) { return String(part || '').trim(); }).filter(Boolean);
      var emailIndex = parts.findIndex(function(part) { return /@/.test(part); });
      if (emailIndex === -1) return null;
      var email = parts[emailIndex].toLowerCase();
      return {
        name: parts[emailIndex - 1] || nameFromEmail(email),
        email: email,
        position: parts[emailIndex + 1] || '',
      };
    })
    .filter(Boolean);
}

function normalizeRoster(roster) {
  if (!Array.isArray(roster)) return [];
  return roster.map(function(person) {
    var email = String(person.email || '').trim().toLowerCase();
    if (!email) return null;
    return {
      name: String(person.name || nameFromEmail(email)).trim(),
      email: email,
      position: String(person.position || '').trim(),
    };
  }).filter(Boolean);
}

function nameFromEmail(email) {
  return String(email || '')
    .split('@')[0]
    .split(/[._-]+/)
    .filter(Boolean)
    .map(function(part) { return part.charAt(0).toUpperCase() + part.slice(1); })
    .join(' ');
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
  FORM_EDITORS.forEach(function(email) {
    try {
      form.addEditor(email);
      status.push(email + ': editor added');
    } catch (error) {
      status.push(email + ': editor failed - ' + error.message);
    }
  });
  return status;
}

function jsonpOrJson(e, data) {
  var callback = e.parameter && e.parameter.callback;
  if (callback) {
    return ContentService
      .createTextOutput(String(callback) + '(' + JSON.stringify(data) + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return jsonResponse(data);
}

function redirectPage(result) {
  var editUrl = result.editUrl || 'https://forms.google.com/';
  var liveUrl = result.liveUrl || '';
  var shareStatus = (result.shareStatus || []).map(function(line) {
    return '<li>' + escapeHtml(line) + '</li>';
  }).join('');
  var html =
    '<!doctype html><html><head><base target="_top"></head>' +
    '<body style="font-family:Arial,sans-serif;padding:24px;line-height:1.45;">' +
    '<h2>Google Form is ready</h2>' +
    '<p>The connector created or updated the Form and imported the selected responses.</p>' +
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
