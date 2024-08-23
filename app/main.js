let livros = [];
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementoParaInserirLivros = document.getElementById('livros');

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPointDaApi);
    livros = await res.json();
    console.table(livros);

    let livrosComDesconto = aplicarDescontoNosLivros(livros);

    exibirOsLivrosNaTela(livrosComDesconto);
}