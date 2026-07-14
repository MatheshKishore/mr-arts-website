// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hero timecode ticker (decorative, ties to the film-production motif)
const tc = document.getElementById('timecode');
if (tc) {
  let frame = 0;
  const pad = n => String(n).padStart(2, '0');
  setInterval(() => {
    frame++;
    const totalSeconds = Math.floor(frame / 25);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const f = frame % 25;
    tc.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  }, 40);
}

// Portfolio category filter (portfolio.html) — supports items tagged with
// more than one category, e.g. data-category="food featured"
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-card');
if (filterButtons.length && portfolioItems.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      portfolioItems.forEach(item => {
        const cats = (item.dataset.category || '').split(' ');
        const match = cat === 'all' || cats.includes(cat);
        item.style.display = match ? '' : 'none';
      });
    });
  });
}

// Contact form -> mailto fallback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const business = document.getElementById('business').value;
    const email = document.getElementById('email').value;
    const projectType = document.getElementById('projectType') ? document.getElementById('projectType').value : '';
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent(`New enquiry — ${business || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:mkpr0ductions1123@gmail.com?subject=${subject}&body=${body}`;
  });
}
