const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

//Con este insert va a poner la ultima imagen al principio
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha () {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none"; //quito la transicion
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft="-100%";
    }, 500);
}

function moverIzquierda () {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none"; //quito la transicion
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft="-100%";
    }, 500);
}

btnRigth.addEventListener('click', function (){
    moverDerecha();
});

btnLeft.addEventListener('click', function (){
    moverIzquierda();
});

setInterval(() => {
   moverDerecha(); 
}, 5000);