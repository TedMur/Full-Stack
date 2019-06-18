//alert("Connected!");

var oneCounter = document.querySelector("#one");
var twoCounter = document.querySelector("#two");
var oneDisplay = document.querySelector("#oneDisplay");
var twoDisplay = document.querySelector("#twoDisplay");
var numInput = document.querySelector("input");
var round = document.querySelector("p span");
var oneScore = 0;
var twoScore = 0;
var gameOver = false;
var winningScore = 5;

//var nRound = document.querySelector("#round");

var reset = document.querySelector("#reset");

//click and return count
oneCounter.addEventListener("click", function(){
    if(!gameOver){
     oneScore++;
     if(oneScore === winningScore){
        oneDisplay.classList.add("winner");
        gameOver = true;
     }
     oneDisplay.textContent = oneScore;
    }
})

twoCounter.addEventListener("click", function(){
    if(!gameOver){
      twoScore++;
      if(twoScore === winningScore){
          twoDisplay.classList.add("winner");
          gameOver = true;
      }
      twoDisplay.textContent = twoScore;
    }
})

reset.addEventListener("click", function(){
    restart();
});

function restart(){
    oneScore = 0;
    twoScore = 0;
    oneDisplay.textContent = 0;
    twoDisplay.textContent = 0;
    oneDisplay.classList.remove("winner");
    twoDisplay.classList.remove("winner");
    gameOver = false;
};


numInput.addEventListener("change", function(){
    round.textContent = this.value;
    winningScore = Number(this.value);
    restart();
})


