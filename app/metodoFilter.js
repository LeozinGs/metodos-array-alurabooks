// const btnFrontEnd = document.getElementById('btnFiltrarLivrosFront');
const btnsFiltro = document.querySelectorAll('.btn');

btnsFiltro.forEach(elemento => {
    elemento.addEventListener('click', () => {
        let valorBotao = elemento.value;
        filtrarLivros(valorBotao);
    });
});

console.log(btnsFiltro);

function filtrarLivros(valor) {
    let livrosFiltrados = livros.filter(livro => livro.categoria == valor);
    exibirOsLivrosNaTela(livrosFiltrados);
}