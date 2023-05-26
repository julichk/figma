// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: 40.670145, lng: -73.910384 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "b1bd6c3973ab764",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

// ПЕРШИЙ СЛАЙДЕР
$(document).ready(function () {
  const swiperBaner = new Swiper(".background", {
    direction: "vertical",
    loop: false,
    effect: "slide",
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// СКРОЛ
const scroll = document.querySelector(".header_title_arrow");

const scroolToInfo = () => {
  const info = document.querySelector(".main_section-do");
  info.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
scroll.addEventListener("click", scroolToInfo);
