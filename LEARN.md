# 📚 LEARN: Building a Modern Developer Portfolio

This guide will walk you through how I built this developer portfolio website from scratch. Follow along to learn the concepts, tools, and techniques used to create a modern, responsive, and accessible portfolio.

---

## 🎯 Project Overview

**What We're Building:**  
A modern developer portfolio website with dark/light mode, project filtering, modal popups, and smooth animations.

**Technologies Used:**
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vanilla JavaScript** - No frameworks, pure JavaScript
- **HTML5** - Semantic markup
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family

---

## 📋 Prerequisites

Before starting, make sure you have:
- Basic knowledge of HTML, CSS, and JavaScript
- Node.js installed (v18 or higher) - [Download here](https://nodejs.org/)
- A code editor (VS Code recommended)
- Basic understanding of the command line

---

## 🚀 Step 1: Project Setup

### 1.1 Initialize the Project

First, create a new directory and initialize a Node.js project:

```bash
# Create project directory
mkdir developer-portfolio
cd developer-portfolio

# Initialize package.json
npm init -y
```

### 1.2 Install Dependencies

Install Vite and Tailwind CSS v4:

```bash
# Install Vite as dev dependency
npm install --save-dev vite

# Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/vite
```

### 1.3 Configure Vite

Create a `vite.config.js` file:

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
})
```

**Key Configuration Explained:**
- `root: '.'` - Sets the project root directory
- `base: './'` - Uses relative paths for deployment flexibility
- `publicDir: 'public'` - Directory for static assets
- `plugins: [tailwindcss()]` - Enables Tailwind CSS v4
- `server.port: 3000` - Development server runs on port 3000

### 1.4 Update package.json Scripts

Add these scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 🎨 Step 2: Create Base HTML Structure

### 2.1 Create index.html

Create an `index.html` file in the root directory with semantic HTML structure:

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Developer Portfolio</title>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Tailwind CSS -->
  <link rel="stylesheet" href="./src/style.css">
</head>
<body>
  <!-- Content goes here -->
</body>
</html>
```

**Key Points:**
- `scroll-smooth` class enables smooth scrolling
- Include Inter font for modern typography
- Font Awesome for icons
- Link to our custom CSS file (created next)

### 2.2 Create Project Structure

Create the following folder structure:

```
developer-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/              # For static assets (favicon, images)
└── src/
    ├── main.js          # JavaScript logic
    ├── project-data.js  # Project data
    └── style.css        # Tailwind CSS + custom styles
```

---

## 🎨 Step 3: Set Up Tailwind CSS

### 3.1 Create style.css

Create `src/style.css` with Tailwind directives and custom theme:

```css
@import "tailwindcss";

@theme {
  /* Custom brand colors */
  --color-brand-grey: #6B7280;
  --color-brand-slate: #64748B;
  --color-brand-navy: #0B3D91;
  --color-brand-dark: #0f172a;
  --color-brand-light: #f8fafc;
}

/* Custom animations */
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  opacity: 0;
  animation: reveal 0.6s ease-out forwards;
}

.reveal.active {
  animation-play-state: running;
}
```

**What This Does:**
- `@import "tailwindcss"` - Imports Tailwind CSS v4
- `@theme` - Defines custom color variables
- Custom reveal animation for scroll effects

---

## 🧩 Step 4: Build the Navigation Bar

### 4.1 Create Fixed Navigation

Add this to your `index.html` body:

```html
<nav id="main-nav" class="fixed w-full z-40 top-0 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <!-- Logo -->
    <a href="#" class="flex items-center space-x-3">
      <span class="text-2xl font-bold text-brand-navy dark:text-white">DevPortfolio.</span>
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-8">
      <ul class="flex flex-row space-x-8 font-medium">
        <li><a href="#home" class="nav-link" data-section="home">Home</a></li>
        <li><a href="#about" class="nav-link" data-section="about">About</a></li>
        <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
        <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
      </ul>
    </div>
    
    <!-- Theme Toggle Button -->
    <button id="theme-toggle" type="button">
      <svg id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    </button>
  </div>
</nav>
```

### 4.2 Add Navigation JavaScript

Create `src/main.js` and add theme toggle logic:

```javascript
// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const html = document.documentElement;

function updateThemeUI() {
  if (localStorage.getItem('color-theme') === 'dark' || 
      (!('color-theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    lightIcon.style.display = '';
    darkIcon.style.display = 'none';
  } else {
    html.classList.remove('dark');
    lightIcon.style.display = 'none';
    darkIcon.style.display = '';
  }
}

updateThemeUI();

themeToggleBtn.addEventListener('click', function () {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
  updateThemeUI();
});
```

