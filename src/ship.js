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

  place(x, y) {}
}

export default Ship;
