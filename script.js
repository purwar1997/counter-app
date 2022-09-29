const span = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

let score = Number(span.innerText);

const updateScore = event => {
  const btnClass = event.target.classList;

  if (btnClass.contains('decrease')) {
    score = score - 1;
  } else if (btnClass.contains('reset')) {
    score = 0;
  } else {
    score = score + 1;
  }

  if (score < 0) {
    span.style.color = '#D82E2F';
  } else if (score === 0) {
    span.style.color = '#333';
  } else {
    span.style.color = '#008000';
  }

  span.innerText = score;
};

buttons.forEach(btn => btn.addEventListener('click', updateScore));
