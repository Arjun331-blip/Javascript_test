// what is lexical scope
// lexical scope basically one fuction inside variable ko inner function ke under access karna function

function outer() {
    let name = "Harshita";
    function inner() {
        console.log(name);
    }
    inner();
}

outer();

// closures scope 
// same to lexical scope but inner function return

function out() {
    let naam = "Arjun";
    function iner(){
        console.log(naam);
    }
    return iner;
}

const innerside = out();
innerside();

for(var i=1;i<=3;i++){
    setTimeout(() => {
        console.log(i);
    },1000);
}