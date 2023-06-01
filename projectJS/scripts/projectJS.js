// form
const myForm = document.forms[0];

console.log(myForm);

const myFormInput = myForm.fname;
console.log(myFormInput);

$(document).ready(function () {
  $(".main_section_contact_item_form_content_form_button_submit").click(
    function (event) {
      event.preventDefault();

      var formData = $(
        ".main_section_contact_item_form_content_form_user"
      ).serialize();

      console.log(formData);
      $(".main_section_contact_item_form_content_form_user").remove();
      $(".gif").html('<img src="./assets/gif-submited.gif"/>');

      $("#serializedData").text(formData);
    }
  );
});

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

// slider 2
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".dots",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

let appendNumber = 4;
let prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });

document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document.querySelector(".append-slide").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.appendSlide(
    '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  );
});
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });
