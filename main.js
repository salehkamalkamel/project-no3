const primaryNav = document.querySelector(".primary-nav");
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", () => {
  primaryNav.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
