class Ship {
  constructor(x, y, length, cells) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.cells = cells;
  }

  setSunk() {
    this.cells.forEach((cell) => {
      cell.enableSunk();
    });
  }
}

export default Ship;
