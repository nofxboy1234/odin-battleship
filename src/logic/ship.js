import Cell from './cell';
import getRandomInt from './helpers';

class Ship {
  #hits = [];

  constructor(length = 1) {
    this.length = length;
    this.orientation = 'horizontal';
    this.#hits = [];
  }

  hit(x, y) {
    this.#hits.push(new Cell(x, y));
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
    const index = getRandomInt(orientations.length);
    this.orientation = orientations[index];
  }

  getCells(gameboard) {
    return gameboard.cells.filter((cell) => {
      if (this.orientation === 'horizontal') {
        const back = this.x;
        const front = this.x + this.length;
        return cell.x >= back && cell.x < front && cell.y === this.y;
      } else if (this.orientation === 'vertical') {
        const shipBack = this.y;
        const shipFront = this.y + this.length;
        return cell.y >= shipBack && cell.y < shipFront && cell.x === this.x;
      }
    });
  }
}

export default Ship;
