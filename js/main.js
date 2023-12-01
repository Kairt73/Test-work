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
