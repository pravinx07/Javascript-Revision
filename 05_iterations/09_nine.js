//  reduce keyword

let myNums = [1,2,3]

const intialValue = 0

// let sumOfNumbers = myNums.reduce((accumulator, currentValue)=> {
//     console.log(`acc ${accumulator} and curVal ${currentValue}`);
    
//     return accumulator + currentValue }, 
//     intialValue)
// console.log(sumOfNumbers);

const myTotal = myNums.reduce((acc, curr) => acc + curr , 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js COurse",
        price: 3000
    },
     {
        itemName:"js COurse",
        price: 2000
    },
     {
        itemName:"js COurse",
        price: 1000
    },
     {
        itemName:"js COurse",
        price: 4000
    }
]

let totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice);
