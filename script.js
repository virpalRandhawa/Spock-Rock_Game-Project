import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');


const choices = {
   rock: {name: 'Rock', defeats: ['scissors','lizard']},
   paper: {name: 'Paper', defeats: ['rock','spock']},
   scissors: {name: 'Scissors', defeats: ['paper','lizard']},
   lizard: {name: 'Lizard', defeats: ['paper','spock']},
   spock: {name:'spock', defeats: ['scissors','rock']},
};

let computerChoice = '';
let playerSCoreNumber = 0;
let computerScoreNumber = 0;



//2 Reset all 'selected' icons
function resetSelected() {
    allGameIcons.forEach((icon)=> {
        icon.classList.remove('selected')
    });
    stopConfetti();
    removeConfetti();
}

// 7 Reset Score & PlayerChoice/ComputerChoice
function resetAll() {
  playerSCoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerSCoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

// 4 Computer Random Choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  }
  else if(computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  }
  else if(computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  }
  else if(computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  }
  else {
    computerChoice = 'spock';
  }
  // console.log(computerChoice)
}

// 5 Add Selected Styling and Computer Choice's
function displayComputerChoice() {
switch (computerChoice) {
 case 'rock':
   computerRock.classList.add('selected');
   computerChoiceEl.textContent = ' --- Rock';
   break;
 case 'paper':
   computerPaper.classList.add('selected');
   computerChoiceEl.textContent = ' --- Paper';
   break;
 case 'scissors':
   computerScissors.classList.add('selected');
   computerChoiceEl.textContent = ' --- Scissors';
   break;
 case 'lizard':
   computerLizard.classList.add('selected');
   computerChoiceEl.textContent = ' --- lizard';
   break;
 case 'spock':
   computerSpock.classList.add('selected');
   computerChoiceEl.textContent = ' --- lizard';
   break;
   default:
   break;         
}
}

//6 Check Result, Increase Score & Update ResultText
function updateScore(playerChoice) {
  console.log(playerChoice,computerChoice);
  if(playerChoice === computerChoice){
    resultText.textContent = 'It is a tie!'
  }else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if(choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = 'You Won!'
      playerSCoreNumber++;
      playerScoreEl.textContent = playerSCoreNumber;
    } else{
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
   
  }
}

//3 Call Function To Process Turn
function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

//1 Passing Player Selections Value and Styling icons
function select(playerChoice) {
       checkResult(playerChoice)
    // console.log(playerChoice);
    switch (playerChoice) {
      case 'rock':
        playerRock.classList.add('selected');
        playerChoiceEl.textContent = ' --- Rock';
        break;
      case 'paper':
        playerPaper.classList.add('selected');
        playerChoiceEl.textContent = ' --- Paper';
        break;
      case 'scissors':
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = ' --- Scissors';
        break;
      case 'lizard':
        playerLizard.classList.add('selected');
        playerChoiceEl.textContent = ' --- lizard';
        break;
      case 'spock':
        playerSpock.classList.add('selected');
        playerChoiceEl.textContent = ' --- lizard';
        break;
        default:
        break;         
    }
}
window.select = select;

// on startup, set initial value
resetAll();
