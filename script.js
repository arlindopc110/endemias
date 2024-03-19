const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

//listagem menu hamburguer

function hamburguer () {
    const menu = document.getElementById("lista-menu");

    if ( menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

let botaoHamburguer = document.getElementById("menuHamburguer");
botaoHamburguer.addEventListener('click', hamburguer);

// Listagem de categorias

function listagem () {
    const lista = document.getElementById("lista-mostrar");

    if ( lista.style.display === 'none' || lista.style.display === '') {
        lista.style.display = 'block';
    } else {
        lista.style.display = 'none';
    }
}
const listar = document.getElementById("categorias");
listar.addEventListener('click', listagem);

// listagem desktop

function listarDesktop () {
    const desktop = document.getElementById("listaDesktop");

    if ( desktop.style.display === 'none' || desktop.style.display === '') {
        desktop.style.display = 'block';
    } else {
       desktop.style.display = 'none';
    }
}

let botadesktop = document.getElementById("listaDesk");
botadesktop.addEventListener('click', listarDesktop);
