// ============================================
// STATE & STORAGE
// ============================================
const STORAGE_KEY = 'grammar_master_v2';
let state = {
    currentTopicId: null, currentQuestions: [], currentQIndex: 0,
    score: 0, answers: [], totalCorrect: 0, totalAnswered: 0,
    isAllTopics: false, isReviewMode: false, currentStreak: 0,
    bestStreak: 0, difficultyFilter: 'all'
};

function loadStorage() {
    try {
        const d = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return d || getDefaultStorage();
    } catch { return getDefaultStorage(); }
}

function getDefaultStorage() {
    return { totalCorrect: 0, totalAnswered: 0, bestStreak: 0,
        wrongQuestions: [], history: [], topicStats: {},
        achievements: {}, sessionsCompleted: 0 };
}

function saveStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let stored = loadStorage();

// ============================================
// ACHIEVEMENTS DEFINITION
// ============================================
const ACHIEVEMENTS = [
    { id:'first_quiz', icon:'🎯', title:'Bước Đầu Tiên', desc:'Hoàn thành bài quiz đầu tiên', check: s => s.sessionsCompleted >= 1 },
    { id:'five_quizzes', icon:'📚', title:'Học Sinh Chăm Chỉ', desc:'Hoàn thành 5 bài quiz', check: s => s.sessionsCompleted >= 5 },
    { id:'ten_quizzes', icon:'🎓', title:'Siêng Năng', desc:'Hoàn thành 10 bài quiz', check: s => s.sessionsCompleted >= 10 },
    { id:'perfect_score', icon:'💯', title:'Điểm Tuyệt Đối', desc:'Đạt 100% trong một bài quiz', check: s => s._lastPct === 100 },
    { id:'ninety_pct', icon:'⭐', title:'Gần Hoàn Hảo', desc:'Đạt trên 90% trong một bài', check: s => s._lastPct >= 90 },
    { id:'streak_3', icon:'🔥', title:'Combo x3', desc:'3 câu đúng liên tiếp', check: s => s.bestStreak >= 3 },
    { id:'streak_5', icon:'🔥', title:'Combo x5', desc:'5 câu đúng liên tiếp', check: s => s.bestStreak >= 5 },
    { id:'streak_10', icon:'💥', title:'Combo x10', desc:'10 câu đúng liên tiếp', check: s => s.bestStreak >= 10 },
    { id:'fifty_correct', icon:'🏆', title:'50 Câu Đúng', desc:'Trả lời đúng 50 câu', check: s => s.totalCorrect >= 50 },
    { id:'hundred_correct', icon:'👑', title:'100 Câu Đúng', desc:'Trả lời đúng 100 câu', check: s => s.totalCorrect >= 100 },
    { id:'all_topics', icon:'🌟', title:'Toàn Diện', desc:'Luyện tập tất cả 7 chủ đề', check: s => Object.keys(s.topicStats).length >= 7 },
    { id:'review_master', icon:'🔁', title:'Sửa Sai', desc:'Ôn lại và đúng 10 câu sai', check: s => (s._reviewCorrect || 0) >= 10 },
    { id:'hard_mode', icon:'💪', title:'Thử Thách', desc:'Đúng 10 câu khó (Hard)', check: s => (s._hardCorrect || 0) >= 10 },
];

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    renderTopics();
    updateHeaderStats();
    updateWrongCount();
});

// ============================================
// TOPIC RENDERING
// ============================================
function renderTopics() {
    const grid = document.getElementById("topicGrid");
    grid.innerHTML = GRAMMAR_TOPICS.map(topic => {
        const stats = stored.topicStats[topic.id];
        const completion = stats ? `<div class="topic-completion"><div class="completion-bar" style="width:${Math.min(100, stats.bestPct || 0)}%"></div></div><span class="completion-text">${stats.bestPct || 0}% best</span>` : '<span class="completion-text">Chưa làm</span>';
        const dots = Array.from({length:5}, (_,i) => `<div class="difficulty-dot ${i < topic.difficulty ? 'active' : ''}"></div>`).join('');
        return `<div class="topic-card" onclick="startTopic('${topic.id}')">
            <div class="topic-card-header"><div class="topic-emoji">${topic.emoji}</div>
            <div class="topic-info"><h3>${topic.title}</h3><span class="topic-unit">${topic.unit}</span></div></div>
            <p class="topic-description">${topic.description}</p>
            <div class="topic-meta"><span class="topic-question-count">📋 ${topic.questions.length} câu</span>
            <div class="topic-difficulty">${dots}</div></div>
            ${completion}<span class="start-badge">Bắt đầu →</span></div>`;
    }).join('');
}

