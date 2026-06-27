# CyberSOC Portfolio

A highly interactive, cybersecurity-themed portfolio built for Lakshya Duhoon. Designed to mimic a modern Security Operations Center (SOC) dashboard, this portfolio showcases projects as "Security Incidents," tracks real-time system metrics, and features a clean, terminal-like aesthetic with glassmorphism elements.

## 🚀 Features

- **SOC Dashboard Aesthetic**: Dark mode by default, featuring vibrant neon accents, grid backgrounds, and terminal-styled windows.
- **System Boot Sequence**: Engaging initial loading screen that mimics a secure system boot process.
- **Interactive Project Logs**: Projects are presented as "Incident Logs" with severity ratings, tech stacks, and animated modals for deep dives.
- **Real-Time Data Visualization**: Animated counters for project stats, deployments, and GitHub repositories.
- **Dynamic Timeline**: Vertical, glowing timeline for education and professional experience.
- **Secure Communication Channels**: Terminal-styled contact section displaying verified links (Email, LinkedIn, GitHub).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets (Resume PDF, Certification PDFs)
├── src/
│   ├── animations/         # Framer Motion variants and configuration
│   ├── assets/             # Images and local media
│   ├── components/         # Reusable UI components (Buttons, Badges, Modals, Cards)
│   ├── constants/          # Global constants (External Links, Site Config)
│   ├── data/               # Structured JSON/TS data (Projects, Skills, Certifications, Timeline)
│   ├── hooks/              # Custom React hooks (e.g., useTypingEffect)
│   ├── pages/              # Main page layouts (Home, LoadingScreen, NotFound)
│   ├── sections/           # Individual page sections (Hero, Dashboard, About, Skills, Projects, etc.)
│   ├── styles/             # Global CSS and Tailwind configuration
│   ├── App.tsx             # Root application component and router configuration
│   └── main.tsx            # React DOM entry point
├── index.html              # HTML template with SEO meta tags
├── vercel.json             # Vercel deployment configuration (Routing rewrites)
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 💻 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LakshyaDuhoonISU/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```
This will generate a `dist` folder containing the minified and optimized assets.

## 🚢 Deployment

This project is configured for seamless deployment on **Vercel**. 
The repository includes a `vercel.json` file which automatically handles client-side routing rewrites for the Single Page Application (SPA).

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Vercel will automatically detect Vite and configure the build settings.
4. Deploy!

## 📝 License

Designed and developed by Lakshya Duhoon. All rights reserved.
