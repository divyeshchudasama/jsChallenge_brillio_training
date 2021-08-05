// Passage Counter

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
