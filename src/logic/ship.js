class Ship {
  #hits = [];

  constructor(length = 1) {
    this.length = length;
    this.orientation = 'horizontal';
    this.#hits = [];
  }

  hit(x, y) {
    this.#hits.push([x, y]);
  }

  isSunk() {
    return this.#hits.length === this.length;
  }

  place(x, y) {
    this.x = x;
    this.y = y;
  }

  getHits() {
    return [...this.#hits];
  }

  setVertical() {
    this.orientation = 'vertical';
  }

  setHorizontal() {
    this.orientation = 'horizontal';
  }

  setRandomOrientation() {
    const orientations = ['horizontal', 'vertical'];
    const index = this.#getRandomInt(orientations.length);
    this.orientation = orientations[index];
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

export default Ship;
