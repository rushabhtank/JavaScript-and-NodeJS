/** @format */

const obj = {
  Name: "Rushabh",
  Age: 25,
  Contact: 9657578698,
  College: "MIT-WPU",
};

for (let iterator in obj) {
  console.log(iterator, ":", obj[iterator]);
}

// console.log(obj);
function addnumber(a, b) {
  return a + b;
}

result = addnumber(4, 6);

console.log("Answer is :", result);

const object1 = {
  name: "Dhruv",
  age: 21,
  class: "BCS",
  subject: {
    programming: "java",
    theory: "OS",
    sport: "vollyball",
  },
};
console.log(" ");

console.log(object1.subject.sport);
