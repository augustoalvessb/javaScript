var dolar = Number(prompt('Primeiramente, qual a contação do dólar agora?'));
var resultado = document.querySelector('.resultado');
function conversor() {
    var real = Number(prompt('Quantos R$ você tem na carteira?'));
    var conversão = real / dolar;

    resultado.innerHTML = `<p>Com ${real.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}. Você conseguirá comprar ${conversão.toLocaleString('pt-BR',{style:'currency', currency:'USD'})}.</p>`;
}