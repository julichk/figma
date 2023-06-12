//ЗАВДАННЯ 1

//клас
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  calculateArea() {
    return Math.PI * this._radius ** 2;
  }

  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

//використання класу 
const myCircle = new Circle(0); 

function updateCircle() {
  const radiusInput = document.querySelector('.radius-input');
  const diameterOutput = document.querySelector('.diameter');
  const radius = parseFloat(radiusInput.value);
  myCircle.radius = radius;
  diameterOutput.textContent = `Diameter: ${myCircle.diameter}`;
}

document.querySelector('.calculate-button').addEventListener('click', updateCircle);

//ЗАВДАННЯ 2
 const markerColorInput = document.querySelector('.marker-color');
 const markerInkLevelInput = document.querySelector('.ink-level');
 const textInput = document.querySelector('.text-input');
 const writeButton = document.querySelector('.ink-button');
 const markerOutput = document.querySelector('.marker-text');

 writeButton.addEventListener('click', function() {
  const color = markerColorInput.value;
  const inkLevel = parseFloat(markerInkLevelInput.value);
  const text = textInput.value;

  const marker = new Marker(color, inkLevel);
  marker.writeToOutput(text, markerOutput);
 });

 class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  writeToOutput(text, outputElement) {
    let remainingInk = this.inkLevel * 0.5;
    let output = '';

    for (let symbol = 0; symbol < text.length; symbol++) {
      if (text[symbol] !== ' ' && remainingInk > 0) {
        output += text[symbol];
        remainingInk -= 0.5;
      } else {
       output += ' ';
      }
    }
    outputElement.textContent = output;
    outputElement.style.color = this.color;
  }
}