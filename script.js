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
    description: "A clean, responsive personal portfolio built using HTML, Tailwind CSS, and JavaScript.",
    link: "https://portfolio-six-flame-46.vercel.app/"
  },
  {
    title: "E-Commerce Dashboard",
    description: "A dashboard with analytics and order tracking built with Chart.js and Express backend.",
    link: "#"
  },
  {
    title: "Blog Platform",
    description: "A minimal markdown-based blog system with dark mode and real-time previews.",
    link: "#"
  }
];

const container = document.getElementById('projectsList');
projects.forEach(project => {
  const el = document.createElement('div');
  el.className = 'border rounded-lg p-4 dark:border-gray-700 shadow hover:shadow-lg transition';
  el.innerHTML = `
    <h4 class="text-xl font-bold mb-1">${project.title}</h4>
    <p class="mb-2">${project.description}</p>
    <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank" rel="noopener">View Project</a>
  `;
  container.appendChild(el);
});
