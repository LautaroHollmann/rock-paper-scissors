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
      else {
        return cap
    }
  }


// --> Increment the humanScore or computerScore variable based on the round winner (see playRound()).
let humanScore = 0
let computerScore = 0 


// --> Make function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };


function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  choices.textContent = `${humanChoice} vs ${computerChoice}`

  if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
    resultsMessages.textContent = "Please choose either 'Rock', 'Paper' or 'Scissors'"
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    ++computerScore
    resultsMessages.textContent = "You lost! Paper beats Rock."
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    ++computerScore
    resultsMessages.textContent = "You lost! Scissors beat Paper."
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    ++computerScore
    resultsMessages.textContent = "You lost! Rock beats Scissors." 

  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    ++humanScore
    resultsMessages.textContent = "You win! Rock beats Scissors."
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    ++humanScore
    resultsMessages.textContent = "You win! Paper beats Rock."
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    ++humanScore
    resultsMessages.textContent = "You win! Scissors beat Paper."

  } else {
    resultsMessages.textContent = "It's a draw!"
}

//Update Winner:
  if (winner.textContent !== "") return;
  if (humanScore >= 5) {
    winner.textContent = "Congratulations, you win!"
  } else if (computerScore >= 5) {
    winner.textContent = "Too bad, you lost!"
  }

}

const btnRock = document.querySelector(".btnRock")
const btnPaper = document.querySelector(".btnPaper")
const btnScissors = document.querySelector(".btnScissors")
const results = document.querySelector(".results")
const resultsMessages = document.querySelector(".resultsMessages")
const choices = document.querySelector(".choices")

btnRock.addEventListener("click", (RockChosen) => {
  playRound("Rock")
  results.textContent = `${humanScore} vs ${computerScore}`
})

btnPaper.addEventListener("click", (PaperChosen) => {
  playRound("Paper")
  results.textContent = `${humanScore} vs ${computerScore}`
}
)

btnScissors.addEventListener("click", (ScissorsChosen) => {
  playRound("Scissors")
  results.textContent = `${humanScore} vs ${computerScore}`
})

//Reset Button:
const btnReset = document.querySelector(".btnReset")

btnReset.addEventListener("click", (Reset) => {
  humanScore = 0
  computerScore = 0 
  choices.textContent = ""
  resultsMessages.textContent = ""
  results.textContent = ""
  winner.textContent = ""
})

const winner = document.querySelector(".winner")




/*function playGame() {
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
*/


/*
playGame()
    loop 5 times
        getHumanChoice()
        getComputerChoice()
        playRound()

    compare final scores
    announce winner
*/