**How It Works:**
- Checks localStorage for saved theme preference
- Falls back to system preference if no saved theme
- Toggles between dark/light mode on button click
- Persists choice in localStorage

---

## 📝 Step 5: Create Project Data Structure

### 5.1 Create project-data.js

Create `src/project-data.js` to store project information:

```javascript
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "frontend",
    summary: "A high-performance analytics dashboard for online retailers.",
    problem: "Retailers needed a consolidated view of sales across multiple channels.",
    features: [
      "Real-time data visualization with Chart.js",
      "Dark/Light mode support",
      "Responsive table layouts",
      "Export to CSV functionality"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    repo: "https://github.com/username/project",
    demo: "https://demo.example.com"
  },
  // Add more projects...
];

export default projects;
```

**Data Structure Explained:**
- `id` - Unique identifier for each project
- `category` - For filtering (frontend/backend/fullstack)
- `summary` - Brief description
- `problem` - What problem it solves
- `features` - Array of key features
- `image` - Project screenshot URL
- `tech` - Technologies used
- `repo` - GitHub repository link
- `demo` - Live demo link

---

## 🎯 Step 6: Implement Project Filtering

### 6.1 Add Filter Buttons to HTML

```html
<section id="projects" class="section-padding">
  <div class="container-custom">
    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button class="filter-btn bg-brand-navy text-white" data-filter="all">All Projects</button>
      <button class="filter-btn" data-filter="frontend">Frontend</button>
      <button class="filter-btn" data-filter="backend">Backend</button>
      <button class="filter-btn" data-filter="fullstack">Fullstack</button>
    </div>
    
    <!-- Projects Grid -->
    <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
  </div>
</section>
```

### 6.2 Add Filtering Logic to main.js

```javascript
import projects from './project-data.js';

const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';
  
  const filtered = projects.filter(p => 
    filter === 'all' || p.category === filter
  );
  
  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal';
    card.style.animationDelay = `${index * 100}ms`;
    
    card.innerHTML = `
      <div class="relative h-48 overflow-hidden cursor-pointer" onclick="openModal(${project.id})">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <span class="text-xs font-bold text-brand-navy uppercase">${project.category}</span>
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-600 text-sm mb-4">${project.summary}</p>
        <div class="flex flex-wrap gap-2">
          ${project.tech.map(t => `<span class="text-xs bg-gray-100 px-2 py-1 rounded">${t}</span>`).join('')}
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(card);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button styles
    filterBtns.forEach(b => b.classList.remove('bg-brand-navy', 'text-white'));
    btn.classList.add('bg-brand-navy', 'text-white');
    
    renderProjects(btn.dataset.filter);
  });
});

// Initial render
renderProjects();
```

**Key Concepts:**
- **Array.filter()** - Filters projects by category
- **Dynamic HTML** - Creates project cards programmatically
- **Event Delegation** - Handles filter button clicks
- **Staggered Animation** - Uses delay for smooth reveal

---

## 🎭 Step 7: Create Modal Popup for Project Details

### 7.1 Add Modal HTML

```html
<!-- Modal -->
<div id="project-modal" class="hidden fixed inset-0 z-50 items-center justify-center" aria-hidden="true">
  <div id="modal-backdrop" class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
  <div class="modal-content relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform scale-95 opacity-0 transition-all duration-300">
    <button id="close-modal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
      <i class="fas fa-times text-2xl"></i>
    </button>
    
    <div class="p-8">
      <h2 id="m-title" class="text-3xl font-bold mb-4"></h2>
      <img id="m-image" class="w-full h-64 object-cover rounded-xl mb-6" alt="">
      <p id="m-summary" class="text-lg mb-4"></p>
      
      <h3 class="text-xl font-bold mb-3">Problem Statement</h3>
      <p id="m-problem" class="mb-6"></p>
      
      <h3 class="text-xl font-bold mb-3">Key Features</h3>
      <ul id="m-features" class="list-disc list-inside mb-6"></ul>
      
      <h3 class="text-xl font-bold mb-3">Tech Stack</h3>
      <div id="m-stack" class="flex flex-wrap gap-2 mb-6"></div>
      
      <div class="flex gap-4">
        <a id="m-repo" href="#" target="_blank" class="btn">View Code</a>
        <a id="m-demo" href="#" target="_blank" class="btn">Live Demo</a>
      </div>
    </div>
  </div>
</div>
```

### 7.2 Add Modal Logic to main.js

```javascript
const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalBtn = document.getElementById('close-modal');

