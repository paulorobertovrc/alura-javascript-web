let livros = [];
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivros();

async function getBuscarLivros() {
  const response = await fetch(endpoint);
  const data = await response.json();
  livros = data;

  let livrosComDesconto = aplicarDesconto(livros);

  exibirLivros(livrosComDesconto);
}
