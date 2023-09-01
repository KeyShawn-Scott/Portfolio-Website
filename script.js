// Section 1 - Typed.js

let typed = new Typed(".typing", {
  strings: ["Front-End Developer", "Visual Artist", "Lifelong Learner"],

  typeSpeed: 150,

  backSpeed: 150,

  loop: true,
});

// Section 2 - Smooth Horizontal Scrolling

let scrollContainer = document.querySelector(".gallery");

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollAmount = 300; // Default scroll amount

// Add a wheel event listener to the scrollContainer element
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault(); // Prevent default scrolling behavior
  scrollContainer.scrollLeft += evt.deltaY; // Move horizontally based on the wheel movement
  scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling temporarily
});

// Add a click event listener to the nextBtn element
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  scrollContainer.scrollLeft += scrollAmount; // Scroll horizontally to the right by 120 pixels
});

// Add a click event listener to the backBtn element
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  scrollContainer.scrollLeft -= scrollAmount; // Scroll horizontally to the left by 120 pixels
});

// Check for specific media query conditions and adjust the scroll amount
if (window.matchMedia("(max-width: 500px)").matches) {
  scrollAmount = 65;
}
if (window.matchMedia("(min-width: 501px) and (max-width: 575px)").matches) {
  scrollAmount = 95;
}
if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) {
  scrollAmount = 105;
}
if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
  scrollAmount = 115;
}
if (window.matchMedia("(min-width: 992px) and (max-width: 1199px)").matches) {
  scrollAmount = 160;
}

// Section 3 - Reusable function to apply the animation classes
function applyAnimation(element) {
  const options = {
    threshold: 0.3, // Change this value to adjust when the animation is triggered
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add the CSS class to show the element
        observer.unobserve(entry.target); // Remove the observer once the animation is triggered
      }
    });
  }, options);

  observer.observe(element);
}

// Section 4: Save the current scroll position to local storage
window.onbeforeunload = function () {
  localStorage.setItem("scrollPosition", window.scrollY);
};

// Check if there's a stored scroll position and restore it
window.onload = function () {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
    setTimeout(() => {
      window.scrollTo(0, parseInt(scrollPosition));
    }, 0);
    localStorage.removeItem("scrollPosition");
  }
};

applyAnimation(document.getElementById("welcome"));
applyAnimation(document.getElementById("about"));
applyAnimation(document.getElementById("skills"));
applyAnimation(document.getElementById("projects"));

// Section 5: Remove Center when hamburger menu is clicked

const menuToggleEl = document.getElementById("menu-toggle");
const contactLink = document.querySelector(".nav-items .oval#center");

menuToggleEl.addEventListener("change", () => {
  if (menuToggleEl.checked) {
    contactLink.style.display = "none";
  } else {
    contactLink.style.display = "block";
  }
});
