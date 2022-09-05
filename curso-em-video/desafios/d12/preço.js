var resultado = document.querySelector('.resultado');
function verificar() {
    var anterior = Number(prompt('Qual era o preço anterior?'));
    var atual = Number(prompt('Qual é o preço atual do produto?'));
    var total = anterior - atual;
    var preçoN = total * (-1); 

    if(total === 0) {

        resultado.innerHTML = '<h2>Analisando os valores informados...</h2><p>O produto não alterou o valor</p>'
    } else if (total < 0) {
        var porcento = atual * preçoN / 100;

        resultado.innerHTML = `<h2>Analisando os valores informados...</h2><p>O produto custava ${anterior.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e agora custa ${atual.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p><p>Hoje o produto está mais caro.</p><p>O preço subiu ${preçoN.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior</p><p>Uma variação de +${porcento}%.</p>`
    } else {
        var porcento = atual * total / 100;

        resultado.innerHTML = `<h2>Analisando os valores informados...</h2><p>O produto custava ${anterior.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e agora custa ${atual.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p><p>Hoje o produto está mais barato.</p><p>O preço abaixou ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior</p><p>Uma variação de -${porcento}%.</p>`
    } 
}