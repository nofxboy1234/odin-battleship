class Shot {
  constructor({
    gameboard: gameboardElement,
    pointerType,
    cell: cellDOM,
    humanPlayer: human,
    enemyPlayer: enemy,
  }) {
    this.gameboardElement = gameboardElement;
    this.pointerType = pointerType;
    this.cellDOM = cellDOM;
    this.human = human;
    this.enemy = enemy;

    if (this.pointerType === 'mouse') {
      this.clicker = this.human;
    } else if (this.pointerType === '') {
      this.clicker = this.enemy;
    }
  }

  isValid() {
    return (
      !this.#isPlayerClickingOwnGameboard() &&
      !this.#isExistingShot() &&
      !this.#isAdjacentCell()
    );
  }

  #isPlayerClickingOwnGameboard() {
    return this.gameboardElement.owner === this.clicker;
  }

  #isExistingShot() {
    return this.gameboardElement.controller.isExistingShot(
      this.cellDOM.x,
      this.cellDOM.y,
    );
  }

  #isAdjacentCell() {
    const adjacentCells =
      this.gameboardElement.controller.getAllSunkShipsAdjacentCells();
    const cell = this.gameboardElement.controller.getCellAt(
      this.cellDOM.x,
      this.cellDOM.y,
    );
    const isAdjacentCell = adjacentCells.includes(cell);

    if (isAdjacentCell) {
      return false;
    }
  }
}

export default Shot;
