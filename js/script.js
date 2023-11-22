let btn = document.querySelectorAll('.registration');
let modalClose = document.querySelector('.modal-close-img');
let modal = document.querySelector('.modal')

btn.forEach(element => {
    element.addEventListener('click', e => {
        modal.classList.toggle('close-modal')
        e.preventDefault();
    })
});
modalClose.addEventListener('click', e => {
    modal.classList.toggle('close-modal')
})

let slides = document.querySelectorAll('.swiper-slider-box');
let btnNext = document.querySelector('.swiper-next');
let btnlast = document.querySelector('.swiper-last');
let paginats = document.querySelectorAll('.swiper-scroll-btn');
let i = 0;

function swiper(){
    slides.forEach(element => {
        element.classList.add('close-modal');
        paginats.forEach(item => {
            item.classList.remove('swiper-scroll-btn-active');
        });
    });
}

btnlast.addEventListener('click', e => {
    swiper()
    if(i === slides.length -1){
        i = 0;
    } else {
        i++;
    }
    paginats[i].classList.add('swiper-scroll-btn-active');
    slides[i].classList.remove('close-modal');
})
btnNext.addEventListener('click', e => {
    swiper()
    if(i === 0){
        i = slides.length -1;
    } else {
        i--;
    }
    paginats[i].classList.add('swiper-scroll-btn-active');
    slides[i].classList.remove('close-modal');
})

let menuBurger = document.querySelector('.burger-menu-btn');
let menuList = document.querySelector('.menu-box');
let menuImage = document.querySelector('.burger-menu-img');
menuBurger.addEventListener('click', e => {
    if(menuImage.classList.contains('menu-burger-close')){
        menuList.classList.remove('menu-burger-active')
        menuList.style.display = 'none'
        menuImage.setAttribute('name','reorder-four-outline')
        menuImage.classList.remove('menu-burger-close')
    } else{
        menuList.classList.add('menu-burger-active')
        menuList.style.display = 'flex'
        menuImage.setAttribute('name','close-outline')
        menuImage.classList.add('menu-burger-close')
    }
})