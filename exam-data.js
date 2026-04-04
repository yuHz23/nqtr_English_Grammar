const EXAM_DB = [
    {
        id: "thptqg-demo-2024",
        year: "2024",
        title: "Đề Thi THPTQG 2024 (Mã đề 401) - Mẫu Demo",
        desc: "Đề thi mô phỏng chính thức cấu trúc đề thi Tốt nghiệp THPT Quốc gia môn Tiếng Anh năm 2024. Phục vụ mục đích test hệ thống.",
        timeLimit: 60,
        questions: [
            // PRONUNCIATION
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the word whose underlined part differs...",
                q: "A. c<u>a</u>ll   B. f<u>a</u>ll   C. m<u>a</u>ll   D. m<u>a</u>t",
                options: ["call", "fall", "mall", "mat"],
                correct: 3,
                explanation: "mat phát âm là /æ/, còn lại phát âm là /ɔː/"
            },
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the word whose underlined part differs...",
                q: "A. laugh<u>ed</u>   B. wash<u>ed</u>   C. danc<u>ed</u>   D. play<u>ed</u>",
                options: ["laughed", "washed", "danced", "played"],
                correct: 3,
                explanation: "played đuôi -ed phát âm là /d/, còn lại phát âm là /t/"
            },
            
            // STRESS
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress...",
                q: "A. provide   B. listen   C. repeat   D. collect",
                options: ["provide", "listen", "repeat", "collect"],
                correct: 1,
                explanation: "listen trọng âm rơi vào âm tiết 1, còn lại âm tiết 2."
            },
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress...",
                q: "A. library   B. customer   C. computer   D. family",
                options: ["library", "customer", "computer", "family"],
                correct: 2,
                explanation: "computer trọng âm 2, còn lại trọng âm 1."
            },

            // GRAMMAR & VOCAB
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.",
                q: "My sister usually ______ up early to do morning exercise.",
                options: ["gets", "get", "getting", "got"],
                correct: 0,
                explanation: "usually -> Thì hiện tại đơn; My sister là số ít -> gets."
            },
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.",
                q: "The book ______ by my father yesterday is very interesting.",
                options: ["bought", "buying", "was bought", "which bought"],
                correct: 0,
                explanation: "Rút gọn mệnh đề quan hệ dạng bị động (which was bought -> bought)."
            },
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.",
                q: "If it rains tomorrow, we ______ the picnic.",
                options: ["cancel", "would cancel", "will cancel", "cancelled"],
                correct: 2,
                explanation: "Câu điều kiện loại 1: If + HTĐ, S + will + V."
            },
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.",
                q: "Mary is very ______ to learn that she passed the exam.",
                options: ["excited", "exciting", "excite", "excitement"],
                correct: 0,
                explanation: "Tính từ chỉ cảm xúc của người dùng đuôi -ed (excited)."
            },
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.",
                q: "It's no use ______ to him; he never listens.",
                options: ["to talk", "talking", "talk", "talked"],
                correct: 1,
                explanation: "Cấu trúc: It's no use + V-ing (vô ích khi làm gì)."
            },

            // COMMUNICATION
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the option that best completes each of the following exchanges.",
                q: "Tom: \"Would you like to join our volunteer group?\"<br>Hoa: \"______\"",
                options: ["Yes, I'd love to.", "Yes, please.", "No, not at all.", "I completely agree."],
                correct: 0,
                explanation: "Đáp lại lời mời 'Would you like...?' dùng 'Yes, I'd love to' (Vâng, mình rất muốn)."
            },

            // SYNONYM
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning...",
                q: "We need to find a <u>solution</u> to this serious environmental problem.",
                options: ["answer", "cause", "mistake", "reason"],
                correct: 0,
                explanation: "solution (giải pháp) = answer (câu trả lời / cách giải quyết)."
            },

            // ANTONYM
            {
                groupTitle: "Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning...",
                q: "The prices of property in the city centre are absolutely <u>affordable</u>.",
                options: ["cheap", "reasonable", "expensive", "low"],
                correct: 2,
                explanation: "affordable (phải chăng, có thể chi trả) >< expensive (đắt đỏ)."
            },

            // READING CLOZE
            {
                groupTitle: "Read the following passage and mark the letter A, B, C, or D to indicate the correct word or phrase...",
                passage: "Urbanisation has brought a lot of changes to modern cities. Many people move to urban areas looking (13) ______ better job opportunities. However, this massive migration causes severe issues like traffic congestion and pollution. The government is trying to (14) ______ the infrastructure, but it takes time and massive funding. Some experts suggest that businesses should be moved to rural areas to reduce pressure on major cities.",
                q: "Question 13",
                options: ["for", "at", "on", "in"],
                correct: 0,
                explanation: "look for: tìm kiếm."
            },
            {
                groupTitle: "Read the following passage and mark the letter A, B, C, or D to indicate the correct word or phrase...",
                passage: "Urbanisation has brought a lot of changes to modern cities. Many people move to urban areas looking (13) ______ better job opportunities. However, this massive migration causes severe issues like traffic congestion and pollution. The government is trying to (14) ______ the infrastructure, but it takes time and massive funding. Some experts suggest that businesses should be moved to rural areas to reduce pressure on major cities.",
                q: "Question 14",
                options: ["repairing", "repaired", "improve", "improves"],
                correct: 2,
                explanation: "try to + V nguyên mẫu (improve: cải thiện)."
            },

            // READING COMPREHENSION
            {
                groupTitle: "Read the following passage and mark the letter A, B, C, or D to indicate the correct answer to each of the questions.",
                passage: "Global warming is primarily a problem of too much carbon dioxide (CO2) in the atmosphere—which acts as a blanket, trapping heat and warming the planet. As we burn fossil fuels like coal, oil and natural gas for energy or cut down and burn forests to create pastures and plantations, carbon accumulates and overloads our atmosphere. Certain waste management and agricultural practices aggravate the problem by releasing other potent global warming gases, such as methane and nitrous oxide.\n\nCO2 survives in the atmosphere for a long time—up to many centuries—so its heat-trapping effects are compounded over time. Of the many heat-trapping gases, CO2 puts us at the greatest risk of irreversible changes if it continues to accumulate unchecked in the atmosphere—as it is likely to do if the global economy remains dependent on fossil fuels for its energy needs.",
                q: "Which of the following is the main idea of the passage?",
                options: [
                    "The types of greenhouse gases.",
                    "The causes and characteristics of global warming.",
                    "How to stop using fossil fuels.",
                    "The role of agriculture in climate change."
                ],
                correct: 1,
                explanation: "Đoạn văn tựu trung đề cập đến nguyên nhân (chủ yếu là khí CO2) và các đặc tính của khí này dẫn đến sự ấm lên toàn cầu."
            },
            {
                groupTitle: "Read the following passage and mark the letter A, B, C, or D to indicate the correct answer to each of the questions.",
                passage: "Global warming is primarily a problem of too much carbon dioxide (CO2) in the atmosphere—which acts as a blanket, trapping heat and warming the planet. As we burn fossil fuels like coal, oil and natural gas for energy or cut down and burn forests to create pastures and plantations, carbon accumulates and overloads our atmosphere. Certain waste management and agricultural practices aggravate the problem by releasing other potent global warming gases, such as methane and nitrous oxide.\n\nCO2 survives in the atmosphere for a long time—up to many centuries—so its heat-trapping effects are compounded over time. Of the many heat-trapping gases, CO2 puts us at the greatest risk of irreversible changes if it continues to accumulate unchecked in the atmosphere—as it is likely to do if the global economy remains dependent on fossil fuels for its energy needs.",
                q: "The word 'aggravate' in paragraph 1 is closest in meaning to ______.",
                options: ["improve", "worsen", "solve", "create"],
                correct: 1,
                explanation: "aggravate = làm trầm trọng thêm = worsen."
            },
            {
                groupTitle: "Read the following passage and mark the letter A, B, C, or D to indicate the correct answer to each of the questions.",
                passage: "Global warming is primarily a problem of too much carbon dioxide (CO2) in the atmosphere—which acts as a blanket, trapping heat and warming the planet. As we burn fossil fuels like coal, oil and natural gas for energy or cut down and burn forests to create pastures and plantations, carbon accumulates and overloads our atmosphere. Certain waste management and agricultural practices aggravate the problem by releasing other potent global warming gases, such as methane and nitrous oxide.\n\nCO2 survives in the atmosphere for a long time—up to many centuries—so its heat-trapping effects are compounded over time. Of the many heat-trapping gases, CO2 puts us at the greatest risk of irreversible changes if it continues to accumulate unchecked in the atmosphere—as it is likely to do if the global economy remains dependent on fossil fuels for its energy needs.",
                q: "According to the passage, CO2 acts as a blanket because it ______.",
                options: [
                    "provides energy for the planet",
                    "keeps the planet warm by trapping heat",
                    "protects the atmosphere from fossil fuels",
                    "releases methane"
                ],
                correct: 1,
                explanation: "Dẫn chứng: 'which acts as a blanket, trapping heat and warming the planet'."
            }
        ]
    }
];
