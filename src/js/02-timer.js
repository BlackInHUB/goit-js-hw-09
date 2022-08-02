import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timeInput = document.querySelector('#datetime-picker');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
let intervalID = null;
let deadline = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = Date.now();
    deadline = selectedDates[0].getTime();

    if (selectedDates[0].getTime() < dateNow) {
      Notify.failure('Please choose a date in the future');
      return;
    } else {
      startBtn.disabled = false;
    }

    startBtn.addEventListener('click', onStartBtnClick, {
      once: true,
    });
  },
};

function onStartBtnClick(time) {
  startBtn.disabled = true;
  timeInput.disabled = true;
  intervalID = setInterval(convertMs, 1000);
}

function addZeroBeforeNumber(value) {
  return String(value).padStart(2, '0');
}

function convertMs() {
  const timeNow = Date.now();
  const timeToDeadline = deadline - timeNow;
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addZeroBeforeNumber(Math.floor(timeToDeadline / day));
  // Remaining hours
  const hours = addZeroBeforeNumber(Math.floor((timeToDeadline % day) / hour));
  // Remaining minutes
  const minutes = addZeroBeforeNumber(
    Math.floor(((timeToDeadline % day) % hour) / minute)
  );
  // Remaining seconds
  const seconds = addZeroBeforeNumber(
    Math.floor((((timeToDeadline % day) % hour) % minute) / second)
  );

  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    clearInterval(intervalID);
    timeInput.disabled = false;
  }

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);
