async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resultado = await consultaCep.json();
        if (resultado.erro) throw new Error('CEP inválido!');

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('estado');

        cidade.value = resultado.localidade;
        logradouro.value = resultado.logradouro;
        bairro.value = resultado.bairro;
        estado.value = resultado.uf;

        return resultado;
    } catch (erro) {
        mensagemErro.innerHTML = erro;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value).then(console.log));
