let string = "Yash"
let number = 44
console.log(String(undefined));
// console.log(typeof Number(string));
// string when converted to number will give type as number but inside it could be NaN (Not a number)
// null when converted to a number gives value 0 which could be incorrect in some use cases
// undefined when converted to a number gives NaN
// undefined when converted to a String gives undefined

let bool = true
// console.log(Number(bool));

// boolean when converted to number : true => 1 & false => 0
// similarly

// console.log(typeof String(number));

// using classes of datatypes conversion can happen

console.log(1+2+"34");
console.log("1"+3+5);
// In the above 2 examples :first one since first argument was a number therefore it will treat all as numbers and mathematically add them unless a string comes.
// In the second example since first one was a string now every other argument will be treated as a string only.