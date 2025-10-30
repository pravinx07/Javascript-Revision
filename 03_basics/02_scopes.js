var c = 328
let a  = 382

if(true){  // block scope
    let a = 300;
    const b = 200;
    var c = 43
    console.log("inner :", a);
    

}
console.log("outer", a);


// console.log(a);
// console.log(b);
console.log(c);
