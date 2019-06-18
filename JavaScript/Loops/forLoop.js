//Printing numbers from 1-5 with a for loop
//for(var count = 0; count < 6; count++){
//    console.log(count);
//}

//Printing numbers from 1-5 with a while loop
//var count = 1;
//while(count < 6) {
//    console.log("count is: " + count);
//    count++;
//}


////To count letters
//var str = "Hello"
//for(var i=0; i<str.length; i++){
//    console.log(str[i]);
//}
//
////OR we also can do
//var str="Hello";
//var count = 0;
//
//while(count<str.length){
//    console.log(str[count]);
//    count++
//}
//
//for(var i=0; i<16; i+=8){
//    console.log(i);
//}
//
//var str = "ahceclwlxo";
//for(var i = 1; i < str.length; i+=2){
//    console.log(str[i]);
//}


console.log("Print all numbers between -10 and 19")
for(var i = -10; i <= 19; i++){
    console.log(i);
}

console.log("Print all even numbers between 10 and 40")
//for(var i = 10; i <= 40; i+=2){
//    console.log(i);
//}
for(var i = 10; i <= 40; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}


console.log("Print all odd numbers between 300 and 333")
for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i)
    }
}











