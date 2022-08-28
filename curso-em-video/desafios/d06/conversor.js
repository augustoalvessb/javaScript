var resultado = document.querySelector('.resultado');
function converter() {
    var celsius = Number(prompt('Digite uma temperatura em °C (Celsius).'));
    var kelvin = (celsius + 273.15);
    var fahrenheit = (celsius * 1.8) + 32;

    resultado.innerHTML = `<h2>A Temperatura de ${celsius}°C, corresponde a...</h2><p>${kelvin.toFixed(2)}K (Kelvin) <br> ${fahrenheit}°F (Fahrenheit)</p>`;
}