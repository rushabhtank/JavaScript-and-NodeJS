/** @format */

let sumFunction = (a, b) => {
  return a + b;
};

const minus = (num1, num2) => {
  return num1 - num2;
};

const multi = (num1, num2) => {
  return num1 * num2;
};

const div = (n1, n2) => {
  return n1 / n2;
};

const fun = () => {
  setTimeout(function time() {
    console.log("Node JS is easy to learn...");
  }, 1000);
};

console.log(sumFunction(23, 4), "is the total...");

console.log(minus(10, 5), "is the subtraction...");

// fun();

console.log(" ");
const family = ["Rajesh", "Urmila", "Dhruv", "Rushabh"];

family.forEach((val) => {
  console.log(val);
});

const num = 2;

const mulyitable = (num) =>{
  for(let i =1 ; i<=10; i++){
    console.log(n = i * num );
  }
};

mulyitable(num);

const list = [1,2,3,4,5,6]

list.slice(0,2);
list.splice(2,4);

console.log(list);