const imgbx = document.querySelector('.imgbx');
const slides = imgbx.getElementsByTagName('img');
var i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    // console.log(i);
    slides[i].classList.add('active');
}
function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    // console.log(i);
    slides[i].classList.add('active');
}

const contentBx = document.querySelector('.contentBx');
const slidesText = contentBx.getElementsByTagName('div');
var j = 0;

function nextSlideText(){
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    console.log(j);
    slidesText[j].classList.add('active');
}
function prevSlideText(){
    slidesText[j].classList.remove('active');
    j = (j - 1 + slidesText.length) % slidesText.length;
    console.log(j);
    slidesText[j].classList.add('active');
}