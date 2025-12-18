# 🚀 Developer Portfolio Template

A modern, responsive, and customizable portfolio template for IT professionals. Built with **Vite**, **Tailwind CSS v4**, and **Vanilla JavaScript**.


## ✨ Features

- 🌓 **Dark/Light Mode** - Automatic theme detection with manual toggle
- 📱 **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast builds
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🔍 **Project Filtering** - Filter projects by category (Frontend, Backend, Fullstack)
- 📦 **Modal Popups** - Detailed project views with animations
- ♿ **Accessible** - ARIA labels, focus traps, keyboard navigation
- 🎭 **Smooth Animations** - Scroll reveal, hover effects, transitions

---

## 📁 Project Structure

```
teacher-portfolio/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── main.js             # Main JavaScript (theme, nav, modals)
│   ├── project-data.js     # 📌 YOUR PROJECT DATA (edit this!)
│   └── style.css           # Tailwind CSS + custom styles
└── README.md               # This file
```

---

## 🛠️ Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# 1. Clone or download the template
cd teacher-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://127.0.0.1:3000
```

### Build for Production

```bash
# Generate optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📝 Customization Guide

### 1️⃣ Update Your Personal Information

Edit `index.html` and update these sections:

#### Hero Section (Lines ~107-130)
```html
<!-- Update your tagline -->
<h1>Building digital products with purpose and precision.</h1>

<!-- Update your bio -->
<p>I'm a Full Stack Developer specializing in...</p>
```

#### About Section (Lines ~159-230)
- Update your bio paragraphs
- Update work experience timeline
- Update social media links (GitHub, LinkedIn, Twitter)

#### Contact Section (Lines ~270-340)
- Update email address
- Update GitHub/LinkedIn URLs
- Update location

#### Footer
- Update copyright name and year

---

### 2️⃣ Configure Your Projects (Most Important!)

Edit **`src/project-data.js`** to add your projects:

```javascript
const projects = [
  {
    id: 1,                          // Unique ID (required)
    title: "Project Name",          // Project title
    category: "frontend",           // "frontend" | "backend" | "fullstack"
    summary: "Short description",   // Brief summary (1-2 sentences)
    problem: "Problem it solves",   // What problem does it solve?
    features: [                     // Key features list
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    image: "https://...",           // Project screenshot/image URL
    tech: ["React", "Node.js"],     // Technologies used
    repo: "https://github.com/...", // GitHub repo URL
    demo: "https://..."             // Live demo URL
  },
  // Add more projects...
];

export default projects;
```

#### Project Categories

| Category | Description |
|----------|-------------|
| `frontend` | UI/UX focused projects (React, Vue, CSS, etc.) |
| `backend` | Server-side projects (APIs, databases, CLI tools) |
| `fullstack` | Complete applications with both frontend and backend |

#### Tips for Project Images

- Use high-quality screenshots (1200x800px recommended)
- Host on [Unsplash](https://unsplash.com), [Imgur](https://imgur.com), or your own CDN
- Use consistent aspect ratios for a clean grid

---

### 3️⃣ Update Tech Stack Icons

In `index.html`, find the Tech Stack section (~line 140) and update the icons:

```html
<div class="flex flex-wrap justify-center items-center gap-8">
  <i class="fab fa-html5" title="HTML5"></i>
  <i class="fab fa-react" title="React"></i>
  <i class="fab fa-python" title="Python"></i>
  <!-- Add/remove icons as needed -->
</div>
```

Find icons at [Font Awesome](https://fontawesome.com/icons?d=gallery&s=brands).

---

### 4️⃣ Customize Colors (Optional)

Edit **`src/style.css`** to change brand colors:

```css
@theme {
  /* Main brand colors */
  --color-brand-grey: #6B7280;
  --color-brand-slate: #64748B;
  --color-brand-navy: #0B3D91;    /* Primary accent color */
  --color-brand-dark: #0f172a;    /* Dark mode background */
  --color-brand-light: #f8fafc;   /* Light mode background */
}
```

#### Color Suggestions

| Style | Primary Color |
|-------|---------------|
| Professional Blue | `#0B3D91` (current) |
| Modern Purple | `#7C3AED` |
| Tech Green | `#059669` |
| Startup Orange | `#EA580C` |

---

### 5️⃣ Add Your Resume

1. Add your resume PDF to the `public/` folder
2. Update the download link in `index.html`:

```html
<a href="./resume.pdf" download>
  <i class="fas fa-download mr-2"></i> Download Resume
</a>
```

---

## ⚙️ Configuration Files

### vite.config.js

```javascript
export default defineConfig({
  root: '.',              // Project root
  base: './',             // Use './' for relative paths (subfolder deploy)
  publicDir: 'public',    // Static assets folder
  build: {
    outDir: 'dist',       // Output folder for production
  },
  plugins: [
    tailwindcss(),        // Tailwind CSS v4 plugin
  ],
  server: {
    port: 3000,           // Dev server port
    host: '127.0.0.1',    // Localhost only
  },
})
```

### package.json Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🚀 Deployment

### Netlify

1. Push code to GitHub
2. Connect repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite settings

### GitHub Pages

```bash
# Build the project
npm run build

# Deploy dist folder to gh-pages branch
npx gh-pages -d dist
```

### Manual Upload

1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting


## 📋 Checklist Before Going Live

- [ ] Update personal info in `index.html`
- [ ] Add your projects to `src/project-data.js`
- [ ] Update social media links
- [ ] Add resume PDF to `public/` folder
- [ ] Update favicon in `public/` folder
- [ ] Test on mobile devices
- [ ] Test dark/light mode toggle
- [ ] Update meta description and title
- [ ] Add Google Analytics (optional)

---

## 🐛 Troubleshooting

### Icons not showing
Make sure Font Awesome CDN is loaded in `index.html`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Styles not applying
1. Check that CSS is linked in `index.html`
2. Run `npm run dev` to start Vite
3. Clear browser cache (Ctrl+Shift+R)

### Port already in use
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001,  // Try a different port
}
```

---

## 📄 License

MIT License - Feel free to use this template for personal or commercial projects.

---

## 🙏 Credits

- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Font Awesome](https://fontawesome.com)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Unsplash](https://unsplash.com) for placeholder images

---

**Made with ❤️ for developers who want a clean, professional portfolio.**
**Created by Aayush Mehta**
