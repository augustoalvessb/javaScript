const redLight = document.querySelector(".red");
const greenLight = document.querySelector(".green");
const yellowLight = document.querySelector(".yellow");
const buttons = document.querySelector(".buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopRandom();
  turnOn[event.target.id]();
};

// Alternador das luzes, quando uma acende as outras duas apaga, porém ainda não resolvido.
function verifyColor () {  
  if (colors = [0]) {
    greenLight.style.opacity = .4,
    yellowLight.style.opacity = .4
  } else if (colors = [1]) {
    yellowLight.style.opacity = .4,
    redLight.style.opacity = .4
  } else if (colors = [2]) {
    redLight.style.opacity = .4,
    greenLight.style.opacity = .4
  }
};

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
  verifyColor();
  const colors = ["red", 'green', 'yellow'];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopRandom = () => {
  clearInterval ( intervalId )
};

const turnOn = {
  red: () => (redLight.style.opacity = 1),
  green: () => (greenLight.style.opacity = 1),
  yellow: () => (yellowLight.style.opacity = 1),
  random: () => intervalId = setInterval(changeColor, 1000),
};

buttons.addEventListener("click", trafficLight);