// ============================================
// DIFFICULTY FILTER
// ============================================
function setFilter(level) {
    state.difficultyFilter = level;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === level));
}

function filterByDifficulty(questions) {
    if (state.difficultyFilter === 'all') return questions;
    return questions.filter(q => String(q.difficulty) === state.difficultyFilter);
}

// ============================================
// QUIZ FLOW
// ============================================
function startTopic(topicId) {
    const topic = GRAMMAR_TOPICS.find(t => t.id === topicId);
    if (!topic) return;
    let qs = filterByDifficulty([...topic.questions]);
    if (qs.length === 0) { alert('Không có câu hỏi ở mức độ này!'); return; }
    state.currentTopicId = topicId;
    state.currentQuestions = shuffleArray(qs);
    state.currentQIndex = 0; state.score = 0; state.answers = [];
    state.isAllTopics = false; state.isReviewMode = false; state.currentStreak = 0;
    document.getElementById("quizTopicTitle").textContent = topic.title;
    document.getElementById("theoryContent").innerHTML = topic.theory;
    document.getElementById("theoryContent").classList.add("hidden");
    document.getElementById("toggleArrow").classList.remove("rotated");
    document.getElementById("theoryPanel").classList.remove("hidden");
    showSection('quizSection'); renderQuestion();
}

function startPracticeAll() {
    state.isAllTopics = true; state.isReviewMode = false;
    state.currentTopicId = "all";
    let qs = [];
    GRAMMAR_TOPICS.forEach(t => t.questions.forEach(q => qs.push({...q, topicTitle: t.title})));
    qs = filterByDifficulty(qs);
    if (qs.length === 0) { alert('Không có câu hỏi!'); return; }
    state.currentQuestions = shuffleArray(qs).slice(0, 30);
    state.currentQIndex = 0; state.score = 0; state.answers = []; state.currentStreak = 0;
    document.getElementById("quizTopicTitle").textContent = "Tổng Hợp ("+state.currentQuestions.length+" câu)";
    document.getElementById("theoryPanel").classList.add("hidden");
    showSection('quizSection'); renderQuestion();
}

function startReviewWrong() {
    if (!stored.wrongQuestions || stored.wrongQuestions.length === 0) { alert('Không có câu sai nào!'); return; }
    state.isReviewMode = true; state.isAllTopics = false;
    state.currentTopicId = "review";
    state.currentQuestions = shuffleArray([...stored.wrongQuestions]);
    state.currentQIndex = 0; state.score = 0; state.answers = []; state.currentStreak = 0;
    document.getElementById("quizTopicTitle").textContent = "🔁 Ôn Lại Câu Sai ("+state.currentQuestions.length+" câu)";
    document.getElementById("theoryPanel").classList.add("hidden");
    showSection('quizSection'); renderQuestion();
}

