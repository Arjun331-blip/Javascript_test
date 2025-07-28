const prompt = require('prompt-sync')();

// js operators
 // arithmetic operator - (+,*,%,**,++,--,/)

 let a = "aman";
 let b =  "4";
 let c = a+b;
 console.log(c + "Type :- "  + typeof c);
 
 let x = "123";
 let y = 123;

 console.log(x==y);
 console.log(x===y);
 console.log(5!= '5');
 console.log(5!== '5');
 console.log(5>1);
 console.log(5<3);

 console.log(10>=12);

 // Nullish operator  ??

 let firstname = "Harshita"; //  = prompt("Enter your name :- ");
 //console.log(firstname);


 let finaloutput = firstname ?? "Guest";

 console.log(finaloutput);