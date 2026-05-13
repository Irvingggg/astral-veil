const signs = [
  { id: "aries", zh: "白羊座", en: "Aries", symbol: "♈", element: "火象", range: "3/21 - 4/19" },
  { id: "taurus", zh: "金牛座", en: "Taurus", symbol: "♉", element: "土象", range: "4/20 - 5/20" },
  { id: "gemini", zh: "双子座", en: "Gemini", symbol: "♊", element: "风象", range: "5/21 - 6/20" },
  { id: "cancer", zh: "巨蟹座", en: "Cancer", symbol: "♋", element: "水象", range: "6/21 - 7/22" },
  { id: "leo", zh: "狮子座", en: "Leo", symbol: "♌", element: "火象", range: "7/23 - 8/22" },
  { id: "virgo", zh: "处女座", en: "Virgo", symbol: "♍", element: "土象", range: "8/23 - 9/22" },
  { id: "libra", zh: "天秤座", en: "Libra", symbol: "♎", element: "风象", range: "9/23 - 10/22" },
  { id: "scorpio", zh: "天蝎座", en: "Scorpio", symbol: "♏", element: "水象", range: "10/23 - 11/21" },
  { id: "sagittarius", zh: "射手座", en: "Sagittarius", symbol: "♐", element: "火象", range: "11/22 - 12/21" },
  { id: "capricorn", zh: "摩羯座", en: "Capricorn", symbol: "♑", element: "土象", range: "12/22 - 1/19" },
  { id: "aquarius", zh: "水瓶座", en: "Aquarius", symbol: "♒", element: "风象", range: "1/20 - 2/18" },
  { id: "pisces", zh: "双鱼座", en: "Pisces", symbol: "♓", element: "水象", range: "2/19 - 3/20" }
];

const periodNames = {
  daily: "今日",
  weekly: "本周",
  monthly: "本月"
};

const periodThemes = {
  daily: {
    title: "微光正在靠近你的日常选择",
    rhythm: "适合观察细节、调整节奏，并把注意力放回真正重要的关系与计划上。"
  },
  weekly: {
    title: "一段新的能量曲线正在形成",
    rhythm: "本周适合重新整理优先级，给合作与表达留下更柔软也更明确的空间。"
  },
  monthly: {
    title: "本月的主题是长期愿望与现实秩序",
    rhythm: "你会更清楚哪些目标值得投入，也更容易看见关系、事业和财务里的深层模式。"
  }
};

const signVoices = {
  aries: ["行动", "突破", "勇气", "把冲动变成清晰的第一步。"],
  taurus: ["稳定", "价值", "感官", "用更慢的节奏确认真正想守护的东西。"],
  gemini: ["交流", "好奇", "选择", "别急着定论，信息会在对话里变得完整。"],
  cancer: ["照顾", "回忆", "安全感", "温柔地划清边界，会让亲密更轻松。"],
  leo: ["表达", "魅力", "创造", "把光放在作品上，而不是放在证明自己上。"],
  virgo: ["秩序", "修复", "专注", "细节会给你答案，但别让完美拖慢开始。"],
  libra: ["平衡", "关系", "审美", "真实的和谐需要你说出自己的偏好。"],
  scorpio: ["直觉", "转化", "深度", "越诚实面对欲望，越能轻盈地做决定。"],
  sagittarius: ["远方", "信念", "扩张", "新的视野会从一次坦率表达开始。"],
  capricorn: ["责任", "结构", "成果", "给野心一套可执行的日程，它会安静开花。"],
  aquarius: ["革新", "社群", "灵感", "独特想法需要落地场景，别只停在脑内星图。"],
  pisces: ["梦境", "共情", "流动", "把感受写下来，你会看见隐藏的方向感。"]
};

const topicCopy = {
  love: {
    label: "爱情关系",
    focus: "关系里的真实需求会浮出水面",
    action: "先确认自己的边界，再表达期待；温柔但明确，比猜测更有力量。"
  },
  career: {
    label: "事业发展",
    focus: "工作节奏进入可调整期",
    action: "把目标拆成三步，并优先推进最能被看见的成果。"
  },
  wealth: {
    label: "财富机会",
    focus: "资源分配和价值判断变得重要",
    action: "适合盘点收入、支出和长期投入，避免被短期情绪带着消费。"
  },
  health: {
    label: "身心状态",
    focus: "身体会提醒你哪里需要慢下来",
    action: "把睡眠、饮食和运动先调回稳定，不要用意志力硬扛疲惫。"
  },
  decision: {
    label: "重要选择",
    focus: "你会更想要一个清晰答案",
    action: "把选择写成利弊清单，再问自己哪一个更接近长期的自由感。"
  }
};

