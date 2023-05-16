const cityWeather = {
  Madrid: 20,
  Barcelona: 22,
  Paris: 18,
  Berlin: 15,
};

const getWeather = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!cityWeather[city]) {
        reject("Ciudad no disponible.");
      } else {
        resolve(`${city} -- ${cityWeather[city]} ºC`);
      }
    }, 500);
  });
};

getWeather("Roma")
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

getWeather("Barcelona")
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

///////////////////////////////

const delayedLog = (time, message, delay) => {
  return new Promise((resolve, reject) => {
    if (time < 0) {
      reject("menor que 0, entrada no valida");
    } else {
      setTimeout(() => {
        resolve(
          console.log(`${time} segundos despues, este mensaje ${message}`)
        );
      }, delay);
    }
  });
};

delayedLog(2, "hola", 1000)
  .then(() => delayedLog(3, "world", 1000))
  .then(() => delayedLog(4, "Bye", 1000))
  .then(() => delayedLog(5, "World", 1000))
  .catch(() => console.log(error));

///////////////////////////////

const sumTwoNumbers = (num1, num2, delay) => {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject(console.log("input invalido"));
    } else {
      setTimeout(() => {
        let sum = num1 + num2;
        resolve(`${sum}`);
      }, delay);
    }
  });
};

sumTwoNumbers(10, 2, 10000).then((sum) => console.log(sum));
