const span = document.querySelector('#value');
let score = Number(span.textContent);

const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

decreaseBtn.addEventListener('click', () => {
  score = score - 1;
  span.textContent = score;
});

resetBtn.addEventListener('click', () => {
  score = 0;
  span.textContent = score;
});

increaseBtn.addEventListener('click', () => {
  score = score + 1;
  span.textContent = score;
});
