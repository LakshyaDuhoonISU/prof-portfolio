export interface TimelineEvent {
  id: string;
  type: 'education' | 'internship' | 'project' | 'certification' | 'achievement';
  title: string;
  organization?: string;
  date: string;
  description: string;
  tags?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'edu-isu',
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'ITM Skills University (ISU)',
    date: '2023 – 2027',
    description: 'Pursuing Bachelor of Technology in Computer Science with focus on AI, Cybersecurity, and Full Stack Development.',
    tags: ['Computer Science', 'AI', 'Cybersecurity'],
  },
  {
    id: 'intern-network18',
    type: 'internship',
    title: 'Strategy & Research Analysis Intern',
    organization: 'Network 18 Media and Investments Limited',
    date: 'June 2024 – November 2024',
    description: 'Conducted strategic research and data analysis for media investment decisions. Contributed to market analysis reports and business intelligence dashboards.',
    tags: ['Data Analysis', 'Research', 'Strategy'],
  },
  {
    id: 'project-flashpay',
    type: 'project',
    title: 'FlashPay – Payment Integration',
    date: 'December 2024',
    description: 'Built a Razorpay payment integration project enabling seamless digital payment processing with secure transaction handling.',
    tags: ['Razorpay', 'Node.js', 'Payments'],
  },
  {
    id: 'project-fined',
    type: 'project',
    title: 'FinED – Financial Education Platform',
    date: '2024',
    description: 'Collaborative financial education platform designed to improve financial literacy through interactive learning modules and real-world simulations.',
    tags: ['React', 'Node.js', 'Education'],
  },
  {
    id: 'intern-colt',
    type: 'internship',
    title: 'AI & Data Analysis Intern',
    organization: 'Colt Technology Services',
    date: 'June 2025 – September 2025',
    description: 'Worked on AI-powered data analysis solutions, contributing to automation pipelines and machine learning model development for enterprise clients.',
    tags: ['AI', 'Data Analysis', 'Python', 'Machine Learning'],
  },
  {
    id: 'cert-jpmorgan',
    type: 'certification',
    title: 'Software Engineering Virtual Experience',
    organization: 'JPMorgan Chase & Co. (Forage)',
    date: '2023',
    description: 'Completed the JPMorgan Chase Software Engineering Virtual Experience program, gaining hands-on experience with financial technology workflows.',
    tags: ['Software Engineering', 'FinTech'],
  },
  {
    id: 'cert-hackerrank-sql',
    type: 'certification',
    title: 'SQL Certification',
    organization: 'HackerRank',
    date: '2024',
    description: 'Earned SQL certification demonstrating proficiency in database querying, joins, aggregations, and data manipulation.',
    tags: ['SQL', 'Databases'],
  },
  {
    id: 'cert-hackerrank-problem',
    type: 'certification',
    title: 'Problem Solving Certification',
    organization: 'HackerRank',
    date: '2024',
    description: 'Certified in problem solving showcasing strong algorithmic thinking and data structure skills.',
    tags: ['Algorithms', 'Data Structures'],
  },
  {
    id: 'achievement-leetcode',
    type: 'achievement',
    title: 'LeetCode Problem Solver',
    date: '2024 – Present',
    description: 'Active competitive programmer on LeetCode, solving algorithmic challenges and building strong DSA foundations.',
    tags: ['Competitive Programming', 'DSA'],
  },
];
