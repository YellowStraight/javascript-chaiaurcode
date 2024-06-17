//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// typeof of function displays function but actually it is object function
// console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// concept of heap and stack
 let s1 = "lorem ipsum"
//  above variable is stored in stack memory and therefore when changed a copy of it is created and changes are made in that not the original one.
let s2 = s1
s2 = "hey"
// now s2 is the one changed not s1 since copy of s1 was assigned in s2

let user1 = {
    email:"yash@google.com",
    id:345
}
// now user1 variable is stored in stack only but it is referencing to an object created in heap memory
let user2 =user1
user2.email="garg@google.com"
console.log(user2.email);
console.log(user1.email);
// here user2 was also pointing to the same instance as user1 therefore changes made to the instance through user2 is reflected in user1 also