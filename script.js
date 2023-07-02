var typed = new Typed(".typing", {
  strings: ["Front-End Developer", "Visual Artist", "Lifelong Learner"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 120;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 120;
});
