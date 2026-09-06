export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Papers" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Mrunal Vibhute",
  location: "Gainesville, FL",
  roleWords: [
    "AI/ML Researcher",
    "Software Engineer",
    "NLP Enthusiast",
    "Published Author",
  ],
  email: "mvibhute@ufl.edu",
  github: "https://github.com/Mrun9/",
  linkedin: "https://linkedin.com/in/mrunal-vibhute-b6b392235/",
  orcid: "https://orcid.org/0009-0009-5843-7559",
  scholar: "https://scholar.google.com/citations?hl=en",
  medium: "https://medium.com/@mrunalvibhute09",
  resume: "/Mrunal Vibhute ___ Resume.pdf",
  photo: "/mrunalvibhutePHOTO.jpeg",
};

export const stats = [
  { value: "5", label: "Publications" },
  { value: "7", label: "Citations" },
  { value: "20+", label: "Projects" },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R", "Java"],
  },
  {
    title: "ML / AI Concepts",
    items: [
      "LLMs",
      "RAG",
      "Transformers",
      "CNN",
      "LSTM / RNN",
      "NLP",
      "Explainable AI",
      "Autoencoders",
      "Chain-of-thought",
      "SLMs",
      "Data Visualization",
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Hugging Face",
    ],
  },
  {
    title: "Systems & Deployment",
    items: ["Docker", "REST APIs", "Gradio", "Streamlit", "Prometheus", "Grafana"],
  },
  {
    title: "Tools & Cloud",
    items: ["GitHub", "VS Code", "GCP", "AWS", "Jupyter"],
  },
  {
    title: "Coursework Highlights",
    items: [
      "Pattern Recognition in Intelligent Systems",
      "Agentic AI",
      "Engineering Innovation",
      "Trustworthy ML",
      "Computer Vision",
      "AI Ethics",
      "Applied Deep Learning",
      "Blockchain",
      "DevOps",
    ],
  },
];

export const education = [
  {
    date: "Aug 2025 - Expected May 2027",
    title: "M.S. Artificial Intelligence Systems",
    organization: "University of Florida - Gainesville, FL",
    detail: "GPA: 3.89/4.0",
    description:
      "Current coursework: Pattern Recognition in Intelligent Systems, Agentic AI, and Engineering Innovation. Additional coursework includes AI Systems, Machine Learning, Applied Deep Learning, Trustworthy ML, Computer Vision & Image Processing, and AI Ethics.",
  },
  {
    date: "Aug 2021 - Jun 2025",
    title: "B.Tech, Computer Engineering",
    organization: "Cummins College of Engineering - Pune, India",
    detail: "GPA: 8.7/10",
    description:
      "Honors in Data Science & ML. Coursework: Software Engineering, Web Dev, Android Dev, Data Structures, Algorithms, OS, Networks & Security, Blockchain, DBMS, DevOps.",
  },
  {
    date: "2019 - 2021",
    title: "Higher Secondary Certificate / High School Diploma",
    organization:
      "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    detail: "Percentage: 92.50%",
    description: "Ambrosia Junior College of Science - Nashik, India.",
  },
  {
    date: "2005 - 2019",
    title: "Secondary School Certificate / Grade 10",
    organization:
      "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    detail: "Percentage: 91.20%",
    description: "St. Philomena Convent High School - Nashik, India.",
  },
];

