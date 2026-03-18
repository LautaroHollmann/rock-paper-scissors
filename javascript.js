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

    if (input === "Rock") {
      return "Rock";
    } else if (input === "Paper") {
      return "Paper";
    } else {
      return "Scissors"
    }
  }


  



