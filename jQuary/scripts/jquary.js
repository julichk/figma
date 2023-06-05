// second slider
const swiper = new Swiper(".swiper.guitar", {
  direction: "horizontal",
  loop: true,
  //slidesPerView: 5,
  spaceBetween: 10,

  pagination: {
    el: ".second",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper.guitar .swiper-button-next",
    prevEl: ".swiper.guitar .swiper-button-prev",
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    970: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

// third slider
const swiperLast = new Swiper(".swiper.last", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,

  pagination: {
    el: ".last-section .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper.last .swiper-button-next",
    prevEl: ".swiper.last .swiper-button-prev",
  },
});

//// first slider
const swiperBaner = new Swiper(".baner", {
  direction: "horizontal",
  loop: true,
  effect: "slider",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".baner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".baner .swiper-pagination",
    prevEl: ".baner .swiper-pagination",
  },
});
