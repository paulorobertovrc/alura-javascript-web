const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);
});

function criarElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}