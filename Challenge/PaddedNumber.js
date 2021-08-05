// Padded Number

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
