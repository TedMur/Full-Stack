var corrAns = Number(20);
var guesAns = Number(prompt("Guess a number!"));


if (guesAns === corrAns) {
    alert("Ding Ding Ding!");
}

else if (guesAns < corrAns) {
    alert("Too low");
}

else {
    alert("Too high");
}