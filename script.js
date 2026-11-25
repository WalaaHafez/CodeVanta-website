const WHATSAPP_NUMBER = "971547441424"; // international format, no + or spaces

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav__menu a").forEach((a) => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Contact form → opens WhatsApp with the message ready to send.
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const business = (data.get("business") || "").toString().trim();
  const service = (data.get("service") || "").toString().trim();
  const link = (data.get("link") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  if (!name || !business || !service) {
    note.textContent = "Please add your name, business name, and what you need.";
    note.classList.add("is-error");
    return;
  }
  note.classList.remove("is-error");

  const lines = [
    "Hi CodeVanta, I'd like a free website review.",
    "",
    `Name: ${name}`,
    `Business: ${business}`,
    `I need: ${service}`,
  ];
  if (link) lines.push(`Current website / Instagram: ${link}`);
  if (message) lines.push("", message);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
  note.textContent = "WhatsApp is opening with your message — just press send.";
});
