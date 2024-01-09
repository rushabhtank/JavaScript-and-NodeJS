/** @format */

"use Strict";

const name = "vento";

const makeError = () => {
  try {
    const car = "Vento";
    car = "polo";
    console.log(car , car2)
  } catch (error) {
    console.warn(error);
  }

  finally{
    console.log("Finally block executed......")
  }
};

console.log (makeError());

