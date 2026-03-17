console.log("Hello World");
// User selects rock, paper or scissors
// CPU randomly chooses one as well
// rock beats scissors but looses against paper
// scissors beats paper but looses against rock
// paper beats rock but looses against scissor
// Display a win or lose message

// Create a function for computor to randomly choose one of the three options

function getComputerChoice() {
    if (Math.floor(Math.random() <= 0.33333333333)) {
        return "Rock"
    } else if (Math.floor(Math.random() > 0.33333333333 && Math.random() < 0.66666666666)) {
        return "Paper"
       } else {
        return "Scissors"
    }
}

/*not quite sure if this works as intended so far

This way would probably be better/correct:
function getComputerChoice(min, max) {
  return Math.random() * (max - min) + 1;
}
*/

