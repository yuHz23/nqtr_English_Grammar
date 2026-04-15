// ============================================================
// MATRAN DATA — Ngân hàng câu hỏi Ôn Ma Trận Cuối Kỳ II Lớp 12
// 4 dạng bài: Cloze Test, Sequencing, Text Completion, Reading Comp
// Chủ đề: Urbanisation, Green Environment, AI, Lifelong Learning
// ============================================================

const MATRAN_DATA = {

  // ============================================================
  // CLOZE TEST — 6 bài (mỗi bài 6 câu) = 36 câu
  // Dạng: leaflet / announcement, 120-180 từ
  // Mỗi bài: 2 ngữ pháp, 1 cụm từ cố định, 3 từ vựng
  // ============================================================
  clozeTests: [
    {
      id: "cloze-urb-1",
      title: "City Development Newsletter",
      topic: "Urbanisation",
      type: "announcement",
      passage: `<b>GREENVALE CITY — DEVELOPMENT UPDATE</b><br><br>The city council is pleased to announce a new housing project that will (1)______ affordable apartments for young families. As more people continue to (2)______ to urban areas, the demand for housing has increased dramatically. The project, (3)______ is expected to be completed by 2027, will include parks and community centres. Residents will also benefit (4)______ improved public transport links. The council has (5)______ significant funds to ensure quality construction. We encourage all citizens to (6)______ in the upcoming public consultation meeting.`,
      questions: [
        { id:1, options:["provide","prevents","produces","promotes"], correct:0, type:"vocab", difficulty:1, explanation:"provide = cung cấp. Provide affordable apartments = cung cấp căn hộ giá phải chăng." },
        { id:2, options:["migrate","travel","commute","visit"], correct:0, type:"vocab", difficulty:1, explanation:"migrate to = di cư đến. Ngữ cảnh nói về di chuyển đến vùng đô thị để sinh sống." },
        { id:3, options:["which","who","whom","where"], correct:0, type:"grammar", difficulty:1, explanation:"Đại từ quan hệ 'which' thay thế cho 'The project' (vật)." },
        { id:4, options:["from","with","for","to"], correct:0, type:"collocation", difficulty:2, explanation:"benefit FROM = hưởng lợi từ. Cụm từ cố định." },
        { id:5, options:["allocated","decorated","eliminated","demonstrated"], correct:0, type:"vocab", difficulty:2, explanation:"allocate funds = phân bổ ngân sách. Thuật ngữ hành chính." },
        { id:6, options:["participate","join","attend","enter"], correct:0, type:"grammar", difficulty:3, explanation:"participate IN = tham gia vào. 'participate in the meeting' là cách dùng chuẩn." }
      ]
    },
    {
      id: "cloze-green-1",
      title: "Eco-School Leaflet",
      topic: "The Green Environment",
      type: "leaflet",
      passage: `<b>🌿 JOIN OUR ECO-SCHOOL PROGRAMME!</b><br><br>Are you passionate (1)______ protecting the environment? Our school is launching a Green Campaign to raise (2)______ about climate change. Students who participate will learn how to reduce waste, save energy, and protect local (3)______. The campaign (4)______ every Friday afternoon for 8 weeks. You don't need any special skills — just a desire to make a (5)______! Sign up at the school office before March 15th. Let's work together to build a (6)______ future for our planet.`,
      questions: [
        { id:1, options:["about","with","for","on"], correct:0, type:"collocation", difficulty:1, explanation:"passionate ABOUT = đam mê về. Cụm từ cố định." },
        { id:2, options:["awareness","knowledge","interest","attention"], correct:0, type:"vocab", difficulty:1, explanation:"raise awareness = nâng cao nhận thức. Collocation phổ biến." },
        { id:3, options:["wildlife","wildfire","wilderness","wildwood"], correct:0, type:"vocab", difficulty:1, explanation:"wildlife = động vật hoang dã. Protect wildlife = bảo vệ động vật hoang dã." },
        { id:4, options:["will be held","will hold","is holding","has held"], correct:0, type:"grammar", difficulty:2, explanation:"Bị động tương lai: will be held (sẽ được tổ chức). Campaign là chủ ngữ bị động." },
        { id:5, options:["difference","change","effect","decision"], correct:0, type:"vocab", difficulty:2, explanation:"make a difference = tạo ra sự khác biệt. Cụm từ cố định." },
        { id:6, options:["sustainable","sustaining","sustained","sustain"], correct:0, type:"grammar", difficulty:3, explanation:"sustainable (adj) = bền vững. Tính từ bổ nghĩa cho danh từ 'future'." }
      ]
    },
    {
      id: "cloze-ai-1",
      title: "AI Tech Conference Announcement",
      topic: "Artificial Intelligence",
      type: "announcement",
      passage: `<b>TECHFUTURE 2026 — AI CONFERENCE</b><br><br>We are excited to invite you to TechFuture 2026, the biggest AI conference in Southeast Asia! This year's event will (1)______ on how artificial intelligence is transforming healthcare, education, and transportation. Keynote speakers (2)______ leading experts from Google and Microsoft. Attendees will have the (3)______ to try hands-on AI demos. The conference is (4)______ for students who are interested in technology careers. Early bird tickets are available at a 30% (5)______. Don't miss this chance to (6)______ up with the latest innovations!`,
      questions: [
        { id:1, options:["focus","depend","rely","insist"], correct:0, type:"vocab", difficulty:1, explanation:"focus ON = tập trung vào. Ngữ cảnh: hội nghị tập trung vào chủ đề AI." },
        { id:2, options:["include","including","included","includes"], correct:0, type:"grammar", difficulty:1, explanation:"Chủ ngữ 'Keynote speakers' số nhiều → động từ 'include' không chia -s." },
        { id:3, options:["opportunity","ability","possibility","capability"], correct:0, type:"vocab", difficulty:2, explanation:"have the opportunity to = có cơ hội để. Collocation phổ biến." },
        { id:4, options:["suitable","capable","probable","available"], correct:0, type:"vocab", difficulty:2, explanation:"suitable FOR = phù hợp cho. Hội nghị phù hợp cho học sinh." },
        { id:5, options:["discount","decrease","reduction","deduction"], correct:0, type:"collocation", difficulty:2, explanation:"at a 30% discount = giảm giá 30%. Cụm từ cố định trong quảng cáo." },
        { id:6, options:["keep","catch","hold","bring"], correct:0, type:"grammar", difficulty:3, explanation:"keep up with = theo kịp. Phrasal verb: keep up with the latest innovations." }
      ]
    },
    {
      id: "cloze-ll-1",
      title: "Online Learning Platform Leaflet",
      topic: "Lifelong Learning",
      type: "leaflet",
      passage: `<b>📚 LEARNHUB — YOUR GATEWAY TO LIFELONG LEARNING</b><br><br>Looking (1)______ new skills? LearnHub offers over 500 online courses in technology, business, and creative arts. Whether you are a student or a working (2)______, our platform provides flexible learning that fits your schedule. Each course (3)______ by industry experts and includes interactive quizzes and projects. Many of our graduates have (4)______ in advancing their careers. With prices starting from just $9.99 per month, there's no (5)______ not to start today. Take the first (6)______ towards a brighter future!`,
      questions: [
        { id:1, options:["for","at","on","to"], correct:0, type:"collocation", difficulty:1, explanation:"look FOR = tìm kiếm. Looking for new skills = tìm kiếm kỹ năng mới." },
        { id:2, options:["professional","profession","professionally","profess"], correct:0, type:"vocab", difficulty:1, explanation:"professional (n) = chuyên gia/người đi làm. Danh từ sau 'working'." },
        { id:3, options:["is designed","designs","designing","has designed"], correct:0, type:"grammar", difficulty:2, explanation:"Bị động: is designed BY = được thiết kế bởi. Course là chủ ngữ bị tác động." },
        { id:4, options:["succeeded","achieved","managed","accomplished"], correct:0, type:"vocab", difficulty:2, explanation:"succeed IN = thành công trong. Succeeded in advancing careers." },
        { id:5, options:["excuse","reason","cause","purpose"], correct:0, type:"vocab", difficulty:3, explanation:"there's no excuse = không có lý do biện hộ. Cụm từ thông dụng." },
        { id:6, options:["step","move","action","walk"], correct:0, type:"grammar", difficulty:1, explanation:"take the first step = bước đi đầu tiên. Collocation phổ biến." }
      ]
    },
    {
      id: "cloze-urb-2",
      title: "Smart City Initiative",
      topic: "Urbanisation",
      type: "announcement",
      passage: `<b>SMART CITY INITIATIVE — CALL FOR VOLUNTEERS</b><br><br>The Metropolitan Council is (1)______ for volunteers to help with the Smart City Initiative. This programme (2)______ to improve the quality of life for all residents through technology. Volunteers will assist in collecting data about traffic (3)______, energy usage, and public services. Training sessions will be (4)______ to all participants free of charge. The data collected will help the council make better (5)______ about future urban development. If you are keen (6)______ making our city smarter and greener, please apply online before April 30th.`,
      questions: [
        { id:1, options:["looking","searching","seeking","finding"], correct:0, type:"vocab", difficulty:1, explanation:"look FOR = tìm kiếm. Looking for volunteers = tìm kiếm tình nguyện viên." },
        { id:2, options:["aims","achieves","attempts","agrees"], correct:0, type:"vocab", difficulty:1, explanation:"aim TO = nhắm đến, mục đích. This programme aims to improve..." },
        { id:3, options:["congestion","connection","construction","consumption"], correct:0, type:"vocab", difficulty:2, explanation:"traffic congestion = tắc nghẽn giao thông. Thuật ngữ đô thị hóa." },
        { id:4, options:["provided","presenting","producing","preparing"], correct:0, type:"grammar", difficulty:2, explanation:"be provided TO = được cung cấp cho. Bị động." },
        { id:5, options:["decisions","conclusions","solutions","opinions"], correct:0, type:"vocab", difficulty:2, explanation:"make decisions = đưa ra quyết định. Collocation." },
        { id:6, options:["on","for","about","in"], correct:0, type:"collocation", difficulty:3, explanation:"keen ON = hăng hái, nhiệt tình về. Cụm từ cố định." }
      ]
    },
    {
      id: "cloze-green-2",
      title: "Recycling Campaign Leaflet",
      topic: "The Green Environment",
      type: "leaflet",
      passage: `<b>♻️ RECYCLE RIGHT — COMMUNITY CAMPAIGN</b><br><br>Did you know that the average household (1)______ over 1 ton of waste each year? Our community is launching a recycling campaign to help (2)______ the amount of waste going to landfills. Starting next month, new recycling bins will be (3)______ in every neighbourhood. We ask all residents to (4)______ their waste into paper, plastic, glass, and organic categories. Proper recycling can significantly reduce (5)______ emissions and conserve natural resources. Together, we can make our community cleaner and more (6)______ friendly.`,
      questions: [
        { id:1, options:["produces","generates","creates","manufactures"], correct:1, type:"vocab", difficulty:1, explanation:"generate waste = tạo ra rác thải. Thuật ngữ môi trường." },
        { id:2, options:["reduce","increase","maintain","expand"], correct:0, type:"vocab", difficulty:1, explanation:"reduce = giảm. Reduce the amount of waste = giảm lượng rác thải." },
        { id:3, options:["placed","placing","place","to place"], correct:0, type:"grammar", difficulty:2, explanation:"Bị động tương lai: will be placed = sẽ được đặt." },
        { id:4, options:["separate","divide","split","break"], correct:0, type:"collocation", difficulty:2, explanation:"separate waste INTO = phân loại rác thành. Cụm từ cố định." },
        { id:5, options:["carbon","oxygen","nitrogen","hydrogen"], correct:0, type:"vocab", difficulty:2, explanation:"carbon emissions = khí thải carbon. Thuật ngữ môi trường phổ biến." },
        { id:6, options:["environmentally","environmental","environment","environ"], correct:0, type:"grammar", difficulty:3, explanation:"environmentally friendly = thân thiện với môi trường. Trạng từ + tính từ." }
      ]
    }
  ],

  // ============================================================
  // SEQUENCING — 15 bài
  // Sắp xếp: dialogue, letter, paragraph
  // Biết=3 lựa chọn, Hiểu=4, Vận dụng=5
  // ============================================================
  sequencing: [
    {
      id:"seq-1", title:"At the City Hall", type:"dialogue", difficulty:1, numChoices:3,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Receptionist: Good morning! How can I help you?",
        "B. Visitor: I'd like to register for the new housing programme.",
        "C. Receptionist: Sure, please fill in this form and bring it back to me."
      ],
      correctOrder:[0,1,2],
      explanation:"Thứ tự logic: Chào → Nêu yêu cầu → Hướng dẫn. Đây là trình tự hội thoại cơ bản."
    },
    {
      id:"seq-2", title:"Asking About Recycling", type:"dialogue", difficulty:1, numChoices:3,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Tom: Do you know where I can recycle these old batteries?",
        "B. Anna: You can drop them off at the recycling centre on Green Street.",
        "C. Tom: Great, thanks! I'll go there this afternoon."
      ],
      correctOrder:[0,1,2],
      explanation:"Thứ tự: Hỏi → Trả lời → Cảm ơn xác nhận. Logic hội thoại tự nhiên."
    },
    {
      id:"seq-3", title:"Discussing AI in Education", type:"dialogue", difficulty:1, numChoices:3,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Teacher: Today we'll discuss how AI can help students learn more effectively.",
        "B. Student: Can AI really replace teachers in the future?",
        "C. Teacher: Not entirely, but it can assist teachers by personalising lessons for each student."
      ],
      correctOrder:[0,1,2],
      explanation:"Thứ tự: Giới thiệu chủ đề → Câu hỏi → Trả lời giải thích."
    },
    {
      id:"seq-4", title:"Planning a Green Event", type:"dialogue", difficulty:2, numChoices:4,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Lisa: Our school should organise an Earth Day event.",
        "B. Mark: That's a great idea! What activities should we include?",
        "C. Lisa: We could have a tree-planting session and a recycling workshop.",
        "D. Mark: Perfect. Let's present this plan to the principal tomorrow."
      ],
      correctOrder:[0,1,2,3],
      explanation:"Thứ tự: Đề xuất → Hưởng ứng + hỏi chi tiết → Gợi ý hoạt động → Thống nhất kế hoạch."
    },
    {
      id:"seq-5", title:"Job Interview Conversation", type:"dialogue", difficulty:2, numChoices:4,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Interviewer: Tell me about your experience with digital marketing.",
        "B. Candidate: I have three years of experience managing social media campaigns.",
        "C. Interviewer: That's impressive. Why do you want to work for our company?",
        "D. Candidate: I admire your commitment to sustainable business practices."
      ],
      correctOrder:[0,1,2,3],
      explanation:"Phỏng vấn: Hỏi kinh nghiệm → Trả lời → Hỏi lý do → Trả lời. Trình tự phỏng vấn logic."
    },
    {
      id:"seq-6", title:"Complaint About Noise Pollution", type:"letter", difficulty:2, numChoices:4,
      instruction:"Sắp xếp các đoạn của lá thư sau đúng thứ tự:",
      items:[
        "A. Dear Sir/Madam, I am writing to complain about the excessive noise from the construction site near my apartment.",
        "B. The noise starts at 6 AM every day and continues until late evening, making it impossible for residents to rest.",
        "C. I kindly request that the construction hours be limited to between 8 AM and 6 PM on weekdays only.",
        "D. I look forward to your prompt response. Yours faithfully, Nguyen Van Minh."
      ],
      correctOrder:[0,1,2,3],
      explanation:"Thư phàn nàn: Lời chào + mục đích → Mô tả vấn đề → Đề xuất giải pháp → Kết thư."
    },
    {
      id:"seq-7", title:"Benefits of Lifelong Learning", type:"paragraph", difficulty:2, numChoices:4,
      instruction:"Sắp xếp các câu sau thành đoạn văn hoàn chỉnh:",
      items:[
        "A. Lifelong learning is the continuous pursuit of knowledge throughout one's life.",
        "B. It helps individuals adapt to changes in the workplace and develop new skills.",
        "C. Moreover, studies show that lifelong learners tend to have better mental health and higher job satisfaction.",
        "D. Therefore, everyone should embrace the habit of learning something new every day."
      ],
      correctOrder:[0,1,2,3],
      explanation:"Đoạn văn: Định nghĩa → Lợi ích 1 → Lợi ích 2 (Moreover) → Kết luận (Therefore)."
    },
    {
      id:"seq-8", title:"Urban Problems Discussion", type:"dialogue", difficulty:3, numChoices:5,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Professor: What do you think is the biggest challenge of urbanisation?",
        "B. Student 1: I believe overcrowding is the main issue because it leads to many other problems.",
        "C. Student 2: I agree, but I think pollution is equally serious.",
        "D. Professor: Both of you make valid points. How can governments address these issues?",
        "E. Student 1: They could invest in public transport and build more green spaces in cities."
      ],
      correctOrder:[0,1,2,3,4],
      explanation:"Thảo luận: Đặt câu hỏi → Ý kiến 1 → Ý kiến 2 (đồng ý + bổ sung) → Câu hỏi tiếp → Trả lời."
    },
    {
      id:"seq-9", title:"Application Letter", type:"letter", difficulty:3, numChoices:5,
      instruction:"Sắp xếp các đoạn của thư xin việc sau đúng thứ tự:",
      items:[
        "A. Dear Hiring Manager, I am writing to apply for the position of Environmental Officer at Green Solutions Ltd.",
        "B. I hold a degree in Environmental Science from Hanoi University and have two years of experience in waste management.",
        "C. During my previous role, I successfully led a recycling project that reduced waste by 40% in our community.",
        "D. I am confident that my skills and passion for the environment make me a strong candidate for this role.",
        "E. Thank you for considering my application. I look forward to hearing from you. Yours sincerely, Tran Thu Ha."
      ],
      correctOrder:[0,1,2,3,4],
      explanation:"Thư xin việc: Giới thiệu mục đích → Trình độ → Kinh nghiệm cụ thể → Tự tin → Kết thư."
    },
    {
      id:"seq-10", title:"How AI Works", type:"paragraph", difficulty:3, numChoices:5,
      instruction:"Sắp xếp các câu sau thành đoạn văn hoàn chỉnh:",
      items:[
        "A. Artificial intelligence refers to computer systems that can perform tasks normally requiring human intelligence.",
        "B. These systems learn from large amounts of data through a process called machine learning.",
        "C. For example, AI can analyse medical images to detect diseases faster than human doctors.",
        "D. However, some experts warn that AI could replace many jobs in the future.",
        "E. Despite these concerns, most people agree that AI has the potential to greatly improve our lives."
      ],
      correctOrder:[0,1,2,3,4],
      explanation:"Đoạn văn: Định nghĩa → Cách hoạt động → Ví dụ → Mặt trái (However) → Kết luận (Despite)."
    },
    {
      id:"seq-11", title:"Booking a Course", type:"dialogue", difficulty:2, numChoices:4,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Admin: Hello, LearnHub Centre. How can I help you today?",
        "B. Caller: Hi, I'd like to enrol in the Digital Skills course starting next month.",
        "C. Admin: Certainly. Could I have your full name and email address?",
        "D. Caller: Of course. It's Nguyen Anh Tuan, and my email is tuan.na@email.com."
      ],
      correctOrder:[0,1,2,3],
      explanation:"Đặt khóa học qua điện thoại: Chào → Yêu cầu đăng ký → Hỏi thông tin → Cung cấp thông tin."
    },
    {
      id:"seq-12", title:"Environmental Report", type:"paragraph", difficulty:3, numChoices:5,
      instruction:"Sắp xếp các câu sau thành đoạn văn hoàn chỉnh:",
      items:[
        "A. Deforestation is one of the most pressing environmental issues facing our planet today.",
        "B. Every year, approximately 10 million hectares of forest are destroyed worldwide.",
        "C. This loss of forest cover contributes significantly to global warming and biodiversity loss.",
        "D. Many countries have implemented reforestation programmes to reverse this trend.",
        "E. Nevertheless, much more needs to be done if we want to preserve our forests for future generations."
      ],
      correctOrder:[0,1,2,3,4],
      explanation:"Thứ tự: Giới thiệu vấn đề → Số liệu → Hậu quả → Giải pháp → Kết luận (Nevertheless)."
    },
    {
      id:"seq-13", title:"Smart Home Technology", type:"dialogue", difficulty:3, numChoices:5,
      instruction:"Sắp xếp đoạn hội thoại sau đúng thứ tự:",
      items:[
        "A. Mom: I've just installed a smart home system. It can control the lights and temperature automatically.",
        "B. Son: Really? How does it know what temperature we prefer?",
        "C. Mom: It uses AI to learn our habits over time and adjusts settings accordingly.",
        "D. Son: That's amazing! But isn't it expensive to set up?",
        "E. Mom: The initial cost is high, but it saves a lot on electricity bills in the long run."
      ],
      correctOrder:[0,1,2,3,4],
      explanation:"Hội thoại: Giới thiệu → Hỏi cách hoạt động → Giải thích → Hỏi chi phí → Trả lời."
    },
    {
      id:"seq-14", title:"Invitation to Workshop", type:"letter", difficulty:1, numChoices:3,
      instruction:"Sắp xếp các phần của thư mời sau đúng thứ tự:",
      items:[
        "A. Dear Students, You are cordially invited to attend a workshop on 'Green Living for a Better Future'.",
        "B. The workshop will take place on Saturday, March 20th from 9 AM to 12 PM in the school auditorium.",
        "C. Please confirm your attendance by March 15th. We look forward to seeing you there!"
      ],
      correctOrder:[0,1,2],
      explanation:"Thư mời: Lời mời → Thông tin chi tiết (thời gian, địa điểm) → Yêu cầu xác nhận."
    },
    {
      id:"seq-15", title:"Online Learning Experience", type:"paragraph", difficulty:2, numChoices:4,
      instruction:"Sắp xếp các câu sau thành đoạn văn hoàn chỉnh:",
      items:[
        "A. Online learning has become increasingly popular in recent years, especially after the COVID-19 pandemic.",
        "B. Many universities now offer full degree programmes that can be completed entirely online.",
        "C. This flexibility allows students to study at their own pace while working or caring for family.",
        "D. As a result, more people than ever before have access to quality education regardless of their location."
      ],
      correctOrder:[0,1,2,3],
      explanation:"Đoạn văn: Xu hướng → Chi tiết → Lợi ích → Kết quả (As a result)."
    }
  ],

  // ============================================================
  // TEXT COMPLETION — 4 bài (mỗi bài 5 câu) = 20 câu
  // Đoạn văn 200-250 từ, điền câu/cụm từ phù hợp
  // 2 ngữ pháp + 3 từ vựng mỗi bài
  // ============================================================
  textCompletion: [
    {
      id:"tc-urb-1",
      title:"Urban Migration Challenges",
      topic:"Urbanisation",
      passage:`Urban migration is a global (1)______ that shows no signs of slowing down. Every year, millions of people move from rural areas to cities in search of better job opportunities and improved living conditions. However, this rapid growth creates numerous challenges for city planners.<br><br>One of the most pressing issues is housing. As the urban population grows, (2)______ for affordable housing increases dramatically. Many newcomers end up living in overcrowded slums with poor sanitation facilities. Traffic congestion is another major problem, (3)______ leads to long commute times and increased air pollution.<br><br>To address these challenges, many governments have started investing in smart city technologies. These include intelligent traffic management systems that can (4)______ traffic flow and reduce congestion. Additionally, sustainable building practices are being adopted to create energy-efficient housing. Despite these efforts, experts believe that (5)______ urbanisation requires a comprehensive approach that combines technology, policy, and community involvement.`,
      questions: [
        { id:1, options:["phenomenon","performance","philosophy","photosynthesis"], correct:0, type:"vocab", difficulty:1, explanation:"phenomenon = hiện tượng. Urban migration is a global phenomenon." },
        { id:2, options:["demand","supply","production","construction"], correct:0, type:"vocab", difficulty:1, explanation:"demand FOR = nhu cầu về. Demand for affordable housing." },
        { id:3, options:["which","what","who","where"], correct:0, type:"grammar", difficulty:2, explanation:"which thay thế cho 'Traffic congestion' (vật)." },
        { id:4, options:["optimise","organise","originate","operate"], correct:0, type:"vocab", difficulty:2, explanation:"optimise traffic flow = tối ưu hóa dòng giao thông." },
        { id:5, options:["managing","manage","managed","management"], correct:0, type:"grammar", difficulty:3, explanation:"managing urbanisation = việc quản lý đô thị hóa. V-ing làm chủ ngữ." }
      ]
    },
    {
      id:"tc-green-1",
      title:"Renewable Energy Solutions",
      topic:"The Green Environment",
      passage:`The world is facing a critical moment in the fight against climate change. Scientists warn that if we do not (1)______ our carbon emissions significantly within the next decade, the consequences will be catastrophic. Fortunately, renewable energy technologies offer a promising solution.<br><br>Solar and wind power have become increasingly (2)______ in recent years, making them competitive with fossil fuels. Many countries have set ambitious targets to transition to 100% renewable energy by 2050. For example, Denmark already generates over 50% of its electricity from wind power.<br><br>However, the transition to clean energy faces several (3)______. One major challenge is energy storage — the sun doesn't always shine, and the wind doesn't always blow. Battery technology (4)______ rapidly to address this issue. Another obstacle is the initial cost of installing renewable energy systems, although prices have dropped (5)______ over the past decade. With continued investment and innovation, a fully sustainable energy future is within reach.`,
      questions: [
        { id:1, options:["reduce","increase","maintain","ignore"], correct:0, type:"vocab", difficulty:1, explanation:"reduce carbon emissions = giảm khí thải carbon." },
        { id:2, options:["affordable","available","accessible","acceptable"], correct:0, type:"vocab", difficulty:2, explanation:"affordable = giá phải chăng. Năng lượng tái tạo ngày càng rẻ hơn." },
        { id:3, options:["obstacles","opportunities","outcomes","options"], correct:0, type:"vocab", difficulty:2, explanation:"obstacles = trở ngại/chướng ngại vật. Face obstacles = đối mặt trở ngại." },
        { id:4, options:["is advancing","advances","advanced","will advance"], correct:0, type:"grammar", difficulty:2, explanation:"is advancing = đang tiến bộ. Present continuous diễn tả xu hướng hiện tại." },
        { id:5, options:["significantly","significant","significance","signify"], correct:0, type:"grammar", difficulty:3, explanation:"significantly (adv) bổ nghĩa cho động từ 'dropped'. Giá đã giảm đáng kể." }
      ]
    },
    {
      id:"tc-ai-1",
      title:"AI in Healthcare",
      topic:"Artificial Intelligence",
      passage:`Artificial intelligence is revolutionising the healthcare industry in ways that were unimaginable just a few years ago. AI-powered systems can now analyse medical images with (1)______ that matches or even exceeds that of experienced doctors.<br><br>One of the most significant applications is in disease (2)______. AI algorithms can detect early signs of cancer, heart disease, and other conditions by analysing patient data from various sources. This early detection can save countless lives by enabling (3)______ treatment.<br><br>Moreover, AI is being used to develop personalised treatment plans based on a patient's genetic profile and medical history. This approach, (4)______ as precision medicine, ensures that each patient receives the most effective treatment for their specific condition. Pharmaceutical companies are also using AI to speed up the drug discovery process, potentially (5)______ the time it takes to bring new medicines to market from years to months.`,
      questions: [
        { id:1, options:["accuracy","account","activity","achievement"], correct:0, type:"vocab", difficulty:1, explanation:"accuracy = độ chính xác. AI phân tích hình ảnh y tế với độ chính xác cao." },
        { id:2, options:["diagnosis","disease","disorder","disability"], correct:0, type:"vocab", difficulty:2, explanation:"disease diagnosis = chẩn đoán bệnh. AI giúp chẩn đoán bệnh sớm." },
        { id:3, options:["timely","time","timed","timing"], correct:0, type:"grammar", difficulty:2, explanation:"timely treatment = điều trị kịp thời. Tính từ bổ nghĩa cho danh từ." },
        { id:4, options:["known","knowing","know","knew"], correct:0, type:"grammar", difficulty:2, explanation:"known AS = được biết đến như. Past participle dạng rút gọn mệnh đề quan hệ." },
        { id:5, options:["reducing","reduce","reduced","reduces"], correct:0, type:"vocab", difficulty:3, explanation:"reducing = giảm. V-ing sau 'potentially' diễn tả khả năng." }
      ]
    },
    {
      id:"tc-ll-1",
      title:"The Importance of Soft Skills",
      topic:"Lifelong Learning",
      passage:`In today's rapidly changing job market, technical skills alone are no longer (1)______ to guarantee career success. Employers increasingly value soft skills such as communication, teamwork, and problem-solving abilities.<br><br>Research shows that professionals who continuously develop their soft skills are more likely to (2)______ promoted and earn higher salaries. These skills are particularly important in the age of automation, (3)______ many routine tasks are being performed by machines.<br><br>Lifelong learning plays a crucial role in developing these competencies. Online platforms, workshops, and mentorship programmes provide (4)______ opportunities for professionals to enhance their interpersonal skills. Many companies now offer training programmes that focus on leadership, emotional intelligence, and creative thinking.<br><br>Experts recommend that individuals create a personal development plan and dedicate at least 30 minutes a day to learning new things. This habit not only improves professional (5)______ but also contributes to personal growth and well-being.`,
      questions: [
        { id:1, options:["sufficient","sufficiency","sufficiently","suffice"], correct:0, type:"grammar", difficulty:2, explanation:"sufficient (adj) = đủ. Are no longer sufficient = không còn đủ nữa." },
        { id:2, options:["get","getting","got","gets"], correct:0, type:"grammar", difficulty:1, explanation:"be likely to GET = có khả năng được. To + V-inf." },
        { id:3, options:["when","which","where","what"], correct:0, type:"vocab", difficulty:2, explanation:"when = khi mà. In the age of automation, when... = trong thời đại tự động hóa, khi mà..." },
        { id:4, options:["numerous","number","numeral","numeric"], correct:0, type:"vocab", difficulty:1, explanation:"numerous = nhiều. Numerous opportunities = nhiều cơ hội." },
        { id:5, options:["performance","perform","performer","performing"], correct:0, type:"vocab", difficulty:2, explanation:"professional performance = hiệu suất chuyên môn. Danh từ sau tính từ." }
      ]
    }
  ],

  // ============================================================
  // READING COMPREHENSION — 6 bài (8~10 câu mỗi bài) = ~54 câu
  // Đoạn văn 250-280 từ
  // Dạng: chi tiết, TRUE/NOT TRUE, đồng/trái nghĩa, từ tham chiếu
  // ============================================================
  readingComprehension: [
    {
      id:"rc-urb-1",
      title:"The Rise of Megacities",
      topic:"Urbanisation",
      passage:`In 1950, only two cities in the world — New York and Tokyo — had populations exceeding 10 million. Today, there are over 30 such megacities, and the United Nations predicts this number will continue to grow. By 2050, nearly 70% of the world's population is expected to live in urban areas.<br><br>The rapid growth of megacities presents both opportunities and challenges. On one hand, cities serve as centres of economic activity, innovation, and cultural exchange. They offer residents access to better healthcare, education, and employment opportunities. On the other hand, unplanned urbanisation leads to serious problems such as overcrowding, pollution, inadequate infrastructure, and social inequality.<br><br>Many developing countries are struggling to cope with the pace of urban growth. In cities like Lagos, Mumbai, and Jakarta, millions of people live in informal settlements with limited access to clean water and sanitation. Traffic congestion costs these cities billions of dollars in lost productivity each year.<br><br>To address these challenges, urban planners are turning to the concept of "smart cities" — urban areas that use technology and data to improve the efficiency of services and the quality of life for residents. Singapore, for example, uses sensors and AI to manage traffic flow, monitor air quality, and optimise energy consumption. While smart technology alone cannot solve all urban problems, it offers promising tools for building more sustainable and liveable cities.`,
      questions: [
        { q:"According to the passage, how many megacities existed in 1950?", options:["More than 30","About 10","Only 2","Nearly 70"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'In 1950, only two cities... had populations exceeding 10 million.'" },
        { q:"The word 'exceeding' in paragraph 1 is closest in meaning to ______.", options:["reaching","surpassing","approaching","maintaining"], correct:1, type:"synonym", difficulty:2, explanation:"exceeding = surpassing = vượt quá." },
        { q:"Which of the following is NOT mentioned as a benefit of living in cities?", options:["Better healthcare","Better education","Lower cost of living","Employment opportunities"], correct:2, type:"true-false", difficulty:2, explanation:"Bài viết KHÔNG đề cập 'lower cost of living'. Các lợi ích được nêu: healthcare, education, employment." },
        { q:"The word 'they' in paragraph 2 refers to ______.", options:["opportunities","challenges","cities","residents"], correct:2, type:"reference", difficulty:2, explanation:"'They offer residents...' → They = cities." },
        { q:"According to the passage, what is one problem caused by unplanned urbanisation?", options:["Higher education costs","Social inequality","Decreased population","Reduced innovation"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'unplanned urbanisation leads to... social inequality.'" },
        { q:"The word 'inadequate' in paragraph 2 is closest in meaning to ______.", options:["insufficient","excessive","advanced","reliable"], correct:0, type:"synonym", difficulty:2, explanation:"inadequate = insufficient = không đầy đủ/thiếu." },
        { q:"Which city is given as an example of a smart city?", options:["Lagos","Mumbai","Singapore","Jakarta"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'Singapore, for example, uses sensors and AI...'" },
        { q:"What does the passage suggest about smart technology?", options:["It can solve all urban problems","It is too expensive for developing countries","It offers promising tools but cannot solve everything","It has no real impact on cities"], correct:2, type:"detail", difficulty:3, explanation:"Dẫn chứng: 'smart technology alone cannot solve all urban problems, it offers promising tools.'" },
        { q:"What is the main idea of the passage?", options:["Smart cities are the only solution to urbanisation","Megacities are growing rapidly, bringing both benefits and challenges","All megacities have adequate infrastructure","Urban areas will shrink in the future"], correct:1, type:"detail", difficulty:2, explanation:"Ý chính: Megacities đang phát triển nhanh, mang lại cả cơ hội lẫn thách thức." },
        { q:"The word 'liveable' in the last paragraph is OPPOSITE in meaning to ______.", options:["comfortable","habitable","uninhabitable","pleasant"], correct:2, type:"antonym", difficulty:3, explanation:"liveable (đáng sống) ↔ uninhabitable (không thể ở được)." }
      ]
    },
    {
      id:"rc-green-1",
      title:"The Ocean Plastic Crisis",
      topic:"The Green Environment",
      passage:`Every year, approximately 8 million tons of plastic waste enters the world's oceans, threatening marine ecosystems and human health. This staggering amount is equivalent to dumping a garbage truck full of plastic into the ocean every minute. If current trends continue, scientists predict that by 2050, there will be more plastic in the ocean than fish by weight.<br><br>Plastic pollution affects marine life in numerous ways. Sea turtles mistake plastic bags for jellyfish, one of their primary food sources. Seabirds ingest small plastic fragments, which can cause internal injuries and death. Microplastics — tiny pieces of plastic less than 5mm in size — have been found in the tissues of fish consumed by humans, raising serious health concerns.<br><br>Several countries and organisations have taken steps to address this crisis. The European Union has banned single-use plastic items such as straws, cutlery, and cotton buds. Meanwhile, a Dutch organisation called The Ocean Cleanup has developed a system that uses ocean currents to collect floating plastic debris.<br><br>However, experts argue that cleanup efforts alone are not sufficient. They emphasise the importance of reducing plastic production at its source and developing biodegradable alternatives. Individual actions, such as using reusable bags and bottles, also play a crucial role in combating plastic pollution. The solution requires a combination of government policies, corporate responsibility, and public awareness.`,
      questions: [
        { q:"How much plastic waste enters the oceans annually?", options:["5 million tons","8 million tons","10 million tons","15 million tons"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'approximately 8 million tons of plastic waste enters the world's oceans.'" },
        { q:"The word 'staggering' in paragraph 1 is closest in meaning to ______.", options:["surprising","decreasing","normal","balanced"], correct:0, type:"synonym", difficulty:2, explanation:"staggering = surprising/astonishing = đáng kinh ngạc, gây sốc." },
        { q:"According to the passage, what do sea turtles mistake plastic bags for?", options:["Fish","Seaweed","Jellyfish","Coral"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'Sea turtles mistake plastic bags for jellyfish.'" },
        { q:"What are microplastics?", options:["Large pieces of plastic in the ocean","Tiny plastic pieces less than 5mm","Plastic bags","Biodegradable materials"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'Microplastics — tiny pieces of plastic less than 5mm in size.'" },
        { q:"Which of the following has the EU banned?", options:["All plastic products","Plastic bags only","Single-use plastic items","Plastic bottles"], correct:2, type:"detail", difficulty:2, explanation:"Dẫn chứng: 'The EU has banned single-use plastic items such as straws, cutlery, and cotton buds.'" },
        { q:"The word 'They' in the last paragraph refers to ______.", options:["countries","experts","organisations","governments"], correct:1, type:"reference", difficulty:2, explanation:"They = experts (các chuyên gia nhấn mạnh rằng...)." },
        { q:"Which of the following is TRUE according to the passage?", options:["Plastic pollution only affects marine animals","Cleanup efforts are sufficient to solve the crisis","Microplastics have been found in fish eaten by humans","The EU has banned all types of plastic"], correct:2, type:"true-false", difficulty:2, explanation:"Dẫn chứng: 'Microplastics... have been found in the tissues of fish consumed by humans.'" },
        { q:"The word 'biodegradable' in the last paragraph is closest in meaning to ______.", options:["long-lasting","decomposable naturally","artificial","synthetic"], correct:1, type:"synonym", difficulty:3, explanation:"biodegradable = decomposable naturally = có thể phân hủy sinh học." },
        { q:"What is the author's main argument in the last paragraph?", options:["Cleanup is the only solution","Only government policies can help","A combination of efforts is needed","Individual actions don't matter"], correct:2, type:"detail", difficulty:2, explanation:"Ý chính đoạn cuối: Giải pháp cần kết hợp chính sách, trách nhiệm doanh nghiệp, và nhận thức cộng đồng." },
        { q:"The word 'combating' in the last paragraph is OPPOSITE in meaning to ______.", options:["fighting","opposing","supporting","attacking"], correct:2, type:"antonym", difficulty:3, explanation:"combating (chống lại) ↔ supporting (ủng hộ)." }
      ]
    },
    {
      id:"rc-ai-1",
      title:"The Future of Work with AI",
      topic:"Artificial Intelligence",
      passage:`The rise of artificial intelligence and automation is fundamentally changing the nature of work. A report by the World Economic Forum estimates that by 2025, machines will perform more tasks than humans in the workplace. This shift has raised concerns about widespread job displacement, particularly in sectors such as manufacturing, retail, and transportation.<br><br>However, many economists argue that while AI will eliminate certain jobs, it will also create entirely new ones. Historical evidence supports this view — the Industrial Revolution destroyed many traditional jobs but ultimately created far more employment opportunities. Similarly, AI is expected to generate new roles in areas such as data analysis, AI ethics, robotics maintenance, and cybersecurity.<br><br>The key challenge lies in ensuring that workers have the skills needed for these new positions. Governments and educational institutions must invest heavily in retraining programmes and lifelong learning initiatives. Countries like Singapore and Finland have already introduced national skills programmes that help workers transition to technology-driven careers.<br><br>Moreover, some experts believe that AI will not replace humans entirely but rather augment human capabilities. In healthcare, for instance, AI assists doctors in making more accurate diagnoses, but the final decision still rests with the human physician. This collaborative approach — where humans and machines work together — is likely to define the future of work.`,
      questions: [
        { q:"According to the World Economic Forum, by 2025 ______.", options:["all jobs will be automated","machines will do more tasks than humans","AI will be banned in workplaces","unemployment will reach 50%"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'by 2025, machines will perform more tasks than humans in the workplace.'" },
        { q:"The word 'displacement' in paragraph 1 is closest in meaning to ______.", options:["replacement","placement","movement","advancement"], correct:0, type:"synonym", difficulty:2, explanation:"displacement = replacement = sự thay thế/mất việc." },
        { q:"Which of the following is NOT mentioned as a new job created by AI?", options:["Data analysis","AI ethics","Traditional manufacturing","Cybersecurity"], correct:2, type:"true-false", difficulty:2, explanation:"Traditional manufacturing KHÔNG được nêu là nghề mới. Các nghề mới: data analysis, AI ethics, robotics maintenance, cybersecurity." },
        { q:"The word 'it' in paragraph 2 refers to ______.", options:["the Industrial Revolution","AI","employment","economics"], correct:0, type:"reference", difficulty:2, explanation:"'the Industrial Revolution destroyed many traditional jobs but ultimately IT created...' → it = the Industrial Revolution." },
        { q:"Which countries are mentioned as having national skills programmes?", options:["USA and UK","Japan and Korea","Singapore and Finland","Germany and France"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'Countries like Singapore and Finland have already introduced national skills programmes.'" },
        { q:"The word 'augment' in the last paragraph is closest in meaning to ______.", options:["replace","enhance","reduce","control"], correct:1, type:"synonym", difficulty:2, explanation:"augment = enhance = tăng cường, nâng cao." },
        { q:"According to the passage, in healthcare, AI ______.", options:["makes all medical decisions","replaces doctors completely","helps doctors make better diagnoses","is not used at all"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'AI assists doctors in making more accurate diagnoses.'" },
        { q:"What is the main idea of the passage?", options:["AI will destroy all jobs","AI changes work but creates new opportunities alongside challenges","Workers don't need new skills","AI should be banned to protect jobs"], correct:1, type:"detail", difficulty:2, explanation:"Ý chính: AI thay đổi công việc nhưng cũng tạo cơ hội mới, cần đào tạo kỹ năng." }
      ]
    },
    {
      id:"rc-ll-1",
      title:"The Power of Reading",
      topic:"Lifelong Learning",
      passage:`Research consistently shows that reading is one of the most effective ways to improve cognitive function and overall well-being. A study by the University of Sussex found that just six minutes of reading can reduce stress levels by up to 68%, making it more effective than other relaxation methods such as listening to music or going for a walk.<br><br>Beyond stress relief, regular reading has been shown to strengthen neural pathways in the brain, improving memory, concentration, and analytical thinking skills. People who read regularly also tend to have a larger vocabulary and better communication skills, which gives them advantages in both personal and professional settings.<br><br>Despite these well-documented benefits, reading habits have declined significantly in recent decades. The rise of social media and digital entertainment has led many people, especially younger generations, to spend less time with books. According to a 2023 survey, the average adult reads only four books per year, compared to twelve in the 1990s.<br><br>Educators and psychologists recommend setting aside at least 20 minutes of reading time each day. They suggest starting with topics that genuinely interest the reader, whether fiction, science, history, or self-improvement. Public libraries, e-book platforms, and reading clubs provide accessible ways to develop and maintain this valuable habit. As the saying goes: "A reader lives a thousand lives before he dies."`,
      questions: [
        { q:"How much can reading reduce stress levels according to the University of Sussex?", options:["Up to 50%","Up to 68%","Up to 75%","Up to 80%"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'six minutes of reading can reduce stress levels by up to 68%.'" },
        { q:"The word 'cognitive' in paragraph 1 is closest in meaning to ______.", options:["physical","emotional","mental","social"], correct:2, type:"synonym", difficulty:2, explanation:"cognitive = mental = liên quan đến nhận thức/trí tuệ." },
        { q:"Which of the following is TRUE about regular readers according to the passage?", options:["They have worse memory","They communicate poorly","They tend to have larger vocabularies","They spend more time on social media"], correct:2, type:"true-false", difficulty:1, explanation:"Dẫn chứng: 'People who read regularly also tend to have a larger vocabulary.'" },
        { q:"What has caused the decline in reading habits?", options:["Higher book prices","Lack of libraries","Rise of social media and digital entertainment","Government policies"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'The rise of social media and digital entertainment has led many people to spend less time with books.'" },
        { q:"How many books does the average adult read per year according to the 2023 survey?", options:["2 books","4 books","8 books","12 books"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'the average adult reads only four books per year.'" },
        { q:"The word 'accessible' in the last paragraph is OPPOSITE in meaning to ______.", options:["available","reachable","unreachable","convenient"], correct:2, type:"antonym", difficulty:2, explanation:"accessible (dễ tiếp cận) ↔ unreachable (không thể tiếp cận)." },
        { q:"What do experts recommend as a minimum daily reading time?", options:["10 minutes","15 minutes","20 minutes","30 minutes"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'setting aside at least 20 minutes of reading time each day.'" },
        { q:"What is the main purpose of the passage?", options:["To criticize young people's reading habits","To promote the benefits of regular reading","To compare books with social media","To sell e-book subscriptions"], correct:1, type:"detail", difficulty:2, explanation:"Mục đích chính: Giới thiệu và khuyến khích lợi ích của việc đọc sách thường xuyên." }
      ]
    },
    {
      id:"rc-urb-2",
      title:"Green Buildings and Sustainable Architecture",
      topic:"Urbanisation",
      passage:`As cities expand and the effects of climate change become more evident, architects and urban planners are increasingly turning to green building design. Green buildings are structures that are environmentally responsible and resource-efficient throughout their lifecycle — from planning and design to construction, operation, maintenance, and demolition.<br><br>One of the key features of green buildings is their energy efficiency. They use advanced insulation materials, solar panels, and smart energy management systems to reduce electricity consumption by up to 40% compared to conventional buildings. Some buildings even generate more energy than they consume, making them "net-zero" or "energy-positive" structures.<br><br>Water conservation is another important aspect. Green buildings incorporate rainwater harvesting systems, greywater recycling, and low-flow fixtures to minimise water waste. In countries facing water scarcity, such as Australia and parts of the Middle East, these features are becoming essential rather than optional.<br><br>The concept of green buildings also extends to the materials used in construction. Sustainable materials such as bamboo, recycled steel, and reclaimed wood are preferred over traditional materials that have a higher environmental footprint. Additionally, green spaces such as rooftop gardens and vertical forests help improve air quality and provide natural cooling, reducing the need for air conditioning.`,
      questions: [
        { q:"What is a green building according to the passage?", options:["A building painted green","A building that is environmentally responsible and resource-efficient","A building made entirely of wood","A building without electricity"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'Green buildings are structures that are environmentally responsible and resource-efficient.'" },
        { q:"By how much can green buildings reduce electricity consumption?", options:["Up to 20%","Up to 30%","Up to 40%","Up to 50%"], correct:2, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'reduce electricity consumption by up to 40%.'" },
        { q:"The word 'incorporate' in paragraph 3 is closest in meaning to ______.", options:["eliminate","include","remove","prevent"], correct:1, type:"synonym", difficulty:2, explanation:"incorporate = include = bao gồm, tích hợp." },
        { q:"Which of the following is NOT mentioned as a sustainable building material?", options:["Bamboo","Recycled steel","Concrete","Reclaimed wood"], correct:2, type:"true-false", difficulty:2, explanation:"Concrete (bê tông) KHÔNG được đề cập. Các vật liệu bền vững: bamboo, recycled steel, reclaimed wood." },
        { q:"The word 'their' in paragraph 1 refers to ______.", options:["architects","cities","green buildings","effects"], correct:2, type:"reference", difficulty:2, explanation:"'throughout THEIR lifecycle' → their = green buildings." },
        { q:"What does 'net-zero' mean in the context of the passage?", options:["A building that uses no internet","A building that generates as much energy as it consumes","A building with zero floors","A building with no cost"], correct:1, type:"detail", difficulty:2, explanation:"\"Net-zero\" hoặc \"energy-positive\" = tòa nhà tạo ra năng lượng bằng hoặc nhiều hơn lượng tiêu thụ." },
        { q:"Why are water conservation features becoming essential in Australia?", options:["Because they are cheap","Because of water scarcity","Because the government requires them","Because of flooding"], correct:1, type:"detail", difficulty:2, explanation:"Dẫn chứng: 'In countries facing water scarcity, such as Australia... these features are becoming essential.'" },
        { q:"The word 'footprint' in the last paragraph is closest in meaning to ______.", options:["impact","design","size","shape"], correct:0, type:"synonym", difficulty:3, explanation:"environmental footprint = environmental impact = tác động môi trường." }
      ]
    },
    {
      id:"rc-ai-2",
      title:"AI and Privacy Concerns",
      topic:"Artificial Intelligence",
      passage:`While artificial intelligence brings numerous benefits to society, it also raises significant privacy concerns that cannot be ignored. AI systems rely on vast amounts of personal data to function effectively, and the collection, storage, and use of this data have become major issues in the digital age.<br><br>Facial recognition technology, for example, is now widely used by governments and businesses for security purposes. However, critics argue that this technology can be misused for mass surveillance, infringing on people's right to privacy. In 2020, several major cities in the United States, including San Francisco and Boston, passed laws restricting the use of facial recognition by government agencies.<br><br>Another concern is the use of AI in social media algorithms. These algorithms track users' online behaviour — what they click, share, and spend time viewing — to create detailed profiles for targeted advertising. Many users are unaware of how much personal information is being collected about them, and data breaches have exposed millions of people's private information to hackers.<br><br>To protect privacy in the age of AI, governments around the world are introducing new regulations. The European Union's General Data Protection Regulation (GDPR) gives individuals greater control over their personal data, including the right to know what data is collected and the right to have it deleted. Despite these efforts, the rapid pace of technological advancement means that privacy laws often struggle to keep up with the latest developments.`,
      questions: [
        { q:"What do AI systems need to function effectively?", options:["Expensive hardware","Large amounts of personal data","Government permission","Physical sensors only"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'AI systems rely on vast amounts of personal data to function effectively.'" },
        { q:"The word 'infringing' in paragraph 2 is closest in meaning to ______.", options:["protecting","respecting","violating","supporting"], correct:2, type:"synonym", difficulty:2, explanation:"infringing ON = violating = xâm phạm, vi phạm." },
        { q:"Which cities have restricted facial recognition use?", options:["New York and Los Angeles","San Francisco and Boston","London and Paris","Tokyo and Seoul"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'San Francisco and Boston, passed laws restricting the use of facial recognition.'" },
        { q:"How do social media AI algorithms work according to the passage?", options:["They randomly show content","They track users' online behaviour to create profiles","They only show news","They block personal data"], correct:1, type:"detail", difficulty:2, explanation:"Dẫn chứng: 'These algorithms track users' online behaviour... to create detailed profiles.'" },
        { q:"The word 'them' in paragraph 3 refers to ______.", options:["algorithms","hackers","users","companies"], correct:2, type:"reference", difficulty:2, explanation:"'about THEM' → them = users (many users don't know how much information is collected about THEM)." },
        { q:"What does GDPR give individuals?", options:["Free internet access","Greater control over personal data","AI technology","Social media accounts"], correct:1, type:"detail", difficulty:1, explanation:"Dẫn chứng: 'GDPR gives individuals greater control over their personal data.'" },
        { q:"Which of the following is TRUE according to the passage?", options:["AI does not collect personal data","All countries have strong privacy laws","Privacy laws often can't keep up with technology","Facial recognition is banned worldwide"], correct:2, type:"true-false", difficulty:2, explanation:"Dẫn chứng: 'privacy laws often struggle to keep up with the latest developments.'" },
        { q:"What is the main concern discussed in the passage?", options:["AI is too expensive","AI threatens personal privacy","AI is not useful","AI should be banned everywhere"], correct:1, type:"detail", difficulty:1, explanation:"Mối lo chính: AI đe dọa quyền riêng tư cá nhân thông qua thu thập dữ liệu và giám sát." }
      ]
    }
  ]
};

// ============================================================
// HELPER: Tính tổng câu hỏi
// ============================================================
function getMatranStats() {
  const cloze = MATRAN_DATA.clozeTests.reduce((s,b) => s + b.questions.length, 0);
  const seq = MATRAN_DATA.sequencing.length;
  const tc = MATRAN_DATA.textCompletion.reduce((s,b) => s + b.questions.length, 0);
  const rc = MATRAN_DATA.readingComprehension.reduce((s,b) => s + b.questions.length, 0);
  return { cloze, seq, tc, rc, total: cloze + seq + tc + rc };
}
