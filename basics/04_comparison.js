// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);  // compare only same data type
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

/*
The reason is that an equality check == and 
comparision > < >= <= work differently.
Comparison convert null to number treating it as 0,
Thats why (3) null >= 0 is true (1) null > 0 false.
*/

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined < 0);
// console.log(undefined > 0);  // all false

// avoid above comparison

// strict check
// === 

console.log("2" === 2);  // check value and data type


// In this Comparison of Datatypes in js i leaent that Comparison operator work differently as when you compare string and number and null and 0 
// and undefined and 0 . learnt how to write clean code and which cases are aovoid to compare for better understanding 