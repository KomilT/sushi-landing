import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 2,

  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    },
  },
});
