const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll('.nav__menu a').forEach(a => {
  a.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Message captured ✅ (Next step: connect EmailJS or backend).";
  form.reset();
});
