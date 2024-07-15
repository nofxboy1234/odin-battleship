import { getRandomInt } from './helpers';

class Ship {
  #hits = [];

  constructor(length = 1) {
    this.length = length;
    this.orientation = 'horizontal';
    this.#hits = [];
  }

  hit(cell) {
    this.#hits.push(cell);
  }

  isSunk() {
    return this.#hits.length === this.length;
  }

  place(x, y, gameboard) {
    this.x = x;
    this.y = y;

    this.#setCells(gameboard);
  }

  getHits() {
    return this.#hits;
  }

  potentialHits(gameboard) {
    if (this.#hits.length === 1) {
      const onlyHit = this.#hits.at(0);

      const topCell = gameboard.offsetCell(onlyHit, 0, -1);
      const rightCell = gameboard.offsetCell(onlyHit, 1, 0);
      const bottomCell = gameboard.offsetCell(onlyHit, 0, 1);
      const leftCell = gameboard.offsetCell(onlyHit, -1, 0);

      const potentialHits = [topCell, rightCell, bottomCell, leftCell].filter(
        (cell) => gameboard.getAvailableCells().includes(cell),
      );

      return potentialHits;
    }

    if (this.#hits.length > 1) {
      const sortedHits = this.getHits().toSorted(
        (a, b) => Math.sign(a.x - b.x) || Math.sign(a.y - b.y),
      );

      const firstHit = sortedHits.at(0);
      const lastHit = sortedHits.at(-1);

      if (this.orientation === 'horizontal') {
        const rightCell = gameboard.offsetCell(lastHit, 1, 0);
        const leftCell = gameboard.offsetCell(firstHit, -1, 0);

        const potentialHits = [rightCell, leftCell].filter((cell) =>
          gameboard.getAvailableCells().includes(cell),
        );

        return potentialHits;
      }

      if (this.orientation === 'vertical') {
        const topCell = gameboard.offsetCell(firstHit, 0, -1);
        const bottomCell = gameboard.offsetCell(lastHit, 0, 1);

        const potentialHits = [topCell, bottomCell].filter((cell) =>
          gameboard.getAvailableCells().includes(cell),
        );

        return potentialHits;
      }
    }
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

  front() {
    return this.cells.at(-1);
  }

  back() {
    return this.cells.at(0);
  }

  #setCells(gameboard) {
    this.cells = gameboard.cells.filter((cell) => {
      if (this.orientation === 'horizontal') {
        const back = this.x;
        const front = this.x + this.length - 1;

        return cell.x >= back && cell.x <= front && cell.y === this.y;
      } else if (this.orientation === 'vertical') {
        const back = this.y;
        const front = this.y + this.length - 1;

        return cell.y >= back && cell.y <= front && cell.x === this.x;
      }
    });
  }
}

export default Ship;