export const experiences = [
  {
    date: "Jun 2026 - Aug 2026",
    title: "Software Intern, Digital Cloud Solutions",
    organization: "KPMG India",
    description:
      "Built enterprise AI applications using Azure OpenAI, LangChain, GitHub Copilot, and Azure cloud services to automate software development workflows, enabling real-time monitoring, insight generation, and intelligent SDLC automation. Developed a domain-independent platform of multi-agent workflows for automated data understanding, autonomous KPI discovery, insight generation, and predictive analytics.",
    cvBullets: [
      "Built enterprise AI applications with Azure OpenAI, LangChain, GitHub Copilot, and Azure services, automating software development workflows and enabling real-time monitoring.",
      "Developed a domain-independent multi-agent analytics platform that automated data understanding, KPI discovery, insight generation, and predictive analysis.",
    ],
  },
  {
    date: "Apr 2026 - Present",
    title: "AI Software Engineer",
    organization: "Prepify - Evy",
    description:
      "Building GenAI product features for Evy, a UF student-founded platform for AI-powered candidate interviews. I work with LLM prompting, agentic workflows, evals, and AI coding agents, recently focusing on observability dashboards that track latency, token usage, interview quality, hallucinations, guardrails, and unwanted behavior.",
    cvBullets: [
      "Build GenAI interview features with LLM prompting, agentic workflows, evaluations, and AI coding agents, supporting an AI-powered candidate interview platform.",
      "Develop observability dashboards that track latency, token usage, interview quality, hallucinations, guardrails, and unwanted model behavior.",
    ],
    links: [{ label: "Visit Evy", href: "https://evy.io/" }],
  },
  {
    date: "Feb 2026 - Present",
    title: "Graduate Student Assistant",
    organization: "SERMOS Lab - University of Florida",
    description:
      "Supporting a transdisciplinary AI and data science lab that builds smart, equitable, resilient mobility systems. I read research papers, benchmark models, assist PhD research, and currently work with spatio-temporal models and transformer-based methods.",
    cvBullets: [
      "Review research literature and benchmark models to support PhD-led work on smart, equitable, and resilient mobility systems.",
      "Develop and evaluate spatio-temporal and transformer-based methods for transportation-focused AI research.",
    ],
    links: [
      {
        label: "Visit SERMOS Lab",
        href: "https://faculty.eng.ufl.edu/sermos-lab/",
      },
    ],
  },
  {
    date: "Jun 2024 - Dec 2024",
    title: "Research Intern",
    organization: "Center for Research Computing - University of Notre Dame, IN",
    description:
      "Created and deployed an AI agent for data acquisition from dark marketplaces. The hardest piece was automating puzzle image-based CAPTCHA solving, which led me into multimodal model evaluation, image preprocessing, and a research presentation at Notre Dame.",
    cvBullets: [
      "Built and deployed an AI agent for data acquisition from dark marketplaces, automating a complex research collection workflow.",
      "Developed a computer-vision pipeline for puzzle-image CAPTCHA solving within a multimodal agent workflow.",
      "Evaluated multimodal models and image-preprocessing methods, then presented the findings at Notre Dame's Summer Undergraduate Research Symposium.",
    ],
    links: [
      { label: "Visit CRC", href: "https://crc.nd.edu/" },
      {
        label: "Read Medium blog",
        href: "https://medium.com/@mrunalvibhute09/solo-at-20-my-journey-from-india-to-notre-dame-af9c1d75c917",
      },
    ],
  },
];

export const projectDomains = [
  {
    id: "ai-systems",
    title: "AI Systems & Agents",
    description: "Language intelligence, multimodal systems, AI safety, and agent collaboration.",
    image: "/project-domains/ai-systems.jpg",
    imageAlt: "Abstract neural network and security shield representing intelligent AI systems",
  },
  {
    id: "perception-ml",
    title: "Perception & Predictive ML",
    description: "Models that interpret speech, vision, sentiment, and real-world signals.",
    image: "/project-domains/perception-ml.jpg",
    imageAlt: "Abstract hand gesture, speech waveform, and analytical contours representing perception models",
  },
  {
    id: "software-web",
    title: "Software Products & Web",
    description: "User-facing applications that turn technical ideas into usable experiences.",
    image: "/project-domains/software-web-v2.jpg",
    imageAlt: "Layered web and mobile interfaces representing software products",
  },
];

