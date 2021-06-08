/* eslint-disable no-unused-vars */
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const assortmentSwiper = new Swiper(".assortment .swiper-container", {
  slidesPerView: 1,

  navigation: {
    prevEl: ".assortment__button-prev",
    nextEl: ".assortment__button-next",
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },

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

const reviewsSwiper = new Swiper(".reviews .swiper-container");

const instagramSwiper = new Swiper(".instagram .swiper-container", {
  slidesPerView: 1,

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});
