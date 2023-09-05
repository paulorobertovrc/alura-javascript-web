const menorNumero = 0;
const maiorNumero = 100;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");
const elementoNumeroSecreto = document.getElementById("numero-secreto");

elementoMenorValor.innerHTML = menorNumero;
elementoMaiorValor.innerHTML = maiorNumero;
elementoNumeroSecreto.innerHTML = numeroSecreto;

function gerarNumeroAleatorio() {
  return Math.round(Math.random() * maiorNumero + 1);
}
