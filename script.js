// Mobile nav
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const revealEls = document.querySelectorAll(".card, .tender-list li, .why, .steps li, .section-head");
revealEls.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// Count-up stats
document.querySelectorAll("[data-count]").forEach((el) => {
  const target = +el.dataset.count;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / 1600, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
});

// Quote form: opens the visitor's email app with the enquiry pre-filled
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nOrganisation: ${f.get("org")}\nCategory: ${f.get("category")}\n\nRequirement:\n${f.get("msg")}`;
  window.location.href = `mailto:vindyavasnimarketing2020@gmail.com?subject=${encodeURIComponent("Quote request – " + f.get("category"))}&body=${encodeURIComponent(body)}`;
  document.getElementById("formNote").textContent = "Thank you! Your email app should open to send the enquiry.";
  e.target.reset();
});
