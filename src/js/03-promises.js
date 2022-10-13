import { Notify } from 'notiflix/build/notiflix-notify-aio';
refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay)
  });
}
refs.form.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  for (let i = 1, dlay = Number(refs.delay.value); i <= refs.amount.value; i += 1, dlay += Number(refs.step.value)) {
    createPromise(i, dlay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}