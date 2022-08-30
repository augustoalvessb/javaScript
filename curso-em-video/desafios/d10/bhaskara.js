var resultado = document.querySelector('.resultado');
function calcular() {
    var a = Number(prompt('Qual é o valor de a?'));
    var b = Number(prompt('Qual é o valor de b?'));
    var c = Number(prompt('Qual é o valor de c?'));

    var bhaskara = (b ** 2) - 4 * a * c;

    resultado.innerHTML = `<h2>Resolvendo Bhaskara</h2><p>A equação atual é ${a}x² + ${b}x + ${c} = 0 <br> O cálculo realizado será &Delta; = ${b}² - 4 . ${a} . ${c} <br> O valor calculado foi &Delta; = ${bhaskara}</p>`
}