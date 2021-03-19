"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".guess").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".result").value);
  // If there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🔴 Not A Number!";
  }
  //If winning
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "✅ You guessed the number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.width = "120px";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🙁 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too low number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🙁 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
