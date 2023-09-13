const menorNumero = 0;
const maiorNumero = 100;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

elementoMenorValor.innerHTML = menorNumero;
elementoMaiorValor.innerHTML = maiorNumero;

function gerarNumeroAleatorio() {
  return Math.round(Math.random() * maiorNumero);
}

console.log(numeroSecreto);
