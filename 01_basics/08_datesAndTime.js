// date are in mili second

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// // console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); // object

// in js month start from 0 => jan , 11 => dec
// let newDate = new Date(2025,9,21)
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());

let addDate = new Date("10-21-2025")
// console.log(addDate.toLocaleString());

// let myTimeStamps = Date.now()
// console.log(myTimeStamps);

// console.log(addDate.getTime());
// console.log(addDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate2 = new Date()
console.log(newDate2.getDate()); // get currnt day
console.log(newDate2.getMonth() + 1); // get currnt month start from 0


// ctrl + space give suggestion
let x = newDate2.toLocaleString('default',{
    weekday:"long",

})

console.log(x);
