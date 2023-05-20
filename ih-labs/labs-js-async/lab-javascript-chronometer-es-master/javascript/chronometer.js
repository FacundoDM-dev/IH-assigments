class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    const chronometer = this;
    this.intervalId = setInterval(() => {
      chronometer.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
    // console.log(this.currentTime);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  // getMilliseconds() {
  //   return this.currentTime * 60 * 1000;
  // }

  

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return '' + value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    // console.log(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
    // console.log(this.currentTime);
  }

  split() {
    let minutes = chronometer.getMinutes();
    let seconds = chronometer.getSeconds();
    return `${this.computeTwoDigitNumber(
      minutes
    )}:${this.computeTwoDigitNumber(seconds)}`;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
