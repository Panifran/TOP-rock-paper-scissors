'use strict';

let userScore = 0;
let computerScore = 0;
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

const playerSelection = function () {
  const choice = prompt('RPS').toLowerCase();
  return choice;
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection();
  computerSelection = getComputerChoice();
  if (
    (playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')
  ) {
    return 'Draw';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    userScore++;
    return 'player wins';
  }
  computerScore++;
  return 'computer wins';
}

const game = function (playerSelection, getComputerChoice) {
  while (userScore < 3 && computerScore < 3) {
    playRound(playerSelection, getComputerChoice);
  }
  if (userScore === 3) {
    console.log('Game over, User Wins');
  } else {
    console.log('Game over, Computer Wins');
  }
};

game(playerSelection, getComputerChoice);
