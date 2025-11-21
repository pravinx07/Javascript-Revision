// let myName = "Pravin    "

// console.log(myName.trueLength);


let arr = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}

// pass prototype in object
Object.prototype.pravin = function(){
    console.log(`pravin is present in all object`);
    
}

Array.prototype.heyPravin = function(){
    console.log("pravin says hello");
    
}

// heroPower.pravin()
// arr.pravin()
// arr.heyPravin()
// heroPower.heyPravin()

// inheritance
const User = {
  name:"chai",
  email:"xyza"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
 makeAssignment:"JS assignment",
 fullTime:true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "Pravin    "

String.prototype.trueLength = function(){
    console.log(this);
    
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}

anotherUserName.trueLength()
"pravin".trueLength()
"chaiTea".trueLength()