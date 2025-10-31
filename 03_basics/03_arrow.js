const user = {
    username:"pravin",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // current context object
        
        
    }

    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); // give {}

// function one(){
//     let username = "pravin"
//     console.log(this);  // give global object
//     console.log(this.username); // give undefined because in function this cant access current contesxt
    
    
// }
// one()


const one = () => {
 let username = "pravin"
 console.log(this);  // refer empty object
 
}

// one()

const addtwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addtwo(3,1));

const addthree = (a,b) =>  a + b  // not need return keyword
// console.log(addthree(4,2));
// addthree(4,2)

const addFour = () => ({username:"pravin"})
console.log(addFour());






