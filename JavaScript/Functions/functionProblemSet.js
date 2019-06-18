//console.log("isEven()")
//function isEven(num) {
//    if(num % 2 === 0){
//        return "true"
//    } else {
//        return "false"
//    }
//}

console.log("factorial()")
function factorial(num) {
    //define a result variable
    var result = 1;
    
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++){
        result = result * i;
    }
    //return the result variable
    return result;
}

//function factorial(num){
//    if(num === 0){
//        return 1;
//    } else {
//    var result = num;
//    for(var i = num-1; i >= 1; i--)
//        result *= i;
//    }
//}

console.log("kebabToSnake()");
function kebabToSnake(str){
    //replace all "-" with "_"s
    var newString = str.replace(/-/g, "_");
    //return str
    return newString
}





