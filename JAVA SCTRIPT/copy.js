// const obj = {
//     name : "arjun",
//     age : 18,
//     rollno : 51,
//     address {
//         city : "bhadohi",

//     }
// };

// const myarray = ["arjun","Ravi","Devendra","Harshita","Ayushi","lovely"];

// myarray.forEach((item, index) => {
//     console.log(item , index);
// });

async function datafetch() {
    let response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    console.log(data);
}

datafetch();