function showSection(id) {
    ['topicSelection','quizSection','resultsSection','statsPage','achievementsPage'].forEach(s =>
        document.getElementById(s).classList.toggle('hidden', s !== id));
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// ============================================
// QUESTION RENDERING (multi-type)
// ============================================
function renderQuestion() {
    const q = state.currentQuestions[state.currentQIndex];
    const total = state.currentQuestions.length;
    document.getElementById("currentQ").textContent = state.currentQIndex + 1;
    document.getElementById("totalQ").textContent = total;
    document.getElementById("questionNumber").textContent = `Câu ${state.currentQIndex + 1}`;
    document.getElementById("progressBar").style.width = `${(state.currentQIndex / total) * 100}%`;

    // Difficulty badge
    const db = document.getElementById("difficultyBadge");
    db.textContent = q.difficulty === 1 ? '🟢 Dễ' : q.difficulty === 2 ? '🟡 TB' : '🔴 Khó';
    db.className = 'difficulty-badge diff-' + q.difficulty;

    const topicLabel = q.topicTitle ? ` <span class="q-topic-label">[${q.topicTitle}]</span>` : '';
    document.getElementById("questionText").innerHTML = q.question + topicLabel;

    const container = document.getElementById("optionsContainer");

    if (q.type === 'multiple-choice') renderMC(q, container);
    else if (q.type === 'fill') renderFill(q, container);
    else if (q.type === 'reorder') renderReorder(q, container);
    else if (q.type === 'matching') renderMatching(q, container);

    document.getElementById("feedbackContainer").classList.add("hidden");
    document.getElementById("feedbackContainer").classList.remove("correct-feedback","wrong-feedback");
    document.getElementById("nextBtn").classList.add("hidden");
    document.getElementById("streakIndicator").classList.add("hidden");

    const card = document.getElementById("questionCard");
    card.style.animation = 'none'; card.offsetHeight; card.style.animation = 'slideUp 0.4s ease';
}

function renderMC(q, container) {
    const letters = ['A','B','C','D'];
    container.innerHTML = q.options.map((opt, i) => `
        <button class="option-btn" id="opt-${i}" onclick="selectMC(${i})">
            <span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>
        </button>`).join('');
}

function renderFill(q, container) {
    container.innerHTML = `<div class="fill-input-container">
        <input type="text" class="fill-input" id="fillInput" placeholder="Nhập đáp án..." autocomplete="off" onkeydown="if(event.key==='Enter')submitFill()">
        <button class="btn btn-primary fill-submit-btn" onclick="submitFill()">Kiểm tra ✓</button></div>`;
    setTimeout(() => document.getElementById('fillInput')?.focus(), 200);
}

function renderReorder(q, container) {
    const shuffled = shuffleArray([...q.words]);
    container.innerHTML = `<div class="reorder-container">
        <div class="reorder-bank" id="reorderBank">${shuffled.map((w,i) => `<span class="reorder-word" draggable="true" data-word="${w}" onclick="toggleReorderWord(this)">${w}</span>`).join('')}</div>
        <div class="reorder-answer" id="reorderAnswer" onclick="this.lastElementChild && this.lastElementChild.click()"></div>
        <button class="btn btn-primary fill-submit-btn" onclick="submitReorder()">Kiểm tra ✓</button></div>`;
}

function renderMatching(q, container) {
    const leftItems = q.pairs.map(p => p[0]);
    const rightItems = shuffleArray(q.pairs.map(p => p[1]));
    container.innerHTML = `<div class="matching-container">
        <div class="matching-columns">
            <div class="matching-col">${leftItems.map((l,i) => `<div class="match-item match-left" data-idx="${i}" onclick="selectMatchLeft(this)">${l}</div>`).join('')}</div>
            <div class="matching-col">${rightItems.map((r,i) => `<div class="match-item match-right" data-val="${r}" onclick="selectMatchRight(this)">${r}</div>`).join('')}</div>
        </div>
        <div class="match-lines" id="matchLines"></div>
        <button class="btn btn-primary fill-submit-btn" onclick="submitMatching()">Kiểm tra ✓</button></div>`;
    window._matchState = { selectedLeft: null, pairs: [], correctPairs: q.pairs };
}

// ============================================
// ANSWER HANDLERS
// ============================================
function selectMC(index) {
    const q = state.currentQuestions[state.currentQIndex];
    const isCorrect = index === q.correct;
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('correct');
        if (i === index && !isCorrect) btn.classList.add('wrong');
    });
    processAnswer(isCorrect, q.options[index], q.options[q.correct], q);
}

function submitFill() {
    const input = document.getElementById('fillInput');
    if (!input || !input.value.trim()) return;
    const q = state.currentQuestions[state.currentQIndex];
    const userVal = input.value.trim().toLowerCase();
    const isCorrect = q.answer.some(a => a.toLowerCase() === userVal);
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    document.querySelector('.fill-submit-btn').classList.add('hidden');
    processAnswer(isCorrect, input.value.trim(), q.answer[0], q);
}

