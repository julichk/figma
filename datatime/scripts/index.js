
let mode = 'time'
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("data");
const timeBtn = document.getElementById("time");

output.textContent = format(mode);

setInterval(update, 1000);

update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch(formatMode){
    case 'time' :
       return now.toLocaleTimeString()
    case 'date' :
       return now.toLocaleDateString()
    case 'full' :
       return now.toLocaleDateString()+ ' '+ now.toLocaleTimeString()
    default:
      return  now.toLocaleTimeString()
  }
};

function bindMode(name) {
  return function(){
    mode = name
    update()
  }
}

fullBtn.onclick = bindMode ('full');
timeBtn.onclick = bindMode ('time');
dateBtn.onclick = bindMode ('date');


