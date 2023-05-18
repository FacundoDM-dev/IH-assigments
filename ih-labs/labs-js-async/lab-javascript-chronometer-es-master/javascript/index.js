const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.removeAttribute('class', 'btn start');
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.removeAttribute('class', 'btn reset');
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.removeAttribute('class', 'btn stop');
  btnLeftElement.setAttribute('class', 'btn start');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.removeAttribute('class', 'btn split');
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //

  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(() => {
      let seconds = chronometer.getSeconds()
      let twoDigitSec = chronometer.computeTwoDigitNumber(seconds)
      secDecElement.innerText = twoDigitSec[0]
      secUniElement.innerText = twoDigitSec[1]
      let minutes = chronometer.getMinutes()
      let twoDigitMin = chronometer.computeTwoDigitNumber(minutes)
      minDecElement.innerText = twoDigitMin[0]
      minUniElement.innerText = twoDigitMin[1]
    });
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {});

