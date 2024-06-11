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
}

// const ship1 = new Ship();
// ship1.showSecret();

export default Ship;
