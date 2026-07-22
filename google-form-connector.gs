function doGet() {
  return jsonResponse({
    ok: true,
    app: 'Quiziz CS Reku Google Form Connector',
    message: 'Connector is live. Paste this web app URL into Quiziz CS Reku.',
  });
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || '{}');
  if (payload.action !== 'create_or_update_monthly_form') {
    return jsonResponse({ ok: false, error: 'Unsupported action.' });
  }

  const props = PropertiesService.getUserProperties();
  const key = 'quiziz-form-' + payload.month + '-' + payload.product;
  const existingId = props.getProperty(key);
  const form = existingId ? FormApp.openById(existingId) : FormApp.create(payload.formTitle);

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

  const emailItem = form.addTextItem().setTitle('Email').setRequired(true);
  const metaItem = form.addParagraphTextItem().setTitle('Score, timing, and feedback notes');
  const questionItems = (payload.questions || []).map(function(question) {
    const item = form
      .addParagraphTextItem()
      .setTitle(question.title + ' - ' + question.question)
      .setHelpText('Answer key: ' + (question.answerKey || ''));

    try {
      item.setPoints(Number(question.points || 10));
    } catch (error) {}

    return item;
  });

  (payload.responses || []).forEach(function(response) {
    const formResponse = form.createResponse();
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

  return jsonResponse({
    ok: true,
    editUrl: form.getEditUrl(),
    liveUrl: form.getPublishedUrl(),
    formId: form.getId(),
    title: form.getTitle(),
  });
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
