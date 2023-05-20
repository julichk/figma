
//ЗАВДАННЯ 2
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

//ЗАВДАННЯ 3
// const buttonTrafficLights = document.querySelector(
//   ".content_traffic-lights_button"
// );
// const trafficLightElement = document.querySelector(".content_traffic-lights");
// const colors = ["red", "yellow", "green"];
// let currentColorIndex = 0;
// //let lastClickedColor = null;

// const changeTheColor = () => {
//   //currentColorIndex = (currentColorIndex + 1) % colors.length;
//   lastClickedColor = currentColorIndex;

//   if (currentColorIndex === 0) {
//     trafficLightElement.querySelector(".red").classList.toggle("active");
//     currentColorIndex++
//   } else if (currentColorIndex === 1) {
//     trafficLightElement.querySelector(".yellow").classList.toggle("active");
//     currentColorIndex++
//   } else if (currentColorIndex === 2) {
    
//     trafficLightElement.querySelector(".green").classList.toggle("active");
//     currentColorIndex = 0;
//   }

//   const lastClickedColorElement = trafficLightElement.querySelector(
//     `.${colors[lastClickedColor]}`
//   );
//   lastClickedColorElement.classList.toggle("active");
// };

// buttonTrafficLights.addEventListener("click", changeTheColor);

const buttonTrafficLights = document.querySelector('.content_traffic-lights_button');
const trafficLightElement = document.querySelector('.content_traffic-lights');
const colors = ['red', 'yellow', 'green'];
let currentColorIndex = 0;

const changeTheColor =() => {
  if(currentColorIndex === 0) {
    trafficLightElement.querySelector('.red').classList.toggle('active');
    
    currentColorIndex++;
  } else if(currentColorIndex === 1){
    trafficLightElement.querySelector('.yellow').classList.toggle('active');

    currentColorIndex++;
  } else if(currentColorIndex === 2){
    trafficLightElement.querySelector('.green').classList.toggle('active');

    currentColorIndex = 0;
  }

  const lastClickedColorElement = trafficLightElement.querySelector(`.${colors[currentColorIndex]}`);
  lastClickedColorElement.classList.toggle('active');
};

buttonTrafficLights.addEventListener('click', changeTheColor);






//ЗАВДАННЯ 1
var playList = [

  {
  
   author: "LED ZEPPELIN",
  
   song:"STAIRWAY TO HEAVEN"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"BOHEMIAN RHAPSODY"
  
  },
  
  {
  
   author: "LYNYRD SKYNYRD",
  
   song:"FREE BIRD"
  
  },
  
  {
  
   author: "DEEP PURPLE",
  
   song:"SMOKE ON THE WATER"
  
  },
  
  {
  
   author: "JIMI HENDRIX",
  
   song:"ALL ALONG THE WATCHTOWER"
  
  },
  
  {
  
   author: "AC/DC",
  
   song:"BACK IN BLACK"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"WE WILL ROCK YOU"
  
  },
  
  {
  
   author: "METALLICA",
  
   song:"ENTER SANDMAN"
  
  }
  
];

const musicList = document.querySelector('.content_music');

playList.forEach((song) => {
  const newElement = document.createElement('li');
  newElement.classList.add('content_music_list')
  newElement.innerHTML = `author: <span class ="author">${song.author}</span>, song: <span class ="song">${song.song}</span>`
  musicList.appendChild(newElement);
});