const tarotCards = [
  ["女祭司", "☾", "直觉正在变得清晰，适合安静观察，而不是急着给出答案。"],
  ["星星", "✶", "希望感回到你身边，适合许愿、修复信心和重新连接远方目标。"],
  ["恋人", "♡", "关系中的选择变得重要，诚实会比讨好更能带来亲密。"],
  ["战车", "♜", "行动力增强，把方向定下来后，你会比想象中推进得更快。"],
  ["节制", "∞", "需要调和节奏。慢一点，反而能让事情抵达更稳的结果。"],
  ["太阳", "☉", "可见度提升，适合展示成果、主动沟通，也适合给自己一点掌声。"]
];

const events = [
  ["05/16", "金星换座", "关系与审美偏好变得更明确。"],
  ["05/20", "太阳进入双子", "沟通、学习与短途计划被点亮。"],
  ["05/23", "上弦月", "适合调整目标，把想法推进到行动。"],
  ["05/28", "满月前影期", "情绪更敏感，也更容易看见真相。"]
];

let activeSign = signs[0];
let activePeriod = "daily";

const signGrid = document.querySelector("#signGrid");
const periodTabs = document.querySelector("#periodTabs");
const heroTitle = document.querySelector("#heroTitle");
const heroCopy = document.querySelector("#heroCopy");
const datePill = document.querySelector("#datePill");
const overallScore = document.querySelector("#overallScore");
const summaryText = document.querySelector("#summaryText");
const keywordRow = document.querySelector("#keywordRow");
const scoreList = document.querySelector("#scoreList");
const energyLabel = document.querySelector("#energyLabel");
const luckyNumber = document.querySelector("#luckyNumber");
const luckyColor = document.querySelector("#luckyColor");
const luckyDirection = document.querySelector("#luckyDirection");
const adviceText = document.querySelector("#adviceText");
const drawCard = document.querySelector("#drawCard");
const tarotFace = document.querySelector("#tarotFace");
const tarotName = document.querySelector("#tarotName");
const tarotMeaning = document.querySelector("#tarotMeaning");
const eventStrip = document.querySelector("#eventStrip");
const birthForm = document.querySelector("#birthForm");
const profileSign = document.querySelector("#profileSign");
const profileSummary = document.querySelector("#profileSummary");
const profileGrid = document.querySelector("#profileGrid");

function seededScore(seed, offset) {
  const value = Math.sin(seed * 12.9898 + offset * 78.233) * 43758.5453;
  return 62 + Math.floor((value - Math.floor(value)) * 34);
}

function getSunSign(dateValue) {
  const date = new Date(`${dateValue}T12:00:00`);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const marker = month * 100 + day;

  if (marker >= 321 && marker <= 419) return signs[0];
  if (marker >= 420 && marker <= 520) return signs[1];
  if (marker >= 521 && marker <= 620) return signs[2];
  if (marker >= 621 && marker <= 722) return signs[3];
  if (marker >= 723 && marker <= 822) return signs[4];
  if (marker >= 823 && marker <= 922) return signs[5];
  if (marker >= 923 && marker <= 1022) return signs[6];
  if (marker >= 1023 && marker <= 1121) return signs[7];
  if (marker >= 1122 && marker <= 1221) return signs[8];
  if (marker >= 1222 || marker <= 119) return signs[9];
  if (marker >= 120 && marker <= 218) return signs[10];
  return signs[11];
}

function getFortune() {
  const signIndex = signs.findIndex((sign) => sign.id === activeSign.id) + 1;
  const periodIndex = Object.keys(periodNames).indexOf(activePeriod) + 1;
  const seed = signIndex * 19 + periodIndex * 31;
  const voice = signVoices[activeSign.id];
  const scores = {
    综合: seededScore(seed, 1),
    爱情: seededScore(seed, 2),
    事业: seededScore(seed, 3),
    财富: seededScore(seed, 4),
    健康: seededScore(seed, 5)
  };
  const colors = ["星尘金", "月雾银", "海王绿", "玫瑰粉", "暮光紫", "晨曦蓝"];
  const directions = ["东南", "正南", "西南", "正西", "东北", "西北"];

  return {
    voice,
    scores,
    luckyColor: colors[(seed + periodIndex) % colors.length],
    luckyNumber: ((seed * 7) % 9) + 1,
    direction: directions[(seed + signIndex) % directions.length]
  };
}

function renderSigns() {
  signGrid.innerHTML = signs
    .map(
      (sign) => `
        <button class="sign-button ${sign.id === activeSign.id ? "active" : ""}" data-sign="${sign.id}" type="button">
          <span class="sign-symbol">${sign.symbol}</span>
          ${sign.zh}
          <small>${sign.element} · ${sign.en}</small>
        </button>
      `
    )
    .join("");
}

