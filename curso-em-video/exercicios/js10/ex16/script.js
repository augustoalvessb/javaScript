function verificar() {
    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                gênero = 'uma criança';
                img.setAttribute('src', 'img/criança-h.png');
                document.body.style.background = '#33bb99';
            } else if (idade < 21) {
                gênero = 'um jovem';
                img.setAttribute('src', 'img/jovem-h.png');
                document.body.style.background = '#85dd15';
            } else if (idade < 50) {
                gênero = 'um adulto';
                img.setAttribute('src', 'img/homem.png');
                document.body.style.background = '#1265aa';
            } else {
                gênero = 'um idoso';
                img.setAttribute('src', 'img/idoso.png');
                document.body.style.background = 'gray';
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                gênero = 'uma criança';
                img.setAttribute('src', 'img/criança-m.png');
                document.body.style.background = '#006632';
            } else if (idade < 21) {
                gênero = 'uma jovem';
                img.setAttribute('src', 'img/jovem-m.png');
                document.body.style.background = '#cc7702';
            } else if (idade < 50) {
                gênero = 'uma adulta';
                img.setAttribute('src', 'img/mulher.png');
                document.body.style.background = '#bb1135';
            } else {
                gênero = 'uma idosa';
                img.setAttribute('src', 'img/idosa.png');
                document.body.style.background = '#aa5569';
            }
        }
        res.style.textAlign = 'center'; //centralizar texto por JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
        res.appendChild(img);
    }
}