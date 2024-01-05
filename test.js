/** @format */

// console.log("Hii, Welcome to JavaScript.");
// alert("Hello.....")

name = "Rush";

var fn = 112;
var sn = 2;
var ans = fn + sn;
console.log(ans);

console.log("Your Name is : " + name);

let student = {
  Full_name: "Dhruv",
  age: 22,
  class: "BSC",
  college: "KHS",
  contact: 9637154429,
};
console.log("");
for (let iterator in student) {
  console.log(iterator, ":", student[iterator]);
}

// console.log(student);

// console.log(typeof student)
console.log("");

// let age = prompt("Enter your age")
let age = 10;

if (age > 18) {
  console.log("You can vote... ");
} else {
  console.log("You can not vote... ");
}

let num = 0;

// for (let i = 0; i <= 5; i++) {
//     console.log(num = num + i);
// }

let str = "Rushabh";

for (let j of str) {
  console.log("J = :", j);
}
console.log("Length of String is :", str.length);

let nums = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let heros = ["ironman", "hulk", "captain"];

console.log(heros);

let marks = [62, 53, 73, 68, 94];
let sum = 0;

for (val of marks) {
  console.log(val);
  sum = sum + val;
}

console.log("Total mark is :", sum);
let average = sum / marks.length;

console.log("Average mark is :", average);

function countVowals(strr) {
  let count = 0;

  for (let i of strr) {
    if (
      i === "A" ||
      i === "E" ||
      i === "I" ||
      i === "O" ||
      i === "U" ||
      i === "a" ||
      i === "e" ||
      i === "i" ||
      i === "o" ||
      i === "u"
    )
      count++;
  }

  console.log(count);
}

let strr = "rushabh";

countVowals(strr);

let no = [23, 54, 76, 86, 24];

no.forEach((n) => {
  console.log(n);
});

let newarr = no.filter((val) => {
  return val % 2 === 0;
});

console.log(newarr);

let s = "Rushabh tank";

for (let x of s) {
  console.log(x);
}

console.log(" ");

let otpdeg = 5;

for (let k = 0; k < otpdeg; k++) {
  console.log(Math.floor(Math.random() * 10));
}

let na = "rush";
console.log(typeof na);
