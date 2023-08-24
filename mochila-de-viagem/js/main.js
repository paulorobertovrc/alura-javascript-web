const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((item) => {
    criarElemento(item);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        nome: nome.value,
        quantidade: quantidade.value
    }

    const itemExistente = itens.find((item) => {
        return item.nome === nome.value;
    });

    if (itemExistente) {
        itemAtual.id = itemExistente.id;

        atualizarElemento(itemAtual);
        itens[itemExistente.id - 1] = itemAtual;
    } else {
        itemAtual.id = itens.length + 1;
        
        criarElemento(itemAtual);
        itens.push(itemAtual);
    }    

    localStorage.setItem('itens', JSON.stringify(itens));
    
    nome.value = '';
    quantidade.value = '';
});

function criarElemento(elemento) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = elemento.quantidade;
    numeroItem.dataset.id = elemento.id;

    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += elemento.nome;

    lista.appendChild(novoItem);
}

function atualizarElemento(elemento) {
    const numeroItem = document.querySelector(`[data-id="${elemento.id}"]`);
    numeroItem.innerHTML = elemento.quantidade;
}
