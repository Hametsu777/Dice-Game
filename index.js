var randomNumber1 = (Math.random() * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = (Math.random() * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);

var diceOne = document.querySelectorAll("img")[0];
var diceTwo = document.querySelectorAll("img")[1];

var randomImageSource = "images/dice" + randomNumber1 + ".png";
var randomImageSourceTwo = "images/dice" + randomNumber2 + ".png";

diceOne.setAttribute("src", randomImageSource);
diceTwo.setAttribute("src", randomImageSourceTwo);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "<span>🚩</span>Player One Wins";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player Two Wins<span>🚩</span>";
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
}


// This was my original solution. This was before I made the variables randomImageSource
// and randomImageSourceTwo. I used a switch statement to set/generate the images (dice 1 - 6) instead
// of doing it through the variables randomImageSource and randomImageSourceTwo. Still learning
// but making improvements.

// switch (randomNumber1)
//  {
//   case 1:
//     diceOne.setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     diceOne.setAttribute("src", "images/dice2.png");
//     break;
//   case 3:
//     diceOne.setAttribute("src", "images/dice3.png");
//     break;
//   case 4:
//     diceOne.setAttribute("src", "images/dice4.png");
//     break;
//   case 5:
//     diceOne.setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//     diceOne.setAttribute("src", "images/dice6.png");
//     break;
// }
//
// switch (randomNumber2)
//  {
//   case 1:
//     diceTwo.setAttribute("src", "images/dice1.png");
//     break;
//   case 2:
//     diceTwo.setAttribute("src", "images/dice2.png");
//     break;
//   case 3:
//     diceTwo.setAttribute("src", "images/dice3.png");
//     break;
//   case 4:
//     diceTwo.setAttribute("src", "images/dice4.png");
//     break;
//   case 5:
//     diceTwo.setAttribute("src", "images/dice5.png");
//     break;
//   case 6:
//     diceTwo.setAttribute("src", "images/dice6.png");
//     break;
// }
