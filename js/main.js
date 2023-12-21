const video = document.getElementById("video");

const play = document.querySelector(".play");

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    video.classList.add("isPlayning");
  } else {
    video.pause();
    video.classList.remove("isPlayning");
  }
});

const accordionButtons = document.querySelectorAll(".accordion-toggle");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const info = this.closest(".accordion").querySelector(".accordion-info");
    info.classList.toggle("is-open");
    this.classList.toggle("is-open");
  });
});
