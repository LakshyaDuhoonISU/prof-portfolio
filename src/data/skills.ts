import { SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiJavascript, SiLinux, SiDocker, SiJenkins, SiSelenium, SiCypress, SiGit, SiGithub, SiWireshark } from 'react-icons/si';
import { Shield, Brain, Server, Code, GitBranch } from 'lucide-react';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Artificial Intelligence',
    icon: Brain,
    color: '#00FF88',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'LLMs' },
      { name: 'Gemini API' },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    color: '#38BDF8',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'REST APIs' },
      { name: 'JWT' },
    ],
  },
  {
    name: 'Frontend',
    icon: Code,
    color: '#A78BFA',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: '#F59E0B',
    skills: [
      { name: 'Linux', icon: SiLinux },
      { name: 'Networking' },
      { name: 'OWASP Top 10' },
      { name: 'Nmap' },
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Burp Suite' },
      { name: 'MITRE ATT&CK' },
      { name: 'SOC Fundamentals' },
    ],
  },
  {
    name: 'DevOps',
    icon: GitBranch,
    color: '#EF4444',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Cypress', icon: SiCypress },
    ],
  },
];
