// promises :- kisi person ko instruction dena ki vah itne din baad tumhe ye chij dilayega
// promises ke tin stage ho sakte hai
// 1. pending mean initial state me hai
// 2. fullfiled
// 3. rejected

// const mypromises = new Promise((resolve , rejected) => {
//     setTimeout(() => {
//         console.log("pizza a order ... ❤");
//         let delivered = true;
//         if(delivered){
//             console.log("pizza sucessfully delivered ... ✔");
//         } else{
//             console.log("pizza not a deliverd .. ✂");
//         }
//     },5000);
//    }).then((res) => {
//     console.log(res);
// }).catch((rejected) => {
//     console.log(rejected);
// });






// function getuserdata() {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             resolve("user data received");
//         },2000);
//     });
// }

// getuserdata().then((resolve) => {
//     console.log(resolve);
//     return "Data processing complete";
// }).then((nextmessage) => {
//     console.log(nextmessage); // Data processing complete
// }).catch((rejected) => {
//     console.log("Error" + rejected);
// })


// const data = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
// .then((res) => {
//     // console.log(res);
//     return res.json();
// }).then((res) => {
//     console.log(res);
// }).catch((rejected) => { 
//     console.log(rejected);
// }).finally((final) => {
//     console.log("final")
// });

// console.log(data);



// API fetch

async function data(){
    try{
        const myfetch = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
let data = await myfetch.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
    
};

data();
