function zipArrays(arrayA, arrayB) {
  const c = arrayA.map(function (e, i) {
    return [e, arrayB[i]];
  });

  return c;
}

function createGameboard(targetID) {
  const container = document.getElementById(targetID);
  const gameboardDiv = document.createElement('div');
  gameboardDiv.classList.add('gameboard');
  container.appendChild(gameboardDiv);

  return gameboardDiv;
}

function createXArray() {
  const xArray = [];

  for (let value = 0; value < 10; value++) {
    for (let index = 0; index < 10; index++) {
      xArray.push(index);
    }
  }
  return xArray;
}

function createYArray() {
  const yArray = [];

  for (let value = 0; value < 10; value++) {
    for (let index = 0; index < 10; index++) {
      yArray.push(value);
    }
  }
  return yArray;
}

function createCells(xyArray, gameboardDiv, ships) {
  for (let index = 0; index < 100; index++) {
    const div = document.createElement('div');
    div.classList.add('cell');

    const x = xyArray[index][0];
    const y = xyArray[index][1];
    div.textContent = `${x}, ${y}`;

    // Check if there's a ship at x, y and render square black if so
    const shipOnCell = ships.find((ship) => {
      return ship.x === x && ship.y === y;
    });

    if (shipOnCell) {
      div.classList.add('cell-filled');
    }

    gameboardDiv.appendChild(div);
  }
}

function createLabelsTop() {
  const cellLabelsTop = document.getElementById('cell-labels-top');
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  for (let index = 0; index < labels.length; index++) {
    const div = document.createElement('div');
    div.classList.add('cell-label', 'bottom-border');
    div.textContent = labels[index];
    cellLabelsTop.appendChild(div);
  }
}

function createLabelsLeft() {
  const cellLabelsLeft = document.getElementById('cell-labels-left');
  const labels = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  for (let index = 0; index < labels.length; index++) {
    const div = document.createElement('div');

    if (index === 0) {
      div.classList.add('cell-label');
    } else {
      div.classList.add('cell-label', 'right-border');
    }

    div.textContent = labels[index];
    cellLabelsLeft.appendChild(div);
  }
}

function renderGameboard(targetID, gameboard) {
  createLabelsTop();
  createLabelsLeft();

  const gameboardDiv = createGameboard(targetID);

  const xArray = createXArray();
  const yArray = createYArray();
  const xyArray = zipArrays(xArray, yArray);

  const ships = gameboard.getShips();
  createCells(xyArray, gameboardDiv, ships);
}

export { renderGameboard };
