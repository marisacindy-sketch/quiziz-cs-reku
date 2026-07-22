var FORM_EDITORS = ['marisacindy@reku.id', 'marisa@reku.id'];

function doGet() {
  return HtmlService.createHtmlOutput(
    '<p>Quiziz CS Reku connector is live. Copy this web app URL into the Quiziz Google Form connector field.</p>'
  );
}

function doPost(e) {
  var payload = parsePayload(e);
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

function createOrUpdateMonthlyForm(payload) {
  var props = PropertiesService.getUserProperties();
  var key = 'quiziz-form-' + payload.month + '-' + payload.product;
  var existingId = props.getProperty(key);
  var form = existingId ? FormApp.openById(existingId) : FormApp.create(payload.formTitle);

  props.setProperty(key, form.getId());
  form.setTitle(payload.formTitle);
  form.setDescription(
    'Created from Quiziz CS Reku export.' +
      '\nProduct: ' + payload.product +
      '\nMonth: ' + payload.month +
      '\nQuestions: ' + (payload.questions || []).length +
      '\nResponses imported: ' + (payload.responses || []).length
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

  var emailItem = form.addTextItem().setTitle('Email').setRequired(true);
  var metaItem = form.addParagraphTextItem().setTitle('Score, timing, and feedback notes');
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
    formResponse.withItemResponse(
      metaItem.createResponse(
        'Submitted: ' + (response.submittedAt || '') +
          '\nDuration: ' + (response.duration || '') +
          '\nReason: ' + (response.submitReason || '') +
          '\nScore: ' + (response.score || '') +
          '\nFeedback: ' + (response.feedback || '')
      )
    );

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
