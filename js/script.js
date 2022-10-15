function calc() {
  const altura = document.querySelector("#altura").value / 100;
  const peso = document.querySelector("#peso").value;

  let imc = peso / altura ** 2;
  let info = "";

  if (imc < 18.5) {
    info = `IMC: ${imc.toFixed(2)} "Abaixo do peso!"`;
  } else if (imc < 24.9) {
    info = `IMC: ${imc.toFixed(2)} "Peso ideal!"`;
  } else if (imc < 29.9) {
    info = `IMC: ${imc.toFixed(2)} "Sobrepeso!"`;
  } else if (imc < 34.9) {
    info = `IMC: ${imc.toFixed(2)} "Obesidade 1"`;
  } else if (imc < 39.9) {
    info = `IMC: ${imc.toFixed(2)} "Obesidade 2"`;
  } else if (imc >= 40.0){
    info = `IMC: ${imc.toFixed(2)} "Obesidade 3"`;
  }

  document.querySelector("#result-text").innerText = info;
}
