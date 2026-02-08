function nextStep() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

const slider = document.getElementById("slider");

slider.addEventListener("input", function () {
  if (this.value >= 100) {
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("reveal").classList.remove("hidden");
    launchConfetti();
  }
});

function launchConfetti() {
  document.body.style.background =
    "linear-gradient(135deg, #ff9a9e, #fad0c4)";
}
