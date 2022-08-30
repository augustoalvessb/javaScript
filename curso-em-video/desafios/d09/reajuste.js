var resultado = document.querySelector('.resultado');
function reajustar() {
    var nome = prompt('Qual é o nome do funcionário?');
    var salario = Number(prompt(`Qual é o salário de ${nome}?`));
    var porcentagem = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`));
    var reajuste = (salario * porcentagem) / 100;
    var total = salario + reajuste ;

    resultado.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2><p>O salário atual era de ${salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}. <br> Com aumento de ${porcentagem}%, o salário vai aumentar ${reajuste.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} no próximo mês. <br> E a partir daí, ${nome} irá receber ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p>`;
}