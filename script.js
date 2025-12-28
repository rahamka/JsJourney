let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let milliSecondEL = document.getElementById("milliSeconds");

let milliSecondCounter = 0;
let seconds = 0;

let milliSecond = setInterval(() => {
  milliSecondCounter++;
  milliSecondEL.innerText = milliSecondCounter;
  if (milliSecondCounter == 1000) {
    seconds++;
    secondsEl.innerText = seconds;
    if (seconds <= 9) {
      secondsEl.innerText = `0${seconds}:`;
    } else {
      secondsEl.innerText = seconds;
    }
    if (seconds <= 60) {
      seconds = 0;
      minutesEl.innerText = `${minutes + 1}:`;
    }
    milliSecondCounter = 0;
  }
}, 1);

// strings to Number
let hours = parseInt(hoursEl.innerText);
let minutes = parseInt(minutesEl.innerText);

if (hours <= 9) {
  hoursEl.innerText = `0${hoursEl.innerText}`;
} else if (hours > 12) {
  hours = 1;
  hoursEl.innerText = `0${hours}`;
}
