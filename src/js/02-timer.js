import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds : document.querySelector('[data-seconds]')
}
let date;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
  },
};
const futureDate = flatpickr(refs.input, options);
refs.startBtn.disabled = true;
refs.input.addEventListener('input', onInput);
function onInput() {date = new Date();
  if (futureDate.selectedDates[0].getTime() <= date.getTime()) {
    Notify.failure('Please choose a date in the future');
    refs.startBtn.disabled = true;
  } else {
    refs.startBtn.disabled = false;
  }
}
let intId;
refs.startBtn.addEventListener('click', () => intId = setInterval(timeUpdate, 1000));
function timeUpdate() {
  date = new Date();
  const distance = futureDate.selectedDates[0].getTime() - date.getTime();
  const { days, hours, minutes, seconds } = convertMs(distance);
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes); 
  refs.seconds.textContent = addLeadingZero(seconds);
  if (distance < 1000) {
    clearInterval(intId)
  }
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}