import Swiper, { Navigation, Pagination } from "swiper";

const heroCarousel = new Swiper(".hero-carousel", {
  modules: [Navigation, Pagination],
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
