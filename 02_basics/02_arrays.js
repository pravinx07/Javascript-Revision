const marvelHeros = ["thor","IronMan","SpiderMan"];
const dc_heros = ["Superman","flash","batman"];

// marvelHeros.push(dc_heros)


// Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.
const allHeros = marvelHeros.concat(dc_heros)
// console.log(allHeros);

// console.log(marvelHeros);

// spread operator
const allNewHeros = [...marvelHeros, ...dc_heros]
// console.log(allHeros);


const anotherArray = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_anotherArray = anotherArray.flat(Infinity)

// console.log(real_anotherArray);
// console.log(anotherArray);

// console.log(Array.isArray("Pravin"));
// console.log(Array.from("Pravin"));
// console.log(Array.from({name:"Pravin"})); /// interesting question why we get empty array


let score1 = 100
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3));