export const projects = [
  {
    title: "Adversarial Jailbreak Detection System for LLMs",
    domain: "ai-systems",
    bullets: [
          "Enabled sub-millisecond prompt matching by using a FAISS semantic cache.",
          "Added a second detection stage by pairing cached matches with a fine-tuned transformer classifier.",
          "Brought jailbreak detection to live LLM traffic through a browser extension."
    ],
    tags: ["DistilBERT", "FAISS", "Adversarial ML", "Browser Extension", "Python"],
    github: "https://github.com/Mrun9/Jailbreaking-Detection",
    demo: "https://youtu.be/2m1bjQLTjmw",
    featured: true,
  },
  {
    title: "Co-Wingman - Real-Time AI Speech Anxiety Detection",
    domain: "perception-ml",
    bullets: [
          "Detected speech anxiety with 96% recall using a CNN-LSTM trained on MFCC features.",
          "Delivered predictions in 1.2–1.5 seconds through a PyTorch inference pipeline.",
          "Supported ongoing speech monitoring by analyzing rolling 5-second audio windows."
    ],
    tags: ["PyTorch", "CNN-LSTM", "Whisper", "SHAP", "Docker", "Grafana"],
    github: "https://github.com/Mrun9/Co-Wingman-AIS-Project",
    demo: "https://youtu.be/-m-4j05gbFc",
    featured: true,
  },
  {
    title: "Currency Exchange Rate Prediction via Sentiment Analysis",
    domain: "perception-ml",
    bullets: [
          "Predicted USD-to-INR rates at 90% testing accuracy using Decision Tree Regressors.",
          "Grounded exchange-rate forecasts in 10+ years of historical data.",
          "Added sentiment analysis by processing 2,000+ tweets through an NLP pipeline."
    ],
    tags: ["Scikit-learn", "NLTK", "Sentiment Analysis", "Streamlit"],
    github: "https://github.com/Mrun9/Speech_Alchemy",
    featured: true,
  },
  {
    title: "CruxCapture - Multimodal Summarization Platform",
    domain: "ai-systems",
    timeframe: "Jan 2024 - Apr 2024",
    bullets: [
          "Summarized text, audio, and video in under 10 seconds using external AI APIs.",
          "Enabled authenticated access and cloud sync through Firebase integration.",
          "Made summaries portable through PDF export and email and messaging sharing."
    ],
    tags: ["Java", "Android Studio", "Firebase", "REST APIs", "AI APIs"],
    github: "https://github.com/sayli2003/Summerizer",
  },
  {
    title: "Quiz Application",
    domain: "software-web",
    timeframe: "Jan 2025 - Apr 2025",
    bullets: [
          "Enabled role-based quiz access through a full-stack platform with authentication.",
          "Tracked scores and user performance through SQL-backed quiz management and analytics.",
          "Addressed SQL injection and XSS vulnerabilities through security testing and patches."
    ],
    tags: ["Python", "Flask", "SQL", "JavaScript", "Security"],
    github: "https://github.com/aaditeeiche/quiz-master-isl",
  },
  {
    title: "Pawsitivity - Rescue Center Path Finder",
    domain: "perception-ml",
    bullets: [
          "Identified the nearest rescue center for an injured dog using Dijkstra’s algorithm.",
          "Enabled location-based rescue routing by modeling the search as a graph problem.",
          "Applied data structures to emergency routing through a Java project."
    ],
    tags: ["Data Structures", "Algorithms", "Dijkstra", "Java"],
    github: "https://github.com/Mrun9/Pawsitivity.git",
  },
  {
    title: "Stock Prediction using CrewAI",
    domain: "ai-systems",
    bullets: [
          "Automated company research by coordinating specialized CrewAI agents.",
          "Built investment context by gathering market news and analyzing financials and risks.",
          "Delivered insights and recommendations through a structured investment report."
    ],
    tags: ["Python", "CrewAI", "OpenAI", "Agents", "Financial Analysis"],
    github: "https://github.com/Mrun9/Stock_Prediction-using-CrewAI",
  },
  {
    title: "Outings - Trip Planning Website",
    domain: "software-web",
    bullets: [
          "Enabled outing discovery through a dedicated trip-planning webpage.",
          "Supported travel-idea organization with an HTML, CSS, Bootstrap, and JavaScript interface.",
          "Demonstrated the working trip-planning experience through a recorded walkthrough."
    ],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Mrun9/Outings",
    demo: "https://youtu.be/QwQYDMSwCes",
  },
  {
    title: "Modern Elegance - Event Planning Website",
    domain: "software-web",
    bullets: [
          "Presented Modern Elegance’s event services through a dedicated planning website.",
          "Supported client browsing through an interface built with HTML, CSS, and JavaScript.",
          "Communicated the event brand’s visual style through the website design."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web Design"],
    github: "https://github.com/Mrun9/Modern-Elegance-Website.git",
  },
  {
    title: "Sign Language Detection using KNN",
    domain: "perception-ml",
    bullets: [
          "Recognized hand signs at 96% average accuracy across letters using KNN.",
          "Made predicted signs readable by displaying recognized letters as text.",
          "Supported accessible communication through a Python and OpenCV vision model."
    ],
    tags: ["Machine Learning", "Computer Vision", "KNN", "Python", "OpenCV"],
    github: "https://github.com/Aditi-Wagh/signrecognition.git",
  },
];

export const hackathons = [
  {
    title: "DataFest 2026",
    achievement: "Finalist",
    timeframe: "2026",
    details: [
      "Worked with multiple medical datasets and used JMP software to explore patterns, extract observations, and present useful insights.",
      "Focused on translating messy healthcare data into clear analytical findings and a concise presentation narrative.",
    ],
  },
  {
    title: "All India Women Hackathon 2024",
    achievement: "Finalist",
    timeframe: "2024",
    details: [
      "Problem statement: Braille learning application for specially abled children.",
      "Designed around haptic touch technology as the key differentiator, making learning more tactile, interactive, and accessible.",
      "Focused on inclusive product thinking, child-friendly interaction flows, and practical assistive technology.",
    ],
  },
  {
    title: "Smart India Hackathon 2023",
    achievement: "Winner",
    timeframe: "2023 · 36-hour offline hackathon",
    details: [
      "Problem statement: Efficient enumeration of non-indexed URLs on the dark web.",
      "Selected among the top 5 teams from a national pool of participating teams across India.",
      "Built under the pressure of a 36-hour offline sprint, with emphasis on search strategy, automation, and presenting a working technical approach.",
    ],
  },
  {
    title: "Mined Hackathon 2023",
    achievement: "Winner",
    timeframe: "2023",
    details: [
      "Problem statement: USD to INR exchange-rate prediction using historical currency values and sentiment analysis.",
      "Combined time-series signals with sentiment features to reason about currency movement and market behavior.",
      "The project later shaped my interest in applied forecasting, financial data, and NLP-driven market signals.",
    ],
  },
  {
    title: "Aavishkar 2022",
    achievement: "Winner at Zonal and Collegiate Level",
    timeframe: "2022 · University-level research competition",
    details: [
      "Built a smart IoT system to monitor electricity usage and provide insights for more efficient power consumption.",
      "Used a PIR sensor to detect human presence in a room and an Android app to remotely control power supply through relay switches and circuit boards.",
      "Focused on practical energy savings, hardware-software integration, and user-facing recommendations.",
    ],
  },
];

export const achievements = [
  {
    year: "2024 - 2026",
    description:
      "Published five AI/ML research papers through Springer, SciTePress, and arXiv, including four first-author publications.",
  },
  {
    year: "2024 - 2026",
    description:
      "Presented research at three academic symposia hosted by the University of Notre Dame and the University of Florida.",
  },
  {
    year: "2025",
    description:
      "Graduated with a B.Tech in Computer Engineering and Honors in Data Science & Machine Learning, earning an 8.7/10 GPA.",
  },
  {
    year: "2026",
    description:
      "Selected as a finalist at DataFest 2026 for translating complex healthcare datasets into clear analytical findings.",
  },
  {
    year: "2024",
    description:
      "Selected as a finalist in the All India Women Hackathon for designing a haptic Braille-learning application for children.",
  },
  {
    year: "2023",
    description:
      "Won Smart India Hackathon after placing among the top five teams with a dark-web URL enumeration solution built during a 36-hour sprint.",
  },
  {
    year: "2023",
    description:
      "Won the Mined Hackathon with a USD-INR forecasting system combining historical exchange-rate data and sentiment analysis.",
  },
  {
    year: "2022",
    description:
      "Won Aavishkar at both the zonal and collegiate levels with an IoT system for monitoring and reducing electricity consumption.",
  },
];

export const posters = [
  {
    title: "Solving Captchas via Computer Vision Techniques in Multimodal LLMs",
    symposium: "Summer Undergraduate Research Symposium",
    date: "July 2024",
    location: "University of Notre Dame",
    description:
      "Presented work from my summer research internship, where I explored CAPTCHA puzzle solving with computer vision techniques inside a multimodal LLM agent workflow.",
    images: [
      {
        src: "/posters/captcha_research_poster.jpg",
        alt: "Research poster explaining CAPTCHA solving with computer vision and multimodal language models",
        caption: "Research poster: CAPTCHA solving with computer vision and multimodal LLMs",
      },
      {
        src: "/posters/isure_symposium.jpeg",
        alt: "Mrunal Vibhute presenting her CAPTCHA research poster at the University of Notre Dame",
        caption: "Presenting at the Notre Dame Summer Undergraduate Research Symposium · July 2024",
      },
      {
        src: "/posters/isure_symposium_certificate.jpeg",
        alt: "Certificate of achievement awarded to Mrunal Vibhute by the University of Notre Dame",
        caption: "Certificate of Achievement · International Summer Undergraduate Research Experience",
      },
    ],
  },
  {
    title: "Co-Wingman: Real-Time Speech Anxiety Detection",
    symposium: "AI Systems Course Symposium",
    date: "December 2025",
    location: "University of Florida",
    description:
      "Presented my first-semester UF course project on real-time speech anxiety detection, connecting model design, audio features, and practical AI system behavior.",
    images: [
      {
        src: "/posters/Co-wingman-poster.jpeg",
        alt: "Co-Wingman real-time speech anxiety detection research poster",
        caption: "Co-Wingman system poster · AI Systems Course Symposium",
      },
      {
        src: "/posters/AIS_symposium.jpeg",
        alt: "Students and faculty gathered at the University of Florida AI Systems Course Symposium",
        caption: "AI Systems Course Symposium cohort · University of Florida, December 2025",
      },
    ],
  },
  {
    title: "Adversarial Jailbreak Prompt Detection for LLMs",
    symposium: "EED Research Symposium",
    date: "April 2026",
    location: "University of Florida",
    description:
      "Presented a two-stage defense pipeline combining cache-based matching and DistilBERT classification to detect jailbreak and prompt-injection attempts.",
    images: [
      {
        src: "/posters/Jailbreak_poster.png",
        alt: "Adversarial jailbreak prompt detection for large language models research poster",
        caption: "Research poster: two-stage adversarial jailbreak prompt detection for LLMs",
      },
      {
        src: "/posters/eed_symposium.jpeg",
        alt: "Mrunal Vibhute standing beside her adversarial jailbreak prompt detection poster",
        caption: "Presenting the jailbreak detection project at the EED Research Symposium · April 2026",
      },
    ],
  },
];

export const publications = [
  {
    year: "2026",
    title: "PEMAND: Persona-Enriched Multi-Agent Negotiation for Household Decision-Making",
    authors: [
      "Yuran Sun",
      "Mustafa Sameen",
      "Yaotian Zhang",
      "Rongguan Gu",
      "Mrunal Vibhute",
      "Chia-yu Wu",
      "Yuanyuan Lei",
      "Xilei Zhao",
    ],
    venue: "arXiv preprint",
    description:
      "Introduces a theory-grounded multi-agent framework that models household personas and structured negotiation, outperforming state-of-the-art benchmarks across travel behavior and residential mobility datasets.",
    read: "https://arxiv.org/html/2604.10475v2",
  },
  {
    year: "2026",
    title: "Evaluating Multimodal LLMs on CAPTCHAs with LLM Puzzler",
    authors: ["Mrunal Vibhute", "Kristina Radivojevic", "Paul Brenner"],
    venue: "Agents and Artificial Intelligence (ICAART 2025) - Springer LNAI 16516",
    description:
      "Evaluates OpenAI and Anthropic multimodal models on increasingly complex image-puzzle CAPTCHAs, providing a reproducible framework for measuring visual reasoning accuracy and response time.",
    read: "https://link.springer.com/chapter/10.1007/978-3-032-25029-2_9",
  },
  {
    year: "2025",
    title: "Multimodal Web Agents for Automated (Dark) Web Navigation",
    authors: ["Mrunal Vibhute", "Neol Gutierrez", "Kristina Radivojevic", "Paul R. Brenner"],
    venue: "ICAART 2025 - Lecture Notes in Artificial Intelligence (LNAI)",
    description:
      "Proposes an autonomous browsing system that uses visual and textual cues to traverse both surface and hidden websites for complex information-gathering tasks.",
    read: "https://www.scitepress.org/Papers/2025/131716/131716.pdf",
  },
  {
    year: "2025",
    title: "Interpretable Fake News Detection Using Neural Networks and LIME",
    authors: ["Mrunal Vibhute", "Anjali Naik"],
    venue: "ISD4SD 2025 - Springer",
    description:
      "Builds a transparent misinformation classifier that highlights human-readable evidence within articles to explain why content is considered unreliable.",
    read: "https://www.researchgate.net/publication/397062758_Interpretable_Fake_News_Detection_Using_Neural_Networks_and_LIME",
  },
  {
    year: "2024",
    title: "USD-INR Exchange Rate Prediction Using LSTM",
    authors: ["Mrunal Vibhute", "Shreya Mote", "Varsha Pimprale"],
    venue: "ICICT 2024 - Springer",
    description:
      "Analyzes macroeconomic indicators and historical market data with a deep recurrent architecture to forecast future movements in a major currency pair.",
    read: "https://www.researchgate.net/profile/Mrunal-Vibhute/publication/382630572_USD_to_INR_Exchange_Rate_Prediction_A_Deep_Learning_Approach_for_Forecasting_Currency_Exchange_Rates_Using_Different_Techniques_of_LSTM/links/66b981018f7e1236bc50821f/USD-to-INR-Exchange-Rate-Prediction-A-Deep-Learning-Approach-for-Forecasting-Currency-Exchange-Rates-Using-Different-Techniques-of-LSTM.pdf",
  },
];
