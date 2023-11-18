const track = document.querySelector('.carousel_track');
const pic = document.querySelector('.carousel_pic')
const slides = Array.from(track.children);
const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotNav.children);
const nextButton = document.querySelector('button.right');
const prevButton = document.querySelector('button.left')
const slideWidth = "733";



const setSlidePosition = ( slides, index ) => {
    slides.style.left = slideWidth * index + "px";

} 

const hideButton = (slides, prevButton, nextButton, targetIndex) =>{
    if(targetIndex == 0){
        prevButton.classList.add('is_hidden')
       
    }else if(targetIndex === slides.length -1) {
        nextButton.classList.add('is_hidden')
        prevButton.classList.remove('is_hidden')
    }else{
        nextButton.classList.remove('is_hidden')
        prevButton.classList.remove('is_hidden')
    }
    
}



slides.forEach(setSlidePosition);


nextButton.addEventListener('click', e => {
    const thisSlide = document.querySelector('.current_slide')
    const nextSlide = thisSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current')
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex( slide => slide === nextSlide )
  
    hideButton(slides, prevButton, nextButton, nextIndex)
    moveToSlide(track,thisSlide,nextSlide)
    updateDots(currentDot, nextDot)
   

});

prevButton.addEventListener('click', e => {
    const thisSlide = document.querySelector('.current_slide')
    const prevSlide = thisSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current');
    const prevDot = currentDot.previousElementSibling;
    const slideIndex = slides.findIndex( slide => slide  === thisSlide)

    hideButton(slides, prevButton, nextButton, slideIndex)
    moveToSlide(track, thisSlide, prevSlide)
    updateDots(currentDot, prevDot)
})


const moveToSlide = (track, thisSlide, targetSlide) => {
    
    track.style ='transform:translateX(-'+ targetSlide.style.left +');';
    thisSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');

    }

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current');
    targetDot.classList.add('current');
}



dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    const thisSlide = document.querySelector('.current_slide');
    
    const currentDot = dotNav.querySelector(".current");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    
    
    
    hideButton(slides,prevButton,nextButton,targetIndex)
moveToSlide(track, thisSlide, targetSlide)
updateDots(currentDot, targetDot)
   


// if(slideIndex === 0 ){
//     prevButton.classList.add('is_hidden');
//     nextButton.classList.remove('is_hidden')
// }else if (slideIndex === slides.length - 1) {
//     nextButton.classList.add('is_hidden')
//     prevButton.classList.remove('is_hidden')
// }
})