(function initialScript() {
  const burgerButton = document.querySelector(".js-hamburger");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("is-active");
  });
})();
