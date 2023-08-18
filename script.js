// Section 1 - Typed.js
// Create a new Typed instance and target the element with class "typing"
var typed = new Typed(".typing", {
  // Set the strings to be typed out in the element with class "typing"
  strings: ["Front-End Developer", "Visual Artist", "Lifelong Learner"],

  // Set the typing speed in milliseconds (time taken to type each character)
  typeSpeed: 150,

  // Set the backspacing speed in milliseconds (time taken to delete each character when looping back)
  backSpeed: 150,

  // Set the loop option to true to make the strings loop endlessly
  loop: true,
});

// Section 2 - Smooth Horizontal Scrolling
// Get the element with class "gallery" and store it in the variable scrollContainer
let scrollContainer = document.querySelector(".gallery");

// Get the elements with IDs "backBtn" and "nextBtn" and store them in variables
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Add a wheel event listener to the scrollContainer element
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault(); // Prevent default scrolling behavior
  scrollContainer.scrollLeft += evt.deltaY; // Move horizontally based on the wheel movement
  scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling temporarily
});

// Add a click event listener to the nextBtn element
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  scrollContainer.scrollLeft += 120; // Scroll horizontally to the right by 120 pixels
});

// Add a click event listener to the backBtn element
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  scrollContainer.scrollLeft -= 120; // Scroll horizontally to the left by 120 pixels
});

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

applyAnimation(document.getElementById("About"));
applyAnimation(document.getElementById("welcome-section"));
applyAnimation(document.getElementById("Skills"));
applyAnimation(document.getElementById("projects"));
