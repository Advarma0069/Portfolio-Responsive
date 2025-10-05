
const skills = document.querySelectorAll(".skill");

const easeOutExpo = (t) => 1 - Math.pow(2, -10 * t);

// helper: check element in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <
      (window.innerHeight || document.documentElement.clientHeight) - 50 &&
    rect.bottom > 0
  );
}

function animateBar(barEl, targetPercent) {
  // set CSS width (uses transition in CSS)
  barEl.style.width = targetPercent + "%";
}

function animateCounter(counterEl, target, duration = 1400) {
  const startTime = performance.now();
  const start = 0;
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(progress);
    const current = Math.round(start + (target - start) * eased);
    counterEl.textContent = current + "%";
    if (progress < 1) requestAnimationFrame(step);
    else counterEl.textContent = target + "%";
  }
  requestAnimationFrame(step);
}

const observed = new WeakSet();

function onScrollOrLoad() {
  skills.forEach((skill) => {
    if (observed.has(skill)) return; // already animated
    if (isInViewport(skill)) {
      observed.add(skill);
      const bar = skill.querySelector(".bar");
      const counter = skill.querySelector(".counter");
      const target = parseInt(bar.getAttribute("data-percent"), 10) || 0;

      // start animation (small timeout to allow repaint)
      setTimeout(() => {
        animateBar(bar, target);
        animateCounter(counter, target);
      }, 80);
    }
  });
}

window.addEventListener("scroll", onScrollOrLoad, { passive: true });
window.addEventListener("resize", onScrollOrLoad);
window.addEventListener("load", onScrollOrLoad);
// Also trigger once in case the element is already visible
onScrollOrLoad();

const menuToggle = document.getElementById("menu-toggle");
const navbar1 = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar1.classList.toggle("active");
});
// Close menu when clicking a link
document.querySelectorAll(".navbar li a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar1.classList.remove("active");
  });
});

const typed = new Typed(".multiple-text", {
  strings: [
    ".Net Developer",
    "at Sapeagle ERP Pvt Ltd.",
    // "Software Developer",
    // "Data Analysis",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "25px",
  duration: 250,
  reset: true,
});

sr.reveal(".home-text", { delay: 190, origin: "bottom" });
sr.reveal(".about,.skills,.portfolio,.contact", {
  delay: 200,
  origin: "bottom",
});
