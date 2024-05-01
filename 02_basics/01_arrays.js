// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) : it adds a the values passed at the start of the array.
// myArr.shift(). : it removes the first element of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() /* it combines the values of the array and converts them to string data type */

console.log(myArr);
console.log( newArr); /* 0,1,2,3,4,5 is the output of the array 0, 1, 2, 3, 4, 5] */


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//  slice doesn't manipulate the original array and also ending index is not included
//  splice however manipulates the original array and ending index is included.