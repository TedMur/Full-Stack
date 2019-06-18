var ask = prompt("Are we there yet");

//if(ask==="yes" || ask==="yeah"){
//    alert("Yay, we finally made it!")
//}
//else {
//var ask = prompt("Are we there yet");
//}


//while(ask !=="yes" && ask !=="yeah") {
//    var ask = prompt("Are we there yet");
//}
//alert("Yay, we finally made it!")


//Version 2 with answer containing "yes" or "yeah"
while(ask.indexOf("yes") === -1) { //"yes"がなかったらループ
    var ask = prompt("Are we there yet");
}
alert("Yay, we finally made it!")