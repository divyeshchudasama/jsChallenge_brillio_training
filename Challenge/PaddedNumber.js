// In this challenge, an array is provided and stored in a variable, create a function which evaluates the strings in the array by adding a preceding 0 to single numbers (6 => 06, 5 => 05). Double figures remain as is.

let arr1 = [1, 3, 34, 56, 2, 76, 8, 9, 564, 4];
let newArr = [];
let addPadding = (arr) => {
  for (let i of arr) {
    if (i.toString().length == 1) {
      newArr.push("0" + i);
    } else {
      newArr.push(i.toString());
    }
  }
  console.log(newArr);
};
addPadding(arr1);
