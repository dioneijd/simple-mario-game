const mario = document.querySelector('.mario')

console.log('mario', mario)

document.addEventListener('keydown', makeMarioJump)

function makeMarioJump() {
  mario.classList.add('mario-jump')

  setTimeout( () => {
    mario.classList.remove('mario-jump')
  } , 500)

}
