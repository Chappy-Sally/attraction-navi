const screens = {
  cover: document.getElementById("coverScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const restartBtn = document.getElementById("restartBtn");
const appsBtn = document.getElementById("appsBtn");
const appsBox = document.getElementById("appsBox");
const appRecommendations = document.getElementById("appRecommendations");
const questionText = document.getElementById("questionText");
const optionsEl = document.getElementById("options");
const questionCount = document.getElementById("questionCount");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");

let currentQuestion = 0;
let answers = [];
let currentResult = null;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active", "fade-in"));
  screens[name].classList.add("active", "fade-in");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestion = 0;
  answers = [];
  currentResult = null;
  appsBox.hidden = true;
  appRecommendations.innerHTML = "";
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const item = quizData[currentQuestion];
  const total = quizData.length;
  const percent = Math.round(((currentQuestion + 1) / total) * 100);

  questionText.innerHTML = item.question.split(",").map(line => `<span class="question-line">${line}</span>`).join("");
  questionCount.textContent = `${currentQuestion + 1} / ${total}`;
  progressLabel.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  backBtn.style.visibility = currentQuestion === 0 ? "hidden" : "visible";

  optionsEl.innerHTML = "";
  item.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.innerHTML = `<span class="option-icon">${option.icon}</span>${option.text}`;
    button.addEventListener("click", () => selectOption(option.type));
    optionsEl.appendChild(button);
  });
}

function selectOption(type) {
  answers[currentQuestion] = type;
  if (currentQuestion < quizData.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showResult();
  }
}

function goBack() {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  answers = answers.slice(0, currentQuestion + 1);
  renderQuestion();
}

function calculateScores() {
  const scores = { calm: 0, clarify: 0, imagine: 0, release: 0 };
  answers.forEach(type => {
    if (scores[type] !== undefined) scores[type] += 1;
  });
  return scores;
}

function getTopType(scores) {
  const priority = ["calm", "clarify", "imagine", "release"];
  return priority.reduce((best, type) => scores[type] > scores[best] ? type : best, priority[0]);
}

function showResult() {
  const scores = calculateScores();
  const topType = getTopType(scores);
  const result = resultTypes[topType];
  currentResult = result;
  appsBox.hidden = true;
  appRecommendations.innerHTML = "";

  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultLead").textContent = result.lead;

  const recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = result.methods.map(method => `
    <div class="recommend-item">
      <span class="emoji">${method.emoji}</span>
      <strong>${method.name}</strong>
      <small>${method.desc}</small>
    </div>
  `).join("");

  const order = document.getElementById("resultOrder");
  order.innerHTML = result.order.map((step, index) => `
    <div class="order-step">
      <b>${index + 1}</b><br>
      ${step}
    </div>
  `).join("");

  document.getElementById("resultMessage").textContent = result.message;
  showScreen("result");
}

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
restartBtn.addEventListener("click", startQuiz);

function showRecommendedApps() {
  if (!currentResult || !currentResult.apps) return;

  const [primaryApp, secondaryApp] = currentResult.apps;

  appRecommendations.innerHTML = `
    <div class="app-rank-label primary-label">✨ いちばんおすすめ</div>
    <a class="app-card primary-app-card" href="${primaryApp.url}" target="_blank" rel="noopener noreferrer">
      <span class="app-card-emoji">${primaryApp.emoji}</span>
      <span class="app-card-text">
        <strong>${primaryApp.name}</strong>
        <small>${primaryApp.desc}</small>
      </span>
      <span class="app-card-arrow">›</span>
    </a>
    ${secondaryApp ? `
      <div class="app-rank-label secondary-label">こちらもおすすめ</div>
      <a class="app-card secondary-app-card" href="${secondaryApp.url}" target="_blank" rel="noopener noreferrer">
        <span class="app-card-emoji">${secondaryApp.emoji}</span>
        <span class="app-card-text">
          <strong>${secondaryApp.name}</strong>
          <small>${secondaryApp.desc}</small>
        </span>
        <span class="app-card-arrow">›</span>
      </a>
    ` : ""}
  `;

  appsBox.hidden = false;
  appsBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

appsBtn.addEventListener("click", showRecommendedApps);
