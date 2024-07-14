class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  offset(x, y) {
    return new Cell(this.x + x, this.y + y);
  }

  isAgainstTopWall() {
    return this.y === 0;
  }

  isAgainstRightWall(gameboard) {
    return this.x === gameboard.size - 1;
  }

  isAgainstBottomWall(gameboard) {
    return this.y === gameboard.size - 1;
  }

  isAgainstLeftWall() {
    return this.x === 0;
  }
}

export default Cell;
