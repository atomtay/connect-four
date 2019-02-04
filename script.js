//note to self: refactor the e.compasedPath() into something that isn't quite so incidental

const boardEl = document.querySelector('.board')
const resetEl = document.querySelector('.reset')
const cells = document.querySelectorAll('.cell')
const nextPlayer = document.querySelector('.nextPlayer')
let currentPlayer = 1

boardEl.addEventListener('click', function(e){
    if (e.composedPath().length === 7){
        if (currentPlayer === 1){
            e.target.style.backgroundColor = 'red'
            e.target.style.pointerEvents = "none"
            nextPlayer.innerText = "Black"
            currentPlayer = 2
        }
        else {
            e.target.style.backgroundColor = 'black'
            e.target.style.pointerEvents = "none"
            nextPlayer.innerText = "Red"
            currentPlayer = 1
        }
    }
})

resetEl.addEventListener('click', function(e){
    e.preventDefault()
    currentPlayer = 1
    nextPlayer.innerText = "Red"

     for (i = 0; i < cells.length; i++){
         cells[i].style.backgroundColor = "white"
         cells[i].style.pointerEvents = "auto"
     }
})