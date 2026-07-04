export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Papers" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Mrunal Vibhute",
  location: "Gainesville, FL",
  roleWords: [
    "AI/ML Researcher",
    "Deep Learning Engineer",
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
      "Building AI-powered software for Evy, a platform created by UF students that helps clients run AI-assisted candidate interviews. I work with GenAI tools, LLM prompting, agentic frameworks, evals, and AI coding agents such as Codex to develop product features. Recently, I have been building observability dashboards for testing and monitoring the AI interviewer's performance, including latency, token usage, candidate interactions, question quality, hallucination checks, guardrail compliance, unwanted-behavior flags, alerts, and warnings.",
    links: [{ label: "Visit Evy", href: "https://evy.io/" }],
  },
  {
    date: "Feb 2026 - Present",
    title: "Graduate Software and ML Research Student Assistant",
    organization:
      "SERMOS Lab - Civil and Transportation Engineering, University of Florida",
    description:
      "Supporting research at the intersection of software engineering and machine learning by reading research papers, benchmarking model performance, and assisting PhD students with ongoing research work. Current work focuses on spatio-temporal models and transformer-based approaches.",
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
      "Worked on creating and deploying an AI agent for efficient data acquisition from dark marketplaces. A significant hurdle was automating puzzle image-based CAPTCHA solving, where I built evaluation and preprocessing workflows for multimodal models and presented the work at the Notre Dame research symposium.",
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
    github: "https://github.com/Mrun9/",
    featured: true,
  },
  {
    title: "Co-Wingman - Real-Time AI Speech Anxiety Detection",
    description:
      "CNN-LSTM model in PyTorch on MFCC features for real-time speech anxiety detection. Achieved 96% recall with 1.2-1.5s inference latency on rolling 5-second audio windows.",
    tags: ["PyTorch", "CNN-LSTM", "Whisper", "SHAP", "Docker", "Grafana"],
    github: "https://github.com/Mrun9/",
  },
  {
    title: "Currency Exchange Rate Prediction via Sentiment Analysis",
    description:
      "Leveraged 10+ years of historical data with Decision Tree Regressors to predict USD-to-INR rates at 90% testing accuracy, plus an NLP pipeline analyzing 2,000+ tweets.",
    tags: ["Scikit-learn", "NLTK", "Sentiment Analysis", "Streamlit"],
    github: "https://github.com/Mrun9/",
  },
];

export const publications = [
  {
    year: "2025",
    title: "Multimodal Web Agents for Automated (Dark) Web Navigation",
    venue: "ICAART 2025 - Lecture Notes in Artificial Intelligence (LNAI)",
    description:
      "Proposes an autonomous browsing system that uses visual and textual cues to traverse both surface and hidden websites for complex information-gathering tasks.",
    doi: "https://doi.org/10.5220/0013171600003890",
  },
  {
    year: "2025",
    title: "Interpretable Fake News Detection Using Neural Networks and LIME",
    venue: "ISD4SD 2025 - Springer",
    description:
      "Builds a transparent misinformation classifier that highlights human-readable evidence within articles to explain why content is considered unreliable.",
    doi: "https://doi.org/10.1007/978303206662646",
  },
  {
    year: "2024",
    title: "USD-INR Exchange Rate Prediction Using LSTM",
    venue: "ICICT 2024 - Springer",
    description:
      "Analyzes macroeconomic indicators and historical market data with a deep recurrent architecture to forecast future movements in a major currency pair.",
    doi: "https://doi.org/10.1007/978981973559424",
  },
];
