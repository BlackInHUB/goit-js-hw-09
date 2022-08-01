const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const INTERVAL = 1000;
let intervalId = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

stopBtn.disabled = true;

startBtn.addEventListener('click', function () {
  intervalId = setInterval(setBgColor, INTERVAL);
  this.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', function () {
  clearInterval(intervalId);
  this.disabled = true;
  startBtn.disabled = false;
});