window.openModal = (id) => {
  const project = projects.find(p => p.id === id);
  if (!project) return;
  
  // Populate modal data
  document.getElementById('m-title').textContent = project.title;
  document.getElementById('m-image').src = project.image;
  document.getElementById('m-summary').textContent = project.summary;
  document.getElementById('m-problem').textContent = project.problem;
  document.getElementById('m-repo').href = project.repo;
  document.getElementById('m-demo').href = project.demo;
  
  // Render features list
  const featuresList = document.getElementById('m-features');
  featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  
  // Render tech stack
  const stackContainer = document.getElementById('m-stack');
  stackContainer.innerHTML = project.tech.map(t => 
    `<span class="bg-blue-50 text-brand-navy px-3 py-1 rounded">${t}</span>`
  ).join('');
  
  // Show modal with animation
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
  
  setTimeout(() => {
    modalContent.classList.remove('scale-95', 'opacity-0');
    modalContent.classList.add('scale-100', 'opacity-100');
  }, 10);
};

const closeModal = () => {
  modalContent.classList.remove('scale-100', 'opacity-100');
  modalContent.classList.add('scale-95', 'opacity-0');
  
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
  }, 300);
};

closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

**Modal Features:**
- Opens on project card click
- Displays detailed project information
- Smooth scale/fade animation
- Close on backdrop click or Escape key
- Prevents body scrolling when open

---

## ✨ Step 8: Add Scroll Animations

### 8.1 Implement Intersection Observer

Add to `main.js`:

```javascript
function setupObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

setupObserver();
```

**How It Works:**
- **IntersectionObserver** - Detects when elements enter viewport
- `threshold: 0.1` - Triggers when 10% of element is visible
- Adds 'active' class to trigger CSS animations
- Unobserves after animation to improve performance

---

## 🎯 Step 9: Build and Test

### 9.1 Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### 9.2 Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### 9.3 Preview Production Build

```bash
npm run preview
```

---

## 🚀 Step 10: Deploy Your Portfolio

### Option 1: Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 🎓 Key Concepts You Learned

1. **Vite Build Tool**
   - Fast development server with HMR (Hot Module Replacement)
   - Optimized production builds
   - Plugin system for extending functionality

2. **Tailwind CSS v4**
   - Utility-first CSS approach
   - Dark mode with `dark:` prefix
   - Custom theme variables with `@theme`

3. **Modern JavaScript**
   - ES6 Modules (import/export)
   - Array methods (filter, map, forEach)
   - DOM manipulation
   - Event handling
   - LocalStorage API

4. **Web APIs**
   - IntersectionObserver for scroll animations
   - matchMedia for system theme detection
   - classList for dynamic styling

5. **Accessibility**
   - Semantic HTML
   - ARIA labels and attributes
   - Keyboard navigation
   - Focus management
   - Skip to content link

6. **Responsive Design**
   - Mobile-first approach
   - Flexbox and Grid layouts
   - Responsive breakpoints (md:, lg:)
   - Touch-friendly interface

---

## 🛠️ Customization Tips

### Change Color Scheme

Edit `src/style.css`:

```css
@theme {
  --color-brand-navy: #7C3AED;  /* Purple theme */
}
```

### Add More Sections

1. Create HTML section in `index.html`
2. Add navigation link
3. Add scroll spy logic in `main.js`

### Add Blog Section

1. Create `blog-data.js` similar to `project-data.js`
2. Render blog posts dynamically
3. Add filter/search functionality

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev Accessibility](https://web.dev/accessibility/)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## 🐛 Troubleshooting

### Issue: Styles not applying

**Solution:** Make sure Vite dev server is running (`npm run dev`) and CSS is properly linked.

### Issue: Dark mode not working

**Solution:** Check if Tailwind dark mode is enabled and localStorage is accessible.

### Issue: Images not loading

**Solution:** Use absolute URLs or place images in the `public/` folder.

---

## 🎉 Congratulations!

You've successfully built a modern developer portfolio from scratch! You now understand:
- How to set up a modern build tool (Vite)
- How to use Tailwind CSS v4
- How to create interactive UI components
- How to implement animations and transitions
- How to make your site accessible and responsive
- How to deploy your portfolio to the web

**Next Steps:**
- Customize the design to match your personal brand
- Add your own projects and content
- Implement a contact form with a backend
- Add a blog section
- Integrate analytics (Google Analytics, Plausible)
- Add SEO optimization (meta tags, sitemap, robots.txt)

---

**Built with ❤️ by Aayush Mehta**

*If you found this guide helpful, please star the repository on GitHub!*
