const eye1 = document.querySelector('.ball1');
const eye2 = document.querySelector('.ball2')
window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth  - evt.pageX) / 1000;
    const y = -(window.innerHeight  - evt.pageY) / 1000;
    eye1.style.transform = `translateY(${y*60}px) translateX(${x*60}px)`;
    eye2.style.transform = `translateY(${y*60}px) translateX(${x*60}px)`;
    eye1.style.left = "80px"
    eye2.style.left = "80px"
    eye1.style.top = "60px"
    eye2.style.top = "60px"

    
});  