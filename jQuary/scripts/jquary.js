
// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,


//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

// const swiperBaner = new Swiper('.baner', {
//   direction: 'horizontal',
//   loop: true,
//   effect: 'cube',
//   autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: '.baner .swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.baner .swiper-pagination',
//     prevEl: '.baner .swiper-pagination',
//     },

// });
$(document).ready(function() {
  
  $('.center').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
  
});

