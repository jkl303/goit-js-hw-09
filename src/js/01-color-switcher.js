const refs = {
    body : document.querySelector('body'),
    startBtn : document.querySelector('[data-start]'),
    stopBtn : document.querySelector('[data-stop]')
}
function changeBodyColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const intId = setInterval(changeBodyColor, 1000);
refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', () => {
    intId;
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
});
refs.stopBtn.addEventListener('click', () => {
    clearInterval(intId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
});