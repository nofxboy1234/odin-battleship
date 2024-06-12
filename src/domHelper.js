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
    div.classList.add('cell');
    div.textContent = index;
    container.appendChild(div);
  }
}

export { renderGameboard, renderShips };
