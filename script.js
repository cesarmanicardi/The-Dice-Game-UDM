var firstDice = document.querySelector(".img1");
var secondDice = document.querySelector(".img2");
var winnerText = document.querySelector("h1");
var refreshButton = document.querySelector(".btn");



function startGame(){

  function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 6) +1;
    return randomNumber;
  }
  
  var randomNumber1 = generateRandomNumber();
  var randomNumber2 = generateRandomNumber();
  
  firstDice.setAttribute('src', `images/dice${randomNumber1}.png`);
  secondDice.setAttribute('src', `images/dice${randomNumber2}.png`);
  
  if(randomNumber1 > randomNumber2){
    winnerText.innerText = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1){
    winnerText.innerText = "Player 2 Wins";
  } else {
    winnerText.innerText = "Draw!";
  }
}

refreshButton.addEventListener("click", function(){
  startGame();
})