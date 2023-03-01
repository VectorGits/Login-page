const btn1 = document.querySelector('.btn1');

function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + "px")
    element.style.setProperty('--y', posY + "px")
}


btn1.addEventListener('click', (e) => {
    mousePositionToCustomProp(e, btn1);
    btn1.classList.add('pulse');
    btn1.addEventListener('animationend', () => {
        btn1.classList.remove('pulse');
    })
})
 

// For Button 2
const btn2 = document.querySelector('.btn2');

function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + "px")
    element.style.setProperty('--y', posY + "px")
}


btn2.addEventListener('click', (e) => {
    mousePositionToCustomProp(e, btn2);
    btn2.classList.add('pulse');
    btn2.addEventListener('animationend', () => {
        btn2.classList.remove('pulse');
    })
})