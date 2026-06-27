export interface Project {
  id: string;
  incidentNumber: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Operational' | 'In Development' | 'Archived';
  description: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  futureImprovements: string[];
  github?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-business-analyst',
    incidentNumber: '001',
    title: 'AI Business Analyst Agent',
    severity: 'Critical',
    status: 'Operational',
    description: 'An intelligent AI agent that automates business analysis tasks using natural language processing and machine learning to generate actionable insights from complex datasets.',
    problemStatement: 'Manual business analysis is time-consuming and prone to human bias. Organizations need faster, data-driven decision-making capabilities.',
    solution: 'Built an AI-powered agent that processes business data, generates reports, and provides strategic recommendations using LLMs and structured analysis pipelines.',
    techStack: ['Python', 'LangChain', 'Gemini API', 'FastAPI', 'Pandas', 'React', 'TypeScript'],
    features: [
      'Natural language data querying',
      'Automated report generation',
      'Trend analysis and forecasting',
      'Interactive data visualizations',
      'Multi-format data ingestion',
    ],
    challenges: ['Handling ambiguous user queries', 'Ensuring accurate data interpretation', 'Optimizing LLM response latency'],
    learnings: ['Prompt engineering best practices', 'RAG pipeline optimization', 'Agent orchestration patterns'],
    futureImprovements: ['Real-time data streaming', 'Multi-agent collaboration', 'Custom model fine-tuning'],
    github: 'https://github.com/LakshyaDuhoonISU/AIBusinessAnalyst',
  },
  {
    id: 'customer-onboarding',
    incidentNumber: '002',
    title: 'Customer Onboarding Intelligence Platform',
    severity: 'High',
    status: 'Operational',
    description: 'An AI-powered Customer Onboarding Intelligence Platform using React, Node.js, MongoDB, and Gemini API that analyzes onboarding funnels, identifies conversion bottlenecks, performs root-cause analysis across customer segments, and generates automated business recommendations with downloadable PDF reports.',
    problemStatement: 'Traditional onboarding workflows lack deep analytical insights to optimize conversion and understand user drop-offs.',
    solution: 'Integrated Gemini API to process funnel data and automatically generate actionable business recommendations and PDF reports.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    features: [
      'Funnel analysis and bottleneck identification',
      'Root-cause analysis across customer segments',
      'Automated business recommendations',
      'Downloadable PDF reports generation',
      'Real-time intelligence dashboard',
    ],
    challenges: ['Processing large volumes of onboarding data', 'Generating accurate AI recommendations', 'Report rendering performance'],
    learnings: ['Gemini API integration', 'Advanced data analytics pipelines', 'PDF generation in Node.js'],
    futureImprovements: ['Predictive conversion modeling', 'More export formats', 'Real-time alert system'],
    github: 'https://github.com/LakshyaDuhoonISU/Onboarding_Intelligence_Platform',
  },
  {
    id: 'ai-soc-platform',
    incidentNumber: '003',
    title: 'AI SOC Platform',
    severity: 'Critical',
    status: 'Operational',
    description: 'A Security Operations Center platform that leverages AI for automated threat detection, incident response, and security monitoring across enterprise networks.',
    problemStatement: 'Security teams are overwhelmed by alert fatigue and lack the tools for rapid automated threat detection and response.',
    solution: 'Built an AI-powered SOC platform with real-time threat intelligence, automated playbooks, and machine learning-based anomaly detection.',
    techStack: ['Python', 'FastAPI', 'React', 'TensorFlow', 'Elasticsearch', 'Docker', 'MITRE ATT&CK'],
    features: [
      'Real-time threat detection',
      'Automated incident response playbooks',
      'MITRE ATT&CK framework mapping',
      'Network traffic analysis',
      'Security dashboard with live metrics',
    ],
    challenges: ['Minimizing false positives', 'Processing high-volume log data', 'Mapping threats to MITRE framework'],
    learnings: ['SOC operations workflows', 'Threat intelligence integration', 'SIEM architecture patterns'],
    futureImprovements: ['Threat hunting automation', 'SOAR integration', 'Federated learning for threat models'],
    github: 'https://github.com/LakshyaDuhoonISU/AI_SOC_Platform',
  },
  {
    id: 'fraud-detector',
    incidentNumber: '004',
    title: 'Fraud Transaction Network Detector',
    severity: 'High',
    status: 'Operational',
    description: 'A machine learning system that detects fraudulent transactions by analyzing network patterns, user behavior, and transaction anomalies in real-time.',
    problemStatement: 'Financial fraud is increasingly sophisticated, requiring advanced detection methods beyond traditional rule-based systems.',
    solution: 'Developed a graph-based fraud detection system using ML models trained on transaction network patterns to identify suspicious activities with high accuracy.',
    techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'NetworkX', 'Pandas', 'NumPy', 'FastAPI'],
    features: [
      'Graph-based transaction analysis',
      'Real-time fraud scoring',
      'Anomaly detection algorithms',
      'Network visualization',
      'Alert management system',
    ],
    challenges: ['Handling imbalanced datasets', 'Real-time processing requirements', 'Reducing false positive rates'],
    learnings: ['Graph neural networks', 'Anomaly detection techniques', 'Feature engineering for fraud detection'],
    futureImprovements: ['Deep learning models', 'Cross-platform integration', 'Explainable AI for audit trails'],
    github: 'https://github.com/LakshyaDuhoonISU',
  },
  {
    id: 'flashpay',
    incidentNumber: '005',
    title: 'FlashPay',
    severity: 'Medium',
    status: 'Operational',
    description: 'A secure and efficient payment integration platform built with Node.js and Razorpay, enabling seamless digital transactions.',
    problemStatement: 'Businesses require reliable and seamless payment gateways to process transactions without friction.',
    solution: 'Built a robust payment integration system using Razorpay API to handle digital transactions securely and efficiently.',
    techStack: ['Node.js', 'Express', 'Razorpay API', 'React', 'MongoDB'],
    features: [
      'Secure payment processing',
      'Real-time transaction status',
      'Webhook integration for payment updates',
      'User-friendly checkout interface',
      'Transaction history dashboard',
    ],
    challenges: ['Handling webhook verifications securely', 'Managing payment failures gracefully', 'Ensuring data consistency'],
    learnings: ['Razorpay API integration', 'Webhook processing', 'Payment gateway security best practices'],
    futureImprovements: ['Support for multiple payment gateways', 'Subscription management', 'Invoicing features'],
    github: 'https://github.com/LakshyaDuhoonISU/FlashPay',
  },
  {
    id: 'quiz-management',
    incidentNumber: '006',
    title: 'Quiz Management System',
    severity: 'Medium',
    status: 'Operational',
    description: 'A full-stack quiz management platform enabling educators to create, manage, and evaluate quizzes with analytics and performance tracking.',
    problemStatement: 'Educational institutions need a scalable system to create, distribute, and grade quizzes efficiently with detailed analytics.',
    solution: 'Developed a comprehensive quiz platform with role-based access, real-time scoring, and performance analytics for educators and students.',
    techStack: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: [
      'Quiz creation and management',
      'Real-time scoring',
      'Performance analytics dashboard',
      'Role-based access control',
      'Timed quiz sessions',
    ],
    challenges: ['Preventing cheating mechanisms', 'Real-time score calculation', 'Scalable database design'],
    learnings: ['Authentication and authorization patterns', 'Real-time data handling', 'Analytics implementation'],
    futureImprovements: ['AI-generated questions', 'Peer review system', 'Gamification features'],
    github: 'https://github.com/LakshyaDuhoonISU/flutter_quiz_app',
  },
];
