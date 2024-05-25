let input = document.getElementById('input');
let lista = document.getElementById('lista');
let res = document.querySelector('.resultado');
let list = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    };
};

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    };
};

function adicionar() {
    if (isNumber(input.value) && ! inList(input.value, list)) {
        if (input.value <= 100) {
            let x = Number(input.value);
            let item = document.createElement('option');
            item.text = `Valor ${x} adicionado!`
            lista.appendChild(item);
            list.push(x);
            res.innerHTML = '';
        };
    } else {
        alert('Valor inválido ou já encontrado na lista')
    };
    input.value = '';
    input.focus();
};

function analisar() {
    if (list.length == 0) {
        alert('Primeiro adicione números a lista');
    } else {
        let total = list.length;
        let maior = list[0];
        let menor = list[0];
        let soma = 0;
        let media = 0;

        for (let pos in list) {
            soma += list[pos];
            if (list[pos] > maior)
                maior = list[pos]
            if (list[pos] < menor)
                menor = list[pos]
        }
        media = soma / list.length;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os números temos ${soma} no total.</p>`;
        res.innerHTML += `<p>A média de todos os número somados é ${media}.</p>`;
    } 
    
};
