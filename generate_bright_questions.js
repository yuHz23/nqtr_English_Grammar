const fs = require('fs');

const generatedBank = {
    "reported-speech-statements": [],
    "phrasal-verbs": [],
    "conditional-sentences": [],
    "verbs-prepositions": [],
    "causatives": [],
    "reported-speech-orders": [],
    "sentence-types": []
};

function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// ==========================================
// ĐƯA CÁC CÂU LẤY CHUẨN TỪ SÁCH BRIGHT 12 VÀO TRƯỚC (CÓ GẮN TAG)
// ==========================================
function addBrightFixedQuestions() {
    // 1. Phrasal Verbs (Bright 12 Unit 5 & 6)
    const fixedPhrasal = [
        { q: "It's never too late to ______ a new hobby like robotics.", opts: ["take up", "fit in", "make up", "carry on"], ans: 0, exp: "🔑 [Sách Bright 12] take up = bắt đầu sở thích." },
        { q: "Did you ______ anyone from your old school at the environmental seminar?", opts: ["run across", "hang out", "take up", "look up"], ans: 0, exp: "🔑 [Sách Bright 12] run across = tình cờ gặp." },
        { q: "Urban migrants sometimes find it hard to ______ with the fast-paced city life.", opts: ["fit in", "make up", "put up", "take on"], ans: 0, exp: "🔑 [Sách Bright 12] fit in = hòa nhập." },
        { q: "I can't ______ this loud traffic noise any longer!", opts: ["put up with", "take up", "carry on", "run out of"], ans: 0, exp: "🔑 [Sách Bright 12] put up with = chịu đựng." },
        { q: "Jane took an online IT course to help her ______ the latest technology.", opts: ["keep up with", "put up with", "get on with", "look forward to"], ans: 0, exp: "🔑 [Sách Bright 12] keep up with = theo kịp." }
    ];
    fixedPhrasal.forEach(item => {
        generatedBank["phrasal-verbs"].push({
            type: "multiple-choice", difficulty: 2,
            question: `<span style="color:#f59e0b;font-weight:bold">[Bright 12]</span> ${item.q}`,
            options: item.opts, correct: item.ans, explanation: item.exp
        });
    });

    // 2. Reported Speech (Bright 12 Unit 4 - AI)
    const fixedReported = [
        { q: "Tammy said that she ______ a seminar on AI tech tomorrow.", opts: ["would attend", "attends", "will attend", "has attended"], ans: 0, exp: "🔑 [Sách Bright 12] Lùi thì: will → would." },
        { q: "Amanda says that the manufacturing industry ______ using AI soon.", opts: ["will start", "would start", "started", "had started"], ans: 0, exp: "🔑 [Sách Bright 12] Says ở hiện tại → KHÔNG lùi thì." },
        { q: "\"Where did you download the diet app?\" he asked. → He asked me ______.", opts: ["where I had downloaded the app", "where did I download", "where I downloaded", "where had I downloaded"], ans: 0, exp: "🔑 [Sách Bright 12] Wh-Q: lùi thì Past Simple → Past Perfect." },
        { q: "Sebastian said that he ______ an article about rescue robots.", opts: ["would read", "has read", "will read", "reads"], ans: 0, exp: "🔑 [Sách Bright 12] Lùi thì: will read → would read." }
    ];
    fixedReported.forEach(item => {
        generatedBank["reported-speech-statements"].push({
            type: "multiple-choice", difficulty: 2,
            question: `<span style="color:#f59e0b;font-weight:bold">[Bright 12]</span> ${item.q}`,
            options: item.opts, correct: item.ans, explanation: item.exp
        });
    });

    // 3. Conditionals (Bright 12 Unit 3 - Green Living)
    const fixedCond = [
        { q: "If they ______ to wind energy earlier, they would have saved money.", opts: ["switched", "had switched", "have switched", "would switch"], ans: 1, exp: "🔑 [Sách Bright 12] ĐK3: if + past perfect." },
        { q: "We ______ this car if we had realised it pollutes the environment.", opts: ["wouldn't have bought", "wouldn't buy", "didn't buy", "won't buy"], ans: 0, exp: "🔑 [Sách Bright 12] ĐK3." },
        { q: "Unless we ______ energy now, the situation will become worse.", opts: ["conserve", "conserved", "had conserved", "didn't conserve"], ans: 0, exp: "🔑 [Sách Bright 12] Unless + ĐK1 (hiện tại đơn)." },
        { q: "If I ______ you, I would tell her about the solar panels.", opts: ["were", "was", "am", "had been"], ans: 0, exp: "🔑 [Sách Bright 12] ĐK2: If I were you." }
    ];
    fixedCond.forEach(item => {
        generatedBank["conditional-sentences"].push({
            type: "multiple-choice", difficulty: 2,
            question: `<span style="color:#f59e0b;font-weight:bold">[Bright 12]</span> ${item.q}`,
            options: item.opts, correct: item.ans, explanation: item.exp
        });
    });

    // 4. Verbs + Prepositions (Bright 12 Unit 2 - Urbanisation)
    const fixedPrep = [
        { q: "Can you explain ______ me what urbanisation is?", opts: ["for", "with", "to", "at"], ans: 2, exp: "🔑 [Sách Bright 12] explain TO someone." },
        { q: "Rural migrants struggle to cope ______ life in a big city.", opts: ["with", "for", "about", "on"], ans: 0, exp: "🔑 [Sách Bright 12] cope WITH = đối phó với." },
        { q: "The officials are arguing ______ the deadline of the metro project.", opts: ["about", "with", "at", "for"], ans: 0, exp: "🔑 [Sách Bright 12] argue ABOUT something." },
        { q: "People have arrived ______ big cities looking for a better life.", opts: ["in", "at", "to", "on"], ans: 0, exp: "🔑 [Sách Bright 12] arrive IN (địa điểm lớn)." }
    ];
    fixedPrep.forEach(item => {
        generatedBank["verbs-prepositions"].push({
            type: "multiple-choice", difficulty: 1,
            question: `<span style="color:#f59e0b;font-weight:bold">[Bright 12]</span> ${item.q}`,
            options: item.opts, correct: item.ans, explanation: item.exp
        });
    });

    // 5. Causatives (Bright 12 Unit 2/3)
    const fixedCause = [
        { q: "The mayor had workers ______ a new building in the centre.", opts: ["construct", "to construct", "constructed", "constructing"], ans: 0, exp: "🔑 [Sách Bright 12] Active Have: had + O(người) + V-inf." },
        { q: "The farmer had a modern greenhouse ______.", opts: ["build", "to build", "built", "building"], ans: 2, exp: "🔑 [Sách Bright 12] Passive Have: had + O(vật) + V3." },
        { q: "Sarah got the company ______ the damaged street light.", opts: ["to fix", "fix", "fixing", "fixed"], ans: 0, exp: "🔑 [Sách Bright 12] Active Get: get + O(người) + to-V." }
    ];
    fixedCause.forEach(item => {
        generatedBank["causatives"].push({
            type: "multiple-choice", difficulty: 2,
            question: `<span style="color:#f59e0b;font-weight:bold">[Bright 12]</span> ${item.q}`,
            options: item.opts, correct: item.ans, explanation: item.exp
        });
    });
}
addBrightFixedQuestions();

