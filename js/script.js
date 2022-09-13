const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score p');
const modal = document.querySelector('.modal')
const msg = document.querySelector('.modal p')
const tryBtn = document.querySelector('.modal button')

let counter = 0;

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./images/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
        clearInterval(scoring)

        score.parentElement.style.display = "none"
        modal.style.display = "flex"
        msg.innerHTML = `Seu score foi de ${counter}`
    }
    
}, 10)


const scoring = setInterval(() => {
    counter++
    score.innerHTML = counter

}, 1500);

document.addEventListener('keydown', jump);