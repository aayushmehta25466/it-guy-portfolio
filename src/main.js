import projects from './project-data.js';


// --- 2. Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const html = document.documentElement;

function updateThemeUI() {
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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

// --- 3. Navbar & Scroll Logic ---
const nav = document.getElementById('main-nav');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('navbar-sticky');
const backToTopBtn = document.getElementById('back-to-top');

// Hide/Show Navbar on Scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Hide navbar on down scroll, show on up scroll
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }
  lastScrollY = currentScrollY;

  // Back to Top Button Visibility
  if (currentScrollY > 500) {
    backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'invisible');
  } else {
    backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'invisible');
  }
});

// Back to Top Action
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

// --- 4. Active Nav Tracking (Scroll Spy) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  });

  // Update Desktop
  navLinks.forEach(link => {
    link.classList.remove('active', 'text-brand-navy', 'dark:text-blue-400');
    link.classList.add('text-gray-900', 'dark:text-white'); // Reset colors
    if (link.dataset.section === current) {
      link.classList.add('active', 'text-brand-navy', 'dark:text-blue-400');
      link.classList.remove('text-gray-900', 'dark:text-white');
    }
  });

  // Update Mobile
  mobileNavLinks.forEach(link => {
    // Reset styles
    link.classList.remove('bg-brand-navy', 'text-white', 'bg-brand-slate', 'dark:bg-slate-700');

    if (link.dataset.section === current) {
      // Logic: Blue in Light Mode, Slate in Dark Mode
      // Using Tailwind 'dark:' prefix for conditional styling
      link.classList.add('bg-brand-navy', 'text-white', 'dark:bg-slate-700');
    }
  });
}

window.addEventListener('scroll', setActiveNav);


// --- 5. Projects Filtering & Rendering ---
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';

  const filtered = projects.filter(p => filter === 'all' || p.category === filter);

  // Stagger animation delay
  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    // Added width classes for flexbox centering (w-full md:w-80 lg:w-96)
    card.className = `w-full md:w-80 lg:w-96 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 reveal flex flex-col`;
    card.style.animationDelay = `${index * 100}ms`;

    // Tech icons generator
    const techIcons = project.tech.slice(0, 3).map(t => `<span class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-600">${t}</span>`).join('');

    card.innerHTML = `
                    <div class="relative h-48 overflow-hidden group cursor-pointer" onclick="openModal(${project.id})">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <span class="text-white font-medium border border-white px-5 py-2 rounded-full hover:bg-white hover:text-brand-navy transition-colors">View Details</span>
                        </div>
                    </div>
                    <div class="p-6 flex flex-col grow">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-brand-navy dark:text-blue-400 uppercase tracking-wide bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">${project.category}</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-navy dark:group-hover:text-blue-400 transition-colors">${project.title}</h3>
                        <p class="text-brand-grey dark:text-gray-400 text-sm mb-4 line-clamp-2">${project.summary}</p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            ${techIcons}
                        </div>
                    </div>
                `;
    projectsGrid.appendChild(card);
  });

  // Re-trigger intersection observer for new elements
  setupObserver();
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => {
      b.classList.remove('bg-brand-navy', 'text-white', 'shadow-md', 'transform', 'scale-105');
      b.classList.add('bg-white', 'text-brand-grey', 'dark:bg-gray-800', 'dark:text-gray-300');
    });
    btn.classList.remove('bg-white', 'text-brand-grey', 'dark:bg-gray-800', 'dark:text-gray-300');
    btn.classList.add('bg-brand-navy', 'text-white', 'shadow-md', 'transform', 'scale-105');

    renderProjects(btn.dataset.filter);
  });
});

// Initial render
renderProjects();

// --- 6. Modal Logic ---
const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModalBtn = document.getElementById('close-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
let lastFocusedElement;

window.openModal = (id) => {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  // Populate data
  document.getElementById('m-title').textContent = project.title;
  document.getElementById('m-image').src = project.image;
  document.getElementById('m-summary').textContent = project.summary;
  document.getElementById('m-problem').textContent = project.problem;
  document.getElementById('m-repo').href = project.repo;
  document.getElementById('m-demo').href = project.demo;

  // List features
  const featuresList = document.getElementById('m-features');
  featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

  // List stack
  const stackContainer = document.getElementById('m-stack');
  stackContainer.innerHTML = project.tech.map(t => `<span class="bg-blue-50 text-brand-navy text-sm font-semibold px-3 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">${t}</span>`).join('');

  // Tags
  document.getElementById('m-tags').innerHTML = `<span class="bg-white/20 text-white backdrop-blur-md text-xs font-bold px-3 py-1 rounded border border-white/30">${project.category.toUpperCase()}</span>`;

  // Open Animation
  lastFocusedElement = document.activeElement;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');

  // Accessibility
  modal.setAttribute('aria-hidden', 'false');

  // Small timeout to allow display:flex to apply before opacity transition
  setTimeout(() => {
    modalContent.classList.remove('scale-95', 'opacity-0');
    modalContent.classList.add('scale-100', 'opacity-100');
    closeModalBtn.focus();
  }, 10);
};

const closeModal = () => {
  modalContent.classList.remove('scale-100', 'opacity-100');
  modalContent.classList.add('scale-95', 'opacity-0');

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) lastFocusedElement.focus();
  }, 300); // Match CSS transition duration
};

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Focus trap
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableContent = modal.querySelectorAll('a[href], button, textarea, input, select');
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  }
});

// --- 7. Scroll Animations (IntersectionObserver) ---
function setupObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
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

// --- 8. Contact Form ---
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.innerText;

  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.innerText = 'Sent!';
    btn.classList.add('bg-green-600', 'hover:bg-green-700');
    document.getElementById('form-status').classList.remove('hidden');
    this.reset();

    setTimeout(() => {
      btn.innerText = originalText;
      btn.disabled = false;
      btn.classList.remove('bg-green-600', 'hover:bg-green-700');
      document.getElementById('form-status').classList.add('hidden');
    }, 3000);
  }, 1500);
});

console.log("working")