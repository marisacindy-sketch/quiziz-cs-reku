const OWNER_EMAIL = "marisa@reku.id";
const OWNER_PASSWORD = "owner123";
const DEFAULT_CONNECTOR_URL =
  "https://script.google.com/a/macros/reku.id/s/AKfycbwW9lKayU9h23tBChIPeQH5wZyCSoNfGiYFLv3tw3SUqPHVcaAjskVqbwNm3C7bHjxM/exec";
const PRODUCT_ORDER = ["General", "Kripto Spot", "US Stock", "Perpetuals"];

const defaultSettings = {
  openDay: 5,
  openTime: "13:00",
  closeDay: 0,
  closeTime: "23:59",
  durationMinutes: 90,
  answerKeyMode: "owner",
  activeProduct: "General",
  expectedEmails: "",
};

const defaultGoogleFormConfig = {
  enabled: true,
  connectorUrl: DEFAULT_CONNECTOR_URL,
};

const state = {
  questions: [],
  activeId: "",
  product: "all",
  search: "",
  currentUser: JSON.parse(sessionStorage.getItem("quiziz-current-user") || "null"),
  settings: normalizeStoredSettings(),
  googleForm:
    normalizeGoogleFormConfig(JSON.parse(localStorage.getItem("quiziz-google-form-config") || "null")),
  ownerPreview: false,
  timerId: null,
  autoSubmitting: false,
  fiveMinuteAlertShown: false,
  openResponseEmail: "",
  answers: {},
};

function normalizeStoredSettings() {
  return { ...defaultSettings, ...(JSON.parse(localStorage.getItem("quiziz-settings") || "null") || {}) };
}

function normalizeGoogleFormConfig(config) {
  const rawConnectorUrl = config?.connectorUrl || config?.actionUrl || DEFAULT_CONNECTOR_URL;
  const connectorUrl = isValidConnectorUrl(rawConnectorUrl) ? rawConnectorUrl : DEFAULT_CONNECTOR_URL;
  return {
    ...defaultGoogleFormConfig,
    ...(config || {}),
    enabled: Boolean(connectorUrl),
    connectorUrl,
  };
}

