function zipArrays(arrayA, arrayB) {
  return arrayA.map((element, index) => [element, arrayB[index]]);
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
  [...containers].forEach((parent) => {
    const div = document.createElement('div');
    div.classList.add('cell-labels-top');
    parent.appendChild(div);
  });
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

function createCellLabelsLeft() {
  const containers = document.getElementsByClassName(
    'cell-labels-left-container',
  );
  [...containers].forEach((parent) => {
    const div = document.createElement('div');
    div.classList.add('cell-labels-left');
    parent.appendChild(div);
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

function renderHit(div) {
  div.classList.add('hit');
}

function renderMiss(div) {
  div.classList.add('miss');
}

function renderAsDisabled(element) {
  element.classList.add('disabled');
}

function createCells(xyArray, gameboardDiv, gameboard) {
  for (let index = 0; index < 100; index++) {
    const div = document.createElement('div');
    div.classList.add('cell');

    const x = xyArray[index][0];
    const y = xyArray[index][1];
    div.textContent = `${x}, ${y}`;

    if (gameboard.isShipOnCell(x, y)) {
      div.classList.add('cell-filled');
    }

    gameboardDiv.appendChild(div);
    div.addEventListener('click', () => {
      handleCellClick(gameboard, x, y, div);
    });
  }
}

function handleCellClick(gameboard, x, y, div) {
  if (gameboard.isDisabled()) {
    return;
  }

  gameboard.receiveAttack(x, y);

  if (gameboard.isShipOnCell(x, y)) {
    renderHit(div);
  } else {
    renderMiss(div);
    gameboard.disable();

    const container = document.getElementById('gameboard-container-computer');
    renderAsDisabled(container);
  }
}

function renderGameboard(targetID, gameboard) {
  const gameboardDiv = createGameboard(targetID);

  const xArray = createXArray();
  const yArray = createYArray();
  const xyArray = zipArrays(xArray, yArray);

  createCells(xyArray, gameboardDiv, gameboard);

  const container = document.getElementById('gameboard-container-human');
  renderAsDisabled(container);
}

function clearChild(element) {
  const child = element.firstChild;
  if (child) {
    element.removeChild(child);
  }
}

function clearGameboards() {
  const topLabelElements = document.getElementsByClassName(
    'cell-labels-top-container',
  );

  [...topLabelElements].forEach((element) => {
    clearChild(element);
  });

  const leftLabelElements = document.getElementsByClassName(
    'cell-labels-left-container',
  );

  [...leftLabelElements].forEach((element) => {
    clearChild(element);
  });

  const humanGameboard = document.getElementById('human-gameboard-container');
  clearChild(humanGameboard);

  const computerGameboard = document.getElementById(
    'computer-gameboard-container',
  );
  clearChild(computerGameboard);
}

export {
  renderGameboard,
  createLabelsLeftCells,
  createLabelsTopCells,
  createCellLabelsTop,
  createCellLabelsLeft,
  clearChild,
  clearGameboards,
};
