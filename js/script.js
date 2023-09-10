const formulario = document.querySelector('#formulario');
const peso = Number(document.querySelector('#peso').value);
const altura = Number(document.querySelector('#altura').value);
const resultado = document.querySelector('.resultado');
const botao = document.querySelector('#botao');

console.log(peso, altura);
function handleClick(event) {
  const peso = Number(document.querySelector('#peso').value);
  const altura = Number(document.querySelector('#altura').value);

  event.preventDefault();

  const resultadoIMC = peso / (altura * altura);
  let resultadoTexto = '';
  if (resultadoIMC < 18.5) {
    resultadoTexto = 'Abaixo do peso';
  } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
    resultadoTexto = 'Peso normal';
  } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
    resultadoTexto = 'Sobrepeso';
  } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
    resultadoTexto = 'Obesidade grau 1';
  } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
    resultadoTexto = 'Obesidade grau 2';
  } else {
    resultadoTexto = 'Obesidade grau 3';
  }
  return (resultado.innerHTML = `Seu IMC é ${resultadoIMC.toFixed(
    1
  )}. (${resultadoTexto})`);
}

formulario.addEventListener('submit', handleClick);
