let currentPlayer = 'circle';

const playerCircle = `
<svg width="35" height="35">
    <circle/>
</svg>`;

const playerCross = `
<svg width="24" height="24">
    <cross/> 
</svg>`;

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

document.querySelector('button:nth-child(1)').addEventListener('click', game);
document.querySelector('button:nth-child(2)').addEventListener('click', game);
document.querySelector('button:nth-child(3)').addEventListener('click', game);
document.querySelector('button:nth-child(4)').addEventListener('click', game);
document.querySelector('button:nth-child(5)').addEventListener('click', game);
document.querySelector('button:nth-child(6)').addEventListener('click', game);
document.querySelector('button:nth-child(7)').addEventListener('click', game);
document.querySelector('button:nth-child(8)').addEventListener('click', game);
document.querySelector('button:nth-child(9)').addEventListener('click', game);
document.querySelector('button:nth-child(10)').addEventListener('click', game);
