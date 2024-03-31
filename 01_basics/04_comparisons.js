// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// above are simple comparisons 

// console.log("2" > 1);
// console.log("02" > 1);

// above comparisons are of different data types which could cause confusions

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// in come cases while comparing null gets converted to 0 and somewhere NaN so it should be avoided
// and <,>,<=,>= works differently then ==
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check, it checks the datatype also for example below comparison will return false had it been == true would have been returned

console.log("2" === 2);