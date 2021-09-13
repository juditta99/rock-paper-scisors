/*MOVES*/

const btnShape = document.querySelectorAll('.btn-shape');
const you = document.querySelector('.text-player-pick');
const computer = document.querySelector('.text-computer-pick');
const youBorder = document.querySelector('.player-pick');
const computerBorder = document.querySelector('.computer-pick');
const youPoints = document.querySelector('.text-player-points');
const computerPoints = document.querySelector('.text-computer-points');
const btnPlayAgain = document.querySelector('.play-again');
const scoreMessage = document.querySelector('.text-score-message');
const playerTitle = document.querySelector('.player-title h2')
let playerScore = 0;
let computerScore = 0;

playersName = window.prompt("Hello there! What's your name?");
playerTitle.textContent = `${playersName}:`;


function getComputerChoice() {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
        return 'Rock';
    }
    else if (randomNumber === 1){
    return 'Paper';
    }
    else if (randomNumber === 2){
    return 'Scissors';
    }
}

function computerWins() {
    computerBorder.classList.remove('computer-wins');
    youBorder.classList.add('you-win')
}
function youWin(){
    youBorder.classList.remove('you-win');
    computerBorder.classList.add('computer-wins');
}
function draw(){
    youBorder.classList.add('you-win');
    computerBorder.classList.add('computer-wins');
}
function resetScores() {
    playerScore = 0;
    computerScore = 0;    
    youPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    computerBorder.classList.add('computer-wins');
    youBorder.classList.add('you-win');
    scoreMessage.textContent = ' ';
    for (let i=0; i<btnShape.length; i++) {
        btnShape[i].disabled = false;
        btnShape[i].classList.add('hover');          
    };

}
btnPlayAgain.addEventListener('click', resetScores)

function displayBtnPlayAgain() {
    btnPlayAgain.classList.remove('not-visible'); 
}

function gameOver() {
    if(playerScore === 5 ){
        displayBtnPlayAgain()
        youWin()
        for (let i=0; i<btnShape.length; i++) {
            btnShape[i].disabled = true;
            btnShape[i].classList.remove('hover');          
        }
        alert(`Game Over. Super ${playersName} wins this round!`);
        
    } 
    if(computerScore === 5){
        displayBtnPlayAgain()
        computerWins()
        for (let i=0; i<btnShape.length; i++) {
            btnShape[i].disabled = true;
            btnShape[i].classList.remove('hover');
            
        }
        alert('Game Over. The computer wins this round. Better luck next time!');
    } 
}

function getWinner(you, computer) {
    if(you===computer) {
        draw()
        return "It's a tie";
    } 
    if(you === 'Rock' && computer === 'Paper') {
        computerScore++;
        computerWins();
        computerPoints.textContent = computerScore;
        gameOver();
        return 'Computer wins'  
    }
    if(you === 'Rock' && computer === 'Scissors') {
        playerScore++;
        youWin();
        youPoints.textContent = playerScore
        gameOver();
        return `${playersName} wins`
    }
    if(you === 'Paper' && computer === 'Rock') {
        playerScore++;
        youWin();
        youPoints.textContent = playerScore
        gameOver();
        return `${playersName} wins`
    }
    if(you === 'Paper' && computer === 'Scissors') {
        computerScore++;
        computerWins();
        computerPoints.textContent = computerScore
        gameOver();
        return 'Computer wins'  
    }
    if(you === 'Scissors' && computer === 'Rock') {
        computerScore++;
        computerWins();
        computerPoints.textContent = computerScore
        gameOver();
        return 'Computer wins'  
    }
    if(you === 'Scissors' && computer === 'Paper') {
        playerScore++;
        youWin();
        youPoints.textContent = playerScore
        gameOver();
        return `${playersName} wins`
    }
}

for (let i = 0; i < btnShape.length; i++) {
    youPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    btnShape[i].addEventListener('click', () => {
        const playerChoice = btnShape[i].textContent;
        const computerChoice = getComputerChoice();

        you.textContent = playerChoice.toUpperCase();
        computer.textContent = computerChoice.toUpperCase();

        scoreMessage.textContent = getWinner(playerChoice, computerChoice);
    });
}


