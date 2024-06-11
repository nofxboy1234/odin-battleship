class Ship {
  #orientation = 'horizontal';

  constructor(length = 1) {
    this.length = length;
    this.hits = [];
  }

  hit(x, y) {
    this.hits.push([x, y]);
  }

  isSunk() {
    return this.hits.length === this.length;
  }

  place(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Ship;
