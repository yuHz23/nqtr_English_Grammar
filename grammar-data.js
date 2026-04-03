// difficulty: 1=Easy, 2=Medium, 3=Hard
// type: "multiple-choice" | "fill" | "reorder" | "matching"
const GRAMMAR_TOPICS = [
  {
    id: "reported-speech-statements",
    title: "Reported Speech (Statements & Questions)",
    unit: "Unit 7b",
    emoji: "🗣️",
    difficulty: 3,
    description: "Câu tường thuật - chuyển đổi lời nói trực tiếp sang gián tiếp cho câu trần thuật và câu hỏi.",
    theory: `<h4>📌 Câu tường thuật (Reported Speech)</h4>
<p>Dùng để thuật lại lời ai đó đã nói.</p>
<h4>Quy tắc chuyển đổi:</h4>
<ul><li>Câu trần thuật: dùng <strong>said/told</strong> + lùi thì</li>
<li>Câu hỏi Yes/No: dùng <strong>asked + if/whether</strong></li>
<li>Câu hỏi Wh-: giữ nguyên từ hỏi, trật tự câu trần thuật</li></ul>
<table class="grammar-table"><tr><th>Direct</th><th>Reported</th></tr>
<tr><td>Present Simple</td><td>Past Simple</td></tr>
<tr><td>Present Continuous</td><td>Past Continuous</td></tr>
<tr><td>Past Simple</td><td>Past Perfect</td></tr>
<tr><td>Present Perfect</td><td>Past Perfect</td></tr>
<tr><td>will/can/may</td><td>would/could/might</td></tr></table>
<h4>Đổi trạng từ:</h4>
<ul><li>today → that day</li><li>tomorrow → the next day/the following day</li>
<li>yesterday → the day before/the previous day</li><li>now → then</li><li>here → there</li></ul>`,
    questions: [
      { type:"multiple-choice", difficulty:1, question:'Sebastian said that he ______ an article about rescue robots.', options:["would read","has read","would have read","reads"], correct:0, explanation:'🔑 "said" ở quá khứ → lùi thì: "will read" → <span class="correct-answer">would read</span>.' },
      { type:"multiple-choice", difficulty:1, question:'Tammy said that she ______ a seminar on AI tech.', options:["would attend","attends","will attend","has attended"], correct:0, explanation:'🔑 "said" → lùi thì: will attend → <span class="correct-answer">would attend</span>.' },
      { type:"multiple-choice", difficulty:1, question:'Greg asked Paul when he had downloaded the diet tracker app — ______.', options:["today","tomorrow","the day before","yesterday"], correct:2, explanation:'🔑 "yesterday" đổi thành <span class="correct-answer">the day before</span> trong câu tường thuật.' },
      { type:"multiple-choice", difficulty:1, question:'Amanda says that the manufacturing industry ______ using AI soon.', options:["will start","would start","started","had started"], correct:0, explanation:'🔑 "says" ở HIỆN TẠI → KHÔNG lùi thì. Giữ nguyên <span class="correct-answer">will start</span>.' },
      { type:"multiple-choice", difficulty:2, question:'Oliver asked me if I ______ to the robotics convention.', options:["would go","will go","had gone","go"], correct:0, explanation:'🔑 Câu hỏi Yes/No: asked + if + lùi thì. "Will you go?" → asked if I <span class="correct-answer">would go</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"I am working on a new project," Tom said. → Tom said he ______ on a new project.', options:["is working","was working","has been working","works"], correct:1, explanation:'🔑 Present Continuous → Past Continuous: "am working" → <span class="correct-answer">was working</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"I haven\'t installed the app yet," Jake said. → Jake said he ______ the app yet.', options:["hasn\'t installed","hadn\'t installed","didn\'t install","won\'t install"], correct:1, explanation:'🔑 Present Perfect → Past Perfect: "haven\'t installed" → <span class="correct-answer">hadn\'t installed</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"Will you study robotics next year?" I asked. → I asked her ______.', options:["if she will study robotics","if she would study robotics the following year","that she would study","whether she studies"], correct:1, explanation:'🔑 Yes/No Q: if/whether + lùi thì + "next year" → <span class="correct-answer">the following year</span>.' },
      { type:"multiple-choice", difficulty:3, question:'"Where did you download the app?" he asked. → He asked me ______.', options:["where did I download","where I had downloaded the app","where I download","where had I downloaded"], correct:1, explanation:'🔑 Wh-Q: giữ "where" + trật tự trần thuật + lùi thì: <span class="correct-answer">where I had downloaded</span>.' },
      { type:"multiple-choice", difficulty:3, question:'"How has AI changed our lives?" they asked. → They asked ______.', options:["how has AI changed","how AI had changed their lives","how did AI change","how AI has changed"], correct:1, explanation:'🔑 Present Perfect → Past Perfect, "our" → "their": <span class="correct-answer">how AI had changed their lives</span>.' },
      { type:"fill", difficulty:2, question:'"I like this app," she said. → She said that she ______ that app.', answer:["liked"], explanation:'🔑 Present Simple → Past Simple: "like" → <span class="correct-answer">liked</span>. "this" → "that".' },
      { type:"fill", difficulty:2, question:'"We are studying now," they said. → They said they ______ studying then.', answer:["were"], explanation:'🔑 Present Continuous → Past Continuous: "are" → <span class="correct-answer">were</span>. "now" → "then".' },
      { type:"fill", difficulty:3, question:'"I can speak three languages," she told me. → She told me she ______ speak three languages.', answer:["could"], explanation:'🔑 "can" → <span class="correct-answer">could</span> trong câu tường thuật.' },
      { type:"multiple-choice", difficulty:1, question:'Trong câu tường thuật, "tomorrow" đổi thành gì?', options:["the next day","the day before","that day","then"], correct:0, explanation:'🔑 tomorrow → <span class="correct-answer">the next day / the following day</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"I will call you later," she said. → She said she ______ call me later.', options:["will","would","can","shall"], correct:1, explanation:'🔑 will → <span class="correct-answer">would</span> trong câu tường thuật.' },
      { type:"multiple-choice", difficulty:3, question:'Tom said to Mary, "If I were you, I would buy that app." → Tom said to Mary that if he ______ her, he would buy that app.', options:["is","was","were","had been"], correct:2, explanation:'🔑 Conditional type 2 → KHÔNG đổi thì: <span class="correct-answer">were</span> giữ nguyên.' },
      { type:"reorder", difficulty:3, question:'Sắp xếp thành câu tường thuật đúng:', words:["He","asked","me","where","I","had","bought","the","book"], answer:"He asked me where I had bought the book", explanation:'🔑 Wh-Q: S + asked + O + Wh-word + S + had + V3.' },
      { type:"multiple-choice", difficulty:2, question:'"Do you like coding?" she asked him. → She asked him ______.', options:["if he liked coding","if he likes coding","does he like coding","if did he like coding"], correct:0, explanation:'🔑 Yes/No: asked + if + lùi thì: <span class="correct-answer">if he liked coding</span>.' },
      { type:"multiple-choice", difficulty:1, question:'"I am happy," she said. → She said she ______ happy.', options:["is","was","were","has been"], correct:1, explanation:'🔑 am → <span class="correct-answer">was</span>: Present Simple → Past Simple.' },
      { type:"multiple-choice", difficulty:3, question:'"I have been waiting for 2 hours," he complained. → He complained that he ______ for 2 hours.', options:["has been waiting","had been waiting","was waiting","waited"], correct:1, explanation:'🔑 Present Perfect Continuous → Past Perfect Continuous: <span class="correct-answer">had been waiting</span>.' }
    ]
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs",
    unit: "Unit 8b",
    emoji: "🔗",
    difficulty: 3,
    description: "Cụm động từ - động từ kết hợp với giới từ/trạng từ tạo nghĩa mới.",
    theory: `<h4>📌 Phrasal Verbs (Cụm động từ)</h4>
<ul><li><strong>Transitive:</strong> cần tân ngữ (turn off the light)</li>
<li><strong>Intransitive:</strong> không cần tân ngữ (take off = cất cánh)</li>
<li><strong>Separable:</strong> turn the device off = turn off the device</li>
<li><strong>Inseparable:</strong> run across, get on with</li></ul>
<div class="example">⚠️ Đại từ (me, him, it) → BẮT BUỘC tách: turn <strong>it</strong> off (KHÔNG: turn off it)</div>`,
    questions: [
      { type:"multiple-choice", difficulty:1, question:"It's never too late to ______ a new hobby.", options:["take up","fit in","make up","carry on"], correct:0, explanation:'🔑 <span class="correct-answer">take up</span> = bắt đầu sở thích mới.' },
      { type:"multiple-choice", difficulty:1, question:"Did you ______ anyone at the seminar yesterday?", options:["run across","hang out","take up","put up with"], correct:0, explanation:'🔑 <span class="correct-answer">run across</span> = tình cờ gặp.' },
      { type:"multiple-choice", difficulty:2, question:"I can't ______ this loud noise any longer!", options:["put up with","take up","carry on","make up"], correct:0, explanation:'🔑 <span class="correct-answer">put up with</span> = chịu đựng.' },
      { type:"multiple-choice", difficulty:1, question:"I need to ______ my laptop to start working.", options:["turn on","turn off","take off","put off"], correct:0, explanation:'🔑 <span class="correct-answer">turn on</span> = bật thiết bị.' },
      { type:"multiple-choice", difficulty:2, question:"Sarah's dad ______ her ______ at the station.", options:["dropped...off","dropped...on","picked...on","took...on"], correct:0, explanation:'🔑 <span class="correct-answer">drop off</span> = thả xuống. Đại từ "her" → tách: dropped her off.' },
      { type:"multiple-choice", difficulty:2, question:"The plane ______ on time despite the bad weather.", options:["took off","took up","turned on","put off"], correct:0, explanation:'🔑 <span class="correct-answer">took off</span> = cất cánh (intransitive).' },
      { type:"multiple-choice", difficulty:2, question:"Don't ______ stories! Tell the truth.", options:["make up","take up","put up","set up"], correct:0, explanation:'🔑 <span class="correct-answer">make up</span> = bịa đặt, bịa chuyện.' },
      { type:"multiple-choice", difficulty:3, question:"She promised to ______ the work even after difficulties.", options:["carry on with","take up","put off","run across"], correct:0, explanation:'🔑 <span class="correct-answer">carry on with</span> = tiếp tục làm.' },
      { type:"multiple-choice", difficulty:1, question:"Please ______ the TV. The show is about to start.", options:["turn on","turn off","switch off","put away"], correct:0, explanation:'🔑 <span class="correct-answer">turn on</span> = bật.' },
      { type:"multiple-choice", difficulty:3, question:"The phrasal verb 'run across' is ______.", options:["inseparable","separable","intransitive","three-part"], correct:0, explanation:'🔑 "run across" là <span class="correct-answer">inseparable</span>: run across him ✓ (KHÔNG: run him across).' },
      { type:"fill", difficulty:2, question:"How about the lights? — Jo turned ______ off.", answer:["them"], explanation:'🔑 Đại từ bắt buộc tách: turned <span class="correct-answer">them</span> off.' },
      { type:"fill", difficulty:2, question:"I need to ______ up early tomorrow for the meeting.", answer:["get","wake"], explanation:'🔑 <span class="correct-answer">get up / wake up</span> = thức dậy.' },
      { type:"matching", difficulty:2, question:"Nối phrasal verb với nghĩa đúng:", pairs:[["take up","bắt đầu (sở thích)"],["put up with","chịu đựng"],["carry on","tiếp tục"],["make up","bịa đặt"]], explanation:'🔑 take up=bắt đầu, put up with=chịu đựng, carry on=tiếp tục, make up=bịa đặt.' },
      { type:"multiple-choice", difficulty:2, question:"Jane took an online IT course to help her ______ the latest technology.", options:["keep up with","take up","put up with","run across"], correct:0, explanation:'🔑 <span class="correct-answer">keep up with</span> = theo kịp.' },
      { type:"multiple-choice", difficulty:3, question:"Who ______ you ______ to enrolling on that course?", options:["put...up","put...off","put...on","put...away"], correct:0, explanation:'🔑 <span class="correct-answer">put up to</span> = xui khiến ai làm gì. 3-part, inseparable.' },
      { type:"multiple-choice", difficulty:1, question:"She ______ the light before going to bed.", options:["switched off","switched on","took off","got on"], correct:0, explanation:'🔑 <span class="correct-answer">switched off</span> = tắt (đèn, thiết bị).' },
      { type:"multiple-choice", difficulty:2, question:"Do you ______ your neighbours?", options:["get on with","get off with","run across","put up"], correct:0, explanation:'🔑 <span class="correct-answer">get on with</span> = hòa thuận với ai.' },
      { type:"reorder", difficulty:3, question:"Sắp xếp: Jo / them / turned / off", words:["Jo","turned","them","off"], answer:"Jo turned them off", explanation:'🔑 Đại từ → tách: Jo turned THEM off.' },
      { type:"multiple-choice", difficulty:2, question:"Eric ______ a new language app yesterday.", options:["signed up for","took off","turned on","made up"], correct:0, explanation:'🔑 <span class="correct-answer">signed up for</span> = đăng ký.' },
      { type:"multiple-choice", difficulty:1, question:"'fit in' có nghĩa là gì?", options:["hòa nhập","phát minh","chịu đựng","bịa đặt"], correct:0, explanation:'🔑 <span class="correct-answer">fit in</span> = hòa nhập, hợp với.' }
    ]
  },
  {
    id: "conditional-sentences",
    title: "Conditional Sentences (Type 1, 2 & 3)",
    unit: "Grammar",
    emoji: "⚖️",
    difficulty: 3,
    description: "Tổng hợp câu điều kiện loại 1, 2 và 3 - từ có thể xảy ra đến không có thật trong quá khứ.",
    theory: `<h4>📌 Câu Điều Kiện (Loại 1, 2 & 3)</h4>
<h4>1. Loại 1: Hiện tại / Tương lai (Có thể xảy ra)</h4>
<p>If + Hiện tại đơn, Will/Can + V-inf</p>
<div class="example">If it <strong>rains</strong>, we <strong>will stay</strong> home.</div>
<h4>2. Loại 2: Hiện tại (Trái thực tế/Giả định)</h4>
<p>If + Quá khứ đơn (V2/ed/were), Would/Could + V-inf</p>
<div class="example">If I <strong>were</strong> you, I <strong>would buy</strong> it.</div>
<h4>3. Loại 3: Quá khứ (Không có thật/Tiếc nuối)</h4>
<p>If + Quá khứ hoàn thành (had + V3), Would/Could + have + V3</p>
<div class="example">If I <strong>had known</strong>, I <strong>would have gone</strong>.</div>`,
    questions: [
      { type:"multiple-choice", difficulty:1, question:"If I had known about green energy, I ______ it.", options:["will support","would support","would have supported","had supported"], correct:2, explanation:'🔑 ĐK3: If had V3 → <span class="correct-answer">would have supported</span>.' },
      { type:"multiple-choice", difficulty:2, question:"Jason would have come if we ______ (tell) him.", options:["told","had told","have told","would tell"], correct:1, explanation:'🔑 Main clause "would have come" → If clause: <span class="correct-answer">had told</span>.' },
      { type:"multiple-choice", difficulty:2, question:"If I had known the product was bad, I ______ (not/choose) it.", options:["wouldn't choose","wouldn't have chosen","didn't choose","won't choose"], correct:1, explanation:'🔑 ĐK3: <span class="correct-answer">wouldn\'t have chosen</span>.' },
      { type:"multiple-choice", difficulty:2, question:"If they ______ (switch) to wind energy earlier, they would have saved money.", options:["switched","had switched","have switched","would switch"], correct:1, explanation:'🔑 Main "would have saved" → If: <span class="correct-answer">had switched</span>.' },
      { type:"multiple-choice", difficulty:2, question:"We ______ (not/buy) this car if we had realised it pollutes.", options:["wouldn't buy","wouldn't have bought","didn't buy","won't buy"], correct:1, explanation:'🔑 if had realised → <span class="correct-answer">wouldn\'t have bought</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Unless we ______ energy, the situation will become worse.", options:["conserve","conserved","had conserved","didn't conserve"], correct:0, explanation:'🔑 ⚠️ Đây là ĐK1 (will): Unless + present: <span class="correct-answer">conserve</span>.' },
      { type:"multiple-choice", difficulty:3, question:"If I ______ you, I would have told her about it yesterday.", options:["was","were","had been","am"], correct:2, explanation:'🔑 "would have told" → ĐK3 → If + <span class="correct-answer">had been</span>.' },
      { type:"fill", difficulty:2, question:"If she had studied harder, she ______ have passed the exam.", answer:["would"], explanation:'🔑 If had V3 → <span class="correct-answer">would</span> + have + V3.' },
      { type:"fill", difficulty:2, question:"If I ______ (know) about the sale, I would have bought it.", answer:["had known"], explanation:'🔑 ĐK3 If-clause: <span class="correct-answer">had known</span> (Past Perfect).' },
      { type:"fill", difficulty:3, question:"They wouldn't have missed the flight if they ______ (leave) earlier.", answer:["had left"], explanation:'🔑 wouldn\'t have missed → If: <span class="correct-answer">had left</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Câu ĐK loại 3 dùng để nói về:", options:["Điều không có thật trong quá khứ","Điều có thể xảy ra","Sự thật hiển nhiên","Tương lai"], correct:0, explanation:'🔑 ĐK3: <span class="correct-answer">Điều không có thật trong quá khứ</span>, thể hiện tiếc nuối.' },
      { type:"multiple-choice", difficulty:3, question:"If we don't take steps to address climate change, we ______ the consequences.", options:["had faced","would have faced","will face","face"], correct:2, explanation:'🔑 ⚠️ "If + present" = ĐK1 → <span class="correct-answer">will face</span>.' },
      { type:"multiple-choice", difficulty:3, question:"If I were elected, I ______ for more sustainable policies.", options:["will push","would push","would have pushed","push"], correct:1, explanation:'🔑 ⚠️ "If I were" = ĐK2 → <span class="correct-answer">would push</span>.' },
      { type:"multiple-choice", difficulty:2, question:"Ann ______ solar panels if she had known about the benefits.", options:["would purchase","would have purchased","will purchase","purchased"], correct:1, explanation:'🔑 if had known → <span class="correct-answer">would have purchased</span>. ĐK3.' },
      { type:"reorder", difficulty:3, question:"Sắp xếp câu ĐK3:", words:["If","I","had","studied","I","would","have","passed"], answer:"If I had studied I would have passed", explanation:'🔑 If + had + V3, S + would + have + V3.' },
      { type:"multiple-choice", difficulty:2, question:"She ______ (not/get) lost if she had used a GPS.", options:["wouldn't get","wouldn't have got","didn't get","won't get"], correct:1, explanation:'🔑 if had used → <span class="correct-answer">wouldn\'t have got</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Cấu trúc If-clause trong ĐK3 là gì?", options:["If + Past Perfect","If + Past Simple","If + Present","If + would"], correct:0, explanation:'🔑 ĐK3 If-clause: <span class="correct-answer">If + Past Perfect (had + V3)</span>.' },
      { type:"multiple-choice", difficulty:3, question:"______ I known the truth, I would have acted differently.", options:["If","Had","Have","Would"], correct:1, explanation:'🔑 Đảo ngữ ĐK3: <span class="correct-answer">Had</span> I known = If I had known.' },
      { type:"multiple-choice", difficulty:2, question:"If it hadn't rained, we ______ (go) to the beach.", options:["would go","would have gone","went","will go"], correct:1, explanation:'🔑 if hadn\'t rained → <span class="correct-answer">would have gone</span>.' },
      { type:"multiple-choice", difficulty:1, question:"If he had saved money, he ______ a new car.", options:["can buy","could have bought","buys","bought"], correct:1, explanation:'🔑 if had saved → <span class="correct-answer">could have bought</span>. (could = khả năng).' },
      { type:"multiple-choice", difficulty:1, question:"If the weather ______ good tomorrow, we will go for a picnic.", options:["is","was","will be","would be"], correct:0, explanation:'🔑 Câu ĐK loại 1, mệnh đề if dùng Hiện tại đơn: <span class="correct-answer">is</span>.' },
      { type:"multiple-choice", difficulty:1, question:"If I had a lot of money, I ______ a big house.", options:["will buy","would buy","bought","buy"], correct:1, explanation:'🔑 Câu ĐK loại 2 (had ở QKĐ), mệnh đề chính dùng <span class="correct-answer">would buy</span>.' },
      { type:"multiple-choice", difficulty:1, question:"We will reduce pollution if we ______ renewable energy.", options:["used","use","will use","would use"], correct:1, explanation:'🔑 Câu ĐK loại 1, mệnh đề if dùng Hiện tại đơn: <span class="correct-answer">use</span>.' },
      { type:"multiple-choice", difficulty:2, question:"If I ______ you, I wouldn't do that.", options:["am","was","were","have been"], correct:2, explanation:'🔑 Lời khuyên ĐK loại 2, luôn dùng <span class="correct-answer">were</span> cho mọi ngôi.' },
      { type:"multiple-choice", difficulty:1, question:"Unless you study harder, you ______ the exam.", options:["will pass","won't pass","would pass","wouldn't pass"], correct:1, explanation:'🔑 ĐK loại 1: Unless (Nếu không). Nếu không học chăm, bạn <span class="correct-answer">won\'t pass</span> (sẽ không đậu).' },
      { type:"multiple-choice", difficulty:2, question:"What would you do if you ______ a wallet on the street?", options:["find","will find","found","had found"], correct:2, explanation:'🔑 ĐK loại 2 (would do), mệnh đề if dùng QKĐ: <span class="correct-answer">found</span>.' },
      { type:"multiple-choice", difficulty:2, question:"If she ______ his number, she would call him.", options:["knows","know","knew","will know"], correct:2, explanation:'🔑 ĐK loại 2 (would call) → If + QKĐ: <span class="correct-answer">knew</span>.' },
      { type:"multiple-choice", difficulty:2, question:"I'll help you with this project if I ______ time.", options:["have","had","will have","would have"], correct:0, explanation:'🔑 ĐK loại 1 (I\'ll = I will) → If + HTĐ: <span class="correct-answer">have</span>.' },
      { type:"multiple-choice", difficulty:3, question:"If we ______ taking steps right now, the environment ______ worse.", options:["don't start / will get","didn't start / would get","won't start / get","aren't starting / gets"], correct:0, explanation:'🔑 Sự thật có thể xảy ra ở hiện tại/tương lai → ĐK loại 1: <span class="correct-answer">don\'t start / will get</span>.' },
      { type:"fill", difficulty:2, question:"If he worked harder, he ______ earn more money.", answer:["would","could","might"], explanation:'🔑 ĐK loại 2, If + QKĐ (worked) → Main: <span class="correct-answer">would/could/might</span> + V-inf.' },
      { type:"fill", difficulty:1, question:"I will tell him the news if I ______ (see) him tomorrow.", answer:["see"], explanation:'🔑 ĐK loại 1, If + HTĐ: <span class="correct-answer">see</span>.' },
      { type:"fill", difficulty:2, question:"If the earth ______ (be) a cube, gravity would work differently.", answer:["were"], explanation:'🔑 Giả định trái thực tế (ĐK loại 2) → If it <span class="correct-answer">were</span>.' },
      { type:"matching", difficulty:2, question:"Nối hai vế để tạo thành Câu điều kiện đúng:", pairs:[["If I am hungry,","I will eat a snack."],["If I were a bird,","I could fly."],["Unless he hurries,","he will miss the bus."],["If we had a map,","we wouldn't be lost."]], explanation:'🔑 ĐK1: HTĐ - Tương lai. ĐK2: Quá khứ - Would/Could.' },
      { type:"multiple-choice", difficulty:3, question:"______ he changes his mind, let me know.", options:["If","Unless","Should","Were"], correct:0, explanation:'🔑 <span class="correct-answer">If</span> ông ấy thay đổi ý định. (Lưu ý: đảo ngữ dùng Should he change - không thêm s).' },
      { type:"multiple-choice", difficulty:3, question:"If I ______ wings, I wouldn't have to take the airplane.", options:["have","had","would have","will have"], correct:1, explanation:'🔑 Giả định trái với hiện tại (tôi không có cánh) → ĐK loại 2: <span class="correct-answer">had</span>.' },
      { type:"reorder", difficulty:2, question:"Sắp xếp câu điều kiện loại 2:", words:["If","I","knew","the","answer","I","would","tell","you"], answer:"If I knew the answer I would tell you", explanation:'🔑 If + S + V2, S + would + V-inf.' },
      { type:"multiple-choice", difficulty:2, question:"She ______ completely different if she cut her hair.", options:["looks","will look","would look","would have looked"], correct:2, explanation:'🔑 If + cut (QKĐ vì ngôi 3 số ít nếu HTĐ phải là cuts) → ĐK loại 2: <span class="correct-answer">would look</span>.' },
      { type:"multiple-choice", difficulty:1, question:"If it doesn't rain, we ______ tennis.", options:["play","would play","will play","played"], correct:2, explanation:'🔑 ĐK loại 1: <span class="correct-answer">will play</span>.' },
      { type:"multiple-choice", difficulty:3, question:"______ I you, I would study AI immediately.", options:["Was","Am","Were","If"], correct:2, explanation:'🔑 Đảo ngữ ĐK loại 2: <span class="correct-answer">Were</span> I you = If I were you.' },
      { type:"multiple-choice", difficulty:2, question:"If she ______ fluent English, she could get that job. (But she isn't fluent)", options:["speaks","spoke","will speak","had spoken"], correct:1, explanation:'🔑 Sự thật là cô ấy không lưu loát → giả định ngược lại ở hiện tại = ĐK loại 2: <span class="correct-answer">spoke</span>.' }
    ]
  },
  {
    id: "verbs-prepositions",
    title: "Verbs with Prepositions",
    unit: "Grammar",
    emoji: "🔤",
    difficulty: 3,
    description: "Động từ đi kèm giới từ cố định trong tiếng Anh.",
    theory: `<h4>📌 Verbs with Prepositions</h4>
<table class="grammar-table"><tr><th>Prep</th><th>Verbs</th></tr>
<tr><td><strong>with</strong></td><td>agree, provide, deal, cope, argue</td></tr>
<tr><td><strong>for</strong></td><td>wait, apologise, prepare, apply, pay</td></tr>
<tr><td><strong>from</strong></td><td>protect, suffer, prevent, escape, graduate</td></tr>
<tr><td><strong>in</strong></td><td>believe, succeed, participate, involve, arrive (big), result</td></tr>
<tr><td><strong>of</strong></td><td>approve, dream, think, consist, beware</td></tr>
<tr><td><strong>on</strong></td><td>agree, depend, concentrate, rely, focus, insist</td></tr>
<tr><td><strong>to</strong></td><td>refer, belong, relate, add, explain, contribute, object</td></tr>
<tr><td><strong>about</strong></td><td>complain, think, talk, argue, worry, care</td></tr>
<tr><td><strong>at</strong></td><td>laugh, arrive (small), look, smile, point</td></tr></table>`,
    questions: [
      { type:"multiple-choice", difficulty:1, question:"Can you explain ______ me what urbanisation is?", options:["with","for","to","at"], correct:2, explanation:'🔑 <span class="correct-answer">explain TO</span> someone.' },
      { type:"multiple-choice", difficulty:1, question:"The officials are arguing ______ the deadline.", options:["about","with","at","on"], correct:0, explanation:'🔑 <span class="correct-answer">argue ABOUT</span> something.' },
      { type:"multiple-choice", difficulty:2, question:"The committee agreed ______ a plan to fight unemployment.", options:["of","for","on","in"], correct:2, explanation:'🔑 <span class="correct-answer">agree ON</span> something (đồng ý về vấn đề).' },
      { type:"multiple-choice", difficulty:1, question:"Jo participated ______ a car-sharing programme.", options:["with","about","for","in"], correct:3, explanation:'🔑 <span class="correct-answer">participate IN</span> = tham gia.' },
      { type:"multiple-choice", difficulty:1, question:"Rural migrants struggle to cope ______ life in a big city.", options:["for","with","about","on"], correct:1, explanation:'🔑 <span class="correct-answer">cope WITH</span> = đối phó với.' },
      { type:"multiple-choice", difficulty:1, question:"Young people are suffering ______ stress.", options:["with","for","from","about"], correct:2, explanation:'🔑 <span class="correct-answer">suffer FROM</span> = chịu đựng bệnh/vấn đề.' },
      { type:"multiple-choice", difficulty:2, question:"Governments should provide citizens ______ better healthcare.", options:["for","with","to","about"], correct:1, explanation:'🔑 <span class="correct-answer">provide someone WITH</span> something.' },
      { type:"multiple-choice", difficulty:2, question:"People have arrived ______ big cities looking for a better life.", options:["in","at","to","on"], correct:0, explanation:'🔑 <span class="correct-answer">arrive IN</span> (big place). arrive AT (small place).' },
      { type:"multiple-choice", difficulty:2, question:"Don't laugh ______ other people's mistakes.", options:["about","on","at","with"], correct:2, explanation:'🔑 <span class="correct-answer">laugh AT</span> = cười nhạo.' },
      { type:"multiple-choice", difficulty:2, question:"Success often depends ______ hard work.", options:["from","in","on","for"], correct:2, explanation:'🔑 <span class="correct-answer">depend ON</span> = phụ thuộc vào.' },
      { type:"fill", difficulty:1, question:"She apologised ______ being late.", answer:["for"], explanation:'🔑 <span class="correct-answer">apologise FOR</span> = xin lỗi về việc gì.' },
      { type:"fill", difficulty:2, question:"I dream ______ travelling the world someday.", answer:["of","about"], explanation:'🔑 <span class="correct-answer">dream OF/ABOUT</span> = mơ về.' },
      { type:"fill", difficulty:2, question:"This book belongs ______ the library.", answer:["to"], explanation:'🔑 <span class="correct-answer">belong TO</span> = thuộc về.' },
      { type:"matching", difficulty:2, question:"Nối động từ với giới từ đúng:", pairs:[["cope","with"],["suffer","from"],["participate","in"],["depend","on"]], explanation:'cope WITH, suffer FROM, participate IN, depend ON.' },
      { type:"multiple-choice", difficulty:3, question:"She insisted ______ paying for dinner.", options:["on","in","for","about"], correct:0, explanation:'🔑 <span class="correct-answer">insist ON</span> = khăng khăng.' },
      { type:"multiple-choice", difficulty:2, question:"The study results ______ poor planning.", options:["result from","result in","result on","result to"], correct:0, explanation:'🔑 <span class="correct-answer">result FROM</span> = do nguyên nhân. result IN = dẫn đến.' },
      { type:"multiple-choice", difficulty:3, question:"He was accused ______ stealing the money.", options:["for","about","of","on"], correct:2, explanation:'🔑 <span class="correct-answer">accuse OF</span> = buộc tội ai về việc gì.' },
      { type:"multiple-choice", difficulty:1, question:"I'm waiting ______ the bus.", options:["on","for","to","at"], correct:1, explanation:'🔑 <span class="correct-answer">wait FOR</span> = chờ đợi.' },
      { type:"multiple-choice", difficulty:2, question:"She complained ______ the noise from the construction.", options:["for","about","on","with"], correct:1, explanation:'🔑 <span class="correct-answer">complain ABOUT</span> = phàn nàn về.' },
      { type:"multiple-choice", difficulty:3, question:"The report refers ______ data from last year.", options:["on","for","to","about"], correct:2, explanation:'🔑 <span class="correct-answer">refer TO</span> = đề cập đến.' }
    ]
  },
  {
    id: "causatives",
    title: "Causatives: HAVE and GET",
    unit: "Grammar",
    emoji: "🛠️",
    difficulty: 4,
    description: "Cấu trúc nhờ vả/sai khiến với HAVE và GET.",
    theory: `<h4>📌 Causatives</h4>
<h4>Chủ động (Active):</h4><ul>
<li><strong>have + O(người) + V-inf</strong>: She had him fix the car.</li>
<li><strong>get + O(người) + to-V</strong>: She got him to fix the car.</li></ul>
<h4>Bị động (Passive):</h4><ul>
<li><strong>have/get + O(vật) + V3/ed</strong>: She had her car fixed.</li></ul>`,
    questions: [
      { type:"multiple-choice", difficulty:1, question:"Sarah got the company ______ the damaged street light.", options:["to fix","fix","fixing","fixed"], correct:0, explanation:'🔑 get + O(người) + to-V: <span class="correct-answer">to fix</span>.' },
      { type:"multiple-choice", difficulty:1, question:"The officials had the planner ______ a new bus route.", options:["design","to design","designing","designed"], correct:0, explanation:'🔑 have + O(người) + V-inf: <span class="correct-answer">design</span>.' },
      { type:"multiple-choice", difficulty:2, question:"I wonder when they will have the metro system ______.", options:["builds","built","build","to build"], correct:1, explanation:'🔑 have + O(vật) + V3: <span class="correct-answer">built</span>.' },
      { type:"multiple-choice", difficulty:2, question:"The manager had sanitation facilities ______ along the road.", options:["install","to install","installing","installed"], correct:3, explanation:'🔑 Passive: had + O(vật) + V3: <span class="correct-answer">installed</span>.' },
      { type:"multiple-choice", difficulty:2, question:"The mayor had workers ______ a new building.", options:["construct","to construct","constructed","constructing"], correct:0, explanation:'🔑 Active have: had + O(người) + V-inf: <span class="correct-answer">construct</span>.' },
      { type:"multiple-choice", difficulty:1, question:"The farmer had a greenhouse ______.", options:["build","to build","built","building"], correct:2, explanation:'🔑 Passive: had + O(vật) + V3: <span class="correct-answer">built</span>.' },
      { type:"multiple-choice", difficulty:2, question:"Jake gets someone ______ his flat regularly.", options:["clean","to clean","cleaned","cleaning"], correct:1, explanation:'🔑 Active get: get + O(người) + to-V: <span class="correct-answer">to clean</span>.' },
      { type:"multiple-choice", difficulty:2, question:"Local people had more trees ______ in the park.", options:["plant","to plant","planted","planting"], correct:2, explanation:'🔑 Passive: had + O(vật) + V3: <span class="correct-answer">planted</span>.' },
      { type:"fill", difficulty:2, question:"She had her hair ______ (cut) at the salon yesterday.", answer:["cut"], explanation:'🔑 Passive causative: had + O(vật) + V3. Cut-cut-cut: <span class="correct-answer">cut</span>.' },
      { type:"fill", difficulty:3, question:"I got my brother ______ (help) me move the furniture.", answer:["to help"], explanation:'🔑 get + O(người) + to-V: <span class="correct-answer">to help</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Active causative với HAVE: have + O(người) + ______", options:["V-inf (nguyên mẫu)","to-V","V3/ed","V-ing"], correct:0, explanation:'🔑 have + O(người) + <span class="correct-answer">V-inf (không to)</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Active causative với GET: get + O(người) + ______", options:["V-inf","to-V","V3/ed","V-ing"], correct:1, explanation:'🔑 get + O(người) + <span class="correct-answer">to-V</span>.' },
      { type:"multiple-choice", difficulty:3, question:"She had her phone ______ (repair) last week.", options:["repair","to repair","repaired","repairing"], correct:2, explanation:'🔑 Passive: had + phone(vật) + V3: <span class="correct-answer">repaired</span>.' },
      { type:"multiple-choice", difficulty:3, question:"The teacher got the students ______ their essays.", options:["rewrite","to rewrite","rewritten","rewriting"], correct:1, explanation:'🔑 get + students(người) + to-V: <span class="correct-answer">to rewrite</span>.' },
      { type:"multiple-choice", difficulty:2, question:"We need to get the car ______ before the trip.", options:["service","to service","serviced","servicing"], correct:2, explanation:'🔑 get + O(vật) + V3: <span class="correct-answer">serviced</span>.' },
      { type:"reorder", difficulty:3, question:"Sắp xếp câu causative:", words:["She","had","the","mechanic","check","her","brakes"], answer:"She had the mechanic check her brakes", explanation:'🔑 have + O(người: mechanic) + V-inf: check.' },
      { type:"multiple-choice", difficulty:2, question:"I ______ my eyes tested every year.", options:["have","make","do","take"], correct:0, explanation:'🔑 <span class="correct-answer">have</span> + eyes(vật) + tested(V3) = nhờ khám mắt.' },
      { type:"multiple-choice", difficulty:3, question:"He got his assistant ______ the report by Friday.", options:["finish","to finish","finished","finishing"], correct:1, explanation:'🔑 got + assistant(người) + to-V: <span class="correct-answer">to finish</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Passive causative: have/get + O(vật) + ______", options:["V-inf","to-V","V3/ed (past participle)","V-ing"], correct:2, explanation:'🔑 Passive: have/get + O(vật) + <span class="correct-answer">V3/ed</span>.' },
      { type:"multiple-choice", difficulty:2, question:"The residents had the plumber ______ the water pipes.", options:["clean","to clean","cleaned","cleaning"], correct:0, explanation:'🔑 Active have: had + plumber(người) + V-inf: <span class="correct-answer">clean</span>.' }
    ]
  },
  {
    id: "reported-speech-orders",
    title: "Reported Speech (Orders, Offers, Advice)",
    unit: "Grammar",
    emoji: "📢",
    difficulty: 4,
    description: "Tường thuật mệnh lệnh, đề nghị, lời khuyên.",
    theory: `<h4>📌 Tường thuật: Mệnh lệnh, Đề nghị, Lời khuyên</h4>
<ul><li><strong>V + (not) to-inf:</strong> offer, promise, refuse, threaten</li>
<li><strong>V + O + (not) to-inf:</strong> tell, ask, order, advise, warn, remind, invite</li>
<li><strong>V + that + should + V:</strong> suggest, recommend, propose, demand</li>
<li><strong>V + V-ing:</strong> suggest, recommend (suggest doing)</li></ul>`,
    questions: [
      { type:"multiple-choice", difficulty:2, question:'"Step away from the robot!" the guide said. →', options:["He encouraged them","He warned them not to go","He ordered them to step away","He invited them"], correct:2, explanation:'🔑 Mệnh lệnh → <span class="correct-answer">ordered + O + to-inf</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"If I were you, I wouldn\'t buy that app," Jake said to Phoebe. →', options:["Jake advised Phoebe not to buy","Jake advised Phoebe to buy","Phoebe was ordered","Jake warned not to buy"], correct:0, explanation:'🔑 "If I were you" = lời khuyên → <span class="correct-answer">advised + O + not to-inf</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"Why don\'t we use this AI assistant?" mum said. → Mum ______ using it.', options:["promised","suggested","ordered","warned"], correct:1, explanation:'🔑 "Why don\'t we" = đề xuất → <span class="correct-answer">suggested + V-ing</span>.' },
      { type:"multiple-choice", difficulty:1, question:'"Would you like to come see the Mars rover?" → She ______.', options:["ordered me","invited me to come","demanded I come","warned me"], correct:1, explanation:'🔑 "Would you like" = mời → <span class="correct-answer">invited + O + to-inf</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"You should come to the seminar." → She ______ coming.', options:["demanded","recommended","refused","threatened"], correct:1, explanation:'🔑 "You should" = gợi ý → <span class="correct-answer">recommended + V-ing</span>.' },
      { type:"multiple-choice", difficulty:1, question:'"I\'ll help you with the assignment," Tony said. → Tony ______.', options:["refused to help","promised to help","warned about","suggested helping"], correct:1, explanation:'🔑 "I\'ll help" = cam kết → <span class="correct-answer">promised + to-inf</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"We should do research on AI," he said. → He suggested ______.', options:["to do research","doing research on AI","did research","we doing"], correct:1, explanation:'🔑 suggest + <span class="correct-answer">V-ing</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"Don\'t touch the Mars rover!" → The guide ______.', options:["warned visitors not to touch","suggested not touching","promised not to touch","reminded to touch"], correct:0, explanation:'🔑 Lệnh phủ định → <span class="correct-answer">warned + O + not to-inf</span>.' },
      { type:"fill", difficulty:2, question:'"I won\'t tell anyone," she said. → She ______ not to tell anyone.', answer:["promised"], explanation:'🔑 "I won\'t" = lời hứa → <span class="correct-answer">promised</span> + not to-inf.' },
      { type:"fill", difficulty:3, question:'"You must finish the work today!" the boss said. → The boss ______ us to finish.', answer:["ordered","told"], explanation:'🔑 Mệnh lệnh mạnh → <span class="correct-answer">ordered/told</span> + O + to-inf.' },
      { type:"multiple-choice", difficulty:3, question:'"I\'ll help you download a navigation app," Ann said. → Ann ______.', options:["offered to help me download","suggested downloading","demanded to download","warned me to download"], correct:0, explanation:'🔑 "I\'ll help you" = đề nghị giúp → <span class="correct-answer">offered + to-inf</span>.' },
      { type:"multiple-choice", difficulty:1, question:'Động từ nào dùng suggest + V-ing?', options:["suggest","promise","threaten","refuse"], correct:0, explanation:'🔑 <span class="correct-answer">suggest</span> + V-ing hoặc suggest + that + should + V.' },
      { type:"multiple-choice", difficulty:3, question:'"Don\'t forget to bring your laptop," she told me. → She ______ me to bring my laptop.', options:["warned","reminded","suggested","offered"], correct:1, explanation:'🔑 "Don\'t forget" = nhắc nhở → <span class="correct-answer">reminded</span> + O + to-inf.' },
      { type:"multiple-choice", difficulty:2, question:'"I\'ll fire you if you\'re late again!" → The manager ______ to fire him.', options:["offered","promised","threatened","suggested"], correct:2, explanation:'🔑 Lời đe dọa → <span class="correct-answer">threatened</span> + to-inf.' },
      { type:"multiple-choice", difficulty:2, question:'"No, I will not do it," she said. → She ______ to do it.', options:["offered","suggested","refused","recommended"], correct:2, explanation:'🔑 "No, I will not" = từ chối → <span class="correct-answer">refused</span> + to-inf.' },
      { type:"matching", difficulty:2, question:"Nối câu trực tiếp với reporting verb:", pairs:[["I\'ll help you","offered"],["You should try","recommended"],["Don\'t touch it","warned"],["I won\'t tell","promised"]], explanation:'offer=đề nghị, recommend=gợi ý, warn=cảnh báo, promise=hứa.' },
      { type:"multiple-choice", difficulty:3, question:'"You really should see a doctor," she said. → She ______  me to see a doctor.', options:["insisted","advised","demanded","threatened"], correct:1, explanation:'🔑 "You should" = lời khuyên → <span class="correct-answer">advised</span> + O + to-inf.' },
      { type:"multiple-choice", difficulty:2, question:'"Let me carry your bag," he said. → He ______ to carry my bag.', options:["ordered","offered","demanded","warned"], correct:1, explanation:'🔑 "Let me" = đề nghị giúp → <span class="correct-answer">offered</span> + to-inf.' },
      { type:"reorder", difficulty:3, question:"Sắp xếp câu tường thuật:", words:["She","advised","me","not","to","eat","too","much","sugar"], answer:"She advised me not to eat too much sugar", explanation:'🔑 advised + O + not + to-inf.' },
      { type:"multiple-choice", difficulty:1, question:'"Please sit down," the teacher said. → The teacher ______ us to sit down.', options:["warned","asked","threatened","refused"], correct:1, explanation:'🔑 "Please" = yêu cầu lịch sự → <span class="correct-answer">asked</span> + O + to-inf.' }
    ]
  },
  {
    id: "sentence-types",
    title: "Simple / Compound / Complex Sentences",
    unit: "Grammar",
    emoji: "📝",
    difficulty: 2,
    description: "Phân biệt câu đơn, câu ghép, câu phức.",
    theory: `<h4>📌 Các loại câu</h4>
<h4>1. Simple (Câu đơn):</h4><ul><li>1 mệnh đề độc lập</li></ul>
<div class="example">Jen enjoys learning new recipes.</div>
<h4>2. Compound (Câu ghép):</h4><ul><li>2+ mệnh đề độc lập, nối bằng FANBOYS: <strong>For, And, Nor, But, Or, Yet, So</strong></li>
<li>Hoặc: not only...but also, either...or, neither...nor</li></ul>
<div class="example">He wants experience, <strong>so</strong> he is doing an internship.</div>
<h4>3. Complex (Câu phức):</h4><ul><li>1 MĐ độc lập + 1+ MĐ phụ thuộc</li>
<li>Liên từ phụ thuộc: <strong>after, before, when, while, if, because, although, unless, so that</strong></li></ul>
<div class="example">Emma took notes <strong>while</strong> she listened to the speaker.</div>`,
    questions: [
      { type:"multiple-choice", difficulty:1, question:"Either Dan will win ______ Sarah will. (CP/CX?)", options:["and (CP)","or (CP)","both (CP)","neither (CX)"], correct:1, explanation:'🔑 Either...or = cặp liên từ đẳng lập → <span class="correct-answer">Compound</span>.' },
      { type:"multiple-choice", difficulty:1, question:'Jason has good skills, ______ he always represents the company. Type?', options:["so — Compound","because — Complex","although — Complex","and — Compound"], correct:0, explanation:'🔑 "so" = FANBOYS → <span class="correct-answer">Compound</span>.' },
      { type:"multiple-choice", difficulty:1, question:'"Alice did an internship while taking a course." Type?', options:["Simple","Compound","Complex","Compound-Complex"], correct:2, explanation:'🔑 "while" = liên từ phụ thuộc → <span class="correct-answer">Complex</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"You can\'t work until you complete the application." Type?', options:["Simple","Compound","Complex","None"], correct:2, explanation:'🔑 "until" = liên từ phụ thuộc → <span class="correct-answer">Complex</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"Mike enrolled because his teacher recommended it." Type?', options:["Simple","Compound","Complex","Run-on"], correct:2, explanation:'🔑 "because" = liên từ phụ thuộc → <span class="correct-answer">Complex</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Which is a SIMPLE sentence?", options:["She likes coffee, but he prefers tea.","Although it rained, we went out.","Jen enjoys learning new recipes.","I was tired, so I went to bed."], correct:2, explanation:'🔑 <span class="correct-answer">"Jen enjoys learning new recipes."</span> — 1 mệnh đề → Simple.' },
      { type:"multiple-choice", difficulty:2, question:'"Tom has skills, but he doesn\'t want to be manager." Type?', options:["Simple","Compound","Complex","Compound-Complex"], correct:1, explanation:'🔑 "but" = FANBOYS → <span class="correct-answer">Compound</span>.' },
      { type:"multiple-choice", difficulty:1, question:"Which conjunction makes a COMPOUND sentence?", options:["because","although","so","while"], correct:2, explanation:'🔑 <span class="correct-answer">so</span> (FANBOYS) → Compound. Còn lại = subordinating → Complex.' },
      { type:"multiple-choice", difficulty:2, question:'"She went to the store, and she bought some milk." Type?', options:["Simple","Compound","Complex","Fragment"], correct:1, explanation:'🔑 "and" = FANBOYS, nối 2 MĐ độc lập → <span class="correct-answer">Compound</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"If it rains tomorrow, we will stay home." Type?', options:["Simple","Compound","Complex","Compound-Complex"], correct:2, explanation:'🔑 "If" = liên từ phụ thuộc → <span class="correct-answer">Complex</span>.' },
      { type:"multiple-choice", difficulty:1, question:"FANBOYS gồm những liên từ nào?", options:["For, And, Nor, But, Or, Yet, So","After, Before, When, While, If","Because, Although, Unless, Since","Not only, Either, Neither"], correct:0, explanation:'🔑 <span class="correct-answer">For, And, Nor, But, Or, Yet, So</span> = liên từ đẳng lập → Compound.' },
      { type:"multiple-choice", difficulty:3, question:'"Although she was tired, she finished the project, and she submitted it on time." Type?', options:["Simple","Compound","Complex","Compound-Complex"], correct:3, explanation:'🔑 "Although" (phụ thuộc) + "and" (đẳng lập) → <span class="correct-answer">Compound-Complex</span>.' },
      { type:"fill", difficulty:1, question:'"The cat sat on the mat." Đây là câu ______.', answer:["simple","đơn"], explanation:'🔑 1 chủ ngữ + 1 động từ → <span class="correct-answer">Simple</span> (câu đơn).' },
      { type:"multiple-choice", difficulty:2, question:'"Before she left, she locked the door." Type?', options:["Simple","Compound","Complex","Fragment"], correct:2, explanation:'🔑 "Before" = liên từ phụ thuộc → <span class="correct-answer">Complex</span>.' },
      { type:"multiple-choice", difficulty:3, question:'"Not only did she pass, but she also got the highest score." Type?', options:["Simple","Compound","Complex","Compound-Complex"], correct:1, explanation:'🔑 "Not only...but also" = cặp liên từ đẳng lập → <span class="correct-answer">Compound</span>.' },
      { type:"matching", difficulty:2, question:"Nối liên từ với loại câu:", pairs:[["and","Compound"],["because","Complex"],["but","Compound"],["although","Complex"]], explanation:'and/but = đẳng lập (Compound). because/although = phụ thuộc (Complex).' },
      { type:"multiple-choice", difficulty:1, question:'"She sings beautifully." Type?', options:["Simple","Compound","Complex","Fragment"], correct:0, explanation:'🔑 1 mệnh đề duy nhất → <span class="correct-answer">Simple</span>.' },
      { type:"multiple-choice", difficulty:2, question:'"I\'ll call you as soon as I arrive." Type?', options:["Simple","Compound","Complex","Run-on"], correct:2, explanation:'🔑 "as soon as" = liên từ phụ thuộc → <span class="correct-answer">Complex</span>.' },
      { type:"multiple-choice", difficulty:2, question:'Trong câu Compound, dấu phẩy đặt ở đâu?', options:["Trước liên từ FANBOYS","Sau liên từ","Cuối câu","Không dùng dấu phẩy"], correct:0, explanation:'🔑 <span class="correct-answer">Trước liên từ FANBOYS</span>: She ran, and he followed.' },
      { type:"multiple-choice", difficulty:3, question:'"He studied hard so that he could pass the exam." Type?', options:["Simple","Compound","Complex","Compound-Complex"], correct:2, explanation:'🔑 "so that" = liên từ phụ thuộc (chỉ mục đích) → <span class="correct-answer">Complex</span>.' }
    ]
  }
];
