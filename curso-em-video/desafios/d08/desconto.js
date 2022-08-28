var resultado = document.querySelector('.resultado');
function desconto() {
    var produto = prompt('Qual produto você está comprando?');
    var preço = Number(prompt(`Qual é o preço de ${produto}`));
    var desconto = (preço * 10) / 100;
    var total = preço - desconto;

    resultado.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2><p>O preço original era ${preço.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}. <br> Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} de desconto (10%). <br> Portanto, você pagará ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} no produto ${produto}. </p>`;
}