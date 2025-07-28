// json stand for javascript object notation

// js obj

const product = {
    productname : "Samsung",
    productprice : "$56",
    address: {
        city : "jaipur",
        pincode : 987654,
    },
}

const data = JSON.parse(JSON.stringify(product));
console.log(data);