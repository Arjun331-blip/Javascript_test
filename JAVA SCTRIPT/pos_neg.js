const prompt = require('prompt-sync')();


let number = prompt("Enter the number ( - infinte > 0 < infinite )  :- ");

if(number > 0){
    console.log("the number is positive.");
} else if(0 > number){
    console.log("the number is Negative.");
} else console.log("invalid input");