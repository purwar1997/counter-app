const span = document.getElementById('counter');
const counter = Number(span.innerText);

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  const counter = Number(span.innerText);
  span.innerText = counter + 1;
});

decreaseBtn.addEventListener('click', () => {
  const counter = Number(span.innerText);
  span.innerText = counter - 1;
});

resetBtn.addEventListener('click', () => {
  span.innerText = 0;
});
