let inicio = document.getElementById("start");
let tab = document.getElementById("tabuada"); 

function tabuada() {
    if (inicio.value.length == "") {
        alert('Impossível calcular, por favor, digite um número! ');
    } else {
        let x = Number(inicio.value);
        tab.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${x} x ${i} = ${x * i}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
        }
    }
}