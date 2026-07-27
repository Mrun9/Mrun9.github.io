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
  email: "mrunalvibhute09@gmail.com",
  github: "https://github.com/Mrun9/",
  linkedin: "https://linkedin.com/in/mrunal-vibhute-b6b392235/",
  resume: "/Mrunal Vibhute ___ Resume.pdf",
  photo: "/mrunalvibhutePHOTO.jpeg",
};

export const stats = [
  { value: "3", label: "Publications" },
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
    date: "Aug 2025 - Jun 2027",
    title: "M.S. Artificial Intelligence Systems",
    organization: "University of Florida - Gainesville, FL",
    detail: "GPA: 3.89/4.0",
    description:
      "Coursework: AI Systems, Machine Learning, Applied Deep Learning, Trustworthy ML, Computer Vision & Image Processing, AI Ethics.",
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
    date: "Apr 2026 - Present",
    title: "AI Software Engineer",
    organization: "Prepify - Evy",
    description:
      "Building GenAI product features for Evy, a UF student-founded platform for AI-powered candidate interviews. I work with LLM prompting, agentic workflows, evals, and AI coding agents, recently focusing on observability dashboards that track latency, token usage, interview quality, hallucinations, guardrails, and unwanted behavior.",
    links: [{ label: "Visit Evy", href: "https://evy.io/" }],
  },
  {
    date: "Feb 2026 - Present",
    title: "Graduate Student Assistant",
    organization: "SERMOS Lab - University of Florida",
    description:
      "Supporting a transdisciplinary AI and data science lab that builds smart, equitable, resilient mobility systems. I read research papers, benchmark models, assist PhD research, and currently work with spatio-temporal models and transformer-based methods.",
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
    links: [
      { label: "Visit CRC", href: "https://crc.nd.edu/" },
      {
        label: "Read Medium blog",
        href: "https://medium.com/@mrunalvibhute09/solo-at-20-my-journey-from-india-to-notre-dame-af9c1d75c917",
      },
    ],
  },
];

