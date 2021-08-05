// Camel-to-Title

let str1 = "camelToTitle";
let getCamelToTitle = (str) => {
  
  const makeSpace = str1.replace(/([A-Z])/g, " $1");
  let getOne = makeSpace.charAt(0).toUpperCase();
  let newStr = getOne + makeSpace.slice(1);
  console.log(newStr);
};
getCamelToTitle(str1); // Camel To Title