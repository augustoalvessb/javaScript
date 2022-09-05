var resultado = document.querySelector('.resultado');
function verificar() {
    var ano = parseInt(prompt('Qual é o ano que você quer verificar?'));
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        resultado.innerHTML = `<h2>Analisando o ano de ${ano}...</h2><p>O ano de ${ano} <span style = "background-color: green">É BISSEXTO!</span></p>`
    } else {
        resultado.innerHTML = `<h2>Analisando o ano de ${ano}...</h2><p>O ano de ${ano} <span style = "background-color: red">NÃO É BISSEXTO!<span></p>`
    }

}