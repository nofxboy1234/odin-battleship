function renderShips(gameboard, targetID) {
  const container = document.getElementById(targetID);

  gameboard.getShips().forEach((ship) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.textContent = [ship.x, ship.y, ship.length];
    container.appendChild(div);
  });
}

function renderGameboard(gameboard, targetID) {
  const container = document.getElementById(targetID);

  for (let index = 0; index < 121; index++) {
    const div = document.createElement('div');

    // div.textContent = index;

    const columns = 'ABCDEFGHIJ';
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (index >= 1 && index <= 10) {
      div.textContent = columns[index - 1];
      div.classList.add('cell-label');
    } else if (index >= 11 && index % 11 === 0) {
      div.textContent = rows.at((index % 10) - 1);
      div.classList.add('cell-label');
    } else {
      div.classList.add('cell');
    }

    container.appendChild(div);
  }
}

export { renderGameboard, renderShips };
