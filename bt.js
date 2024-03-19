function clicar() {
    let categorias = document.getElementById('menuCategoria');

    if (categorias.style.display === 'none' || categorias.style.display === '') {
        categorias.style.display = 'block';
    } else {
        categorias.style.display = 'none';
    }
}

let click = document.getElementById('botao_categorias');
click.addEventListener('click', clicar);