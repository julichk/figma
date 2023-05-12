const myButton = document.querySelector(".button-open");
const openButton = document.querySelector(".content_modal");
const cencelButton = document.querySelector(".content_modal_button");

myButton.onclick = function () {
  openButton.classList.toggle("content_window");
  cencelButton.innerHTML = "&#10005;";
};

cencelButton.onclick = function () {
  openButton.classList.remove("content_window");
  cencelButton.innerHTML = "";
};

const buttonTrafficLights = document.querySelector('.content_traffic-lights_button');
const trafficLightElement = document.querySelector('.content_traffic-lights');
const colors = ['red', 'yellow', 'green'];
let currentColorIndex = 0;
let lastClickedColor = null;

const changeTheColor =() => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  lastClickedColor = currentColorIndex;

  const lastClickedColorElement = trafficLightElement.querySelector(`.${colors[lastClickedColor]}`);
  lastClickedColorElement.classList.toggle('active');

  if(currentColorIndex === 0){
    
  } else if(currentColorIndex === 1){
    trafficLightElement.querySelector('.red').classList.remove('active');
  } else if(currentColorIndex === 2){
    trafficLightElement.querySelector('.yellow').classList.remove('active');
  }else if(currentColorIndex === 3){
    trafficLightElement.querySelector('.green').classList.remove('active');
  }
};

buttonTrafficLights.addEventListener('click', changeTheColor);