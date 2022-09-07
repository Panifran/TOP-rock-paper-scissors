'use strict';

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const playerBoard = document.querySelector('.player-board');
const computerBoard = document.querySelector('.computer-board');
const resultsBoard = document.querySelector('.results-board');
const btnPlayAgain = document.querySelector('.btn-play-again');

let userScore = 0;
let computerScore = 0;

const updateResult = function () {
  playerBoard.textContent = `${userScore}`;
  computerBoard.textContent = `${computerScore}`;
};

const disableButton = function () {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}

const enableButton = function () {
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
};

const getComputerChoice = function () {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  let result = '';
  switch (randomInt(1, 3)) {
    case 1:
      result = 'rock';
      break;
    case 2:
      result = 'paper';
      break;
    case 3:
      result = 'scissors';
      break;
  }
  console.log(`Computer: ${result}`);
  return result;
};

btnRock.addEventListener('click', function () {
  console.log('rock');
  playRound('rock', getComputerChoice());
  game();
});

btnPaper.addEventListener('click', function () {
  console.log('paper');
  playRound('paper', getComputerChoice());
  game();
});

btnScissors.addEventListener('click', function () {
  console.log('scissors');
  playRound('scissors', getComputerChoice());
  game();
});

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')
  ) {
    resultsBoard.textContent = 'Tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    userScore++;
    resultsBoard.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    resultsBoard.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    console.log('computer wins');
  }
}

const game = function () {
  console.log(`user ${userScore} - computer ${computerScore}`);
  updateResult();
  if (userScore === 3) {
    disableButton();
    resultsBoard.textContent = 'You Win the game!!!';
    resultsBoard.classList.add('green');
  }

  if (computerScore === 3) {
    disableButton();
    resultsBoard.textContent = 'You Lost the game to a computer!';
    resultsBoard.classList.add('red');
  }
};

btnPlayAgain.addEventListener('click', function() {
  playerBoard.textContent = '';
  computerBoard.textContent = '';
  resultsBoard.textContent = '';
  userScore = 0;
  computerScore = 0;
  enableButton();
  resultsBoard.classList.remove('green');
  resultsBoard.classList.remove('red');
})
