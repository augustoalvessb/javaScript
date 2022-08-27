function calcular() {
    var produto = prompt('Que produto você está comprando?');
    var custo = parseFloat(prompt(`Quanto custa ${produto} que você esta comprando?`));
    var pagamento = parseFloat(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    var troco = pagamento - custo; 

    window.alert(`Você comprou ${produto} que custou R$${custo.toLocateString('pt-BR', {style:'currency', currency: 'BRL'})}.\nDeu R$${pagamento.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em dinheiro e vai receber R$${troco.toLocateString('pt-BR', {style:'currency', currency: 'BRL'})} de troco.\nObrigado e volte sempre!`);
}