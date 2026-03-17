// Greeting when someone clicks the header
// document.querySelector('h1').addEventListener('click', () => {
//   alert('Welcome to Grace Beauty Salon! Book your appointment today!');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const btn = document.getElementById('menu-toggle');
//   const nav = document.getElementById('nav-links');
//   btn.addEventListener('click', () => {
//     btn.classList.toggle('active');
//     nav.classList.toggle('active');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('#nav-links a'); // all links inside menu

  // Toggle hamburger open/close
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');   // ☰ ↔ X
    nav.classList.toggle('active');   // show/hide menu
  });

  // ✅ Close the menu when a link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      btn.classList.remove('active');
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const overlays = document.querySelectorAll(".overlay");

  overlays.forEach((overlay, i) => {
    const delay = Math.random() * 2; // random start delay
    const duration = 5 + Math.random() * 3; // random speed (5–8s)
    overlay.style.animation = `floatBlob ${duration}s ease-in-out ${delay}s infinite`;
  });
});