const els = {
  authScreen: document.querySelector("#authScreen"),
  appShell: document.querySelector("#appShell"),
  loginForm: document.querySelector("#loginForm"),
  emailInput: document.querySelector("#emailInput"),
  passwordInput: document.querySelector("#passwordInput"),
  loginError: document.querySelector("#loginError"),
  userEmail: document.querySelector("#userEmail"),
  userRole: document.querySelector("#userRole"),
  logoutButton: document.querySelector("#logoutButton"),
  quizDeskButton: document.querySelector("#quizDeskButton"),
  quizPage: document.querySelector("#quizPage"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsSubmenu: document.querySelector("#settingsSubmenu"),
  settingsPage: document.querySelector("#settingsPage"),
  closeSettings: document.querySelector("#closeSettings"),
  settingsForm: document.querySelector("#settingsForm"),
  openDay: document.querySelector("#openDay"),
  openTime: document.querySelector("#openTime"),
  closeDay: document.querySelector("#closeDay"),
  closeTime: document.querySelector("#closeTime"),
  durationMinutes: document.querySelector("#durationMinutes"),
  activeProductSetting: document.querySelector("#activeProductSetting"),
  expectedEmails: document.querySelector("#expectedEmails"),
  timerChip: document.querySelector("#timerChip"),
  timerText: document.querySelector("#timerText"),
  timerLabel: document.querySelector("#timerLabel"),
  timerHours: document.querySelector("#timerHours"),
  timerMinutes: document.querySelector("#timerMinutes"),
  timerSeconds: document.querySelector("#timerSeconds"),
  timerProgress: document.querySelector("#timerProgress"),
  timeAlertModal: document.querySelector("#timeAlertModal"),
  keepWorkingButton: document.querySelector("#keepWorkingButton"),
  accessBanner: document.querySelector("#accessBanner"),
  accessStatus: document.querySelector("#accessStatus"),
  accessTitle: document.querySelector("#accessTitle"),
  accessCopy: document.querySelector("#accessCopy"),
  ownerPreviewButton: document.querySelector("#ownerPreviewButton"),
  quizWorkspace: document.querySelector("#quizWorkspace"),
  summaryGrid: document.querySelector("#summaryGrid"),
  productLauncher: document.querySelector("#productLauncher"),
  productLauncherGrid: document.querySelector("#productLauncherGrid"),
  productLauncherHint: document.querySelector("#productLauncherHint"),
  traineeForm: document.querySelector("#traineeForm"),
  traineeProductName: document.querySelector("#traineeProductName"),
  traineeQuestionTotal: document.querySelector("#traineeQuestionTotal"),
  traineeQuestionForm: document.querySelector("#traineeQuestionForm"),
  traineeAnsweredCount: document.querySelector("#traineeAnsweredCount"),
  traineeQuestionCount: document.querySelector("#traineeQuestionCount"),
  traineeSaveDraft: document.querySelector("#traineeSaveDraft"),
  traineeSubmitQuiz: document.querySelector("#traineeSubmitQuiz"),
  answeredCount: document.querySelector("#answeredCount"),
  questionCount: document.querySelector("#questionCount"),
  productSummaryLabel: document.querySelector("#productSummaryLabel"),
  productSummaryValue: document.querySelector("#productSummaryValue"),
  productSummaryCopy: document.querySelector("#productSummaryCopy"),
  totalQuestions: document.querySelector("#totalQuestions"),
  totalPoints: document.querySelector("#totalPoints"),
  productFilter: document.querySelector("#productFilter"),
  productTabs: document.querySelector("#productTabs"),
  searchInput: document.querySelector("#searchInput"),
  questionList: document.querySelector("#questionList"),
  activeProduct: document.querySelector("#activeProduct"),
  activeTitle: document.querySelector("#activeTitle"),
  activePoints: document.querySelector("#activePoints"),
  caseType: document.querySelector("#caseType"),
  questionText: document.querySelector("#questionText"),
  userAnswer: document.querySelector("#userAnswer"),
  saveAnswer: document.querySelector("#saveAnswer"),
  nextQuestion: document.querySelector("#nextQuestion"),
  submitQuiz: document.querySelector("#submitQuiz"),
  ownerEditor: document.querySelector("#ownerEditor"),
  editQuestionText: document.querySelector("#editQuestionText"),
  saveQuestionEdit: document.querySelector("#saveQuestionEdit"),
  settingsSavedText: document.querySelector("#settingsSavedText"),
  metricSubmitted: document.querySelector("#metricSubmitted"),
  metricPending: document.querySelector("#metricPending"),
  metricAverageDuration: document.querySelector("#metricAverageDuration"),
  metricAutoSubmit: document.querySelector("#metricAutoSubmit"),
  responsesMonth: document.querySelector("#responsesMonth"),
  responsesYear: document.querySelector("#responsesYear"),
  responsesProduct: document.querySelector("#responsesProduct"),
  submissionTableBody: document.querySelector("#submissionTableBody"),
  responseViewer: document.querySelector("#responseViewer"),
  responseViewerTitle: document.querySelector("#responseViewerTitle"),
  responseViewerMeta: document.querySelector("#responseViewerMeta"),
  responseDetailList: document.querySelector("#responseDetailList"),
  exportResponses: document.querySelector("#exportResponses"),
  exportQuestions: document.querySelector("#exportQuestions"),
  exportStatus: document.querySelector("#exportStatus"),
  exportMonth: document.querySelector("#exportMonth"),
  exportProduct: document.querySelector("#exportProduct"),
  googleFormEnabled: document.querySelector("#googleFormEnabled"),
  googleConnectorUrl: document.querySelector("#googleConnectorUrl"),
  exportMonthlyForm: document.querySelector("#exportMonthlyForm"),
  saveGoogleFormConfig: document.querySelector("#saveGoogleFormConfig"),
  downloadConnectorGuide: document.querySelector("#downloadConnectorGuide"),
  exportHistoryList: document.querySelector("#exportHistoryList"),
  googleFormStatus: document.querySelector("#googleFormStatus"),
  historyMonth: document.querySelector("#historyMonth"),
  historyProduct: document.querySelector("#historyProduct"),
  answerHistoryList: document.querySelector("#answerHistoryList"),
};

function storageKey(suffix) {
  return `quiziz-${state.currentUser.email}-${suffix}`;
}

function loadUserState() {
  if (!state.currentUser) return;
  purgeLegacyAttempts();
  state.answers = JSON.parse(localStorage.getItem(storageKey("answers")) || "{}");
}

function saveAnswers() {
  localStorage.setItem(storageKey("answers"), JSON.stringify(state.answers));
}

function purgeLegacyAttempts() {
  localStorage.removeItem(storageKey("attempt"));
  PRODUCT_ORDER.forEach((product) => {
    const key = attemptStorageKey(product);
    const attempt = JSON.parse(localStorage.getItem(key) || "null");
    if (attempt && !attempt.startedByUser && !attempt.submittedAt) {
      localStorage.removeItem(key);
    }
  });
}

function saveSettings() {
  localStorage.setItem("quiziz-settings", JSON.stringify(state.settings));
}

function saveQuestions() {
  localStorage.setItem("quiziz-owner-questions", JSON.stringify(state.questions));
}

function getSubmissions() {
  return JSON.parse(localStorage.getItem("quiziz-submissions") || "[]");
}

function saveSubmissions(submissions) {
  localStorage.setItem("quiziz-submissions", JSON.stringify(submissions));
}

function getExportHistory() {
  return JSON.parse(localStorage.getItem("quiziz-export-history") || "[]");
}

function saveExportHistory(history) {
  localStorage.setItem("quiziz-export-history", JSON.stringify(history));
}

function nameFromEmail(email) {
  return String(email || "")
    .split("@")[0]
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function traineeRoster() {
  const rows = String(state.settings.expectedEmails || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap((line) => {
      if (line.includes("|")) return [line];
      return line
        .split(/[;, ]+/)
        .map((email) => email.trim())
        .filter((email) => email.includes("@"));
    });

  const seen = new Set();
  return rows
    .map((row) => {
      if (String(row).includes("|")) {
        const parts = String(row).split("|").map((part) => part.trim());
        const email = parts.find((part) => part.includes("@"))?.toLowerCase() || "";
        const emailIndex = parts.findIndex((part) => part.includes("@"));
        const name = (emailIndex > 0 ? parts[0] : "") || nameFromEmail(email);
        const position = parts[emailIndex + 1] || parts.find((part, index) => index !== emailIndex && index !== 0) || "";
        return { name, email, position };
      }
      const email = String(row).trim().toLowerCase();
      return { name: nameFromEmail(email), email, position: "" };
    })
    .filter((person) => person.email.includes("@"))
    .filter((person) => {
      if (seen.has(person.email)) return false;
      seen.add(person.email);
      return true;
    });
}

function expectedEmailList() {
  return traineeRoster().map((person) => person.email);
}

function traineeProfile(email = state.currentUser?.email) {
  return traineeRoster().find((person) => person.email === String(email || "").toLowerCase()) || {
    name: nameFromEmail(email),
    email: String(email || "").toLowerCase(),
    position: "",
  };
}

function saveGoogleFormConfig() {
  state.googleForm = normalizeGoogleFormConfig(state.googleForm);
  localStorage.setItem("quiziz-google-form-config", JSON.stringify(state.googleForm));
}

function activeConnectorUrl() {
  return state.googleForm.connectorUrl || DEFAULT_CONNECTOR_URL;
}

function loadRemoteSettings() {
  const url = activeConnectorUrl();
  if (!isValidConnectorUrl(url)) return Promise.resolve(false);
  return new Promise((resolve) => {
    const callbackName = `quizizSettings_${Date.now()}_${Math.round(Math.random() * 10000)}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };
    const timeout = window.setTimeout(() => {
      cleanup();
      resolve(false);
    }, 2500);

    window[callbackName] = (payload) => {
      window.clearTimeout(timeout);
      cleanup();
      if (payload?.ok && payload.settings) {
        state.settings = normalizeSettings({ ...state.settings, ...payload.settings });
        saveSettings();
        resolve(true);
        return;
      }
      resolve(false);
    };

    script.onerror = () => {
      window.clearTimeout(timeout);
      cleanup();
      resolve(false);
    };
    script.src = `${url}?action=get_settings&callback=${encodeURIComponent(callbackName)}`;
    document.head.appendChild(script);
  });
}

function publishRemoteSettings() {
  const url = activeConnectorUrl();
  if (!isValidConnectorUrl(url)) return;
  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      action: "save_settings",
      settings: {
        openDay: state.settings.openDay,
        openTime: state.settings.openTime,
        closeDay: state.settings.closeDay,
        closeTime: state.settings.closeTime,
        durationMinutes: state.settings.durationMinutes,
        activeProduct: state.settings.activeProduct,
        expectedEmails: state.settings.expectedEmails,
      },
    }),
  }).catch(() => {});
}

function getTraineePasswordStore() {
  return JSON.parse(localStorage.getItem("quiziz-trainee-passwords") || "{}");
}

function saveTraineePasswordStore(store) {
  localStorage.setItem("quiziz-trainee-passwords", JSON.stringify(store));
}

async function hashPassword(email, password) {
  const value = `${email}:${password}:quiziz-cs-reku`;
  if (window.crypto?.subtle) {
    const encoded = new TextEncoder().encode(value);
    const digest = await window.crypto.subtle.digest("SHA-256", encoded);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return String(hash);
}

function normalizeSettings(settings) {
  return { ...defaultSettings, ...(settings || {}) };
}

function isOwner() {
  return state.currentUser?.role === "owner";
}

function showSettingsPanel(panelName = "quizControlsPanel") {
  const panelTitles = {
    quizControlsPanel: "Quiz controls",
    responsesPanel: "Responses",
    answerHistoryPanel: "History",
    exportPanel: "Google Form",
  };
  document.querySelectorAll("[data-settings-section]").forEach((section) => {
    section.hidden = section.dataset.settingsSection !== panelName;
  });
  document.querySelectorAll("[data-settings-panel]").forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsPanel === panelName);
  });
  document.querySelector(".settings-card .drawer-head h2").textContent = panelTitles[panelName] || "Settings";
  if (panelName === "answerHistoryPanel") renderAnswerHistory();
}

function showAppView(view = "quiz") {
  const settingsView = view === "settings" && isOwner();
  els.quizPage.hidden = settingsView;
  els.settingsPage.hidden = !settingsView;
  els.quizDeskButton.classList.toggle("active", !settingsView);
  els.settingsButton.classList.toggle("active", settingsView);
  els.settingsSubmenu.hidden = !settingsView;
  if (settingsView) {
    fillSettingsForm();
  }
}

function attemptStorageKey(product = state.settings.activeProduct) {
  return storageKey(`attempt-${slugify(product)}`);
}

function getAttempt(product = state.settings.activeProduct) {
  if (!state.currentUser) return null;
  return JSON.parse(localStorage.getItem(attemptStorageKey(product)) || "null");
}

function saveAttempt(attempt, product = state.settings.activeProduct) {
  localStorage.setItem(attemptStorageKey(product), JSON.stringify({ ...attempt, product }));
}

function elapsedSeconds(startedAt, submittedAt = new Date().toISOString()) {
  if (!startedAt) return 0;
  return Math.max(0, Math.round((new Date(submittedAt) - new Date(startedAt)) / 1000));
}

function formatDuration(seconds) {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const h = String(Math.floor(safeSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((safeSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(safeSeconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function resetLocalAttempts() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith("quiziz-") && key.includes("-attempt"))
    .forEach((key) => localStorage.removeItem(key));
}

function dayName(day) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
    Number(day)
  ];
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

function currentMonthValue(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(value) {
  const [year, month] = String(value || currentMonthValue()).split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(year, month - 1, 1));
}

function monthOptions() {
  return Array.from({ length: 12 }, (_, index) => ({
    value: String(index + 1).padStart(2, "0"),
    label: new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(2026, index, 1)),
  }));
}

function responseYears() {
  const years = getSubmissions()
    .map((submission) => String(submission.submittedAt || "").slice(0, 4))
    .filter(Boolean);
  return [...new Set([String(new Date().getFullYear()), ...years])].sort((a, b) => Number(b) - Number(a));
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseClock(time) {
  const [hour, minute] = time.split(":").map(Number);
  return { hour, minute };
}

function nextDateForDay(base, targetDay, time) {
  const date = new Date(base);
  const { hour, minute } = parseClock(time);
  const diff = (Number(targetDay) - date.getDay() + 7) % 7;
  date.setDate(date.getDate() + diff);
  date.setHours(hour, minute, 0, 0);
  return date;
}

function getWindow(now = new Date()) {
  let openAt = nextDateForDay(now, state.settings.openDay, state.settings.openTime);
  if (openAt > now) {
    const previous = new Date(openAt);
    previous.setDate(previous.getDate() - 7);
    const previousClose = buildCloseDate(previous);
    if (now <= previousClose) openAt = previous;
  }

  const closeAt = buildCloseDate(openAt);
  if (now > closeAt) {
    openAt = new Date(openAt);
    openAt.setDate(openAt.getDate() + 7);
  }

  return { openAt, closeAt: buildCloseDate(openAt) };
}

function buildCloseDate(openAt) {
  const close = new Date(openAt);
  const openDay = Number(state.settings.openDay);
  const closeDay = Number(state.settings.closeDay);
  const { hour, minute } = parseClock(state.settings.closeTime);
  let diff = (closeDay - openDay + 7) % 7;
  if (diff === 0 && state.settings.closeTime < state.settings.openTime) diff = 7;
  close.setDate(openAt.getDate() + diff);
  close.setHours(hour, minute, 0, 0);
  return close;
}

function getAccessState() {
  const now = new Date();
  const { openAt, closeAt } = getWindow(now);
  const open = now >= openAt && now <= closeAt;
  const attempt = getAttempt();
  const submitted = Boolean(attempt?.submittedAt || getSubmission(state.currentUser?.email, state.settings.activeProduct));
  const started = Boolean(attempt?.startedByUser && attempt?.startedAt && !submitted);
  const paused = Boolean(attempt?.pausedAt && attempt?.pausedRemainingMs);
  const endsAt = paused
    ? new Date(now.getTime() + Number(attempt.pausedRemainingMs))
    : attempt?.endsAt
      ? new Date(attempt.endsAt)
      : null;
  const expired = Boolean(!paused && endsAt && now > endsAt);
  const allowed = isOwner() || (open && started && !submitted && !expired);
  return { open, allowed, submitted, started, expired, paused, openAt, closeAt, attempt, endsAt, now };
}

function startWeeklyProduct(product = state.settings.activeProduct) {
  const access = getAccessState();
  if (!access.open || isOwner()) return;
  if (product !== state.settings.activeProduct) return;
  if (getSubmission(state.currentUser.email, product)) return;
  if (getAttempt(product)?.startedByUser && getAttempt(product)?.startedAt) {
    renderAccess();
    updateTimer();
    return;
  }
  const now = new Date();
  const endsAt = new Date(now.getTime() + Number(state.settings.durationMinutes) * 60 * 1000);
  saveAttempt(
    { startedByUser: true, startedAt: now.toISOString(), endsAt: endsAt.toISOString(), submittedAt: null },
    product,
  );
  state.product = product;
  renderAccess();
  renderStats();
  renderFilters();
  renderTraineeForm();
  updateTimer();
}

function inferCaseType(question) {
  const text = question.toLowerCase();
  if (text.includes("fraud") || text.includes("penipuan") || text.includes("phishing")) {
    return "Fraud case study";
  }
  if (text.includes("hitung") || text.includes("perhitungan") || text.includes("pnl")) {
    return "Calculation case study";
  }
  if (text.includes("studi kasus") || text.includes("pengguna") || text.includes("nasabah")) {
    return "Service case study";
  }
  return "Concept essay";
}

function productColor(product) {
  return {
    General: "#0f9f7a",
    "Kripto Spot": "#2d6cdf",
    "US Stock": "#c47b18",
    Perpetuals: "#cf4660",
  }[product] || "#17212f";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function availableQuestions() {
  if (isOwner()) return state.questions;
  return state.questions.filter((item) => item.product === state.settings.activeProduct);
}

function filteredQuestions() {
  return availableQuestions().filter((item) => {
    const productMatch = state.product === "all" || item.product === state.product;
    const searchText = `${item.question} ${item.answer} ${item.product}`.toLowerCase();
    return productMatch && searchText.includes(state.search.toLowerCase());
  });
}

function renderStats() {
  const questions = availableQuestions();
  const answered = questions.filter((item) => (state.answers[item.id] || "").trim()).length;
  const points = questions.reduce((sum, item) => sum + item.points, 0);
  els.summaryGrid.hidden = !isOwner();
  if (isOwner()) {
    els.productSummaryLabel.textContent = "Products";
    els.productSummaryValue.textContent = "4";
    els.productSummaryCopy.textContent = "General, Spot, US Stock, Perpetuals";
  } else {
    els.productSummaryLabel.textContent = "This week";
    els.productSummaryValue.textContent = state.settings.activeProduct;
    els.productSummaryCopy.textContent = "Only this product is open for trainees";
  }
  els.answeredCount.textContent = answered;
  els.questionCount.textContent = questions.length;
  els.totalQuestions.textContent = questions.length;
  els.totalPoints.textContent = points;
  els.traineeAnsweredCount.textContent = answered;
  els.traineeQuestionCount.textContent = questions.length;
  els.traineeQuestionTotal.textContent = `${questions.length} questions`;
}

function productCompletion(product) {
  if (!state.currentUser) return null;
  return getSubmission(state.currentUser.email, product);
}

function productLaunchState(product, access = getAccessState()) {
  const completed = Boolean(productCompletion(product));
  const active = product === state.settings.activeProduct;
  const attempt = getAttempt(product);
  const started = Boolean(active && attempt?.startedByUser && attempt?.startedAt && !completed);
  if (completed) {
    return { active, completed, started: false, buttonText: "Completed", disabled: true, tone: "completed" };
  }
  if (!active) {
    return { active, completed, started: false, buttonText: "Not started yet", disabled: true, tone: "muted" };
  }
  if (started) {
    return {
      active,
      completed,
      started,
      buttonText: access.open && !access.expired ? "Continue" : "Not started yet",
      disabled: !access.open || access.expired,
      tone: access.open && !access.expired ? "active" : "muted",
    };
  }
  return {
    active,
    completed,
    started: false,
    buttonText: access.open ? "Start" : "Not started yet",
    disabled: !access.open,
    tone: access.open ? "active" : "muted",
  };
}

function renderProductLauncher(access = getAccessState()) {
  if (isOwner()) {
    els.productLauncher.hidden = true;
    return;
  }

  const activeAttempt = getAttempt(state.settings.activeProduct);
  const showLauncher = !access.allowed || !activeAttempt?.startedByUser;
  els.productLauncher.hidden = !showLauncher;
  els.productLauncherHint.textContent = access.open
    ? "Timer starts only after you press Start."
    : `Next run: ${formatDate(access.openAt)} to ${formatDate(access.closeAt)} WIB.`;

  els.productLauncherGrid.innerHTML = PRODUCT_ORDER.map((product) => {
    const questions = questionsForProduct(product);
    const launch = productLaunchState(product, access);
    const statusCopy = launch.completed
      ? "Already submitted"
      : launch.active
        ? "This week’s quiz"
        : "Waiting for its week";
    return `
      <article class="product-launch-card ${launch.active ? "active" : ""} ${launch.tone}">
        <div>
          <span class="product-dot" style="background:${productColor(product)}"></span>
          <strong>${escapeHtml(product)}</strong>
          <small>${questions.length} questions · ${statusCopy}</small>
        </div>
        <button
          class="product-start-button"
          type="button"
          data-start-product="${escapeHtml(product)}"
          ${launch.disabled ? "disabled" : ""}
        >
          ${escapeHtml(launch.buttonText)}
        </button>
      </article>
    `;
  }).join("");
}

function renderFilters() {
  const products = [...new Set(availableQuestions().map((item) => item.product))];
  const allOption = isOwner() ? `<option value="all">All products</option>` : "";
  els.productFilter.innerHTML = `${allOption}${products
    .map((product) => `<option value="${escapeHtml(product)}">${escapeHtml(product)}</option>`)
    .join("")}`;

  els.productTabs.innerHTML = [
    isOwner() ? `<button class="tab-button active" type="button" data-product="all">All</button>` : "",
    ...products.map(
      (product) =>
        `<button class="tab-button" type="button" data-product="${escapeHtml(product)}">${escapeHtml(product)}</button>`,
    ),
  ]
    .filter(Boolean)
    .join("");
  if (!products.includes(state.product) && state.product !== "all") state.product = products[0] || "all";
  if (!isOwner() && state.product === "all") state.product = products[0] || "all";
  syncProductControls(state.product);
}

function renderQuestionList() {
  const items = filteredQuestions();
  els.questionList.innerHTML = items
    .map((item) => {
      const done = Boolean((state.answers[item.id] || "").trim());
      const active = item.id === state.activeId;
      return `
        <button class="question-item ${active ? "active" : ""} ${done ? "done" : ""}" type="button" data-id="${item.id}">
          <span class="number-dot" style="background:${productColor(item.product)}">${item.number}</span>
          <span>
            <strong>${escapeHtml(item.product)}</strong>
            <small>${escapeHtml(item.question.slice(0, 112))}${item.question.length > 112 ? "..." : ""}</small>
          </span>
          <i class="status-pill" aria-hidden="true"></i>
        </button>
      `;
    })
    .join("");

  if (!items.length) {
    els.questionList.innerHTML = `<p class="empty-state">No matching questions.</p>`;
  }
}

function renderTraineeForm() {
  if (isOwner()) return;
  const questions = availableQuestions();
  els.traineeProductName.textContent = state.settings.activeProduct;
  els.traineeProductName.style.color = productColor(state.settings.activeProduct);
  els.traineeQuestionForm.innerHTML = questions
    .map(
      (question) => `
        <article class="trainee-question-card">
          <div class="trainee-question-head">
            <span class="number-dot" style="background:${productColor(question.product)}">${escapeHtml(
              question.number,
            )}</span>
            <div>
              <strong>${escapeHtml(question.product)} · Question ${escapeHtml(question.number)}</strong>
              <small>${escapeHtml(inferCaseType(question.question))} · ${escapeHtml(question.points)} points</small>
            </div>
          </div>
          <p>${escapeHtml(question.question)}</p>
          <label>
            <span>Your answer</span>
            <textarea
              data-form-answer="${escapeHtml(question.id)}"
              placeholder="Write your answer here..."
            >${escapeHtml(state.answers[question.id] || "")}</textarea>
          </label>
        </article>
      `,
    )
    .join("");
  renderStats();
}

function setActiveQuestion(id) {
  const questions = availableQuestions();
  const question = questions.find((item) => item.id === id) || filteredQuestions()[0] || questions[0];
  if (!question) return;

  state.activeId = question.id;
  els.activeProduct.textContent = question.product;
  els.activeProduct.style.color = productColor(question.product);
  els.activeTitle.textContent = `Question ${question.number}`;
  els.activePoints.textContent = `${question.points} points`;
  els.caseType.textContent = inferCaseType(question.question);
  els.questionText.textContent = question.question;
  els.userAnswer.value = state.answers[question.id] || "";
  els.ownerEditor.hidden = !isOwner();
  els.editQuestionText.value = question.question;
  renderQuestionList();
}

function syncProductControls(product) {
  state.product = product;
  els.productFilter.value = product;
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.product === product);
  });
}

function setQuizEnabled(enabled, access = getAccessState()) {
  const traineeMode = !isOwner();
  const traineeStarted = traineeMode && access.allowed;
  els.quizWorkspace.classList.toggle("locked", !enabled);
  els.quizWorkspace.hidden = traineeMode || !enabled;
  els.traineeForm.hidden = !traineeStarted;
  els.searchInput.disabled = !enabled;
  els.productFilter.disabled = !enabled;
  els.userAnswer.disabled = !enabled;
  els.saveAnswer.disabled = !enabled;
  els.nextQuestion.disabled = !enabled;
  els.submitQuiz.disabled = !enabled;
  els.traineeSaveDraft.disabled = !enabled;
  els.traineeSubmitQuiz.disabled = !enabled;
  document.querySelectorAll("[data-form-answer]").forEach((field) => {
    field.disabled = !enabled;
  });
  document.querySelectorAll(".tab-button, .question-item").forEach((button) => {
    button.disabled = !enabled;
  });
}

function renderAccess() {
  const access = getAccessState();
  const admin = isOwner();
  els.settingsButton.hidden = !admin;
  els.settingsSubmenu.hidden = !admin || els.settingsPage.hidden;
  els.ownerPreviewButton.hidden = true;
  els.accessBanner.hidden = admin;

  if (admin) {
    setQuizEnabled(true, access);
    return;
  }

  renderProductLauncher(access);

  if (access.allowed) {
    els.accessBanner.hidden = false;
    els.accessBanner.className = "access-banner open";
    els.accessStatus.textContent = "Quiz is live";
    els.accessTitle.textContent = "You’re good to go. Answer calmly, the timer is running.";
    els.accessCopy.textContent = `Open window: ${formatDate(access.openAt)} to ${formatDate(access.closeAt)} WIB.`;
    setQuizEnabled(true, access);
    renderProductLauncher(access);
    return;
  }

  if (access.open && !access.submitted && !access.expired) {
    els.accessBanner.hidden = false;
    els.accessBanner.className = "access-banner open";
    els.accessStatus.textContent = "Ready";
    els.accessTitle.textContent = "Start when you’re ready. The timer has not started yet.";
    els.accessCopy.textContent = `This week: ${state.settings.activeProduct}. Open until ${formatDate(access.closeAt)} WIB.`;
    setQuizEnabled(false, access);
    renderProductLauncher(access);
    return;
  }

  els.accessBanner.hidden = false;
  setQuizEnabled(false, access);
  els.accessBanner.className = "access-banner closed";
  if (access.submitted) {
    els.accessStatus.textContent = "Locked in";
    els.accessTitle.textContent = "Your final answers are in.";
    els.accessCopy.textContent = "Nice. This attempt is sealed, so nothing changes after submission.";
  } else if (access.expired) {
    els.accessStatus.textContent = "Clock’s done";
    els.accessTitle.textContent = "Time ran out, so the quiz closed.";
    els.accessCopy.textContent = "Saved answers were submitted as-is. No extra edits after the buzzer.";
  } else if (!access.open) {
    els.accessStatus.textContent = "Not open yet";
    els.accessTitle.textContent = "No peeking. The cases unlock when the window opens.";
    els.accessCopy.textContent = `Next run: ${formatDate(access.openAt)} to ${formatDate(access.closeAt)} WIB.`;
  }
}

function formatRemaining(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function remainingParts(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  return {
    hours: String(Math.floor(seconds / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(seconds % 60).padStart(2, "0"),
  };
}

function setReelValue(element, value) {
  if (element.textContent === value) return;
  element.dataset.previous = element.textContent || value;
  element.textContent = value;
  element.classList.remove("roll");
  window.requestAnimationFrame(() => {
    element.classList.add("roll");
  });
}

function updateTimerReels(value) {
  if (typeof value === "string") {
    els.timerText.textContent = value;
    setReelValue(els.timerHours, value === "OWNER" ? "OW" : "--");
    setReelValue(els.timerMinutes, value === "OWNER" ? "NE" : "--");
    setReelValue(els.timerSeconds, value === "OWNER" ? "R" : "--");
    return;
  }
  const parts = remainingParts(value);
  const formatted = `${parts.hours}:${parts.minutes}:${parts.seconds}`;
  els.timerText.textContent = formatted;
  setReelValue(els.timerHours, parts.hours);
  setReelValue(els.timerMinutes, parts.minutes);
  setReelValue(els.timerSeconds, parts.seconds);
}

function updateTimerProgress(percent) {
  const safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
  els.timerProgress.style.width = `${safePercent}%`;
  els.timerChip.style.setProperty("--timer-progress", `${safePercent}%`);
}

function showFiveMinuteAlert(remaining = 5 * 60 * 1000) {
  const attempt = getAttempt();
  if (isOwner() || !els.timeAlertModal || attempt?.fiveMinuteAlertShown) return;
  state.fiveMinuteAlertShown = true;
  if (attempt && !attempt.pausedAt) {
    saveAttempt({
      ...attempt,
      pausedAt: new Date().toISOString(),
      pausedRemainingMs: Math.max(1000, Math.min(5 * 60 * 1000, Number(remaining) || 5 * 60 * 1000)),
      fiveMinuteAlertShown: true,
    });
  }
  updateTimerReels(5 * 60 * 1000);
  updateTimerProgress(((5 * 60 * 1000) / (Number(state.settings.durationMinutes) * 60 * 1000)) * 100);
  els.timeAlertModal.hidden = false;
  els.keepWorkingButton.focus();
}

function resumeFiveMinuteWarning() {
  const attempt = getAttempt();
  if (attempt?.pausedAt) {
    const remaining = Number(attempt.pausedRemainingMs) || 5 * 60 * 1000;
    saveAttempt({
      ...attempt,
      endsAt: new Date(Date.now() + remaining).toISOString(),
      pausedAt: null,
      pausedRemainingMs: null,
      fiveMinuteAlertShown: true,
    });
  }
  if (els.timeAlertModal) els.timeAlertModal.hidden = true;
  updateTimer();
}

function syncTimeAlertModal(access = getAccessState()) {
  if (isOwner() || !els.timeAlertModal) return;
  if (access.paused && !access.submitted) {
    els.timeAlertModal.hidden = false;
    updateTimerReels(Number(access.attempt.pausedRemainingMs) || 5 * 60 * 1000);
    return;
  }
  if (!access.paused) {
    els.timeAlertModal.hidden = true;
  };
}

function updateTimer() {
  const access = getAccessState();
  syncTimeAlertModal(access);
  if (state.ownerPreview && !access.attempt) {
    updateTimerReels("OWNER");
    els.timerLabel.textContent = "preview";
    updateTimerProgress(100);
    return;
  }
  if (isOwner()) {
    updateTimerReels("OWNER");
    els.timerLabel.textContent = "owner pass";
    els.timerChip.classList.remove("danger");
    updateTimerProgress(100);
    return;
  }
  if (!access.attempt?.endsAt) {
    updateTimerReels("--:--:--");
    els.timerLabel.textContent = "standby";
    updateTimerProgress(0);
    return;
  }
  if (access.submitted) {
    updateTimerReels(0);
    els.timerLabel.textContent = "submitted";
    els.timerChip.classList.remove("danger");
    updateTimerProgress(0);
    return;
  }
  if (access.paused) {
    updateTimerReels(Number(access.attempt.pausedRemainingMs) || 5 * 60 * 1000);
    els.timerLabel.textContent = "paused";
    els.timerChip.classList.add("danger");
    updateTimerProgress(((Number(access.attempt.pausedRemainingMs) || 0) / (Number(state.settings.durationMinutes) * 60 * 1000)) * 100);
    return;
  }
  const remaining = new Date(access.attempt.endsAt) - new Date();
  const totalMs = Number(state.settings.durationMinutes) * 60 * 1000;
  const percent = totalMs ? (Math.max(0, remaining) / totalMs) * 100 : 0;
  updateTimerReels(remaining);
  els.timerLabel.textContent = remaining <= 0 ? "closed" : "time left";
  els.timerChip.classList.toggle("danger", remaining <= 10 * 60 * 1000);
  updateTimerProgress(percent);
  if (remaining > 0 && remaining <= 5 * 60 * 1000 && !access.attempt.fiveMinuteAlertShown) {
    showFiveMinuteAlert(5 * 60 * 1000);
    return;
  }
  if (remaining <= 0) autoSubmitExpiredAttempt();
}

function fillSettingsForm() {
  els.openDay.value = String(state.settings.openDay);
  els.openTime.value = state.settings.openTime;
  els.closeDay.value = String(state.settings.closeDay);
  els.closeTime.value = state.settings.closeTime;
  els.durationMinutes.value = state.settings.durationMinutes;
  els.activeProductSetting.value = state.settings.activeProduct;
  els.expectedEmails.value = state.settings.expectedEmails || "";
  fillGoogleFormConfig();
  renderOwnerDashboard();
  renderAnswerHistory();
}

function fillGoogleFormConfig() {
  els.exportMonth.value = els.exportMonth.value || currentMonthValue();
  els.exportProduct.value = state.settings.activeProduct;
  els.googleFormEnabled.value = "on";
  els.googleConnectorUrl.value = state.googleForm.connectorUrl || "";
  renderGoogleFormStatus();
  renderExportHistory();
}

function renderGoogleFormStatus(message) {
  if (message) {
    els.googleFormStatus.textContent = message;
    return;
  }
  if (state.googleForm.connectorUrl) {
    els.googleFormStatus.textContent =
      "Ready. Click Create Google Form now to create or update the monthly form.";
    return;
  }
  els.googleFormStatus.textContent =
    "Paste the connector URL first. After that this button creates or updates the Google Form.";
}

function questionsForProduct(product) {
  return state.questions.filter((question) => question.product === product);
}

function getSubmission(email, product = state.settings.activeProduct) {
  return getSubmissions().find(
    (submission) => submission.email === email && (submission.activeProduct || product) === product,
  );
}

function submissionsForExport(month, product) {
  return getSubmissions()
    .filter((submission) => (submission.activeProduct || product) === product)
    .filter((submission) => String(submission.submittedAt || "").slice(0, 7) === month)
    .sort((a, b) => new Date(a.submittedAt || 0) - new Date(b.submittedAt || 0));
}

function buildExportRecord(month, product) {
  const questions = questionsForProduct(product).map((question) => ({
    id: question.id,
    product: question.product,
    number: question.number,
    question: question.question,
    points: question.points,
  }));
  const submissions = submissionsForExport(month, product).map((submission) => ({
    email: submission.email,
    startedAt: submission.startedAt,
    submittedAt: submission.submittedAt,
    submitReason: submission.submitReason,
    durationFormatted: submission.durationFormatted || formatDuration(submission.durationSeconds),
    durationSeconds: submission.durationSeconds || 0,
    answered: submission.answered,
    totalQuestions: submission.totalQuestions,
    googleFormStatus: submission.googleFormStatus || "",
    reviewScore: submission.reviewScore ?? "",
    reviewFeedback: submission.reviewFeedback || "",
    reviewedAt: submission.reviewedAt || "",
    answers: { ...(submission.answers || {}) },
  }));
  const id = `${month}-${slugify(product)}`;
  const existing = getExportHistory().find((item) => item.id === id);
  return {
    id,
    month,
    product,
    title: `Quiziz CS Reku - ${monthLabel(month)} - ${product}`,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    formUrl: existing?.formUrl || "",
    googleFormStatus: existing?.googleFormStatus || "saved_locally",
    questions,
    submissions,
  };
}

function upsertExportHistory(record) {
  const history = getExportHistory();
  const next = [record, ...history.filter((item) => item.id !== record.id)].sort(
    (a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0),
  );
  saveExportHistory(next);
  renderExportHistory();
  renderAnswerHistory();
}

function buildGoogleFormPayload(record) {
  return {
    action: "create_or_update_monthly_form",
    formTitle: record.title,
    month: record.month,
    product: record.product,
    durationMinutes: state.settings.durationMinutes,
    roster: traineeRoster(),
    questions: record.questions.map((question) => ({
      id: question.id,
      title: `${question.product} Q${question.number}`,
      question: question.question,
      points: question.points,
    })),
    responses: record.submissions.map((submission) => ({
      name: submission.name || traineeProfile(submission.email).name,
      email: submission.email,
      position: submission.position || traineeProfile(submission.email).position,
      submittedAt: submission.submittedAt,
      duration: submission.durationFormatted,
      submitReason: submission.submitReason,
      score: submission.reviewScore,
      feedback: submission.reviewFeedback,
      answers: record.questions.map((question) => ({
        questionId: question.id,
        answer: submission.answers?.[question.id] || "",
      })),
    })),
  };
}

function renderExportHistory() {
  if (!isOwner() || !els.exportHistoryList) return;
  const history = getExportHistory();
  if (!history.length) {
    els.exportHistoryList.innerHTML = `<p class="empty-state small">No monthly exports yet.</p>`;
    return;
  }
  els.exportHistoryList.innerHTML = history
    .map(
      (item) => `
        <article class="history-item">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.questions?.length || 0)} questions · ${escapeHtml(
              item.submissions?.length || 0,
            )} submissions · ${escapeHtml(item.googleFormStatus || "saved_locally")}</span>
          </div>
          <div class="history-actions">
            <button class="secondary compact" type="button" data-history-package="${escapeHtml(item.id)}">Backup JSON</button>
            <button class="secondary compact" type="button" data-history-csv="${escapeHtml(item.id)}">Backup CSV</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function responseKey(email, product) {
  return `${email}__${slugify(product)}`;
}

function parseResponseKey(key) {
  const [email, productSlug] = String(key || "").split("__");
  const product = PRODUCT_ORDER.find((item) => slugify(item) === productSlug) || state.settings.activeProduct;
  return { email, product };
}

function renderResponseViewer(key) {
  if (!isOwner()) return;
  const { email, product: requestedProduct } = parseResponseKey(key);
  const submission = getSubmission(email, requestedProduct);
  if (!submission) {
    state.openResponseEmail = "";
    els.responseViewer.hidden = true;
    return;
  }
  state.openResponseEmail = key;
  const product = submission.activeProduct || state.settings.activeProduct;
  const questions = questionsForProduct(product);
  els.responseViewer.hidden = false;
  els.responseViewerTitle.textContent = "Response dropdown";
  els.responseViewerMeta.textContent = "Open one name when you need to review the answers.";
  const responseMeta = `${product} · Submitted ${formatDate(
    new Date(submission.submittedAt),
  )} WIB · ${submission.durationFormatted || formatDuration(submission.durationSeconds)} · ${
    submission.answered
  }/${submission.totalQuestions} answered`;
  const questionCards = questions
    .map((question) => {
      const answer = submission.answers?.[question.id] || "";
      return `
        <article class="response-card">
          <div class="response-card-head">
            <span class="number-dot" style="background:${productColor(question.product)}">${escapeHtml(
              question.number,
            )}</span>
            <div>
              <strong>${escapeHtml(question.product)} · Question ${escapeHtml(question.number)}</strong>
              <small>${escapeHtml(question.points)} points · ${answer.trim() ? "Answered" : "Blank"}</small>
            </div>
          </div>
          <p class="response-question">${escapeHtml(question.question)}</p>
          <div class="response-answer">
            <span>Answer</span>
            <p>${escapeHtml(answer || "No answer submitted.")}</p>
          </div>
        </article>
      `;
    })
    .join("");
  els.responseDetailList.innerHTML = `
    <details class="response-dropdown" open>
      <summary>
        <span>${escapeHtml(submission.email)}</span>
        <small>${escapeHtml(responseMeta)}</small>
      </summary>
      <div class="response-dropdown-body">
        ${questionCards}
      </div>
    </details>
  `;
}

function answerHistoryProductOptions() {
  return ["General", "Kripto Spot", "US Stock", "Perpetuals"];
}

function renderAnswerHistory() {
  if (!isOwner() || !els.answerHistoryList) return;
  els.historyMonth.value = els.historyMonth.value || currentMonthValue();
  els.historyProduct.value = els.historyProduct.value || "all";

  const month = els.historyMonth.value;
  const product = els.historyProduct.value;
  const submissions = getSubmissions()
    .filter((submission) => (month ? String(submission.submittedAt || "").slice(0, 7) === month : true))
    .filter((submission) => {
      const submissionProduct = submission.activeProduct || state.settings.activeProduct;
      return product === "all" || submissionProduct === product;
    })
    .sort((a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0));

  if (!submissions.length) {
    els.answerHistoryList.innerHTML = `<p class="empty-state small">No submitted answers for this filter yet.</p>`;
    return;
  }

  const grouped = answerHistoryProductOptions().reduce((map, item) => {
    const group = submissions.filter((submission) => (submission.activeProduct || state.settings.activeProduct) === item);
    if (group.length) map[item] = group;
    return map;
  }, {});

  els.answerHistoryList.innerHTML = Object.entries(grouped)
    .map(([groupProduct, groupSubmissions]) => {
      const cards = groupSubmissions
        .map((submission) => {
          const productQuestions = questionsForProduct(groupProduct);
          const answered = Number(submission.answered || 0);
          const total = Number(submission.totalQuestions || productQuestions.length || 0);
          const submittedAt = submission.submittedAt ? `${formatDate(new Date(submission.submittedAt))} WIB` : "-";
          const answerCards = productQuestions
            .map((question) => {
              const answer = submission.answers?.[question.id] || "";
              return `
                <article class="response-card">
                  <div class="response-card-head">
                    <span class="number-dot" style="background:${productColor(question.product)}">${escapeHtml(
                      question.number,
                    )}</span>
                    <div>
                      <strong>${escapeHtml(question.product)} · Question ${escapeHtml(question.number)}</strong>
                      <small>${escapeHtml(question.points)} points · ${answer.trim() ? "Answered" : "Blank"}</small>
                    </div>
                  </div>
                  <p class="response-question">${escapeHtml(question.question)}</p>
                  <div class="response-answer">
                    <span>Answer</span>
                    <p>${escapeHtml(answer || "No answer submitted.")}</p>
                  </div>
                </article>
              `;
            })
            .join("");

          return `
            <details class="answer-history-item">
              <summary>
                <div>
                  <strong>${escapeHtml(submission.email)}</strong>
                  <span>${escapeHtml(groupProduct)} · ${escapeHtml(answered)}/${escapeHtml(total)} answered · ${escapeHtml(
                    submission.durationFormatted || formatDuration(submission.durationSeconds),
                  )}</span>
                </div>
                <small>${escapeHtml(submittedAt)} · ${escapeHtml(submission.submitReason || "manual")}</small>
              </summary>
              <div class="answer-history-detail">
                ${answerCards}
              </div>
            </details>
          `;
        })
        .join("");

      return `
        <section class="answer-history-group">
          <div class="section-heading">
            <h3>${escapeHtml(groupProduct)}</h3>
            <span>${escapeHtml(groupSubmissions.length)} submitted response${
              groupSubmissions.length === 1 ? "" : "s"
            }</span>
          </div>
          ${cards}
        </section>
      `;
    })
    .join("");
}

function renderOwnerDashboard() {
  if (!isOwner()) return;
  const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
  const currentYear = String(new Date().getFullYear());
  if (!els.responsesMonth.value) els.responsesMonth.value = currentMonth;
  if (!els.responsesYear.value) els.responsesYear.value = currentYear;
  if (!els.responsesProduct.value) els.responsesProduct.value = state.settings.activeProduct;

  els.responsesMonth.innerHTML = monthOptions()
    .map(
      (month) =>
        `<option value="${escapeHtml(month.value)}" ${
          els.responsesMonth.value === month.value ? "selected" : ""
        }>${escapeHtml(month.label)}</option>`,
    )
    .join("");
  els.responsesYear.innerHTML = responseYears()
    .map(
      (year) =>
        `<option value="${escapeHtml(year)}" ${els.responsesYear.value === year ? "selected" : ""}>${escapeHtml(
          year,
        )}</option>`,
    )
    .join("");

  const selectedMonth = els.responsesMonth.value || currentMonth;
  const selectedYear = els.responsesYear.value || currentYear;
  const selectedProduct = els.responsesProduct.value || state.settings.activeProduct;
  const selectedPeriod = `${selectedYear}-${selectedMonth}`;
  const submissions = getSubmissions()
    .filter((submission) => (submission.activeProduct || selectedProduct) === selectedProduct)
    .filter((submission) => String(submission.submittedAt || "").slice(0, 7) === selectedPeriod)
    .sort(
    (a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0),
  );
  const expected = expectedEmailList();
  const submittedEmails = new Set(submissions.map((submission) => submission.email));
  const pendingEmails = expected.filter((email) => !submittedEmails.has(email));
  const totalSeconds = submissions.reduce((sum, submission) => sum + Number(submission.durationSeconds || 0), 0);
  const averageSeconds = submissions.length ? Math.round(totalSeconds / submissions.length) : 0;
  const autoSubmitCount = submissions.filter((submission) => submission.submitReason === "auto_time_expired").length;
  const activeProductTotal = state.questions.filter(
    (question) => question.product === selectedProduct,
  ).length;

  els.metricSubmitted.textContent = String(submissions.length);
  els.metricPending.textContent = String(pendingEmails.length);
  els.metricAverageDuration.textContent = formatDuration(averageSeconds);
  els.metricAutoSubmit.textContent = String(autoSubmitCount);

  const submittedRows = submissions.map((submission) => {
    const rowProduct = submission.activeProduct || selectedProduct;
    const rowKey = responseKey(submission.email, rowProduct);
    return `
      <tr>
        <td>${escapeHtml(submission.email)}</td>
        <td>${escapeHtml(rowProduct)}</td>
        <td><span class="status-label submitted">Submitted</span></td>
        <td>${escapeHtml(submission.durationFormatted || formatDuration(submission.durationSeconds))}</td>
        <td>${escapeHtml(submission.answered)}/${escapeHtml(submission.totalQuestions)}</td>
        <td>
          <button class="compact" type="button" data-view-response="${escapeHtml(rowKey)}">${
            state.openResponseEmail === rowKey ? "Hide answers" : "View answers"
          }</button>
        </td>
      </tr>
    `;
  });

  const pendingRows = pendingEmails.map(
    (email) => `
      <tr>
        <td>${escapeHtml(email)}</td>
        <td>${escapeHtml(selectedProduct)}</td>
        <td><span class="status-label pending">Pending</span></td>
        <td>-</td>
        <td>0/${activeProductTotal}</td>
        <td></td>
      </tr>
    `,
  );

  els.submissionTableBody.innerHTML =
    submittedRows.concat(pendingRows).join("") ||
    `<tr><td colspan="6" class="empty-cell">No submissions yet.</td></tr>`;
  els.responseViewer.hidden = true;
  state.openResponseEmail = "";
  els.responseDetailList.innerHTML = "";
}

function saveSubmissionReview(email, score, feedback) {
  if (!isOwner()) return;
  const submissions = getSubmissions();
  const updated = submissions.map((submission) =>
    submission.email === email
      ? {
          ...submission,
          reviewScore: score,
          reviewFeedback: feedback,
          reviewedAt: new Date().toISOString(),
        }
      : submission,
  );
  saveSubmissions(updated);
  const history = getExportHistory().map((record) => ({
    ...record,
    submissions: (record.submissions || []).map((submission) =>
      submission.email === email
        ? {
            ...submission,
            reviewScore: score,
            reviewFeedback: feedback,
            reviewedAt: new Date().toISOString(),
          }
        : submission,
    ),
  }));
  saveExportHistory(history);
  renderOwnerDashboard();
  renderExportHistory();
  renderAnswerHistory();
}

async function login(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail === OWNER_EMAIL && password === OWNER_PASSWORD) {
    return { email: normalizedEmail, role: "owner" };
  }

  if (!normalizedEmail.includes("@") || password.length < 6) {
    throw new Error("Use a valid email and a password with at least 6 characters.");
  }

  const invitedEmails = expectedEmailList();
  if (!invitedEmails.includes(normalizedEmail)) {
    throw new Error("This email is not on the quiz access list. Ask the owner to add it first.");
  }

  const passwordStore = getTraineePasswordStore();
  const passwordHash = await hashPassword(normalizedEmail, password);
  if (!passwordStore[normalizedEmail]) {
    passwordStore[normalizedEmail] = passwordHash;
    saveTraineePasswordStore(passwordStore);
    return { email: normalizedEmail, role: "trainee" };
  }

  if (passwordStore[normalizedEmail] !== passwordHash) {
    throw new Error("Wrong password for this email.");
  }

  return { email: normalizedEmail, role: "trainee" };
}

function showApp() {
  els.authScreen.hidden = true;
  els.appShell.hidden = false;
  els.userEmail.textContent = state.currentUser.email;
  els.userRole.textContent = isOwner() ? "owner" : "trainee";
  loadUserState();
  renderStats();
  renderFilters();
  setActiveQuestion(availableQuestions()[0]?.id || state.questions[0]?.id);
  renderTraineeForm();
  renderAccess();
  renderProductLauncher();
  renderOwnerDashboard();
  renderExportHistory();
  renderAnswerHistory();
  showAppView("quiz");
  updateTimer();
  window.clearInterval(state.timerId);
  state.timerId = window.setInterval(() => {
    updateTimer();
    renderAccess();
  }, 1000);
}

function showLogin() {
  window.clearInterval(state.timerId);
  state.currentUser = null;
  state.answers = {};
  state.ownerPreview = false;
  sessionStorage.removeItem("quiziz-current-user");
  els.appShell.hidden = true;
  els.authScreen.hidden = false;
  els.passwordInput.value = "";
}

async function submitFinal(reason = "manual") {
  const attempt = getAttempt();
  if (!attempt?.startedAt && !isOwner()) return;
  if (attempt?.submittedAt) return;
  const now = new Date().toISOString();
  const finalAttempt = { ...(attempt || {}), submittedAt: now, submitReason: reason };
  if (isOwner()) state.answers[state.activeId] = els.userAnswer.value;
  saveAnswers();
  saveAttempt(finalAttempt);
  const submission = saveSubmission(finalAttempt);
  await submitToGoogleForm(submission);
  renderAccess();
  renderProductLauncher();
  setActiveQuestion(state.activeId);
}

async function autoSubmitExpiredAttempt() {
  if (isOwner() || state.autoSubmitting) return;
  const attempt = getAttempt();
  if (!attempt || attempt.submittedAt) {
    renderAccess();
    return;
  }
  state.autoSubmitting = true;
  els.accessBanner.className = "access-banner closed";
  els.accessStatus.textContent = "Auto-submit";
  els.accessTitle.textContent = "Clock hit zero. Sending what’s saved.";
  els.accessCopy.textContent = "No stress-clicking needed. Your latest saved drafts are going in.";
  await submitFinal("auto_time_expired");
  state.autoSubmitting = false;
}

function saveSubmission(attempt) {
  const submittedQuestions = availableQuestions();
  const answered = submittedQuestions.filter((item) => (state.answers[item.id] || "").trim()).length;
  const profile = traineeProfile(state.currentUser.email);
  const submissions = getSubmissions().filter(
    (item) => item.email !== state.currentUser.email || item.activeProduct !== state.settings.activeProduct,
  );
  const durationSeconds = elapsedSeconds(attempt.startedAt, attempt.submittedAt);
  const submission = {
    name: profile.name,
    email: state.currentUser.email,
    position: profile.position,
    role: state.currentUser.role,
    activeProduct: state.settings.activeProduct,
    startedAt: attempt.startedAt || "",
    submittedAt: attempt.submittedAt,
    submitReason: attempt.submitReason || "manual",
    durationMinutes: state.settings.durationMinutes,
    durationSeconds,
    durationFormatted: formatDuration(durationSeconds),
    answered,
    totalQuestions: submittedQuestions.length,
    answers: { ...state.answers },
    googleFormStatus: "not_configured",
  };
  submissions.push(submission);
  saveSubmissions(submissions);
  renderOwnerDashboard();
  renderAnswerHistory();
  renderProductLauncher();
  return submission;
}

function parseQuestionEntryMap(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((map, line) => {
      const [questionId, entryId] = line.split("=").map((part) => part?.trim());
      if (questionId && entryId) map[questionId] = entryId;
      return map;
    }, {});
}

function normalizeGoogleFormAction(url) {
  return String(url || "")
    .trim()
    .replace("/viewform", "/formResponse")
    .replace("/edit", "/formResponse");
}

function googleFormViewUrl(url) {
  const normalized = String(url || "").trim();
  if (!normalized) return "https://forms.new";
  return normalized.replace("/formResponse", "/viewform").replace("/edit", "/viewform");
}

function buildAnswerBundle(submission) {
  const meta = [
    `Email: ${submission.email}`,
    `Active Product: ${submission.activeProduct || state.settings.activeProduct}`,
    `Started At: ${submission.startedAt}`,
    `Submitted At: ${submission.submittedAt}`,
    `Submit Reason: ${submission.submitReason || ""}`,
    `Actual Duration: ${submission.durationFormatted || formatDuration(submission.durationSeconds)}`,
    `Answered: ${submission.answered}/${submission.totalQuestions}`,
  ].join("\n");

  const bundleQuestions = submission.activeProduct
    ? state.questions.filter((question) => question.product === submission.activeProduct)
    : state.questions;
  const answers = bundleQuestions
    .map((question) => {
      const answer = submission.answers?.[question.id] || "";
      return `${question.product} Q${question.number}\n${question.question}\n\nAnswer:\n${answer}`;
    })
    .join("\n\n---\n\n");
  return `${meta}\n\n=== ANSWERS ===\n\n${answers}`;
}

async function submitToGoogleForm(submission) {
  if (!state.googleForm.enabled || !isValidConnectorUrl(state.googleForm.connectorUrl)) return;
  const month = String(submission.submittedAt || new Date().toISOString()).slice(0, 7);
  const product = submission.activeProduct || state.settings.activeProduct;
  const record = buildExportRecord(month, product);
  const payload = buildGoogleFormPayload(record);

  try {
    await fetch(state.googleForm.connectorUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    updateSubmissionGoogleStatus(submission.email, "sent_to_monthly_form");
  } catch {
    updateSubmissionGoogleStatus(submission.email, "connector_failed");
  }
}

function updateSubmissionGoogleStatus(email, googleFormStatus) {
  const submissions = getSubmissions();
  const updated = submissions.map((submission) =>
    submission.email === email ? { ...submission, googleFormStatus } : submission,
  );
  saveSubmissions(updated);
  renderOwnerDashboard();
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadText(filename, text, type = "text/plain;charset=utf-8") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function historyRecordById(id) {
  return getExportHistory().find((item) => item.id === id);
}

function downloadHistoryPackage(id) {
  const record = historyRecordById(id);
  if (!record) return;
  downloadText(
    `quiziz-history-${record.month}-${slugify(record.product)}.json`,
    JSON.stringify(record, null, 2),
    "application/json;charset=utf-8",
  );
}

function downloadHistoryAnswersCsv(id) {
  const record = historyRecordById(id);
  if (!record) return;
  const questionHeaders = record.questions.map(
    (question) => `${question.product} Q${question.number}: ${question.question}`,
  );
  const rows = [
    [
      "Month",
      "Product",
      "Email",
      "Submitted At",
      "Duration",
      "Submit Reason",
      "Answered",
      "Total Questions",
      "Review Score",
      "Review Feedback",
      ...questionHeaders,
    ],
    ...record.submissions.map((submission) => [
      record.month,
      record.product,
      submission.email,
      submission.submittedAt,
      submission.durationFormatted,
      submission.submitReason,
      submission.answered,
      submission.totalQuestions,
      submission.reviewScore,
      submission.reviewFeedback,
      ...record.questions.map((question) => submission.answers?.[question.id] || ""),
    ]),
  ];
  downloadCsv(`quiziz-answers-${record.month}-${slugify(record.product)}.csv`, rows);
}

function exportResponsesCsv() {
  if (!isOwner()) return;
  const submissions = getSubmissions();
  const questionHeaders = state.questions.map(
    (question) => `${question.product} Q${question.number}: ${question.question}`,
  );
  const rows = [
    [
      "Timestamp",
      "Email Address",
      "Active Product",
      "Started At",
      "Submitted At",
      "Duration Minutes",
      "Actual Duration",
      "Actual Duration Seconds",
      "Submit Reason",
      "Answered Count",
      "Total Questions",
      "Completion %",
      "Google Form Status",
      "Review Score",
      "Review Feedback",
      "Reviewed At",
      ...questionHeaders,
    ],
    ...submissions.map((submission) => {
      const completion = submission.totalQuestions
        ? Math.round((submission.answered / submission.totalQuestions) * 100)
        : 0;
      return [
        submission.submittedAt,
        submission.email,
        submission.activeProduct || "",
        submission.startedAt,
        submission.submittedAt,
        submission.durationMinutes,
        submission.durationFormatted || formatDuration(submission.durationSeconds),
        submission.durationSeconds || "",
        submission.submitReason || "",
        submission.answered,
        submission.totalQuestions,
        `${completion}%`,
        submission.googleFormStatus || "",
        submission.reviewScore ?? "",
        submission.reviewFeedback || "",
        submission.reviewedAt || "",
        ...state.questions.map((question) => submission.answers?.[question.id] || ""),
      ];
    }),
  ];
  downloadCsv("quiziz-google-form-responses.csv", rows);
  els.exportStatus.textContent = `Done. Downloaded ${submissions.length} submitted response${
    submissions.length === 1 ? "" : "s"
  }.`;
}

function readGoogleFormConfigFromForm() {
  const connectorUrl = els.googleConnectorUrl.value.trim();
  state.googleForm = {
    enabled: Boolean(connectorUrl),
    connectorUrl,
  };
}

function isValidConnectorUrl(url) {
  const text = String(url || "").trim();
  if (!text || /^function\s/i.test(text) || text.includes("function doPost")) return false;
  try {
    const parsed = new URL(text);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

function submitConnectorInNewTab(url, payload) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = "_blank";
  form.style.display = "none";

  const input = document.createElement("input");
  input.type = "hidden";
  input.name = "payload";
  input.value = JSON.stringify(payload);
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

function saveGoogleFormConfigFromForm() {
  if (!isOwner()) return;
  readGoogleFormConfigFromForm();
  if (state.googleForm.connectorUrl && !isValidConnectorUrl(state.googleForm.connectorUrl)) {
    renderGoogleFormStatus("Paste the Apps Script Web App URL here, not the connector script code.");
    return;
  }
  saveGoogleFormConfig();
  fillGoogleFormConfig();
  renderGoogleFormStatus(
    state.googleForm.connectorUrl
      ? "Saved. You can create or update Google Forms directly from this page now."
      : "Saved locally. Paste the connector URL before creating a Google Form.",
  );
}

async function exportMonthlyGoogleForm() {
  if (!isOwner()) return;
  readGoogleFormConfigFromForm();
  saveGoogleFormConfig();
  const month = els.exportMonth.value || currentMonthValue();
  const product = els.exportProduct.value || state.settings.activeProduct;
  const record = buildExportRecord(month, product);
  upsertExportHistory(record);

  if (!state.googleForm.connectorUrl) {
    renderGoogleFormStatus(
      `Saved ${record.title} to history, but Google Form was not created yet. Paste the connector URL first.`,
    );
    return;
  }

  if (!isValidConnectorUrl(state.googleForm.connectorUrl)) {
    upsertExportHistory({ ...record, googleFormStatus: "connector_url_invalid", updatedAt: new Date().toISOString() });
    renderGoogleFormStatus("Paste the Apps Script Web App URL here, not the connector script code.");
    return;
  }

  try {
    submitConnectorInNewTab(state.googleForm.connectorUrl, buildGoogleFormPayload(record));
    upsertExportHistory({ ...record, googleFormStatus: "opened_google_form_tab", updatedAt: new Date().toISOString() });
    renderGoogleFormStatus(`Opened Google in a new tab to create or update ${record.title}.`);
  } catch {
    upsertExportHistory({ ...record, googleFormStatus: "connector_failed", updatedAt: new Date().toISOString() });
    renderGoogleFormStatus(
      `Connector failed, but ${record.title} is still saved in history. Check the connector URL, then try again.`,
    );
  }
}

async function downloadConnectorScript() {
  if (!isOwner()) return;
  try {
    const response = await fetch("google-form-connector.gs");
    const script = await response.text();
    downloadText("quiziz-google-form-connector.gs", script);
    renderGoogleFormStatus("Downloaded the connector script. Deploy it once, then paste its Web App URL here.");
  } catch {
    renderGoogleFormStatus("Could not download the connector script. Open google-form-connector.gs from the repo instead.");
  }
}

function exportQuestionTemplateCsv() {
  if (!isOwner()) return;
  const rows = [
    ["Question ID", "Product", "Question Number", "Question Text", "Points"],
    ...state.questions.map((question) => [
      question.id,
      question.product,
      question.number,
      question.question,
      question.points,
    ]),
  ];
  downloadCsv("quiziz-google-form-question-template.csv", rows);
  els.exportStatus.textContent = "Downloaded the 40-question template.";
}

function renderAfterSettingsChange() {
  renderStats();
  renderFilters();
  setActiveQuestion(state.activeId || availableQuestions()[0]?.id || state.questions[0]?.id);
  renderTraineeForm();
  renderOwnerDashboard();
  renderExportHistory();
  renderAnswerHistory();
  renderAccess();
  updateTimer();
}

function saveQuestionEdit() {
  if (!isOwner() || !state.activeId) return;
  const index = state.questions.findIndex((item) => item.id === state.activeId);
  if (index < 0) return;
  state.questions[index] = {
    ...state.questions[index],
    question: els.editQuestionText.value.trim(),
  };
  saveQuestions();
  renderStats();
  renderFilters();
  setActiveQuestion(state.activeId);
  els.saveQuestionEdit.textContent = "Saved";
  window.setTimeout(() => {
    els.saveQuestionEdit.textContent = "Save this question";
  }, 1200);
}

function initEvents() {
  els.loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      state.currentUser = await login(els.emailInput.value, els.passwordInput.value);
      sessionStorage.setItem("quiziz-current-user", JSON.stringify(state.currentUser));
      els.loginError.textContent = "";
      showApp();
    } catch (error) {
      els.loginError.textContent = error.message;
    }
  });

  els.logoutButton.addEventListener("click", () => {
    showAppView("quiz");
    showLogin();
  });

  els.quizDeskButton.addEventListener("click", () => {
    showAppView("quiz");
  });

  els.settingsButton.addEventListener("click", () => {
    if (!isOwner()) return;
    showAppView("settings");
    showSettingsPanel("quizControlsPanel");
  });

  els.closeSettings.addEventListener("click", () => {
    showAppView("quiz");
  });

  document.querySelectorAll("[data-settings-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      showAppView("settings");
      showSettingsPanel(button.dataset.settingsPanel);
    });
  });

  els.ownerPreviewButton.addEventListener("click", () => {
    state.ownerPreview = true;
    renderAccess();
    updateTimer();
  });

  els.settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isOwner()) return;
    state.settings = {
      openDay: Number(els.openDay.value),
      openTime: els.openTime.value,
      closeDay: Number(els.closeDay.value),
      closeTime: els.closeTime.value,
      durationMinutes: Number(els.durationMinutes.value),
      answerKeyMode: "owner",
      activeProduct: els.activeProductSetting.value,
      expectedEmails: els.expectedEmails.value.trim(),
    };
    state.settings = normalizeSettings(state.settings);
    saveSettings();
    publishRemoteSettings();
    resetLocalAttempts();
    fillSettingsForm();
    renderAfterSettingsChange();
    const allowedCount = expectedEmailList().length;
    els.settingsSavedText.textContent = `Saved: ${dayName(state.settings.openDay)} ${state.settings.openTime} to ${dayName(
      state.settings.closeDay,
    )} ${state.settings.closeTime}, ${state.settings.durationMinutes} minutes. Active product: ${
      state.settings.activeProduct
    }. Allowed emails: ${allowedCount}.`;
  });

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderQuestionList();
    if (!filteredQuestions().some((item) => item.id === state.activeId)) {
      setActiveQuestion(filteredQuestions()[0]?.id);
    }
  });

  els.productFilter.addEventListener("change", (event) => {
    syncProductControls(event.target.value);
    setActiveQuestion(filteredQuestions()[0]?.id);
  });

  els.productTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-product]");
    if (!button || button.disabled) return;
    syncProductControls(button.dataset.product);
    setActiveQuestion(filteredQuestions()[0]?.id);
  });

  els.questionList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");
    if (button && !button.disabled) setActiveQuestion(button.dataset.id);
  });

  els.saveAnswer.addEventListener("click", () => {
    state.answers[state.activeId] = els.userAnswer.value;
    saveAnswers();
    renderStats();
    renderQuestionList();
    els.saveAnswer.textContent = "Saved";
    window.setTimeout(() => {
      els.saveAnswer.textContent = "Save draft";
    }, 1200);
  });

  els.userAnswer.addEventListener("input", () => {
    state.answers[state.activeId] = els.userAnswer.value;
    saveAnswers();
    renderStats();
    renderQuestionList();
  });

  els.traineeQuestionForm.addEventListener("input", (event) => {
    const field = event.target.closest("[data-form-answer]");
    if (!field) return;
    state.answers[field.dataset.formAnswer] = field.value;
    saveAnswers();
    renderStats();
  });

  els.productLauncherGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-start-product]");
    if (!button || button.disabled) return;
    startWeeklyProduct(button.dataset.startProduct);
  });

  els.nextQuestion.addEventListener("click", () => {
    const items = filteredQuestions();
    const index = items.findIndex((item) => item.id === state.activeId);
    const next = items[(index + 1) % items.length];
    setActiveQuestion(next.id);
  });

  els.submitQuiz.addEventListener("click", () => submitFinal("manual"));
  els.traineeSaveDraft.addEventListener("click", () => {
    document.querySelectorAll("[data-form-answer]").forEach((field) => {
      state.answers[field.dataset.formAnswer] = field.value;
    });
    saveAnswers();
    renderStats();
    els.traineeSaveDraft.textContent = "Saved";
    window.setTimeout(() => {
      els.traineeSaveDraft.textContent = "Save draft";
    }, 1200);
  });
  els.traineeSubmitQuiz.addEventListener("click", () => submitFinal("manual"));
  els.keepWorkingButton.addEventListener("click", resumeFiveMinuteWarning);
  els.saveQuestionEdit.addEventListener("click", saveQuestionEdit);
  els.submissionTableBody.addEventListener("click", (event) => {
    const viewButton = event.target.closest("button[data-view-response]");
    if (viewButton) {
      const key = viewButton.dataset.viewResponse;
      if (state.openResponseEmail === key && !els.responseViewer.hidden) {
        state.openResponseEmail = "";
        els.responseViewer.hidden = true;
        els.responseDetailList.innerHTML = "";
        viewButton.textContent = "View answers";
        return;
      }
      renderResponseViewer(key);
      els.submissionTableBody.querySelectorAll("[data-view-response]").forEach((button) => {
        button.textContent = button.dataset.viewResponse === key ? "Hide answers" : "View answers";
      });
      return;
    }
  });
  els.responsesMonth.addEventListener("change", renderOwnerDashboard);
  els.responsesYear.addEventListener("change", renderOwnerDashboard);
  els.responsesProduct.addEventListener("change", renderOwnerDashboard);
  els.saveGoogleFormConfig.addEventListener("click", saveGoogleFormConfigFromForm);
  els.exportMonthlyForm.addEventListener("click", exportMonthlyGoogleForm);
  els.downloadConnectorGuide.addEventListener("click", downloadConnectorScript);
  els.historyMonth.addEventListener("change", renderAnswerHistory);
  els.historyProduct.addEventListener("change", renderAnswerHistory);
  els.exportHistoryList.addEventListener("click", (event) => {
    const packageButton = event.target.closest("button[data-history-package]");
    const csvButton = event.target.closest("button[data-history-csv]");
    if (packageButton) downloadHistoryPackage(packageButton.dataset.historyPackage);
    if (csvButton) downloadHistoryAnswersCsv(csvButton.dataset.historyCsv);
  });
  els.exportResponses.addEventListener("click", exportResponsesCsv);
  els.exportQuestions.addEventListener("click", exportQuestionTemplateCsv);
}

async function boot() {
  try {
    const response = await fetch("quiz-data.json");
    state.questions = await response.json();
  } catch {
    state.questions = window.QUIZ_DATA || [];
  }
  const ownerQuestions = JSON.parse(localStorage.getItem("quiziz-owner-questions") || "null");
  if (Array.isArray(ownerQuestions) && ownerQuestions.length) {
    state.questions = ownerQuestions;
  }
  await loadRemoteSettings();
  initEvents();
  if (state.currentUser) showApp();
}

boot().catch(() => {
  els.loginError.textContent = "Quiz data could not be loaded. Please refresh the page.";
});
