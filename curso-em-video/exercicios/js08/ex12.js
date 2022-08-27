var agora = new Date();
var hora = agora.getHours();
console.log(`Agora sâo exatamente ${hora} horas!`);
if (hora >= 6 && hora < 12 ) {
    console.log('Bom dia!');
} else if (hora < 6) {
    console.log('Boa Madrugada!');
} else if (hora >= 18 && hora < 24) {
    console.log('Boa Noite!');
} else {
    console.log('Boa Tarde!');
}