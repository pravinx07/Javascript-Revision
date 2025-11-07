// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    
    if(i == 5){
        // console.log("5 is best number");
        
    }

    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + "=" + i * j);
        
        
    }
}



// for(let i = 0; i <= 10; i++){
//     if(i == 5){
//         console.log(`5 Detected`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }

for(let i = 0; i <= 10; i++){
    if(i == 5){
        console.log(`5 Detected`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}