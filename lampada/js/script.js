const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");
const lampada = document.querySelector("#lampada");
const onOff = document.querySelector('#onOff');

function turnOnOff() {
  if (onOff.textContent == "Ligar") {
    lampadaOn();
    onOff.textContent = "Desligar";
  } else {
    lampadaOff();
    onOff.textContent = "Ligar"
  }
}

function isLampadaBroken() {
  return lampada.src.indexOf("quebrada") > -1;
}

function lampadaOn() {
  if (!isLampadaBroken()) {
    lampada.src = "../img/ligada.jpg";
  }
}

function lampadaOff() {
  if (!isLampadaBroken()) {
    lampada.src = "../img/desligada.jpg";
  }
}

function lampadaBroke() {
  lampada.src = "../img/quebrada.jpg";
}

lampada.addEventListener("dblclick", lampadaBroke);
turnOn.addEventListener("click", lampadaOn);
turnOff.addEventListener("click", lampadaOff);
lampada.addEventListener("mouseover", lampadaOn);
lampada.addEventListener("mouseleave", lampadaOff);
onOff.addEventListener('click', turnOnOff);
