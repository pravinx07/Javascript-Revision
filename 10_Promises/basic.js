const promiseOne = new Promise(function(resolve,reject){
    // DO an async task
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve()

    },2000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed");

})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve()
        // reject()

    },1000)
}).then(function(){
    console.log("Async 2 resolve");

}).catch((function(){
    console.log("Async 2 reject");

}))
// promise can be  consume or creation

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Pravin", email: "pravin@.com" });
  }, 1000);
});
promiseThree.then((user) => {  // get data from the resolve()
  console.log(user);
});

const promiseFour = new Promise((res,rej)=>{
  setTimeout(()=>{
    const error = true
    if(!error){
        res({username:"pravin",password:"123"})

    }else{
        rej("ERROR: somthing went wrong")
    }
  },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
 console.log(username);
 
})
.catch((err)=>{
  console.log(err);
  
})
.finally(()=> console.log("Promise is either resolve or rejected")
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
    const error = true
    if(!error){
        resolve({username:"javascript",password:"123"})

    }else{
        reject("ERROR: somthing went wrong")
    }
  },1000)
})

async function consumePromiseFive(){
    try {
        const res = await promiseFive
        console.log(res);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


// fetch("").then().catch().finally()

// async function getAllUser() {
//     try {
//         const res  = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(res.json());
//         const data = await res.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
    
// }

// getAllUser()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
   return response.json()
})
.then((data)=>{
    console.log(data);
    

})
.catch((err)=> console.log(err)
)
