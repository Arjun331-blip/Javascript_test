//  Data type in javascript
// data type is a way of data stored different way
// type of data type in javascript two main categories divided
/* 1. primitive data type :- primtive datatype in stored 
    data i simple way :-
    string , number , BigInt , undefined , null , Boolean
    */

    /*  2. non - primitive data : - non primitive data
    stord of data linear list
    like object , Array , function
    */

    // string : - syntax  string_name = "character";
    // how to chaeck data  type  using typeof operator

    let username = "Arjun";
    let text = "kal ho na ho...";

    console.log(text + "type :- " + typeof text);

    let ismarried = false;
    console.log(ismarried + " Type :- " + typeof ismarried);

    let user;
    user = "Hello";
    console.log(user);

    const age = 4567;
    const userid = "34567";
    console.log(age + " Type :- " + typeof age );
    console.log(userid + " type :- " + typeof userid);

    let value = null;
    console.log(value + " type :- " + typeof value);

    const myarray = ["arjun","dev",123,124, ["Harshita",142]];
    console.log(myarray + " type :- " + typeof myarray);


    const student = {
        name : "arjun",
        age : 18,
        rollno : 143,
    };

    console.log(student.name);