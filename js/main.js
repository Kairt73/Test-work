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

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
