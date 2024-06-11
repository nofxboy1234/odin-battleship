class Ship {
  #orientation = 'horizontal';

  constructor(length = 1) {
    this.length = length;
    this.hits = 0;
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
