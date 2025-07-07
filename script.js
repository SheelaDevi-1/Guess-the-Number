const guessnumber = document.getElementById("guessnumber");
const result = document.getElementById("result");
const randomNumber = Math.floor(Math.random() * 100) + 1;

function check() {
  const userGuess = parseInt(guessnumber.value);

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    result.innerHTML = "Your guess must be between 1 and 100.";
    result.style.color = "red";
  } else if (userGuess === randomNumber) {
    result.innerHTML = "You are Right!The number was " + randomNumber + ".";
    result.style.color = "green";
  } else if (userGuess < randomNumber) {
    result.innerHTML = "Too low! Try again.";
    result.style.color = "#ff9800";
  } else {
    result.innerHTML = "Too high! Try again.";
    result.style.color = "#ff9800";
  }
}