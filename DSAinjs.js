/** @format */

let array = [5, 24, 6, 234, 65, 76, 86, 12, 0, 2, 32, 1];

// console.log(array.sort());

function arrayort(array) {
  for (let i = 0; i < array.length; i++) {
    let small = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[small] > array[j]) {
        small = j;
      }
    }
    let temp = array[small];
    array[small] = array[i];
    array[i] = temp;
  }
  return array;
}

arrayort(array);
console.log(array);
