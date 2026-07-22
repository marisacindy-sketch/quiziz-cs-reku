# Quiziz CS Reku

Static quiz webapp for CS Reku training.

## Files

- `index.html` - app shell
- `styles.css` - visual styling
- `app.js` - app logic, timer, owner tools, exports
- `quiz-data.json` / `quiz-data.js` - quiz content
- `google-form-connector.gs` - one-time Google Apps Script bridge for creating Forms

## Deploy

Use GitHub Pages from the `main` branch root.

## Google Form Export

1. Open [script.google.com](https://script.google.com/) with the Google account that should own the Forms.
2. Create a new Apps Script project.
3. Paste the contents of `google-form-connector.gs`.
4. Deploy as a Web App with access set to anyone with the link.
5. Paste the Web App URL into Owner settings > Google Form, save it, then click Create Google Form now.