function toggleReorderWord(el) {
    const bank = document.getElementById('reorderBank');
    const answer = document.getElementById('reorderAnswer');
    if (el.parentElement === bank) {
        answer.appendChild(el);
    } else {
        bank.appendChild(el);
    }
}

function submitReorder() {
    const q = state.currentQuestions[state.currentQIndex];
    const answerDiv = document.getElementById('reorderAnswer');
    const words = [...answerDiv.querySelectorAll('.reorder-word')].map(w => w.dataset.word);
    const userAnswer = words.join(' ');
    const isCorrect = userAnswer.toLowerCase() === q.answer.toLowerCase();
    document.querySelectorAll('.reorder-word').forEach(w => w.style.pointerEvents = 'none');
    document.querySelector('.fill-submit-btn').classList.add('hidden');
    processAnswer(isCorrect, userAnswer, q.answer, q);
}

function selectMatchLeft(el) {
    document.querySelectorAll('.match-left').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    window._matchState.selectedLeft = el;
}

function selectMatchRight(el) {
    if (!window._matchState.selectedLeft) return;
    const left = window._matchState.selectedLeft;
    window._matchState.pairs.push([left.textContent, el.dataset.val]);
    left.classList.add('matched'); el.classList.add('matched');
    left.classList.remove('selected');
    left.style.pointerEvents = 'none'; el.style.pointerEvents = 'none';
    const linesDiv = document.getElementById('matchLines');
    linesDiv.innerHTML += `<div class="match-line-text">${left.textContent} → ${el.dataset.val}</div>`;
    window._matchState.selectedLeft = null;
    if (window._matchState.pairs.length === window._matchState.correctPairs.length) {
        setTimeout(() => submitMatching(), 300);
    }
}

function submitMatching() {
    const q = state.currentQuestions[state.currentQIndex];
    const userPairs = window._matchState.pairs;
    let correctCount = 0;
    q.pairs.forEach(cp => { if (userPairs.some(up => up[0] === cp[0] && up[1] === cp[1])) correctCount++; });
    const isCorrect = correctCount === q.pairs.length;
    document.querySelectorAll('.match-item').forEach(e => e.style.pointerEvents = 'none');
    document.querySelector('.fill-submit-btn')?.classList.add('hidden');
    processAnswer(isCorrect, `${correctCount}/${q.pairs.length} đúng`, 'Tất cả đúng', q);
}

// ============================================
// PROCESS ANSWER (unified)
// ============================================
function processAnswer(isCorrect, userAnswer, correctAnswer, q) {
    if (isCorrect) {
        state.score++; state.currentStreak++;
        stored.totalCorrect++; state.totalCorrect++;
        Sound.play('correct');
        if (state.currentStreak >= 3) {
            Sound.play('streak');
            const si = document.getElementById('streakIndicator');
            si.classList.remove('hidden');
            document.getElementById('streakText').textContent = `🔥 ${state.currentStreak} câu đúng liên tiếp!`;
        }
        if (state.currentStreak > stored.bestStreak) stored.bestStreak = state.currentStreak;
        if (state.isReviewMode) stored._reviewCorrect = (stored._reviewCorrect || 0) + 1;
        if (q.difficulty === 3) stored._hardCorrect = (stored._hardCorrect || 0) + 1;
        // Remove from wrong if review
        if (state.isReviewMode) {
            stored.wrongQuestions = stored.wrongQuestions.filter(wq => wq.question !== q.question);
        }
    } else {
        state.currentStreak = 0;
        Sound.play('wrong');
        document.getElementById('streakIndicator').classList.add('hidden');
        // Add to wrong questions (avoid duplicates)
        if (!stored.wrongQuestions.some(wq => wq.question === q.question)) {
            stored.wrongQuestions.push({...q});
        }
    }
    stored.totalAnswered++;
    state.totalAnswered++;

    state.answers.push({ question: q.question, userAnswer, correctAnswer, isCorrect, explanation: q.explanation, topicTitle: q.topicTitle || '', type: q.type, options: q.options });

    // Feedback
    const fc = document.getElementById("feedbackContainer");
    fc.classList.remove("hidden","correct-feedback","wrong-feedback");
    fc.classList.add(isCorrect ? "correct-feedback" : "wrong-feedback");
    document.getElementById("feedbackIcon").textContent = isCorrect ? "✅" : "❌";
    document.getElementById("feedbackText").textContent = isCorrect ? "Chính xác! Tuyệt vời!" : "Chưa đúng rồi!";
    document.getElementById("explanation").innerHTML = q.explanation;

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = state.currentQIndex >= state.currentQuestions.length - 1 ? "Xem Kết Quả 🏆" : "Câu Tiếp Theo →";

    updateHeaderStats();
    saveStorage(stored);

    if (isCorrect) {
        document.getElementById("questionCard").classList.add("pulse");
        setTimeout(() => document.getElementById("questionCard").classList.remove("pulse"), 300);
    } else {
        document.getElementById("questionCard").classList.add("shake");
        setTimeout(() => document.getElementById("questionCard").classList.remove("shake"), 500);
    }
}

