const marvel_heroes = ["spiderman","ironman","thor"]
const dc_heroes  = ["superman","batman","flash"]

console.log(marvel_heroes.concat(dc_heroes));
// above concat function returns the concatenated array and stores it into a new array.

marvel_heroes.push("yash")

console.log(marvel_heroes);
// push method makes changes in the same array not makes a new array

// another way to convert to concat multiple arrays is
const anotherArray = [...dc_heroes,...marvel_heroes]
console.log(anotherArray);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// flat converts nested arrays into a single array and takes the argument of depth.
console.log(real_another_array);



console.log(Array.isArray("Yash"))
// returns a boolean value
console.log(Array.from("Yash"))
// above method converts Yash into a array with 'Y'.. as elements
console.log(Array.from({name: "hitesh"})) // interesting
// this returns an empty array because not specified which to convert key or value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// above method also converts the three variables into array
