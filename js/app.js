// common css start
let btn = document.querySelector ('.part-1 button')
let headding = document.querySelector('.part-1 h1')
let offImage = document.querySelector( '.part-2 img')
let on = document.querySelector('.on')
let off = document.querySelector('.off')
// common css ends

// part-1 start
function headdingCng(){
    headding.innerHTML= 'Welcome'
}
btn.addEventListener('click', headdingCng)
// part-1 ends

// part-2 start
function onImg(){
    offImage.src='./images/on.jpg'
}
on.addEventListener('click', onImg)
function offImg(){
    offImage.src='./images/off.jpg'
}
off.addEventListener('click', offImg)
// part-2 ends