function renderFortune() {
  const fortune = getFortune();
  const theme = periodThemes[activePeriod];
  const overall = fortune.scores.综合;

  heroTitle.textContent = `${activeSign.zh}${periodNames[activePeriod]}星象`;
  heroCopy.textContent = `${theme.title}。${activeSign.zh}的关键词是${fortune.voice
    .slice(0, 3)
    .join("、")}，${theme.rhythm}`;
  datePill.textContent = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date());
  overallScore.textContent = overall;
  energyLabel.textContent = overall >= 86 ? "高光期" : overall >= 75 ? "稳定上升" : "温和调整";
  summaryText.textContent = `${activeSign.zh}${periodNames[activePeriod]}的能量围绕“${fortune.voice[0]}”展开。你会更容易察觉内在需求和外部机会之间的关系，适合把复杂的想法整理成可以执行的小步骤。${fortune.voice[3]}`;
  adviceText.textContent = `建议：保留一点独处时间，让判断从情绪里沉淀出来。${activePeriod === "monthly" ? "本月尤其适合做长期计划。" : "今天的小选择会影响接下来的节奏。"}`;
  luckyNumber.textContent = fortune.luckyNumber;
  luckyColor.textContent = fortune.luckyColor;
  luckyDirection.textContent = fortune.direction;

  keywordRow.innerHTML = fortune.voice
    .slice(0, 3)
    .map((word) => `<span>${word}</span>`)
    .join("");

  scoreList.innerHTML = Object.entries(fortune.scores)
    .map(
      ([label, score]) => `
        <div class="score-row">
          <span>${label}</span>
          <div class="meter"><span style="width: ${score}%"></span></div>
          <strong>${score}</strong>
        </div>
      `
    )
    .join("");
}

function renderEvents() {
  eventStrip.innerHTML = events
    .map(
      ([date, title, text]) => `
        <article class="event">
          <time>${date}</time>
          <strong>${title}</strong>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderPersonalReading(data) {
  const sign = getSunSign(data.birthDate);
  const topic = topicCopy[data.topic];
  const voice = signVoices[sign.id];
  const name = data.name || "你";
  const timeTone = data.birthTime ? `出生时间 ${data.birthTime} 让这次解读更偏向当下节奏。` : "没有填写出生时间，所以这里以太阳星座作为主要依据。";
  const placeTone = data.birthPlace ? `出生地点记录为 ${data.birthPlace}，它象征你最熟悉的安全感来源。` : "可以补充出生地点，让档案更完整。";
  const questionTone = data.question
    ? `围绕“${data.question}”，答案更像一个逐步显现的方向，而不是马上定型的结论。`
    : "如果写下更具体的问题，预测会更聚焦。";

  activeSign = sign;
  renderSigns();
  renderFortune();

  profileSign.textContent = `${sign.symbol} ${sign.zh}`;
  profileSummary.textContent = `${name}，你的太阳星座是${sign.zh}，属于${sign.element}。这次预测主题是“${topic.label}”：${topic.focus}。${questionTone} ${topic.action}`;
  profileGrid.innerHTML = `
    <div><small>太阳星座</small><strong>${sign.zh}</strong><span>${sign.range}</span></div>
    <div><small>元素能量</small><strong>${sign.element}</strong><span>${voice[0]} · ${voice[1]}</span></div>
    <div><small>出生信息</small><strong>${data.birthDate}</strong><span>${timeTone}</span></div>
    <div><small>地点线索</small><strong>${data.birthPlace || "未填写"}</strong><span>${placeTone}</span></div>
  `;
}

function drawTarot() {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  tarotName.textContent = card[0];
  tarotFace.textContent = card[1];
  tarotMeaning.textContent = card[2];
  tarotFace.animate(
    [
      { transform: "rotateY(0deg) scale(0.96)" },
      { transform: "rotateY(180deg) scale(1.04)" },
      { transform: "rotateY(360deg) scale(1)" }
    ],
    { duration: 560, easing: "ease-out" }
  );
}

signGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sign]");
  if (!button) return;
  activeSign = signs.find((sign) => sign.id === button.dataset.sign);
  renderSigns();
  renderFortune();
});

periodTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) return;
  activePeriod = button.dataset.period;
  periodTabs.querySelectorAll("button").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.period === activePeriod);
  });
  renderFortune();
});

birthForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(birthForm);
  renderPersonalReading({
    name: String(formData.get("userName") || "").trim(),
    birthDate: String(formData.get("birthDate") || ""),
    birthTime: String(formData.get("birthTime") || ""),
    birthPlace: String(formData.get("birthPlace") || "").trim(),
    topic: String(formData.get("predictionTopic") || "love"),
    question: String(formData.get("predictionQuestion") || "").trim()
  });
});

drawCard.addEventListener("click", drawTarot);

function startStarfield() {
  const canvas = document.querySelector("#starfield");
  const context = canvas.getContext("2d");
  let stars = [];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars = Array.from({ length: Math.min(180, Math.floor(window.innerWidth / 7)) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.25,
      speed: Math.random() * 0.18 + 0.04,
      alpha: Math.random() * 0.7 + 0.2
    }));
  }

  function frame() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star) => {
      star.y += star.speed;
      if (star.y > window.innerHeight) star.y = 0;
      context.beginPath();
      context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 246, 209, ${star.alpha})`;
      context.fill();
    });
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  resize();
  frame();
}

renderSigns();
renderFortune();
renderEvents();
startStarfield();
