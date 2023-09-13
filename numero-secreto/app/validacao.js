function verificarSeChutePossuiValorValido(chute) {
    const numero = parseInt(chute);

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        return;
    }

    if (chuteForaDoIntervalo(numero)) {
        elementoChute.innerHTML += `<div>O número deve estar entre ${menorNumero} e ${maiorNumero}!</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto}</h3>
        <button id="jogar-novamente" class='btn-jogar' onclick="window.location.reload()">Jogar novamente</button>
        `;

        return;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
    }
}

function chuteInvalido(numero) {
    return isNaN(numero);
}

function chuteForaDoIntervalo(numero) {
    return numero < menorNumero || numero > maiorNumero;
}

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'jogar-novamente') {
        windows.location.reload();
    }
});
