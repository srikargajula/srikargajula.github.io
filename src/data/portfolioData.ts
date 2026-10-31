export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'All' | 'AI & ML' | 'Deep Learning' | 'Predictive Analytics';
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogoPlaceholder?: string;
  period: string;
  type: string;
  location: string;
  current: boolean;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  description: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  badge: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Working Knowledge';
    tag?: string;
  }[];
}

export const portfolioData = {
  personalInfo: {
    name: 'Srikar Gajula',
    shortName: 'Srikar',
    initials: 'SG',
    role: 'AI Engineer',
    company: 'eMedicalPractice',
    experienceSince: 'August 2026',
    headline: 'AI Engineer | Building Intelligent Solutions with AI & Technology',
    subheading:
      'I build intelligent applications and practical software solutions using AI, machine learning, and modern development technologies. Passionate about transforming ideas into impactful products.',
    email: 'srikargajula18@gmail.com',
    phone: '+91 81253 75103',
    location: 'Hyderabad, Telangana, India',
    status: 'Available for AI Engineering Roles & Collaborations',
    statusShort: 'Open to Opportunities',
    github: 'https://github.com/srikargajula',
    linkedin: 'https://linkedin.com/in/srikar-gajula',
    resumeDownloadPath: '/Srikar_Gajula_Resume.pdf',
    typingRoles: [
      'AI Engineer',
      'Machine Learning Developer',
      'Generative AI Enthusiast',
      'Python Developer',
      'Full-Stack Problem Solver',
    ],
    bioParagraphs: [
      'I am an AI Engineer at eMedicalPractice with a strong academic foundation in Computer Science Engineering, specializing in Artificial Intelligence and Machine Learning from Malla Reddy Engineering College (2022–2026, CGPA: 7.5/10).',
      'My core strength lies in combining theoretical machine learning algorithms with practical, production-ready software engineering. From architecting deep learning language models and smart IoT agricultural diagnostic systems to building predictive analytics pipelines and modern web applications with FastAPI, React, and Python, I focus on building reliable, scalable, and impactful solutions.',
      'Driven by curiosity, I actively explore Generative AI, Retrieval-Augmented Generation (RAG), and agentic workflows to automate complex domain workflows. When solving problems, I prioritize clean architecture, reproducible data pipelines, and intuitive user experiences.',
    ],
    languages: [
      { language: 'English', proficiency: 'Professional Working Proficiency' },
      { language: 'Telugu', proficiency: 'Native' },
      { language: 'Hindi', proficiency: 'Conversational' },
    ],
    interests: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI',
      'Large Language Models (LLMs)',
      'Python Development',
      'Backend Development',
      'Full-Stack Architecture',
      'Retrieval-Augmented Generation (RAG)',
    ],
    stats: [
      { label: 'Role', value: 'AI Engineer' },
      { label: 'Degree', value: 'B.Tech AI & ML' },
      { label: 'Key Projects', value: '6+' },
      { label: 'Certifications', value: '3 Active' },
    ],
  },

  experiences: [
    {
      id: 'emedicalpractice',
      role: 'AI Engineer',
      company: 'eMedicalPractice',
      companyLogoPlaceholder: 'eMP',
      period: 'Aug 2026 – Present',
      type: 'Full-time',
      location: 'Hyderabad, India (Healthcare Technology)',
      current: true,
      summary:
        'Working as an AI Engineer, contributing to the development, fine-tuning, and application of AI-driven solutions for digital healthcare operations.',
      contributions: [
        'Developing and implementing AI-driven algorithms and intelligent workflows to automate clinical data extraction and operational tasks.',
        'Experimenting with Natural Language Processing (NLP) and Large Language Model techniques to interpret complex unstructured medical datasets.',
        'Collaborating with engineering and product teams to integrate AI models into scalable, secure, and HIPAA-conscious backend services.',
        'Monitoring model inferences, latency, and reliability in real-world deployment scenarios to ensure clinical-grade precision.',
      ],
      technologies: [
        'Python',
        'Generative AI',
        'LLMs',
        'NLP',
        'PyTorch',
        'Transformers',
        'REST APIs',
        'SQL',
        'Docker',
      ],
    },
    {
      id: 'skilltimate',
      role: 'Machine Learning Intern',
      company: 'Skilltimate Technologies',
      companyLogoPlaceholder: 'ST',
      period: 'May 2024',
      type: 'Internship',
      location: 'Hyderabad, India',
      current: false,
      summary:
        'Built and optimized machine-learning models for predictive analytics, natural language processing, and image processing applications.',
      contributions: [
        'Leveraged Python, TensorFlow, Scikit-learn, and Pandas for end-to-end data preprocessing, imputation, and feature engineering.',
        'Engineered predictive models and benchmarked multiple algorithms (Random Forests, Gradient Boosting, neural baselines) for classification and regression.',
        'Conducted feature importance analysis and model evaluation metrics (precision, recall, ROC-AUC, F1-score) to ensure high generalizability.',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'NLP',
        'Matplotlib',
      ],
    },
  ] as Experience[],

  education: [
    {
      id: 'btech',
      degree: 'B.Tech in Computer Science Engineering (Artificial Intelligence and Machine Learning)',
      institution: 'Malla Reddy Engineering College',
      location: 'Hyderabad, Telangana, India',
      period: '2022 – 2026',
      score: 'CGPA: 7.5 / 10',
      description:
        'Specialized program focused on theoretical and applied computer science, artificial intelligence algorithms, deep neural architectures, and software engineering principles.',
      coursework: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems (DBMS)',
        'Operating Systems',
        'Computer Networks',
      ],
    },
    {
      id: 'intermediate',
      degree: 'Intermediate (Class XII) – Mathematics, Physics, and Chemistry (MPC)',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, Telangana, India',
      period: '2020 – 2022',
      score: 'Score: 936 / 1000 (93.6%)',
      description:
        'Intensive academic training in core mathematical disciplines (Calculus, Linear Algebra, Probability), analytical physics, and chemistry.',
      coursework: [
        'Advanced Mathematics',
        'Physics',
        'Chemistry',
        'Analytical Reasoning',
      ],
    },
  ] as Education[],

  certifications: [
    {
      id: 'ms-linkedin-genai',
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn',
      year: '2024',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/',
      badge: 'Generative AI',
      description:
        'In-depth foundational certification covering Generative AI principles, Large Language Model mechanics, prompt engineering fundamentals, and responsible AI deployment.',
    },
    {
      id: 'cisco-ccna',
      title: 'Cisco CCNA Networking Fundamentals',
      issuer: 'Cisco Networking Academy',
      year: '2025',
      credentialUrl: 'https://www.netacad.com/',
      badge: 'Networking & Systems',
      description:
        'Comprehensive grounding in network architectures, IP routing protocols, switching, transport layer dynamics, and enterprise network security.',
    },
    {
      id: 'azure-ai-fundamentals',
      title: 'Microsoft Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft Certified',
      year: '2025',
      credentialUrl: 'https://learn.microsoft.com/credentials/',
      badge: 'Cloud AI',
      description:
        'Validation of foundational knowledge of Machine Learning and AI concepts on Microsoft Azure, including Computer Vision, NLP, and conversational AI workloads.',
    },
  ] as Certification[],

  activities: [
    {
      title: 'Inter-College Project Expo',
      role: 'Project Lead / Exhibitor',
      description:
        'Presented AgriGenius, a smart farming system combining IoT telemetry and deep learning for automated plant disease diagnosis, receiving commendations from academic judges.',
    },
    {
      title: 'TechTickle Hackathon',
      role: 'Participant & Developer',
      description:
        'Collaborated in a fast-paced hackathon setting to design and prototype an interactive AI web solution under tight sprint deadlines.',
    },
  ],

  skillCategories: [
    {
      title: 'Programming Languages',
      categoryKey: 'languages',
      iconName: 'Code2',
      skills: [
        { name: 'Python', level: 'Advanced', tag: 'Primary' },
        { name: 'Java', level: 'Working Knowledge', tag: 'Core' },
        { name: 'JavaScript', level: 'Proficient', tag: 'Web' },
        { name: 'SQL', level: 'Proficient', tag: 'Data' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      categoryKey: 'ai_ml',
      iconName: 'BrainCircuit',
      skills: [
        { name: 'Machine Learning', level: 'Advanced', tag: 'Core' },
        { name: 'Deep Learning', level: 'Proficient', tag: 'Core' },
        { name: 'Neural Networks', level: 'Proficient', tag: 'Architecture' },
        { name: 'Natural Language Processing (NLP)', level: 'Advanced', tag: 'Specialty' },
        { name: 'Generative AI', level: 'Advanced', tag: 'Modern' },
        { name: 'Large Language Models (LLMs)', level: 'Advanced', tag: 'Specialty' },
        { name: 'Prompt Engineering', level: 'Advanced', tag: 'Skill' },
        { name: 'Retrieval-Augmented Generation (RAG)', level: 'Proficient', tag: 'Modern' },
        { name: 'Scikit-learn', level: 'Advanced', tag: 'Library' },
        { name: 'TensorFlow', level: 'Proficient', tag: 'Framework' },
        { name: 'PyTorch', level: 'Proficient', tag: 'Framework' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      categoryKey: 'frameworks',
      iconName: 'Layers',
      skills: [
        { name: 'Django', level: 'Proficient', tag: 'Backend' },
        { name: 'Node.js', level: 'Proficient', tag: 'Backend' },
        { name: 'Express.js', level: 'Proficient', tag: 'API' },
        { name: 'NumPy', level: 'Advanced', tag: 'Data' },
        { name: 'Pandas', level: 'Advanced', tag: 'Data' },
        { name: 'NLTK', level: 'Proficient', tag: 'NLP' },
        { name: 'FastAPI', level: 'Working Knowledge', tag: 'API' },
      ],
    },
    {
      title: 'Databases & Storage',
      categoryKey: 'databases',
      iconName: 'Database',
      skills: [
        { name: 'MongoDB', level: 'Proficient', tag: 'NoSQL' },
        { name: 'MySQL', level: 'Proficient', tag: 'Relational' },
        { name: 'SQL Queries', level: 'Advanced', tag: 'Querying' },
        { name: 'Database Design & Normalization', level: 'Proficient', tag: 'Architecture' },
      ],
    },
    {
      title: 'Developer Tools & Ecosystem',
      categoryKey: 'tools',
      iconName: 'Wrench',
      skills: [
        { name: 'Git', level: 'Advanced', tag: 'VCS' },
        { name: 'GitHub', level: 'Advanced', tag: 'Collaboration' },
        { name: 'Postman', level: 'Proficient', tag: 'API Testing' },
        { name: 'VS Code', level: 'Advanced', tag: 'IDE' },
        { name: 'Jupyter Notebook', level: 'Advanced', tag: 'Data Science' },
      ],
    },
    {
      title: 'Computer Science Fundamentals',
      categoryKey: 'cs_fundamentals',
      iconName: 'Binary',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Proficient', tag: 'Theory' },
        { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', tag: 'Paradigms' },
        { name: 'Database Management Systems (DBMS)', level: 'Proficient', tag: 'Systems' },
        { name: 'Operating Systems', level: 'Proficient', tag: 'Core' },
        { name: 'Computer Networks', level: 'Proficient', tag: 'Core' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'agrigenius',
      title: 'AgriGenius',
      subtitle: 'The Ultimate Smart Farming App',
      description:
        'An intelligent agriculture application focused on smart farming. Leverages AI, Machine Learning, and IoT sensors to monitor crop health, predict soil moisture, and detect plant leaf diseases in real-time.',
      longDescription:
        'AgriGenius combines Internet of Things (IoT) sensors with deep convolutional neural networks to assist farmers with precision agriculture. It monitors soil humidity, temperature, and environmental metrics while utilizing computer vision to detect crop leaf diseases, providing immediate diagnostic recommendations and preventative farming advice.',
      category: 'AI & ML',
      technologies: [
        'Python',
        'Machine Learning',
        'Deep Learning',
        'IoT Telemetry',
        'Scikit-learn',
        'OpenCV',
      ],
      highlights: [
        'Real-time leaf disease detection using computer vision algorithms',
        'Predictive soil moisture and ambient temperature regression models',
        'Telemetry dashboard designed for actionable farmer decision-making',
        'Showcased and commended at Inter-college Project Expo',
      ],
      githubUrl: 'https://github.com/srikargajula/Agrigenius-the-smart-farming-app',
      featured: true,
      image: '/projects/agrigenius.svg',
    },
    {
      id: 'house-price-prediction',
      title: 'HousePrice AI',
      subtitle: 'Machine Learning Real Estate Analytics Web Application',
      description:
        'An end-to-end regression and analytics platform for forecasting real estate market prices based on multiple structural and geographic attributes using Scikit-learn, FastAPI, and React.',
      longDescription:
        'Encompasses complete exploratory data analysis (EDA), automated outlier removal, feature scaling, collinearity analysis, and cross-validated ensemble regression (Random Forests and Gradient Boosters) to forecast property values accurately. Features an interactive modern dashboard built with React and Tailwind CSS.',
      category: 'Predictive Analytics',
      technologies: ['Python', 'FastAPI', 'Scikit-learn', 'React', 'Vite', 'Tailwind CSS', 'Pandas'],
      highlights: [
        'Feature engineering and skewness handling on real estate datasets',
        'FastAPI backend with optimized inference latency',
        'Cross-validated ensemble modeling minimizing RMSE and MAE',
        'Dynamic React & Tailwind dashboard with interactive property valuation',
      ],
      githubUrl: 'https://github.com/srikargajula/HousePrice-AI',
      featured: true,
      image: '/projects/house-price.svg',
    },
    {
      id: 'ai-text-gen-studio',
      title: 'AI Text Generation Studio',
      subtitle: 'Deep Learning (LSTM & Keras) Text Generation Platform',
      description:
        'An interactive natural language generation platform leveraging deep learning Recurrent Neural Networks (LSTM) and Keras to synthesize contextual text in real time with Streamlit.',
      longDescription:
        'Architected and trained deep LSTM recurrent neural networks on textual corpora using Keras and TensorFlow. Explores sequence vectorization, custom embeddings, and dynamic temperature sampling to achieve fluent and creative language modeling.',
      category: 'Deep Learning',
      technologies: ['Python', 'Deep Learning', 'LSTM', 'Keras', 'TensorFlow', 'Streamlit', 'NLP'],
      highlights: [
        'Deep Long Short-Term Memory (LSTM) recurrent neural network architecture',
        'Custom text tokenization, sequence vectorization, and embeddings',
        'Dynamic temperature tuning to control output diversity and creativity',
        'Interactive Streamlit studio interface for real-time text synthesis',
      ],
      githubUrl: 'https://github.com/srikargajula/AI-Text-Generation-Studio',
      featured: true,
      image: '/projects/gpt2-gen.svg',
    },
    {
      id: 'language-detection',
      title: 'Language Detection System',
      subtitle: 'Real-Time Multi-Language NLP Classifier',
      description:
        'Supervised learning natural language processing application that classifies and detects languages from short multilingual text excerpts in real time.',
      longDescription:
        'Constructed with Python, Scikit-learn, and character n-gram text vectorization. Employs Multinomial Naive Bayes algorithms to distinguish between more than 20 distinct languages with sub-second inference speeds.',
      category: 'AI & ML',
      technologies: ['Python', 'NLP', 'Scikit-learn', 'Supervised Learning', 'NLTK'],
      highlights: [
        'Sub-50ms inference time for instant client-side prediction',
        'Robust n-gram tokenization resistant to typographical noise',
        'Multiclass classification benchmarked with high accuracy metrics',
      ],
      githubUrl: 'https://github.com/srikargajula',
      featured: false,
      image: '/projects/language-detect.svg',
    },
  ] as Project[],
};
