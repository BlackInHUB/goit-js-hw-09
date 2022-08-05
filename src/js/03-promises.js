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
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    position += 1;
    delay += Number(stepInput.value);
  }
  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
