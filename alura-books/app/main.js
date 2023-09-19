let livros = [];
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoParaInserirLivros = document.getElementById('livros');

getBuscarLivros();

async function getBuscarLivros() {
  const response = await fetch(endpoint);
  const data = await response.json();
  livros = data;
  console.table(livros);
  exibirLivros(livros);
}

function exibirLivros(livros) {
    livros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco">R$ ${livro.preco}</p>
            <div class="tags"><span class="tag">${livro.categoria}</span></div>
        </div>
        `;
    });
}
