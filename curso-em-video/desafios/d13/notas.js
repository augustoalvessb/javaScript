var resultado = document.querySelector('.resultado');
function verificar() {
    var nome = prompt('Qual o nome do aluno?');
    var nota1 = Number(prompt(`Primeira nota de ${nome}`));
    var nota2 = Number(prompt(`Segunda nota de ${nome}`));
    var média = (nota1 + nota2) / 2;
    if (média >= 6) {
        resultado.innerHTML = `<h2>Analisando a situação...</h2><p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${média}</strong></p><p>Com média acima de 6.0, o aluno está <span style = "background-color: green">APROVADO</span></p>`
    } else if (média >= 3) {
        resultado.innerHTML = `<h2>Analisando a situação...</h2><p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${média}</strong></p><p>Com média acima de 3.0, o aluno está em <span style = "background-color: orange">RECUPERAÇÃO</span></p>`
    } else {
        resultado.innerHTML = `<h2>Analisando a situação...</h2><p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${média}</strong></p><p>Com média abaixo de 3.0, o aluno está <span style = "background-color: red">REPROVADO</span></p>`
    }
}