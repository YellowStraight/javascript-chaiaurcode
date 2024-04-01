

let newName = new String("Yash Garg")
// let updatedName = newName
// updatedName = "lorem ipsum"
// console.log(updatedName);
// console.log(newName);
newName = newName.toUpperCase()
// console.log(newName); 
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// above way of writing strings is called string interpolation or template literals
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// in substring method end number is excluded also subtring method doesn't take negative values.
// console.log(newString);

const anotherString = gameName.slice(4,-1)
// console.log(anotherString)

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

console.log(gameName.split('-'));