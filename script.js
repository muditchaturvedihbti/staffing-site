const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = leadForm.firstName.value.trim();
  formMessage.textContent = `Thanks ${firstName}, our team will contact you within one business day.`;
  leadForm.reset();
});
