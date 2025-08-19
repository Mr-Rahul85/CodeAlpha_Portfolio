// // Hamburger toggle for mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});
// Animate skill bars
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    const percent = bar.getAttribute("data-progress") + "%";
    setTimeout(() => {
      bar.style.width = percent;
    }, 600);
  });
});
// project card generation
const projects = [
  {
    title: "A Basic Calculator",
    description:
      "A responsive calculator built with HTML5, CSS3, and JavaScript, supporting basic arithmetic operations with a clean UI and smooth animations. Designed to work seamlessly on both desktop and mobile devices.",
    image: "assets/calculator.jpg",
  },
  {
    title: "A Travel Website",
    description:
      "A travel website where tourists can explore destinations, view detailed pages with images and real-time weather info, helping them plan their trips easily and confidently.",
    image: "assets/taj.jpg",
  },
  {
    title: "Animated Portfolio",
    description:
      "Full-featured animated portfolio that highlights my identity, skills and projects with smooth transitions.",
    image: "assets/bg.avif",
  },
];

const container = document.getElementById("projects-container");

function getDirectionByIndex(index) {
  const pattern = ["from-left", "from-bottom", "from-right"];
  return pattern[index % pattern.length];
}

// Create card elements dynamically
projects.forEach((proj, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card", getDirectionByIndex(index));

  card.innerHTML = `
        <div class="project-image" style="background-image: url('${proj.image}');"></div>
        <div class="project-info">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-description">${proj.description}</p>
        </div>
      `;

  container.appendChild(card);
});

// Scroll reveal logic using Intersection Observer
const cards = document.querySelectorAll(".project-card");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Add staggered delay for smoother effect
        setTimeout(() => {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }, idx * 100);
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => observer.observe(card));

// invalid form feedback

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// Form handling with feedback
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "#ee0979";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "#ee0979";
    return;
  }
  formMessage.style.color = "#2193b0";
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  form.reset();
});
