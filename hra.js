import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';

const crossElm = `
<svg width="25" height="25" viewBox="0 -3 5 20" overflow="visible" stroke="white" stroke-width="2">
  <line 
    x2="15"
    y2="15"
  />
  <line
    x1="15"
    y2="15"
  />
  </svg>`;

const circleElm = `
<svg width="27" height="27">
  <circle
    cx="17"
    cy="17"
    r="7"
    stroke="white"
    stroke-width="2"
    fill="transparent"
  />
  </svg>`;

const game = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    event.target.disabled = true;
    document.querySelector('.changeIcon').innerHTML = crossElm;
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    event.target.disabled = true;
    document.querySelector('.changeIcon').innerHTML = circleElm;
  }

  const allButtons = document.querySelectorAll('.buttonPlay');
  let fieldGame = [];

  allButtons.forEach((button) => {
    if (button.classList.contains('board__field--circle')) {
      fieldGame.push('o');
    } else if (button.classList.contains('board__field--cross')) {
      fieldGame.push('x');
    } else {
      fieldGame.push('_');
    }
  });

  let winner = findWinner(fieldGame);
  if (winner === 'o' || winner === 'x') {
    const timeLate = () => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);

      location.reload();
    };
    setTimeout(timeLate, 100);
  }
};

const allButtons = document.querySelectorAll('.buttonPlay');
allButtons.forEach((gameField) => {
  gameField.addEventListener('click', game);
});