export const projects = [
  {
    title: "Adversarial Jailbreak Detection System for LLMs",
    description:
      "A two-stage jailbreak-prompt detection system combining a FAISS semantic cache for sub-millisecond similarity search with a fine-tuned transformer classifier, deployed as a browser extension monitoring live LLM traffic.",
    tags: ["DistilBERT", "FAISS", "Adversarial ML", "Browser Extension", "Python"],
    github: "https://github.com/Mrun9/Jailbreaking-Detection",
    featured: true,
  },
  {
    title: "Co-Wingman - Real-Time AI Speech Anxiety Detection",
    description:
      "CNN-LSTM model in PyTorch on MFCC features for real-time speech anxiety detection. Achieved 96% recall with 1.2-1.5s inference latency on rolling 5-second audio windows.",
    tags: ["PyTorch", "CNN-LSTM", "Whisper", "SHAP", "Docker", "Grafana"],
    github: "https://github.com/Mrun9/Co-Wingman-AIS-Project",
    featured: true,
  },
  {
    title: "Currency Exchange Rate Prediction via Sentiment Analysis",
    description:
      "Leveraged 10+ years of historical data with Decision Tree Regressors to predict USD-to-INR rates at 90% testing accuracy, plus an NLP pipeline analyzing 2,000+ tweets.",
    tags: ["Scikit-learn", "NLTK", "Sentiment Analysis", "Streamlit"],
    github: "https://github.com/Mrun9/Speech_Alchemy",
    featured: true,
  },
  {
    title: "CruxCapture - Multimodal Summarization Platform",
    timeframe: "Jan 2024 - Apr 2024",
    description:
      "Developed an Android application that summarizes text, audio, and video content using external AI APIs with latency below 10 seconds. Added Firebase authentication, cloud sync, dashboard flows, PDF export, and content sharing through email and messaging integrations.",
    tags: ["Java", "Android Studio", "Firebase", "REST APIs", "AI APIs"],
    github: "https://github.com/sayli2003/Summerizer",
  },
  {
    title: "Quiz Application",
    timeframe: "Jan 2025 - Apr 2025",
    description:
      "Built a full-stack quiz platform with authentication, dynamic quizzes, score tracking, role-based access, SQL-backed quiz management, and user performance analytics. Tested and patched SQL injection and XSS vulnerabilities to improve security.",
    tags: ["Python", "Flask", "SQL", "JavaScript", "Security"],
    github: "https://github.com/aaditeeiche/quiz-master-isl",
  },
  {
    title: "Pawsitivity - Rescue Center Path Finder",
    description:
      "Built a DSA project that uses Dijkstra's algorithm to find the nearest rescue center for an injured dog based on location, turning graph traversal into a practical emergency-routing use case.",
    tags: ["Data Structures", "Algorithms", "Dijkstra", "Java"],
    github: "https://github.com/Mrun9/Pawsitivity.git",
  },
  {
    title: "Stock Prediction using CrewAI",
    description:
      "Created a multi-agent CrewAI application for equity research. Specialized agents research a company, gather market news, analyze financials, assess risks, and generate a structured investment report with insights and recommendations.",
    tags: ["Python", "CrewAI", "OpenAI", "Agents", "Financial Analysis"],
    github: "https://github.com/Mrun9/Stock_Prediction-using-CrewAI",
  },
  {
    title: "Outings - Trip Planning Website",
    description:
      "Built a simple trip-planning webpage for browsing outings and organizing travel ideas, with a recorded walkthrough showing the working website experience.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Mrun9/Outings",
    demo: "https://youtu.be/QwQYDMSwCes",
  },
  {
    title: "Modern Elegance - Event Planning Website",
    description:
      "Designed and built an event-planning website for Modern Elegance, focused on presenting services, visual style, and user-friendly browsing for event clients.",
    tags: ["HTML", "CSS", "JavaScript", "Web Design"],
    github: "https://github.com/Mrun9/Modern-Elegance-Website.git",
  },
  {
    title: "Sign Language Detection using KNN",
    description:
      "Built a computer vision model that recognizes hand signs and displays the predicted letter as text, helping bridge communication gaps for specially abled people. Used K-Nearest Neighbors and achieved an average accuracy of 96% across letters.",
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

export const publications = [
  {
    year: "2025",
    title: "Multimodal Web Agents for Automated (Dark) Web Navigation",
    venue: "ICAART 2025 - Lecture Notes in Artificial Intelligence (LNAI)",
    description:
      "Proposes an autonomous browsing system that uses visual and textual cues to traverse both surface and hidden websites for complex information-gathering tasks.",
    read: "https://www.scitepress.org/Papers/2025/131716/131716.pdf",
  },
  {
    year: "2025",
    title: "Interpretable Fake News Detection Using Neural Networks and LIME",
    venue: "ISD4SD 2025 - Springer",
    description:
      "Builds a transparent misinformation classifier that highlights human-readable evidence within articles to explain why content is considered unreliable.",
    read: "https://www.researchgate.net/publication/397062758_Interpretable_Fake_News_Detection_Using_Neural_Networks_and_LIME",
  },
  {
    year: "2024",
    title: "USD-INR Exchange Rate Prediction Using LSTM",
    venue: "ICICT 2024 - Springer",
    description:
      "Analyzes macroeconomic indicators and historical market data with a deep recurrent architecture to forecast future movements in a major currency pair.",
    read: "https://www.researchgate.net/profile/Mrunal-Vibhute/publication/382630572_USD_to_INR_Exchange_Rate_Prediction_A_Deep_Learning_Approach_for_Forecasting_Currency_Exchange_Rates_Using_Different_Techniques_of_LSTM/links/66b981018f7e1236bc50821f/USD-to-INR-Exchange-Rate-Prediction-A-Deep-Learning-Approach-for-Forecasting-Currency-Exchange-Rates-Using-Different-Techniques-of-LSTM.pdf",
  },
];
