const menuToggle = document.getElementById('menu-toggle');
const navbar1 = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar1.classList.toggle('active');
});
// Close menu when clicking a link
document.querySelectorAll('.navbar li a').forEach(link => {
  link.addEventListener('click', () => {
    navbar1.classList.remove('active');
  });
});


const header = document.querySelector("header");
const typed = new Typed(".multiple-text", {
  strings: [
	  ".NET Developer",
	  "in Sapeagle ERP Pvt lvt."
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 250,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.skills,.portfolio,.contact',{delay:200, origin:'bottom'})
