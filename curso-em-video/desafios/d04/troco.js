function calcular() {
    var produto = prompt('Que produto você está comprando?');

    var quantidade = parseInt(prompt(`Qual quantidade de ${produto} você está comprando?`));

    var custo = Number(prompt(`Quanto custa ${produto} que você esta comprando?`));

    var total = custo * quantidade;

    var pagamento = Number(prompt(`Total a pagar será ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}. \nQual o valor que você dará para pagar ${produto}?`));


    var troco = pagamento - custo * quantidade; 

    window.alert(`Você comprou ${quantidade} ${produto} que custou ${custo.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} cada.\nDeu ${pagamento.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} de troco.\nObrigado e volte sempre!`);
}