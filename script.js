let menuMobile = document.querySelector('.menu_mobile')
let imgMenu = document.querySelector('#imgMenu')

function menu(){

    if(menuMobile.style.left == '-100%'){
        menuMobile.style.left = '0%';
        imgMenu.src = "./imagens/close.svg"
    }
    else{
        menuMobile.style.left = '-100%'
        imgMenu.src = "./imagens/menu.svg"
    }
}
