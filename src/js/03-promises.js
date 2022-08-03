import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formField = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
let position = 1;

formField.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(evt) {
  evt.preventDefault();
  let delay = Number(delayInput.value);

  for (let i = 0; i < amountInput.value; i += 1) {
    createPromise(position, delay);
    position += 1;
    delay += Number(stepInput.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise(() => {
    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
