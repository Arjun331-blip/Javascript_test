const prompt = require('prompt-sync')();

let number = prompt("Enter the number even and odd :- ");

if(number %2 == 0){
    console.log("the number is even.")
} else console.log("the number is odd.");