let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let player = document.getElementById("player")
let playerChoice = document.getElementById('playerhand')

rock.addEventListener("click", function () {

})

paper.addEventListener("click", function () {
    player.textContent = '🫱'
})

scissor.addEventListener("click", function () {
    player.innerHTML = "scissor"
})