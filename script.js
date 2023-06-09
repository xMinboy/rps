let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let player = document.getElementById("player")

rock.addEventListener("click", function () {
    player.innerHTML = "rock";
})

paper.addEventListener("click", function () {
    player.innerHTML = "paper"
})

scissor.addEventListener("click", function () {
    player.innerHTML = "scissor"
})