function nextQuestion() {
    Sound.play('click');
    if (state.currentQIndex >= state.currentQuestions.length - 1) { showResults(); return; }
    state.currentQIndex++;
    renderQuestion();
}

// ============================================
// RESULTS
// ============================================
function showResults() {
    const total = state.currentQuestions.length;
    const correct = state.score;
    const pct = Math.round((correct / total) * 100);

    stored.sessionsCompleted++;
    stored._lastPct = pct;
    stored.history.push({ date: new Date().toISOString(), topicId: state.currentTopicId, correct, total, pct });
    if (stored.history.length > 100) stored.history = stored.history.slice(-100);

    if (state.currentTopicId && state.currentTopicId !== 'all' && state.currentTopicId !== 'review') {
        if (!stored.topicStats[state.currentTopicId]) stored.topicStats[state.currentTopicId] = {};
        const ts = stored.topicStats[state.currentTopicId];
        ts.attempts = (ts.attempts || 0) + 1;
        ts.bestPct = Math.max(ts.bestPct || 0, pct);
        ts.lastPct = pct;
    }
    saveStorage(stored);
    checkAchievements();

    showSection('resultsSection');
    document.getElementById("resCorrect").textContent = correct;
    document.getElementById("resWrong").textContent = total - correct;
    document.getElementById("resScore").textContent = pct + "%";
    document.getElementById("scoreRingText").textContent = pct + "%";

    let emoji, title, subtitle;
    if (pct >= 90) { emoji="🏆"; title="Xuất Sắc!"; subtitle="Bạn nắm rất vững!"; }
    else if (pct >= 70) { emoji="🎉"; title="Tốt Lắm!"; subtitle="Cố gắng thêm nhé!"; }
    else if (pct >= 50) { emoji="💪"; title="Khá Ổn!"; subtitle="Ôn lại lý thuyết nhé!"; }
    else { emoji="📖"; title="Cần Ôn Thêm!"; subtitle="Hãy xem lý thuyết và thử lại!"; }

    document.getElementById("resultsEmoji").textContent = emoji;
    document.getElementById("resultsTitle").textContent = title;
    document.getElementById("resultsSubtitle").textContent = subtitle;

    Sound.play('complete');

    setTimeout(() => {
        const offset = 534 - (pct / 100) * 534;
        document.getElementById("scoreRingFill").style.strokeDashoffset = offset;
    }, 100);

    // Review list
    const letters = ['A','B','C','D'];
    document.getElementById("reviewList").innerHTML = state.answers.map((a, i) => `
        <div class="review-item ${a.isCorrect ? 'review-correct' : 'review-wrong'}">
            <div class="review-item-header"><span class="review-item-number">Câu ${i+1} ${a.topicTitle ? '— '+a.topicTitle : ''}</span><span class="review-item-status">${a.isCorrect?'✅':'❌'}</span></div>
            <div class="review-item-question">${a.question}</div>
            <div class="review-item-answer">
                ${!a.isCorrect ? `Bạn: <span class="your-answer">${a.type === 'multiple-choice' ? letters[a.userAnswer]+'. '+a.options[a.userAnswer] : a.userAnswer}</span><br>` : ''}
                Đáp án: <span class="correct-answer-text">${a.type === 'multiple-choice' ? letters[a.correctAnswer]+'. '+a.options[a.correctAnswer] : a.correctAnswer}</span>
            </div>
            <div class="review-item-explanation">${a.explanation}</div>
        </div>`).join('');

    if (pct >= 70) spawnConfetti();
}

