const obj = {
    name : "Arjun",
    Age : 18,
    isstudent : "true",
    otherstudent: {
        name : "Harshita",
        age : 19,
        isstudent : "true",
    },
}

let st = JSON.parse(JSON.stringify(obj));

console.log(st);