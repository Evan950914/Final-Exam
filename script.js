const STORAGE_KEY = "final_exam_quiz_wrong_ids_v1";

const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const totalCount = document.getElementById("totalCount");
const wrongCount = document.getElementById("wrongCount");

const startAllBtn = document.getElementById("startAllBtn");
const startRandomBtn = document.getElementById("startRandomBtn");
const startWrongBtn = document.getElementById("startWrongBtn");
const clearWrongBtn = document.getElementById("clearWrongBtn");

const backHomeBtn = document.getElementById("backHomeBtn");
const modeLabel = document.getElementById("modeLabel");
const questionProgress = document.getElementById("questionProgress");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");

const questionText = document.getElementById("questionText");
const diagramBox = document.getElementById("diagramBox");
const imageBox = document.getElementById("imageBox");
const questionImage = document.getElementById("questionImage");
const optionsBox = document.getElementById("optionsBox");

const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const explanationText = document.getElementById("explanationText");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const finalScore = document.getElementById("finalScore");
const finalDetail = document.getElementById("finalDetail");
const reviewWrongBtn = document.getElementById("reviewWrongBtn");
const restartBtn = document.getElementById("restartBtn");
const resultHomeBtn = document.getElementById("resultHomeBtn");

let currentQuestions = [];
let currentIndex = 0;
let answers = {};
let currentMode = "all";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  theme: "default"
});

function getWrongIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setWrongIds(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(ids)]));
  updateHomeStats();
}

function addWrongId(id) {
  const ids = getWrongIds();
  ids.push(id);
  setWrongIds(ids);
}

function removeWrongId(id) {
  const ids = getWrongIds().filter((item) => item !== id);
  setWrongIds(ids);
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function showPage(page) {
  homePage.classList.add("hidden");
  quizPage.classList.add("hidden");
  resultPage.classList.add("hidden");
  page.classList.remove("hidden");
}

function updateHomeStats() {
  totalCount.textContent = questions.length;
  wrongCount.textContent = getWrongIds().length;
}

function startQuiz(mode) {
  currentMode = mode;
  answers = {};
  currentIndex = 0;

  if (mode === "all") {
    currentQuestions = [...questions];
    modeLabel.textContent = "全部題目";
  }

  if (mode === "random") {
    currentQuestions = shuffle(questions);
    modeLabel.textContent = "隨機練習";
  }

  if (mode === "wrong") {
    const wrongIds = getWrongIds();
    currentQuestions = questions.filter((q) => wrongIds.includes(q.id));
    modeLabel.textContent = "錯題練習";

    if (currentQuestions.length === 0) {
      alert("目前沒有錯題。先去刷全部題目，不要假裝自己已經會了。");
      showPage(homePage);
      return;
    }
  }

  showPage(quizPage);
  renderQuestion();
}

async function renderDiagram(diagram) {
  diagramBox.innerHTML = "";

  if (!diagram) {
    diagramBox.classList.add("hidden");
    return;
  }

  diagramBox.classList.remove("hidden");

  try {
    const id = `diagram-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    const result = await mermaid.render(id, diagram.trim());
    diagramBox.innerHTML = result.svg;
  } catch (error) {
    diagramBox.innerHTML = `<p>圖表渲染失敗，請檢查 Mermaid 語法。</p>`;
    console.error(error);
  }
}

function renderImage(image) {
  if (!image) {
    imageBox.classList.add("hidden");
    questionImage.removeAttribute("src");
    return;
  }

  imageBox.classList.remove("hidden");
  questionImage.src = image;
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  const selected = answers[q.id];
  const progress = ((currentIndex + 1) / currentQuestions.length) * 100;
  const correctCount = Object.values(answers).filter((item) => item.correct).length;

  questionProgress.textContent = `第 ${currentIndex + 1} / ${currentQuestions.length} 題`;
  scoreText.textContent = `答對 ${correctCount} 題`;
  progressFill.style.width = `${progress}%`;

  questionText.textContent = `${q.id}. ${q.question}`;
  optionsBox.innerHTML = "";

  renderDiagram(q.diagram);
  renderImage(q.image);

  Object.entries(q.options).forEach(([key, value]) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = `(${key}) ${value}`;
    button.disabled = Boolean(selected);

    if (selected) {
      if (key === q.answer) button.classList.add("correct");
      if (key === selected.choice && key !== q.answer) button.classList.add("wrong");
    }

    button.addEventListener("click", () => chooseAnswer(key));
    optionsBox.appendChild(button);
  });

  if (selected) {
    showFeedback(selected.correct, q.explanation);
  } else {
    feedbackBox.classList.add("hidden");
    feedbackBox.classList.remove("correct", "wrong");
  }

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? "看結果" : "下一題";
}

function chooseAnswer(choice) {
  const q = currentQuestions[currentIndex];
  const correct = choice === q.answer;

  answers[q.id] = { choice, correct };

  if (correct) {
    removeWrongId(q.id);
  } else {
    addWrongId(q.id);
  }

  renderQuestion();
}

function showFeedback(correct, explanation) {
  feedbackBox.classList.remove("hidden", "correct", "wrong");
  feedbackBox.classList.add(correct ? "correct" : "wrong");
  feedbackTitle.textContent = correct ? "答對" : "答錯";
  explanationText.textContent = explanation || "這題尚未填寫解析。";
}

function showResult() {
  const total = currentQuestions.length;
  const correct = Object.values(answers).filter((item) => item.correct).length;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

  finalScore.textContent = `${percent}%`;
  finalDetail.textContent = `答對 ${correct} / ${total} 題`;
  reviewWrongBtn.disabled = getWrongIds().length === 0;
  showPage(resultPage);
}

startAllBtn.addEventListener("click", () => startQuiz("all"));
startRandomBtn.addEventListener("click", () => startQuiz("random"));
startWrongBtn.addEventListener("click", () => startQuiz("wrong"));

clearWrongBtn.addEventListener("click", () => {
  if (!confirm("確定要清空錯題本？")) return;
  setWrongIds([]);
});

backHomeBtn.addEventListener("click", () => {
  showPage(homePage);
  updateHomeStats();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex--;
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === currentQuestions.length - 1) {
    showResult();
    return;
  }
  currentIndex++;
  renderQuestion();
});

reviewWrongBtn.addEventListener("click", () => startQuiz("wrong"));
restartBtn.addEventListener("click", () => startQuiz(currentMode));
resultHomeBtn.addEventListener("click", () => {
  showPage(homePage);
  updateHomeStats();
});

updateHomeStats();
