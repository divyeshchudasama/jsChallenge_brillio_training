// Create a function which calculates the time to read a text in seconds, if it takes over 60 seconds to read a passage return the time to minutes

let seconds = 0;
let convertIntoMinitus = (sec) => {
  if (sec >= 0 && sec < 60) {
    console.log(`Time: ${sec} sec`);
  } else if (sec > 60) {
    let mins = Math.floor(sec / 60);
    let seconds = sec - mins * 60;
    if (seconds == 0) {
      console.log(`Time: ${mins} Minutes`);
    } else {
      console.log(`Time: ${mins} Minutes ${seconds} seconds`);
    }
  } else {
    console.log("Please enter valid seconds value.!");
  }
};
convertIntoMinitus(130); // enter valid seconds value