// ============================================
// ACHIEVEMENTS
// ============================================
function checkAchievements() {
    if (!stored.achievements) stored.achievements = {};
    ACHIEVEMENTS.forEach(a => {
        if (!stored.achievements[a.id] && a.check(stored)) {
            stored.achievements[a.id] = { unlockedAt: new Date().toISOString() };
            showAchievementToast(a);
            Sound.play('achievement');
        }
    });
    saveStorage(stored);
}

function showAchievementToast(a) {
    const toast = document.getElementById('achievementToast');
    document.getElementById('achievementToastIcon').textContent = a.icon;
    document.getElementById('achievementToastTitle').textContent = a.title;
    document.getElementById('achievementToastDesc').textContent = a.desc;
    toast.classList.remove('hidden');
    toast.classList.add('toast-show');
    setTimeout(() => { toast.classList.remove('toast-show'); toast.classList.add('hidden'); }, 3500);
}

function showAchievementsPage() {
    showSection('achievementsPage');
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = stored.achievements && stored.achievements[a.id];
        return `<div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-icon">${a.icon}</div>
            <div class="achievement-info"><h4>${a.title}</h4><p>${a.desc}</p>
            ${unlocked ? '<span class="unlock-date">✅ Đã mở khóa</span>' : '<span class="lock-text">🔒 Chưa đạt</span>'}</div>
        </div>`;
    }).join('');
}

// ============================================
// STATS PAGE + CHART
// ============================================
function showStatsPage() {
    showSection('statsPage');
    const totalQ = stored.totalAnswered || 0;
    const totalC = stored.totalCorrect || 0;
    const acc = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;
    const wrongCnt = stored.wrongQuestions ? stored.wrongQuestions.length : 0;
    const achieveCount = stored.achievements ? Object.keys(stored.achievements).length : 0;

    document.getElementById('statsOverview').innerHTML = `
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-card-value">${totalQ}</div><div class="stat-card-label">Tổng câu đã làm</div></div>
            <div class="stat-card"><div class="stat-card-value">${totalC}</div><div class="stat-card-label">Câu đúng</div></div>
            <div class="stat-card"><div class="stat-card-value">${acc}%</div><div class="stat-card-label">Tỷ lệ chính xác</div></div>
            <div class="stat-card"><div class="stat-card-value">${stored.bestStreak || 0}</div><div class="stat-card-label">Streak cao nhất 🔥</div></div>
            <div class="stat-card"><div class="stat-card-value">${stored.sessionsCompleted || 0}</div><div class="stat-card-label">Bài đã hoàn thành</div></div>
            <div class="stat-card"><div class="stat-card-value">${wrongCnt}</div><div class="stat-card-label">Câu cần ôn lại</div></div>
            <div class="stat-card"><div class="stat-card-value">${achieveCount}/${ACHIEVEMENTS.length}</div><div class="stat-card-label">Thành tích 🏅</div></div>
        </div>`;

    // Topic stats
    document.getElementById('statsByTopic').innerHTML = '<h3>Theo chủ đề</h3>' +
        GRAMMAR_TOPICS.map(t => {
            const s = stored.topicStats[t.id];
            return `<div class="topic-stat-row"><span class="topic-stat-name">${t.emoji} ${t.title}</span>
                <span class="topic-stat-detail">${s ? `Best: ${s.bestPct}% | Lần làm: ${s.attempts}` : 'Chưa làm'}</span></div>`;
        }).join('');

    drawChart();
}

