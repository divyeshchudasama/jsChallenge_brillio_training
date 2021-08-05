// Convert a given sentence from camel case to title case. Create a function which evaluates a given sentence argument in camel case and converts it to title case. 

let str1 = "camelToTitle";
let getCamelToTitle = (str) => {
  
  const makeSpace = str1.replace(/([A-Z])/g, " $1");
  let getOne = makeSpace.charAt(0).toUpperCase();
  let newStr = getOne + makeSpace.slice(1);
  console.log(newStr);
};
getCamelToTitle(str1); // Camel To Title