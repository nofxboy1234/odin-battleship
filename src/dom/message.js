let element;

function setText(text) {
  element.textContent = text;
}

const message = {
  setElement(div) {
    element = div;
  },
  setEnemyTurn() {
    setText("Enemy's turn!");
  },
  setHumanTurn() {
    setText('Your turn!');
  },
  setEnemyWon() {
    setText('Enemy won!');
  },
  setHumanWon() {
    setText('You won!');
  },
  setInstruction() {
    setText(
      "Randomize your ships until you're happy with their positions, then press Play!",
    );
  },
  setLoadingShips() {
    setText('Loading random ships...');
  },
  setCellHit(cell, player) {
    setText(`${player.name} hit a ship at ${cell.x}, ${cell.y}. Attack again.`);
  },
  setCellMiss(cell, player) {
    setText(`${player.name} missed at ${cell.x}, ${cell.y}. End of turn.`);
  },
  setShipSunk(cell, player) {
    setText(
      `${player.name} sunk a ship after hitting ${cell.x}, ${cell.y}. Attack again.`,
    );
  },

  text() {
    return element.textContent;
  },
};

export default message;
