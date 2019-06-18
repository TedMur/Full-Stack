console.log("Connected")
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function() {
    paragraph.textContent = "Someone Clicked Me!";
});