// ==========================================
// SINH DỮ LIỆU TỰ ĐỘNG (Lấy cảm hứng từ Bright)
// ==========================================
const namesM = ["Tom", "John", "Bob", "Phong", "Nam", "Peter", "David"];
const namesF = ["Mary", "Jane", "Alice", "Lan", "Mai", "Sarah", "Hoa"];
const names = [...namesM, ...namesF];
const techItems = ["an AI app", "a rescue robot", "a smartwatch", "navigation software", "a diet tracker"];
const issues = ["climate change", "pollution", "urbanisation", "unemployment"];

let brightQ1Count = 0;
for (let i = 0; i < 40; i++) {
    let name = randomItem(names);
    let pron = namesM.includes(name) ? "he" : "she";
    let item = randomItem(techItems);

    generatedBank["reported-speech-statements"].push({
        type: "multiple-choice", difficulty: 2,
        question: `"${name}: I installed ${item} yesterday." → ${name} said that ${pron} ______ ${item} the day before.`,
        options: ["installed", "had installed", "has installed", "would install"], correct: 1,
        explanation: `🔑 Lùi thì: Past Simple → Past Perfect.`
    });
    
    generatedBank["conditional-sentences"].push({
        type: "multiple-choice", difficulty: 3,
        question: `______ ${name} the manager, things would be much better. (Inversion)`,
        options: ["Was", "Am", "Were", "If"], correct: 2,
        explanation: `🔑 Đảo ngữ câu ĐK loại 2: Were + S + Noun/Adj.`
    });

    generatedBank["causatives"].push({
        type: "multiple-choice", difficulty: 2,
        question: `${name} got the mechanic ______ the car last night.`,
        options: ["update", "to update", "updated", "updating"], correct: 1,
        explanation: `🔑 Active Get: get + O(người) + to-V.`
    });
    
    generatedBank["verbs-prepositions"].push({
        type: "multiple-choice", difficulty: 1,
        question: `The success of the new policy will depend ______ everyone's effort, ${name} said.`,
        options: ["on", "in", "from", "for"], correct: 0,
        explanation: `🔑 depend đi với giới từ 'on'.`
    });

    let pvVerb = randomItem(["take up", "put up with", "carry on", "fit in"]);
    let pvCtx = pvVerb === "take up" ? "started learning" : pvVerb === "put up with" ? "tolerated" : pvVerb === "carry on" ? "continued" : "blended in";
    generatedBank["phrasal-verbs"].push({
        type: "multiple-choice", difficulty: 2,
        question: `${name} couldn't tolerate the noisy neighbours. Which phrasal verb means "tolerate"?`,
        options: ["put up with", "take up", "carry on", "fit in"], correct: 0,
        explanation: `🔑 put up with = chịu đựng (tolerate).`
    });
}

// Write to generated_bank.js
let fileContent = `// TỰ ĐỘNG SINH HÀNG LOẠT CÂU HỎI TIẾNG ANH 12 BRIGHT
// Dữ liệu này sẽ ưu tiên các câu sách Bright lên đầu

const GENERATED_BANK = ${JSON.stringify(generatedBank, null, 4)};

// Hàm tự động nhúng vào app - Đẩy câu lên ưu tiên đầu
if (typeof GRAMMAR_TOPICS !== 'undefined') {
    GRAMMAR_TOPICS.forEach(topic => {
        if (GENERATED_BANK[topic.id]) {
            // Push generated bank FIRST so they appear clearly
            topic.questions = GENERATED_BANK[topic.id].concat(topic.questions);
        }
    });
}
`;

fs.writeFileSync('generated_bank.js', fileContent);
console.log("Successfully generated generated_bank.js with strict Bright 12 tagging & priority.");
