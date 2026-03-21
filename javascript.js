  /*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
  +1 in parenthesis after "max - min" for the maximum and minimun to be inclusive*/

  // Declares a variable called: "option", which consists of a randomly generated number selected from: 1, 2 or 3.

function getComputerChoice() {
  let option = Math.floor(Math.random() * (3 - 1 + 1) + 1);
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

  console.log(humanChoice, "vs", computerChoice);

  if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
    console.log("Please choose either 'Rock', 'Paper' or 'Scissors'")
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    ++computerScore
    console.log("You lost! Paper beats Rock.")
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    ++computerScore
    console.log("You lost! Scissors beat Paper.")
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    ++computerScore
    console.log("You lost! Rock beats Scissors.")

  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    ++humanScore
    console.log("You win! Rock beats Scissors.")
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    ++humanScore
    console.log("You win! Paper beats Rock.")
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    ++humanScore
    console.log("You win! Scissors beat Paper.")

  } else {
    console.log("It's a draw!")
}
}


function playGame() {
  humanScore = 0
  computerScore = 0 
  
  for (let round = 1; round < 6; round++) {
  console.log("Round:", round)
  playRound(getHumanChoice(), getComputerChoice());
 if (round === 5) {
    console.log("Final Score:", humanScore, computerScore)
  } else {
    console.log("Score:", humanScore, computerScore);
  }
}
 if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!")
  } else if (humanScore === computerScore) {
    console.log("The game is a tie!")
  } else
    console.log("You lost the game! Better luck next time!")
}


/*
playGame()
    loop 5 times
        getHumanChoice()
        getComputerChoice()
        playRound()

    compare final scores
    announce winner
*/