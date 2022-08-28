var resultado = document.querySelector('.resultado');
function conversor() {
    var distancia = parseFloat(prompt('Digite uma distância em metros (m)'));
    var km = distancia / 1000;
    var hm = distancia / 100;
    var dam = distancia / 10;
    var dm = distancia * 10;
    var cm = distancia * 100;
    var mm = distancia * 1000;

    resultado.innerHTML = `<h2>A distância de ${distancia} metros, corresponde a...</h2><br><p> ${km} quilômetros (Km) <br> ${hm} hectômetros (Hm)<br> ${dam} decâmetros (Dam)<br> ${dm} decímetros (dm)<br> ${cm} centímetros (cm)<br> ${mm} milímetros (mm)</p>`;
}