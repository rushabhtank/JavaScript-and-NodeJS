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
console.log(typeof sumFunction);

console.log(minus(10, 5), "is the subtraction...");

fun();

