// Array 
// js Array mix array and mutable
// same refrence point 
let array = [1,2,3,4]
// let myHeros = ["Shaktiman","Naagraj"]
// console.log(array[5]);

// let myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

// array makr a shallow copy if you change copy of array then original array automatically change 
// let ar = [1,2,4]
// let ar2 = ar
// if i change copy of ar 
// ar2.push(5)
// ar change to => [1,2,4,5]
// console.log(ar);



// Array methods

// 1. push
// add new element to end of the array and take arg
array.push(7)
// 2. pop remove element from the end dont take arg
array.pop()

//3. unshift add new element to start of the array
 array.unshift(20)

// 4. shift remove 1st element of the array
array.shift()
// console.log(array);

// check element exist or not if return true , not return false
// console.log(array.includes(4));
// console.log(array.indexOf(4)); // return the index of the specific element

// join the array into string and change data type to string
// let newArr = array.join()

// console.log( typeof array);
// console.log(typeof newArr);


// slice , splice

console.log("A",array);
// slice not change the orignal array
const myn1 = array.slice(1,3)

console.log(myn1);
console.log("B", array);

// splice change the original array 
const myn2 = array.splice(1,3)
// Removes elements from an array and, 
// if necessary, inserts new elements in their place, 
// returning the deleted elements.
console.log(myn2);
console.log("C",array);


