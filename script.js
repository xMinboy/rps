let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let player = document.getElementById("player")
let playerChoice = document.getElementById("playerhand")
let computerChoice = document.getElementById("computerhand")
let play = document.getElementById("play")

rock.addEventListener("click", function () {
    playerChoice.src = "rock.png"
})

paper.addEventListener("click", function () {
    playerChoice.src = 'paper.png';
})

scissor.addEventListener("click", function () {
    playerChoice.src = 'scissors.png';
})

let randomImage = () => {
    let options = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);

    return options[n];
}

let computerHand = randomImage();

play.addEventListener("click", function () {
    computerChoice.src = randomImage() + '.png'
    //computerChoice.src = `${computerHand}.png`;
})

console.log(randomImage());