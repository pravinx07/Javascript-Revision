//  Map, filter, reduce

let myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> {  // use return keyword when you open scope
//    return num > 4
// })
// console.log(newNums);


// const newNums = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }

// })

// console.log(newNums);

 
let books = [
    {
        name:"Book1",
        price: 100,
    },
    {
        name:"Book2",
        price: 200,

    },
    {
        name:"Book3",
        price: 300
    },
    {
        name:"Book4",
        price: 400
    },
]


const userBooks = books.filter((book)=>{
    return book.price > 200
})

const userBooks2 = books.filter((book) => {
    return book.name.includes("Book3")
})
// console.log(userBooks2);



let myNumbers = [1,2,3,4,5,6]

// let newMap = myNumbers.map((item) => {
//     return item * 3
// })

let myMap = myNumbers
            .map((item) => item * 10)
            .map((item )=> item  + 1)
            .filter((nums) => nums >= 40)
console.log(myMap);



