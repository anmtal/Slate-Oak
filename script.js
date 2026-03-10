
// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 24px rgba(44,74,30,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
  }
});

// Hamburger menu
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.textContent = "✓ Request Sent! We'll call you shortly.";
  btn.style.background = "#3A6427";
  btn.disabled = true;
}

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".service-card, .stat-box, .testimonial-card, .gallery-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
