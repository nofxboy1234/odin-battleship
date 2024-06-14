function zipArrays(a, b) {
  const c = a.map(function (e, i) {
    return [e, b[i]];
  });

  return c;
}

function renderGameboard(targetID) {
  const container = document.getElementById(targetID);

  const gameboardDiv = document.createElement('div');
  gameboardDiv.classList.add('gameboard');
  container.appendChild(gameboardDiv);

  const xArray = [];
  for (let value = 0; value < 10; value++) {
    for (let index = 0; index < 10; index++) {
      xArray.push(index);
    }
  }

  const yArray = [];

  for (let value = 0; value < 10; value++) {
    for (let index = 0; index < 10; index++) {
      yArray.push(value);
    }
  }

  const xyArray = zipArrays(xArray, yArray);

  for (let index = 0; index < 100; index++) {
    const div = document.createElement('div');

    div.classList.add('cell');

    const x = xyArray[index][0];
    const y = xyArray[index][1];
    div.textContent = `${x}, ${y}`;

    gameboardDiv.appendChild(div);
  }
}

export { renderGameboard };
