var randomArr = [];

function randomNumber() {
  for (var i = 0; i < 2; i++) {
    randomArr[i] = Math.floor((Math.random() * 6) + 1);
  }
  return randomArr;
}
randomNumber();

var randomNumber1 = randomArr[0];
var randomNumber2 = randomArr[1];

function diceImage(randomNumber1, randomNumber2) {
  var dicePics = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

  for (var j = 0; j < 6; j++) {
    if (randomNumber1 === j) {
      document.getElementsByTagName("img")[0].src = dicePics[(j - 1)];
    }
    if (randomNumber2 === j) {
      document.getElementsByTagName("img")[1].src = dicePics[(j - 1)];
    }
  }
}

diceImage(randomNumber1, randomNumber2);


function gameHeader(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! <img class='winner' src='images/kdoWins.gif'>";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! <img class='winner' src='images/stormyWins.gif'>";
  } else {
    document.querySelector("h1").innerHTML = "Draw! <img class='winner' src='images/draw.gif'>";
  }
}

gameHeader(randomNumber1, randomNumber2);
