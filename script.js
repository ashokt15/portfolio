// Dark Mode Toggle
const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  toggle.textContent = document.documentElement.classList.contains('dark') ? '🌞' : '🌙';
});

// Dynamic Projects Section
const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with HTML, Tailwind CSS, and vanilla JavaScript. Deployed on Vercel.",
    link: "https://your-deployed-portfolio.vercel.app/"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard with order tracking, product analytics, and dark mode.",
    link: "#"
  },
  {
    title: "Blog Engine",
    description: "A minimal markdown-based blog system with theme toggler and SEO-ready layout.",
    link: "#"
  }
];

const container = document.getElementById('projectsList');
projects.forEach(project => {
  const el = document.createElement('div');
  el.className = 'border rounded-lg p-4 dark:border-gray-700';
  el.innerHTML = `
    <h4 class="text-xl font-bold mb-1">${project.title}</h4>
    <p class="mb-2">${project.description}</p>
    <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank" rel="noopener">View Project</a>
  `;
  container.appendChild(el);
});
tailwind.config = {
      darkMode: 'class'
    }