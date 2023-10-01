const marioElement = document.querySelector('.mario')
const pipeElement  = document.querySelector('.pipe') 
const cloudsElement  = document.querySelector('.clouds') 
const gameBoard = document.querySelector('.game-board')
let   gameOver = false


const divMario = document.querySelector('#divMario')
const divPipe  = document.querySelector('#divPipe') 



document.addEventListener('keydown', makeMarioJump)

function makeMarioJump() {
  if (gameOver) return 

  marioElement.classList.add('mario-jump')

  setTimeout( () => {
    marioElement.classList.remove('mario-jump')
  } , 500)

}

function handleGameOver(){
  gameOver = true

  pipeElement.style.left = pipeElement.offsetLeft + 'px'
  pipeElement.style.animation = 'none'

  marioElement.style.top = marioElement.offsetTop + 'px'
  marioElement.style.animation = 'none'

  cloudsElement.style.left = cloudsElement.offsetLeft + 'px'
  cloudsElement.style.animation = 'none'

}

function checkStroke() {

  const pipeLimits = {
    yTop: pipeElement.offsetTop,
    xBottom: 0,
    xLeft: pipeElement.offsetLeft,
    xRight: pipeElement.offsetLeft + pipeElement.offsetWidth
  }

  const marioLimits = {
    yTop: marioElement.offsetTop + 25,
    yBottom: marioElement.offsetTop + marioElement.height,
    xRight: 55,
    xLeft: 50
  }

  divMario.style.left = marioLimits.xLeft + 'px'
  divMario.style.width = marioLimits.xRight + 'px'
  divMario.style.top = marioLimits.yTop + 'px'
  divMario.style.height = marioElement.height + 'px'

  divPipe.style.left = pipeLimits.xLeft + 'px'
  divPipe.style.width = pipeElement.width + 'px'
  divPipe.style.top = pipeLimits.yTop + 'px'
  divPipe.style.height = pipeElement.height + 'px'



  if (pipeElement.left < marioElement.rightLimit && pipeElement.right > marioElement.leftLimit && marioElement.offsetBottom < pipeElement.height) {
    handleGameOver()
  }

}

const loopInterval = setInterval( checkStroke, 10 )