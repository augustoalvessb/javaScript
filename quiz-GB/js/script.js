import questions from "./questions.js";

let tituloContent = document.querySelector(".titulo");
let titulo = document.querySelector(".titulo h1");
let subtitulo = document.querySelector(".sub-titulo h2");
let subtituloDiv = document.querySelector(".sub-titulo");
let spnQtd = document.querySelector(".spnQtd");
let imagem = document.querySelector(".img");
let perguntas = document.querySelector(".question p");
let respostas = document.querySelector(".answers");
const botoes = [
    document.querySelector(".btn1"),
    document.querySelector(".btn2"),
    document.querySelector(".btn3"),
    document.querySelector(".btn4"),
    document.querySelector(".btn5"),
    document.querySelector(".btn6"),
];

let currentIndex = 0;
const firstQuestion = questions[currentIndex];

botoes[0].addEventListener("click", startQuiz);
botoes[1].addEventListener("click", startHistory);

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => startQuiz(index));
});

function startHistory(){
    // imagem.style.display = "none";
    // tituloContent.style.background = "#FBFBF9"
    // titulo.textContent = questions[0].title;
    // subtitulo.textContent = questions[0].text;
    // subtitulo.style.fontWeight = "normal";
    // subtitulo.style.fontSize = "17px"
    // perguntas.textContent = questions[0].question;
    // perguntas.style.fontWeight = "bold";
    // botoes[0].textContent = questions[0].answers[0].option;
    // botoes[1].textContent = questions[0].answers[1].option;
    // botoes[2].style.display = "block";
    // botoes[2].textContent = questions[0].answers[2].option;
    

    // Verificando e atualizando elementos
    if (imagem) imagem.style.display = "none";
    if (tituloContent) tituloContent.style.background = "#FBFBF9";
    if (titulo) titulo.textContent = firstQuestion.title;
    if (subtitulo) {
        subtitulo.textContent = firstQuestion.text;
        subtitulo.style.fontWeight = "normal";
        subtitulo.style.fontSize = "17px";
    }
    if (perguntas) {
        perguntas.textContent = firstQuestion.question;
        perguntas.style.fontWeight = "bold";
    }
    refreshButton()
}

function refreshButton() {
    // Atualizando os botões
    for (let i = 0; i < botoes.length; i++) {
        if (firstQuestion.answers[i]) {
            botoes[i].textContent = firstQuestion.answers[i].option;
            botoes[i].style.display = "block";
        } else {
            botoes[i].style.display = "none";
        }
    }
}


function startQuiz() {
    // spnQtd.innerHTML = `${currentIndex + 1} / ${questions.length - 1}`;
    removeDivs();

  



    // loadQuestion()


}

function removeDivs() {
    

    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}

// function nextQuestion(e) {
//     for (firstQuestion; )
// }

// function loadQuestion() {
//     pre
//     firstQuestion++;

//     firstQuestion.answers.forEach((answer) => {

//     });

// }

