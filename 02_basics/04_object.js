// singleton object
// const tinderObject = new Object();

// non singleton object
const tinderUser = {}

tinderUser.id = "abc";
tinderUser.name = "john"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regulerUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pravin",
            lastname:"patil"
        }
    }
}


// ?  optinal chaining  to check nested object is valu exist or not
// console.log(regulerUser.fullname?.userfullname.firstname);


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj4 = {
    5:"e",
    6:"f"
}
// const obj3 = {obj1 , obj2}

// copy all object in obj3 
// {} empty object target  object and others are source
// const obj3 = Object.assign({},obj1,obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

const users = [
    {
        userId:1,
        email:"pravin@gmail",
        profile:"user"
    },
    {

    },
    {

    }
]



// users[1].email

// console.log(tinderUser);

// return all keys of object but in array  
// console.log(Object.keys(tinderUser));

// return all values of object but in array  
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// *****************************************

const course = {
    courseName:"js wiith hindi",
    price :"1222",
    courseInstructor:"Pravin"
}


const {courseInstructor : instructor} = course

console.log(instructor);


// in react 
// const navBar = ({company}) => {
 
// }

// navBar(company="pravin")


// {
//     "name":"Pravin",
//     "age":23,
//     "eail":"pravin@gmial.com"
// }


[
    {},
    {},
    {}
]

