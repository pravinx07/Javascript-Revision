// singleton

// object loterals

const mySym = Symbol("Key1")
const JsUser = {
    name:"Pravin",
    age:23,
    [mySym]:"key2",
    location:"Nagpur",
    email:"pravin@gmail.com",
    isLoggedIn:false,
    lastLogginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);  // to access symbol


JsUser.email = "ajay@gmail.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)

JsUser.age = 32
// console.log(JsUser);



JsUser.greeting = function (){
    console.log(`Hello Js user`);
    
}

JsUser.greeting2 = function (){
    console.log(`Hello Js user ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
