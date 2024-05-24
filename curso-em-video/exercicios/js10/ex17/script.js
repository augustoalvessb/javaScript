let inicio = document.getElementById("start");
let fim = document.getElementById("end");
let pulo = document.getElementById("jump");
let res = document.getElementById("res");

function contar() {
    if (inicio.value.length == '' || fim.value.length == '' || pulo.value.length == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(pulo.value);
        setTimeout(() => {
            if (p <= 0) {
                alert('Passo Inválido! Considerando Passo = 1' );
                p = 1;
            }
            if (i < f) { 
                // Contagem crescente
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
                
            } else {
                // Contagem Decrescente
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
        }, 1000)
        res.innerHTML += `\u{1F3C1}`; 
    }
}