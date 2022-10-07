import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    input: document.querySelector('input[type="text"]'),
    startBtn : document.querySelector('[data-start]')
}
let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
  },
};
flatpickr(refs.input, options);
const futureDate = new Date(selectedDate);
console.log(futureDate);