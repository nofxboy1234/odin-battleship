class ShotChecker {
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
  }

  check() {
    {
      const result = {
        valid: true,
      };

      if (this.pointerType === 'mouse') {
        result.clicker = this.human;
      } else if (this.pointerType === '') {
        result.clicker = this.enemy;
      }

      const playerClickingOwnGameboard = this.#isPlayerClickingOwnGameboard(
        this.gameboardElement,
        result.clicker,
      );

      if (playerClickingOwnGameboard) {
        result.valid = false;
        result.reason = 'playerClickingOwnGameboard';
        return result;
      }

      const isExistingShot = this.gameboardElement.controller.isExistingShot(
        this.cellDOM.x,
        this.cellDOM.y,
      );

      if (isExistingShot) {
        result.valid = false;
        result.reason = 'isExistingShot';
        return result;
      }

      const adjacentCells =
        this.gameboardElement.controller.getAllSunkShipsAdjacentCells();
      const cell = this.gameboardElement.controller.getCellAt(
        this.cellDOM.x,
        this.cellDOM.y,
      );
      const isAdjacentCell = adjacentCells.includes(cell);

      if (isAdjacentCell) {
        result.valid = false;
        result.reason = 'isAdjacentCell';
        return result;
      }

      return result;
    }
  }

  #isPlayerClickingOwnGameboard(clickedGameboardElement, clicker) {
    const humanClickedOwnGameboard =
      clickedGameboardElement.owner === this.human && clicker === this.human;

    const computerClickedOwnGameboard =
      clickedGameboardElement.owner === this.enemy && clicker === this.enemy;

    return humanClickedOwnGameboard || computerClickedOwnGameboard;
  }
}

export default ShotChecker;
