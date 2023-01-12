const calcular = document.querySelector("#calcular");

function imc() {
  const nome = document.querySelector("#name").value;
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const resultado = document.querySelector(".resultado");

  if (nome !== "" && height !== "" && weight !== "") {
    const valorIMC = (weight / height ** 2).toFixed(1);

    let classificaçao = "";

    if (valorIMC < 18.5) {
      classificaçao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificaçao = "com peso ideal. Parabéns!!!";
    } else if (valorIMC < 30) {
      classificaçao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificaçao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificaçao = "com obesidade grau II.";
    } else {
      classificaçao =
        "com obesidade grau III. Cuidado, você está correndo sério risco de saúde.";
    }

    resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${classificaçao}`;
  } else {
    resultado.innerHTML = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
