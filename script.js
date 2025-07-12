// Projects Data
const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "Taskmate is a minimalist, modern, and responsive web application that allows users to manage personal or professional tasks with ease.",
    icon: "fas fa-tasks",
    gradient: "from-green-500 to-teal-600",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "TailwindCSS", color: "bg-red-100 text-red-800" },
      { name: "Express", color: "bg-indigo-100 text-indigo-800" },
      { name: "Mongodb", color: "bg-gray-100 text-gray-800" }
    ],
    githubUrl: "https://github.com/ashokt15/taskmate",
    liveUrl: "https://taskmate-azure.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, comment system, and SEO optimization. Built with Next.js and headless CMS.",
    icon: "fas fa-blog",
    gradient: "from-purple-500 to-pink-600",
    technologies: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
      { name: "Material UI", color: "bg-green-100 text-green-800" },
      { name: "Postgres", color: "bg-gray-100 text-gray-800" }
    ],
    githubUrl: "https://github.com/ashokt15/blognest",
    liveUrl: "https://blognest-rouge.vercel.app/",
    featured: false
  },
 {
  id: 3,
  title: "Focus Today",
  description: "Focus Today is a minimal and distraction-free productivity web app designed to help users stay focused and manage tasks efficiently. It features a calming interface with essential tools like a Pomodoro timer, task list, and motivational prompts—perfect for deep work sessions.",
  icon: "fas fa-stopwatch",
  gradient: "from-yellow-400 to-orange-500",
  technologies: [
    { name: "HTML", color: "bg-orange-100 text-orange-800" },
    { name: "CSS", color: "bg-blue-100 text-blue-800" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" }
  ],
  githubUrl: "https://github.com/ashokt15/focus-today",
  liveUrl: "https://focus-today-pi.vercel.app/",
  featured: false
}
];

// Function to generate project cards
function generateProjectCards() {
  const container = document.getElementById('projectsContainer');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden';

    const techTags = project.technologies.map(tech =>
      `<span class="${tech.color} px-2 py-1 rounded-full text-xs">${tech.name}</span>`
    ).join('');

    projectCard.innerHTML = `
                <div class="h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center">
                    <i class="${project.icon} text-white text-6xl"></i>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${techTags}
                    </div>
                    <div class="flex space-x-4">
                        <a href="${project.githubUrl}" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors">
                            <i class="fab fa-github mr-1"></i> Code
                        </a>
                        <a href="${project.liveUrl}" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors">
                            <i class="fas fa-external-link-alt mr-1"></i> ${project.liveUrl === '#' ? 'Demo' : 'Live Demo'}
                        </a>
                    </div>
                </div>
            `;

    container.appendChild(projectCard);
  });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  generateProjectCards();

  // Re-observe the dynamically created project cards
  setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }, 100);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('dark', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      mobileMenu.classList.add('hidden');
    }
  });
});

// Scroll Progress Indicator
const scrollIndicator = document.getElementById('scrollIndicator');

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Add typing effect restart
setInterval(() => {
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    typewriter.style.animation = 'none';
    setTimeout(() => {
      // Increase duration, reduce step count for smoother typing
      typewriter.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
    }, 50);
  }
}, 10000);