function drawChart() {
    const canvas = document.getElementById('progressChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const history = stored.history || [];
    if (history.length < 2) {
        ctx.fillStyle = '#9ca3b8'; ctx.font = '16px Inter';
        ctx.textAlign = 'center'; ctx.fillText('Cần ít nhất 2 lần làm để hiện biểu đồ', W/2, H/2);
        return;
    }

    const data = history.slice(-20);
    const pad = { top: 30, right: 30, bottom: 40, left: 50 };
    const cw = W - pad.left - pad.right, ch = H - pad.top - pad.bottom;

    // Grid
    ctx.strokeStyle = 'rgba(99,102,241,0.15)'; ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = pad.top + (ch / 4) * i;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
        ctx.fillStyle = '#6b7280'; ctx.font = '11px Inter'; ctx.textAlign = 'right';
        ctx.fillText((100 - i * 25) + '%', pad.left - 8, y + 4);
    }

    // Line
    const stepX = cw / (data.length - 1);
    ctx.beginPath();
    const gradient = ctx.createLinearGradient(pad.left, 0, W - pad.right, 0);
    gradient.addColorStop(0, '#6366f1'); gradient.addColorStop(1, '#a855f7');
    ctx.strokeStyle = gradient; ctx.lineWidth = 3; ctx.lineJoin = 'round';

    data.forEach((d, i) => {
        const x = pad.left + i * stepX;
        const y = pad.top + ch - (d.pct / 100) * ch;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Fill area
    const lastX = pad.left + (data.length - 1) * stepX;
    ctx.lineTo(lastX, pad.top + ch); ctx.lineTo(pad.left, pad.top + ch); ctx.closePath();
    const areaGrad = ctx.createLinearGradient(0, pad.top, 0, H - pad.bottom);
    areaGrad.addColorStop(0, 'rgba(99,102,241,0.25)'); areaGrad.addColorStop(1, 'rgba(99,102,241,0)');
    ctx.fillStyle = areaGrad; ctx.fill();

    // Dots
    data.forEach((d, i) => {
        const x = pad.left + i * stepX;
        const y = pad.top + ch - (d.pct / 100) * ch;
        ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#6366f1'; ctx.fill();
        ctx.strokeStyle = '#1a1f35'; ctx.lineWidth = 2; ctx.stroke();
    });

    // X labels
    ctx.fillStyle = '#6b7280'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
    data.forEach((d, i) => {
        if (data.length <= 10 || i % 2 === 0) {
            const x = pad.left + i * stepX;
            const label = new Date(d.date).toLocaleDateString('vi-VN', {day:'2-digit', month:'2-digit'});
            ctx.fillText(label, x, H - pad.bottom + 20);
        }
    });
}

// ============================================
// HELPERS
// ============================================
function retryQuiz() {
    if (state.isReviewMode) startReviewWrong();
    else if (state.isAllTopics) startPracticeAll();
    else startTopic(state.currentTopicId);
}

function backToTopics() {
    showSection('topicSelection');
    document.getElementById("scoreRingFill").style.strokeDashoffset = 534;
    renderTopics();
    updateWrongCount();
}

function toggleTheory() {
    document.getElementById("theoryContent").classList.toggle("hidden");
    document.getElementById("toggleArrow").classList.toggle("rotated");
}

function toggleSound() {
    const on = Sound.toggle();
    document.getElementById('soundToggle').textContent = on ? '🔊' : '🔇';
}

function updateHeaderStats() {
    document.getElementById("totalScore").textContent = stored.totalCorrect || 0;
    document.getElementById("totalQuestions").textContent = stored.totalAnswered || 0;
    const acc = stored.totalAnswered > 0 ? Math.round(((stored.totalCorrect||0) / stored.totalAnswered) * 100) : 0;
    document.getElementById("accuracy").textContent = acc;
    document.getElementById("streakCount").textContent = state.currentStreak || 0;
}

function updateWrongCount() {
    document.getElementById("wrongCount").textContent = stored.wrongQuestions ? stored.wrongQuestions.length : 0;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function spawnConfetti() {
    const emojis = ['🎉','🎊','✨','⭐','🌟','💫','🏆','🎯'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'confetti';
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.animationDuration = (2 + Math.random() * 2) + 's';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }, i * 80);
    }
}
