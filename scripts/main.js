
//versao mobile do cabecalho
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

//sessao responsavel pelo slide do banner
var slideshows = document.querySelectorAll('[data-component="slideshow"]');

slideshows.forEach(initSlideShow);

function initSlideShow(slideshow){
    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0, time =  3000;
    slides[index].classList.add('active');

    setInterval( () =>{
        slides[index].classList.remove('active');
        index++;

        if (index === slides.length) index = 0;

        slides[index].classList.add('active');
    }, time);
}

//sessao de carrosel em slideshow para o menu de pedidos
let slides = document.querySelectorAll('.slideshow');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;
let timeoutID;

const showSlides = (n) => {
    let i;
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < slides.length; i++){
        dots[i].setAttribute('class','dot');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].setAttribute('class','dot ativo');
    clearTimeout(timeoutID);
    timeoutID = setTimeout(autoSlides, 4000);
};

const plusSlides = (n) =>{
    showSlides(slideIndex += n);
};

const currentSlide = (n) => {
    showSlides(slideIndex = n);
};

function autoSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].setAttribute('class', 'dot ativo');
    timeoutID = setTimeout(autoSlides, 4000);
}
autoSlides();

//sessao de carrosel do menu de bebidas
const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.card-slide');
const maxItems = items.length;

const items2 = document.querySelectorAll('.c-i2');
const maxItems2 = items2.length;
let currentItem2 = 0


controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("left-control");
        const secondSlide = control.classList.contains("secondSlide");
        if(secondSlide){
            if(isLeft){
                currentItem2 -= 1;
            }else{
                currentItem2 += 1;
            }
    
            if(currentItem2 >= maxItems2){
                currentItem2 = 0;
            }
    
            if(currentItem2 < 0){
                currentItem2 = maxItems2 - 1;
            }
    
            items2.forEach((item2) => item2.classList.remove("current-item2"));
    
            items2[currentItem2].scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
    
            items2[currentItem2].classList.add("current-item2");
        }else{
            if(isLeft){
                currentItem -= 1;
            }else{
                currentItem += 1;
            }
    
            if(currentItem >= maxItems){
                currentItem = 0;
            }
    
            if(currentItem < 0){
                currentItem = maxItems - 1;
            }
    
            items.forEach((item) => item.classList.remove("current-item"));
    
            items[currentItem].scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
    
            items[currentItem].classList.add("current-item");

        }
    });
});
