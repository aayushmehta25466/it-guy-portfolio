// --- 1. Data Source ---

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "frontend",
    summary: "A high-performance analytics dashboard for online retailers.",
    problem: "Retailers needed a consolidated view of sales across multiple channels without logging into separate platforms.",
    features: ["Real-time data visualization with Chart.js", "Dark/Light mode support", "Responsive table layouts", "Export to CSV functionality"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    repo: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Task Master API",
    category: "backend",
    summary: "Scalable RESTful API for task management applications.",
    problem: "Existing APIs were too bloated or lacked proper role-based authentication.",
    features: ["JWT Authentication", "Rate limiting", "Swagger documentation", "MongoDB aggregation pipelines"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "Docker"],
    repo: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Social Connect",
    category: "fullstack",
    summary: "A community platform for developers to share snippets.",
    problem: "Developers needed a distraction-free space to share code snippets without the noise of general social media.",
    features: ["Syntax highlighting", "Real-time notifications", "OAuth integration", "Infinite scroll"],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    repo: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Finance Tracker",
    category: "frontend",
    summary: "Minimalist personal finance tracking application PWA.",
    problem: "Most finance apps are cluttered. This solves the need for quick, offline-first entry.",
    features: ["Offline support (PWA)", "Local Storage sync", "Budget categorizer", "Biometric login"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    tech: ["Vue.js", "Pinia", "IndexedDB"],
    repo: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Cloud Manager CLI",
    category: "backend",
    summary: "Command line tool for managing cloud resources.",
    problem: "Managing AWS instances via the web console was slow for power users.",
    features: ["Interactive prompts", "Automated backups", "Config file support", "Cross-platform"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop",
    tech: ["Go", "Cobra", "AWS SDK"],
    repo: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Portfolio v1",
    category: "fullstack",
    summary: "The previous iteration of my personal website.",
    problem: "Need for a CMS-backed portfolio.",
    features: ["Sanity.io CMS integration", "ISR rendering", "Custom animations"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    tech: ["Gatsby", "GraphQL", "Sanity"],
    repo: "#",
    demo: "#"
  }
];


// export {projects};
export default projects;