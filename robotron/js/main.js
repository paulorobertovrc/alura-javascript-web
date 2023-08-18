// const subtrair = document.querySelector('#subtrair');
// const somar = document.querySelector('#somar');
// const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        let equipamento = elemento.parentElement.getAttribute('id');
        let operacao = elemento.getAttribute('id');

        manipularDados(equipamento, operacao);
    });
});

function manipularDados(equipamento, operacao) {
    let componente = document.querySelector(`#${equipamento}`).querySelector('input');
    let valor = componente.getAttribute('value');
    
    if (operacao === 'somar') {
        valor = parseInt(valor) + 1;
    } else {
        valor = parseInt(valor) - 1;
    }

    componente.setAttribute('value', valor);
}
