function renderShips(ships, targetID) {
  ships.forEach((ship) => {
    console.log(ship);
  });
}

function isCellTopLeftBlank(index) {
  return index === 0;
}

function isCellLabelTop(index) {
  return index >= 1 && index <= 10;
}

function isCellLabelLeft(index) {
  return index >= 11 && index % 11 === 0;
}

function renderGameboardCellNumbers(targetID) {
  const container = document.getElementById(targetID);
  const gameboardDiv = document.createElement('div');
  gameboardDiv.classList.add('gameboard');
  container.appendChild(gameboardDiv);

  for (let index = 0; index < 121; index++) {
    const div = document.createElement('div');
    div.textContent = index;
    div.classList.add('cell');
    gameboardDiv.appendChild(div);
  }
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

    if (isCellTopLeftBlank(index)) {
      div.classList.add('cell-label');
    } else if (isCellLabelTop(index)) {
      div.classList.add('cell-label', 'bottom-border');
      div.textContent = columns[index - 1];
    } else if (isCellLabelLeft(index)) {
      div.classList.add('cell-label', 'right-border');
      div.textContent = rows.at((index % 10) - 1);
    } else {
      div.classList.add('cell');
    }

    gameboardDiv.appendChild(div);
  }
}

export { renderGameboard, renderShips, renderGameboardCellNumbers };
