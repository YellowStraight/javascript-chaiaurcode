// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// result of above comes in miliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); this will convert the time into seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);  /* since indexing of month starts from 0 therefore +1 is used */
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate = newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate);