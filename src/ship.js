class Ship {
  constructor(length = 1) {
    this.hits = 0;
    this.length = length;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits === this.length;
  }

  place(x, y) {
    console.log(`place ship at ${x}, ${y}`);
    this.x = x;
    this.y = y;
  }
}

export default Ship;
