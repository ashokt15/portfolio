// Projects Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    icon: "fas fa-shopping-cart",
    gradient: "from-indigo-500 to-purple-600",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-purple-100 text-purple-800" },
      { name: "Stripe", color: "bg-yellow-100 text-yellow-800" }
    ],
    githubUrl: "https://github.com/ashokt15/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    icon: "fas fa-tasks",
    gradient: "from-green-500 to-teal-600",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Firebase", color: "bg-red-100 text-red-800" },
      { name: "Material-UI", color: "bg-indigo-100 text-indigo-800" },
      { name: "Socket.io", color: "bg-gray-100 text-gray-800" }
    ],
    githubUrl: "https://github.com/ashokt15/task-manager",
    liveUrl: "https://your-task-manager.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard built with React and D3.js. Features real-time data updates and customizable charts.",
    icon: "fas fa-chart-bar",
    gradient: "from-orange-500 to-red-600",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "D3.js", color: "bg-orange-100 text-orange-800" },
      { name: "Tailwind", color: "bg-cyan-100 text-cyan-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" }
    ],
    githubUrl: "https://github.com/ashokt15/analytics-dashboard",
    liveUrl: "https://your-analytics-dashboard.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, comment system, and SEO optimization. Built with Next.js and headless CMS.",
    icon: "fas fa-blog",
    gradient: "from-purple-500 to-pink-600",
    technologies: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
      { name: "Strapi", color: "bg-green-100 text-green-800" },
      { name: "GraphQL", color: "bg-gray-100 text-gray-800" }
    ],
    githubUrl: "https://github.com/ashokt15/blog-platform",
    liveUrl: "https://your-blog-platform.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "React Native App",
    description: "Cross-platform mobile application for fitness tracking with offline capabilities, push notifications, and social features.",
    icon: "fas fa-mobile-alt",
    gradient: "from-teal-500 to-blue-600",
    technologies: [
      { name: "React Native", color: "bg-blue-100 text-blue-800" },
      { name: "Redux", color: "bg-purple-100 text-purple-800" },
      { name: "Firebase", color: "bg-red-100 text-red-800" },
      { name: "SQLite", color: "bg-green-100 text-green-800" }
    ],
    githubUrl: "https://github.com/ashokt15/fitness-tracker-app",
    liveUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "AI Chatbot",
    description: "Intelligent chatbot with natural language processing capabilities. Integrates with multiple APIs and provides contextual responses.",
    icon: "fas fa-robot",
    gradient: "from-yellow-500 to-orange-600",
    technologies: [
      { name: "Python", color: "bg-blue-100 text-blue-800" },
      { name: "Flask", color: "bg-green-100 text-green-800" },
      { name: "OpenAI", color: "bg-purple-100 text-purple-800" },
      { name: "WebSocket", color: "bg-gray-100 text-gray-800" }
    ],
    githubUrl: "https://github.com/ashokt15/ai-chatbot",
    liveUrl: "https://your-chatbot-demo.vercel.app",
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