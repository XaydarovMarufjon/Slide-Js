const slides = document.querySelectorAll('.slide');
var bodyBg = document.querySelector('body');

for (const slide of slides) {
  slide.addEventListener('click' , ()=>{
      clearActiveClass()
      slide.classList.add('active')
     var x = slide.getAttribute('style');
      bodyBg.setAttribute('style' , `${x}`);
      bodyBg.style.transition = "1s"
    console.log(x)
  })
}

function clearActiveClass(){
    slides.forEach((slide)=>{
      slide.classList.remove('active')
    })
}

function slideshow() {
    if (i < slides.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}

setInterval(slideshow(), 2000);

