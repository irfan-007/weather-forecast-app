// DOM elements --
const circles = document.querySelectorAll(".circle");
let progress = document.querySelector(".indicator");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// console.log(circles, progress, prev, next);
let max_step = circles.length - 1;
let curr_step = 0;
let multi = 100 / max_step;
// logical functions ---
prev.addEventListener("click", (e) => {
  if (curr_step == 0) return;
  let circle = circles[curr_step];
  circle.classList["remove"]("active");
  curr_step--;
  progress.style.width = `${multi * curr_step}%`;
  if (curr_step == 0) prev.disabled = true;
  next.disabled = false;
});

next.addEventListener("click", (e) => {
  if (curr_step == max_step) return;
  curr_step++;
  let circle = circles[curr_step];
  circle.classList["add"]("active");
  progress.style.width = `${multi * curr_step}%`;
  prev.disabled = false;
  if (curr_step == max_step) next.disabled = true;
});
