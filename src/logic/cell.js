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

  // isHitAgainstRightWall(hit, gameboard) {
  //   return hit.x === gameboard.size - 1;
  // }

  // isHitAgainstBottomWall(hit, gameboard) {
  //   return hit.y === gameboard.size - 1;
  // }

  // isHitAgainstLeftWall(hit) {
  //   return hit.x === 0;
  // }
}

export default Cell;
