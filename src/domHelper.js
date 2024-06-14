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

function createCellLabelsTop() {
  const containers = document.getElementsByClassName(
    'cell-labels-top-container',
  );
  const cellLabelsTopDiv = document.createElement('div');
  cellLabelsTopDiv.classList.add('cell-labels-top');
  [...containers].forEach((container) => {
    container.appendChild(cellLabelsTopDiv);
  });
}

function createCellLabelsLeft() {
  const containers = document.getElementsByClassName(
    'cell-labels-left-container',
  );
  const cellLabelsLeftDiv = document.createElement('div');
  cellLabelsLeftDiv.classList.add('cell-labels-left');
  [...containers].forEach((container) => {
    container.appendChild(cellLabelsLeftDiv);
  });
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

    const shipOnCell = ships.find((ship) => {
      const cellWithinShipHorizontalLengthAtY =
        x >= ship.x && x < ship.x + ship.length && y === ship.y;

      return cellWithinShipHorizontalLengthAtY;
    });

    if (shipOnCell) {
      div.classList.add('cell-filled');
    }

    gameboardDiv.appendChild(div);
  }
}

function createLabelsTopCells() {
  const cellLabelElementsTop =
    document.getElementsByClassName('cell-labels-top');
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  [...cellLabelElementsTop].forEach((element) => {
    for (let index = 0; index < labels.length; index++) {
      const div = document.createElement('div');
      div.classList.add('cell-label', 'bottom-border');
      div.textContent = labels[index];
      element.appendChild(div);
    }
  });
}

function createLabelsLeftCells() {
  const cellLabelElementsLeft =
    document.getElementsByClassName('cell-labels-left');
  const labels = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  [...cellLabelElementsLeft].forEach((element) => {
    for (let index = 0; index < labels.length; index++) {
      const div = document.createElement('div');

      if (index === 0) {
        div.classList.add('cell-label');
      } else {
        div.classList.add('cell-label', 'right-border');
      }

      div.textContent = labels[index];
      element.appendChild(div);
    }
  });
}

function renderGameboard(targetID, gameboard) {
  const gameboardDiv = createGameboard(targetID);

  const xArray = createXArray();
  const yArray = createYArray();
  const xyArray = zipArrays(xArray, yArray);

  const ships = gameboard.getShips();
  createCells(xyArray, gameboardDiv, ships);
}

export {
  renderGameboard,
  createLabelsLeftCells,
  createLabelsTopCells,
  createCellLabelsTop,
  createCellLabelsLeft,
};
