let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//MENU DE NAVEGACION
btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0';
        menu.style.transition = '0.5s';
        activador = false;
    }else {
        activador = false;
        menu.style.left = '-100%';
        menu.style.transition = '0.5s';
        activador = true;
    }
});

//INTERCALAR CLASE ACTIVE
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });
        event.target.classList.add('activo');
    });
});

//EFECTOS SCROLL
let prevScrollPos = window.pageYOffset;//devuelve el valor de la ventana
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
    let currenScrollPos = window.pageYOffset;
    //MOSTRAR Y OCULTAR MENU
    if(prevScrollPos > currenScrollPos) {
        containerMenu.style.top = '0';
        containerMenu.style.transition = '0.5s';
    }else {
        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }
    prevScrollPos = currenScrollPos;

    //MOSTRAR Y OCULTAR SCROLL ESTILOS LINEA
    let arriba = window.pageYOffset;
    if(arriba <= 400) {
        containerMenu.style.borderBottom = 'none';
        goTop.style.right = '-100%';
    }else {
        containerMenu.style.borderBottom = '3px solid #ff2e63';
        goTop.style.right = '0';
        goTop.style.transition = '0.5s';
    }
}

//BOTON FLOTANTE PARA SUBIR AL INICIO
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//BOTON VER ABAJO
let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 1000;
    document.documentElement.scrollTop = 1000;
});


//CAROUSEL
document.addEventListener('DOMContentLoaded', () =>  {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        duration: 500,
        dist: -80,
        shift: 5,
        numVisible: 3,
        fullWidth: true,
        indicators: true
        
    });
});






