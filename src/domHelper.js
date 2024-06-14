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

function createCells(xyArray, gameboardDiv) {
  for (let index = 0; index < 100; index++) {
    const div = document.createElement('div');
    div.classList.add('cell');

    const x = xyArray[index][0];
    const y = xyArray[index][1];
    div.textContent = `${x}, ${y}`;

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

function renderGameboard(targetID) {
  createLabelsTop();
  const gameboardDiv = createGameboard(targetID);

  const xArray = createXArray();
  const yArray = createYArray();
  const xyArray = zipArrays(xArray, yArray);

  createCells(xyArray, gameboardDiv);
}

export { renderGameboard };
