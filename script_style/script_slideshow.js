const slides=document.querySelectorAll('.slide-text');
const next_btn=document.querySelector('.navigation-right');
const prev_btn=document.querySelector('.navigation-left');
var playSlider;
var numberOfSlides=slides.length;
var slideNumber=0;

//previous button
prev_btn.addEventListener("click", function prev_btn(){
    slides.forEach(function remove_class(slide){
        slide.classList.remove('active');
    })
    slideNumber--;
    if(slideNumber < 0){
        slideNumber = numberOfSlides + slideNumber;
    }
    slides[slideNumber].classList.add('active');
})

//next button
next_btn.addEventListener("click", function next_btn() {
    slides.forEach(function remove_class(slide){
        slide.classList.remove('active');
    })
    slideNumber++;
    if(slideNumber > (numberOfSlides - 1)){
        slideNumber=0;
    }
    slides[slideNumber].classList.add('active');
});

//text slider autoplay
function repeat(){
    playSlider=setInterval(function(){
        slides.forEach(function remove_class(slide){
            slide.classList.remove('active');
        })
        slideNumber++;
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber=0;
        }
        slides[slideNumber].classList.add('active');
    },4000);
}
repeat();