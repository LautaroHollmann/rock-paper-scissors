console.log("Hello World");
// User selects rock, paper or scissors
// CPU randomly chooses one as well
// rock beats scissors but looses against paper
// scissors beats paper but looses against rock
// paper beats rock but looses against scissor
// Display a win or lose message

// Create a function for computor to randomly choose one of the three options

// Like this it's from 0-1 (I divide by 3 for the three options. NOT SO GOOD):

/*function getComputerChoice() {
  let random = Math.random();
    if (random <= 0.33333333333) {
        return "Rock"
    } else if (random > 0.33333333333 && random < 0.66666666666) {
        return "Paper"
       } else {
        return "Scissors"
    }
}*/


//This way is better, as we extend the range to 1-3 (instead of 0-1):

function getComputerChoice() {
  let option = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  /*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
  +1 in parenthesis after "max - min" for the maximum and minimun to be inclusive*/

  // Declares a variable called: "option", which consists of a randomly generated number selected from: 1, 2 or 3.

   if (option === 1) {
    return "Rock";
  } else if (option === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let input = prompt("Choose Rock, Paper or Scissors")
  let cap = capitalize(input.trim())
      if (cap != "Rock" && cap != "Paper" && cap != "Scissors") {
    return
    }
      else { return cap
    }
  }

// --> Increment the humanScore or computerScore variable based on the round winner (see playRound()).
let humanScore = 0
let computerScore = 0 


// --> Make function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };


function playRound(humanChoice, computerChoice) {

  console.log(humanChoice, computerChoice);

  if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
    console.log("Please choose either 'Rock', 'Paper' or 'Scissors'")
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    ++computerScore
    console.log("You lost! Paper beats Rock."), 
    console.log("Score:", humanScore, computerScore);
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    ++computerScore
    console.log("You lost! Scissors beat Paper.")
    console.log("Score:", humanScore, computerScore);
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    ++computerScore
    console.log("You lost! Rock beats Scissors.")
    console.log("Score:", humanScore, computerScore);


  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    ++humanScore
    console.log("You win! Rock beats Scissors.")
    console.log("Score:", humanScore, computerScore);
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    ++humanScore
    console.log("You win! Paper beats Rock.")
    console.log("Score:", humanScore, computerScore);
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    ++humanScore
    console.log("You win! Scissors beat Paper.")
    console.log("Score:", humanScore, computerScore);

  } else {
    console.log("It's a draw!")
    console.log("Score:", humanScore, computerScore);
    
}
}

// Works fine now if: "playRound(getHumanChoice(), getComputerChoice())" is used, as the functions run in that moment again then
// "playRound(humanSelection, computerSelection)" does not work as I thought it would, because it uses stored values - always the same

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);
//playRound(getHumanChoice(), getComputerChoice())

