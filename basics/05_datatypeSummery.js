// Primitive

// 7 type : String , Number , Boolean , null , undefined, Symbol, 
// BigInt

const score = 182  // number
const scoreValue = 102.3 // number
const isLoggedIn = false  // boolean
const outSideTemp = null  // => typeof = object
let userEmail;  // undefined

const id = Symbol("123")    // symbol
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 3471849381048024n

console.log(typeof bigNumber);



// Reference Type (non primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
const obj = {
    name:"Pravin",
    age:32
}

const myFunction = () => {
  console.log("hello world");
  
}

console.log(typeof heros); // object
console.log(typeof obj);  // object
console.log(typeof myFunction);  // function but we called object function

