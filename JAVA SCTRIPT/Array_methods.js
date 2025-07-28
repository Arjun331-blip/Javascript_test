const prompt = require("prompt-sync")();

const myArray = ["Arjun", true , 345 , "aman" , "manny"];
console.log(myArray);

// Mutating Methods of Array

// push() :- add to items array of end 
myArray.push("Harsita");
console.log(myArray);

// pop :- remove to items array of end
myArray.pop();
console.log(myArray);

// myArray.pop();
// console.log(myArray);

// unshift() :- add to item array from start
myArray.unshift("Harshita");
console.log(myArray);

// shift :- add to item array of start
myArray.shift();
console.log(myArray);

// splice(start , deletecount , newvalue) :- add/remove item at any position
myArray.splice( 3,3,"Ayushi");
console.log(myArray); 

// sort() :- sort the array
let arr = ["Arjun","Ayushi","Ravi","Harshita","Devendra"];
console.log(arj);

arr.sort();
console.log(arj);

// let ajj = [8,9,5,4,2,6,1];
// console.log(ajj);

// ajj.sort();
// console.log(ajj);

//  reverse() :- reverse the array
// ajj.reverse();
// console.log(ajj);

// fill(value , start , end) :- fill part of array with static value

