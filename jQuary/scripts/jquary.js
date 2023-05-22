const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
console.log("love");
