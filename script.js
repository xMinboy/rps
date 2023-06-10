let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let player = document.getElementById("player")
let playerChoice = document.getElementById("playerhand")
let computerChoice = document.getElementById("computerhand")
let play = document.getElementById("play")
let result = document.querySelector('.winner')
let computerScore = document.querySelector('.computerscore')
let playerScore = document.querySelector('.playerscore')

let playerCurrent = 0
let computerCurrent = 0



rock.addEventListener("click", function () {
    playerChoice.src = "rock.png"
    playerChoice.value = 'rock'
})

paper.addEventListener("click", function () {
    playerChoice.src = 'paper.png';
    playerChoice.value = 'paper'
})

scissor.addEventListener("click", function () {
    playerChoice.src = 'scissors.png';
    playerChoice.value = 'scissors'
})

let randomImage = () => {
    let options = ['rock', 'paper', 'scissors'];
    let n = Math.floor(Math.random() * 3);

    computerChoice.value = options[n];
    console.log(options[n])

    return options[n];
}

let computerHand = randomImage();

play.addEventListener("click", function () {
    computerChoice.src = randomImage() + '.png'
    //computerChoice.src = `${computerHand}.png`;
    if (computerChoice.value === playerChoice.value) {
        result.textContent = "It's a DRAW!!";
        computerScore.textContent = computerCurrent;
    } else if ((computerChoice.value === 'rock') && (playerChoice.value === 'paper')) {
        result.textContent = 'You win!!'
        playerCurrent++;
        playerScore.textContent = playerCurrent
    } else if ((computerChoice.value === 'paper') && (playerChoice.value === 'scissors')) {
        result.textContent = 'You win!!'
        playerCurrent++;
        playerScore.textContent = playerCurrent
    } else if ((computerChoice.value === 'scissors') && (playerChoice.value === 'rock')) {
        result.textContent = 'You win!!'
        playerCurrent++;
        playerScore.textContent = playerCurrent
    } else {
        result.textContent = 'Computer wins!!'
        computerCurrent++;
        computerScore.textContent = playerCurrent
    }
})

//console.log(randomImage());