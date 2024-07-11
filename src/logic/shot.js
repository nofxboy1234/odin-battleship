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
    const result = this.gameboardElement.owner === this.clicker;

    if (result) {
      console.log('PlayerClickingOwnGameboard');
    }

    return result;
  }

  #isExistingShot() {
    const result = this.gameboardElement.controller.isExistingShot(
      this.cellDOM.x,
      this.cellDOM.y,
    );

    if (result) {
      console.log('isExistingShot');
    }

    return result;
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
      console.log('isAdjacentCell');
    }

    return isAdjacentCell;
  }
}

export default Shot;
