function calc() {
  const altura = document.querySelector("#altura").value / 100;
  const peso = document.querySelector("#peso").value;

  let imc = peso / altura ** 2;
  let info = "";

  if (imc < 18.5) {
    info = "Está abaixo do peso!";
  } else if (imc < 24.9) {
    info = "Está no peso ideal!";
  } else if (imc < 29.9) {
    info = "Sobrepeso!";
  } else if (imc < 39.9) {
    info = "Obesidade!";
  } else if (imc > 39.9) {
    info = "Obesidade Grave!";
  }

  document.querySelector("#result-text").innerText = info;
}
