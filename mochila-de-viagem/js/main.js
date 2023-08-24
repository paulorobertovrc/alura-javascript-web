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
        itens[itens.findIndex(item => item.id === itemExistente.id)] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 1;
        
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

    novoItem.appendChild(botaoApagar(elemento.id));

    lista.appendChild(novoItem);
}

function atualizarElemento(elemento) {
    const numeroItem = document.querySelector(`[data-id="${elemento.id}"]`);
    numeroItem.innerHTML = elemento.quantidade;
}

function apagarElemento(elemento, id) {
    elemento.remove();
    itens.splice(itens.findIndex(item => item.id === id), 1);
    localStorage.setItem('itens', JSON.stringify(itens));
}

function botaoApagar(id) {
    const botao = document.createElement('button');
    botao.innerHTML = 'X';

    botao.addEventListener('click', function() {
        apagarElemento(this.parentNode, id);
    });

    return botao;
}
