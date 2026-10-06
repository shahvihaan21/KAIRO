// ================================
// KAIRO CLUB — site configuration
// ================================
// Replace this with the club's real Instagram profile URL.
const INSTAGRAM_URL = "https://www.instagram.com/the_kairo_club?stkn=MXJqNnFsMnZydWJkbA==";
// Direct link that opens a DM chat with the club (falls back to the
// profile page if the visitor isn't logged in).
const INSTAGRAM_DM_URL = "https://ig.me/m/the_kairo_club";

// Set the links once, so you only need to edit the URLs above.
const instagramLink = document.getElementById("instagramLink");
if (instagramLink) instagramLink.href = INSTAGRAM_URL;

// Contact section — point at the DM chat, profile as fallback.
const contactDmButton = document.getElementById("contactDmButton");
const contactProfileLink = document.getElementById("contactProfileLink");
if (contactDmButton) contactDmButton.href = INSTAGRAM_DM_URL;
if (contactProfileLink) contactProfileLink.href = INSTAGRAM_URL;

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal elements when they enter the viewport
// (falls back to visible if IntersectionObserver is unavailable,
// so content never gets stuck invisible.)
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("visible"));
}

// Current year (only if the footer year element exists)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    // Add a small delay to ensure progress bar completes its aesthetic animation
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 600);
  }
});
