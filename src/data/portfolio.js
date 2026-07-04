export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "featured-projects", label: "Projects" },
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
