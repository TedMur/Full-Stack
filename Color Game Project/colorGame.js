//alert("Connected");
var numSquares = 6;
var colors = [];  
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDissplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    //mode button event listener
    setupModeButtons();
    
    setupSquares();

    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener('click', function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3: numSquares = 6; 
            reset();
            //figure out how many to show

            //pick new colors 
            //pick a new pickedColors
            //update page to reflect changes
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

//easyBtn.addEventListener("click", function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//           squares[i].style.backgroundColor = colors[i];
//           } else{squares[i].style.display = "none"};
//    }
//});
//hardBtn.addEventListener("click", function(){
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";}
//});

resetButton.addEventListener("click",function(){
    //    //generate all new colors
    //    colors = generateRandomColors(numSquares);
    //    //pick a new random color from array
    //    pickedColor = pickColor();
    //    //change color display to match picked color
    //    colorDisplay.textContent = pickedColor;
    //    this.textContent = "New Colors";
    //    //change colors of squares
    //    for(var i = 0; i < squares.length; i++){
    //        squares[i].style.backgroundColor = colors[i];
    //    }
    //    h1.style.backgroundColor = "steelblue";
    reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //pick a random number from 0 to 255
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []

    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());    

    }

    //return that arr
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}