/** @format */

setTimeout(function () {
  console.log("This is set time out test...");
}, 1000);

console.log(__filename);

// setInterval(() => {
//     // let n = 0;
//     // while(n < 5){
//     console.log("Hello Rush")
//     // n++;
//     // }
// }, 1000);

// Modules in Node JS

let name = "rushabh";
let age = 25;

const myInfo = (name, age) => {
  console.log("Your name is", name, "and age is", age);
};

myInfo(name, age);
