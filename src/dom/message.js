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
  setCellHit(cell, player, gameboardElement) {
    setText(
      `${player.name} hit a ship at ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`,
    );
  },
  setCellMiss(cell, player, gameboardElement) {
    setText(
      `${player.name} missed at ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. End of turn.`,
    );
  },
  setShipSunk(cell, player, gameboardElement) {
    setText(
      `${player.name} sunk a ship after hitting ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`,
    );
  },
  setExistingShot(cell, player, gameboardElement) {
    setText(
      `Invalid shot: ${player.name} repeated a shot at ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`,
    );
  },
  setAdjacentCell(cell, player, gameboardElement) {
    setText(
      `Invalid shot: ${player.name} shot at adjacent cell: ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`,
    );
  },

  text() {
    return element.textContent;
  },
};

export default message;
