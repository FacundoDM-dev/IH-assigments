const saludo = setTimeout(() => {
  console.log("¡Hello World!");
}, 3000);

/////////////////////////////////

const saludoSetInterval = setInterval(() => {
  console.log("Hello, every 3 seconds");
}, 3000);

setTimeout(() => {
  clearTimeout(saludoSetInterval);
}, 10000);

/////////////////////////////////

let counter = 10;

const counterInterval = setInterval(() => {
  if (isNaN(counter)) {
    clearInterval(counterInterval);
    return console.log("Not a number");
  } else if (counter > 0) {
    console.log(counter);
  } else {
    clearInterval(counterInterval)
    console.log("¡Time’s up!");
  }
  counter--;
}, 1000);

/////////////////////////////////


 let duration = 10
function countdown(duration) {
    if (isNaN(duration)) {
      return console.log(
        "Error: Not a number. Invalid input, please provide a numeric value."
      );
    }
   
    if (duration < 1) {
      return console.log("Error: Please provide a number greater than zero.");
    }
   
    let timer = duration;
   
    const intervalId = setInterval(() => {
      console.log(timer);
      timer--;
   
      if (timer === 0) {
        clearInterval(intervalId);
        console.log("Time's up!");
      }
    }, 1000);
  }

  console.log(countdown(duration));

