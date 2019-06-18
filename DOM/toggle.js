//alert("Connected");
var color = document.querySelector("button");
//var isPurple = false;

//color.addEventListener("click", function(){
//    if(isPurple){
//        document.body.style.background = "white";
//        isPurple = false;
//    } else{document.body.style.background = "purple";
//      isPurple = true};   
//});


 color.addEventListener("click", function(){
   document.body.classList.toggle("purple");
});