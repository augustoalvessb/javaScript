function carregar() {
    var texto = document.getElementById('texto');
    var foto = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    texto.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        foto.src = 'img/manha.png'
        document.body.style.background = '#21831a'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        foto.src = 'img/tarde.png'
        document.body.style.background = '#fa56s7'
    } else {
        // boa noite
        foto.src = 'img/noite.png'
        document.body.style.background = '#ac5800'
    }
}