let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let newArray = groceries;

function changePrice(array){
    array.totalPrice = "35$"
}
changePrice(newArray);

function changePayed(array){
    array.other["payed"] = false;
}
changePayed(newArray);

console.log(groceries.totalPrice)
console.log(newArray)
console.log(groceries)