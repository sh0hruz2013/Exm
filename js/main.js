let modeBtn = document.getElementById("mode-dark");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/moon.svg";
  } else {
    this.firstElementChild.src =
      "./images/light_mode_24dp_FFFFFF_FILL0_wght300_GRAD0_opsz24.svg";
  }
  document.body.classList.toggle("dark");
});
