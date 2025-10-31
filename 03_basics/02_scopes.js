var c = 328
let a  = 382

if(true){  // block scope
    let a = 300;
    const b = 200;
    var c = 43
    // console.log("inner :", a);
    

}
// console.log("outer", a);


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "pravin"
    

    function two(){
        let website = "youtube"
        console.log(username); // child variable can access paarent varaible
        
    }
    // console.log(website); // parent function cant access child variable
    two()
}

// one()

if(true){
    const username= "pravin";

    if(username === "pravin"){
        const website = " youtube"
        // console.log(username + website); // pravin youtube
        
    }

    // console.log(website); // give error
    
}
    // console.log(username); // give error

    // ++++++++++++++++ interesting +++++++++++++++

    console.log(addOne(5))
    function addOne(num){
        return num + 1
    }



    addTwo(3)  // cant access before initialization becaus function is stroe in variable
    const addTwo = function(num){  // expression
     return num + 3
    }
