const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// above statement prints an empty object since there's no global object but when the same statement is run on browser then window object is
// referred since it is a global object

let obj1 = {
    test: function(){ /* this is how function are declared in object */
    console.log(this) 
    }
}
console.log(obj1.funciton());
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
    // console.log(this.username) -- Output is undefined for this as we cannot use this inside funciton to access variables.
}


// chai()
// Arrow function introduced with ec6 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//  Below way of returning the output is called an implicit return when we have only a single return statement.
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


// const addTwo = (num1, num2) => {username: "hitesh"} -- Here we cannot return an object like this object needs to be wrapped in curly braces.
// 
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()