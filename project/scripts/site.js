const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const services = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    category: 'ai',
    description: 'AI assistants, chatbots, machine learning solutions, and intelligent automation that help organisations make better decisions and improve efficiency.'
  },
  {
    id: 2,
    title: 'Software Development',
    category: 'software',
    description: 'Custom business applications, enterprise software, CRM systems, and inventory management solutions built for growth and scalability.'
  },
  {
    id: 3,
    title: 'Robotics',
    category: 'robotics',
    description: 'Practical robotics concepts and smart systems designed to improve operational efficiency and solve real-world challenges.'
  },
  {
    id: 4,
    title: 'Solar Technology',
    category: 'solar',
    description: 'Innovative solar solutions that support sustainable energy access and smarter power management for businesses and communities.'
  },
  {
    id: 5,
    title: 'Smart Technology',
    category: 'smart',
    description: 'Connected systems, IoT integration, and intelligent devices that make environments more responsive and efficient.'
  },
  {
    id: 6,
    title: 'GPS & Fleet Technology',
    category: 'gps',
    description: 'GPS tracking, fleet management, and asset monitoring solutions that give businesses real-time visibility and control.'
  }
];

const projects = [
  {
    id: 1,
    title: 'AI Business Assistant',
    category: 'ai',
    description: 'A concept for an intelligent assistant that helps small and medium enterprises automate customer communication, manage routine tasks, and access real-time insights.'
  },
  {
    id: 2,
    title: 'Business Automation System',
    category: 'software',
    description: 'A modular automation platform designed to streamline workflows, document management, and internal processes for growing organisations.'
  },
  {
    id: 3,
    title: 'Smart Environment Monitoring',
    category: 'smart',
    description: 'An IoT-based concept for monitoring environmental conditions and providing actionable data for better decision-making.'
  },
  {
    id: 4,
    title: 'GPS Fleet Tracking Concept',
    category: 'gps',
    description: 'A fleet visibility solution concept that provides real-time location tracking, route optimisation, and asset monitoring.'
  },
  {
    id: 5,
    title: 'Solar Power Management System',
    category: 'solar',
    description: 'A technology concept focused on intelligent monitoring and management of solar energy systems for improved efficiency.'
  },
  {
    id: 6,
    title: 'Assistive Robotics Concept',
    category: 'robotics',
    description: 'Exploring practical robotics applications that can support operational tasks in business and community settings.'
  }
];

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map(item => `
    <article class="card">
      <span class="category">${item.category.toUpperCase()}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join('');
}

function setupFilter(filterId, data, containerId) {
  const filterContainer = document.getElementById(filterId);
  if (!filterContainer) return;

  filterContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.dataset.filter;
    const filtered = filter === 'all' ? data : data.filter(item => item.category === filter);
    renderCards(filtered, containerId);
  });
}

renderCards(services, 'services-container');
setupFilter('service-filters', services, 'services-container');

renderCards(projects, 'projects-container');
setupFilter('project-filters', projects, 'projects-container');

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const feedback = document.getElementById('form-feedback');

  const savedName = localStorage.getItem('3core-name');
  const savedEmail = localStorage.getItem('3core-email');
  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      feedback.textContent = 'Please fill in all fields.';
      feedback.className = 'form-feedback error';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.className = 'form-feedback error';
      return;
    }

    localStorage.setItem('3core-name', name);
    localStorage.setItem('3core-email', email);

    feedback.textContent = 'Thank you! Your message has been received. We will get back to you soon.';
    feedback.className = 'form-feedback success';
    contactForm.reset();

    if (savedName) nameInput.value = localStorage.getItem('3core-name');
    if (savedEmail) emailInput.value = localStorage.getItem('3core-email');
  });
}