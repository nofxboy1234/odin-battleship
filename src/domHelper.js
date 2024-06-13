function renderShips(ships, targetID) {
  ships.forEach((ship) => {
    console.log(ship);
  });
}

function renderGameboard(targetID) {
  const container = document.getElementById(targetID);
  const columns = 'ABCDEFGHIJ';
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const gameboardDiv = document.createElement('div');
  gameboardDiv.classList.add('gameboard');
  container.appendChild(gameboardDiv);

  for (let index = 0; index < 121; index++) {
    const div = document.createElement('div');

    if (index === 0) {
      div.classList.add('cell-label');
    } else if (index >= 1 && index <= 10) {
      div.classList.add('cell-label', 'bottom-border');
      div.textContent = columns[index - 1];
    } else if (index >= 11 && index % 11 === 0) {
      div.classList.add('cell-label', 'right-border');
      div.textContent = rows.at((index % 10) - 1);
    } else {
      div.classList.add('cell');
    }

    gameboardDiv.appendChild(div);
  }
}

export { renderGameboard, renderShips };
