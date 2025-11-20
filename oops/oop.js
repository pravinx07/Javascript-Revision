// object literals
const user = {
  username: "pravin",
  loginCount: 9,
  signIn: true,

  getUserDetails: function () {
    //
    console.log(this); // this refres to the current context object
  },
};
// console.log(user.getUserDetails());
// user.getUserDetails()

// console.log(user.loginCount);
// console.log(this); // give global object {}

// constructor function

// const promiseOne = new Promise();
// const date = new Date(); // new keyword create new object

function User(name, age, isLoggedIn) {
  this.name = name; // left variable and right is property
  this.age = age;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function(){
    console.log(`Welcome ${this.name}`);
    
  }
  return this;
}

// const user1 =  User("pravin", 32, true)
// const userTwo =  User("Ajay", 23, false)  // override old values
// console.log(userTwo);



const userOne = new User("pravin", 32, true)
const userTwo = new User("Ajay", 23, false)  // create constructor 
// console.log(userTwo);
console.log(userOne.constructor);// reference about himself
// userOne.greeting()

// new Keyword
// 1 create empty object {}
// 2 constructor function call using new keyword
// 3 inject this
// 4 return this