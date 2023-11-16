const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotNav.children);
const currentSlide = track.querySelector('.current_slide');

const slideWidth = 733;

const setSlidePosition = ( slides, index ) => {
    slides.style.left = slideWidth * index + "px";
} 

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style ='transform:translateX(-'+ targetSlide.style.left +');';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}


dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    
    if (!targetDot) return;
    
    const currentDot = dotNav.querySelector(".current");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    currentDot.classList.remove('current');
    targetDot.classList.add('current');
    
    

moveToSlide(track, currentSlide, targetSlide)

   
})