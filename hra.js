let currentPlayer = 'circle';

const game = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    event.target.disabled = true;
    document
      .querySelector('.game__menuType')
      .classList.remove('board__field--circle');
    document
      .querySelector('.game__menuType')
      .classList.add('board__field--cross');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    event.target.disabled = true;
    document
      .querySelector('.game__menuType')
      .classList.remove('board__field--cross');
    document
      .querySelector('.game__menuType')
      .classList.add('board__field--circle');
  }
};

const allButtons = document.querySelectorAll('.game__field');
allButtons.forEach((gameField) => {
  gameField.addEventListener('click', game);
});
