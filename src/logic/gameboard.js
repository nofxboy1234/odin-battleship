import Cell from './cell';
import getRandomInt from './helpers';

class Gameboard {
  #ships = [];
  #misses = [];

  constructor(size = 10) {
    this.size = size;
    this.cells = [];
    this.#createCells();
  }

  placeShip(ship, x, y) {
    ship.place(x, y, this);
    this.#ships.push(ship);
  }

  receiveAttack(x, y) {
    const hitShip = this.#getShipOnCell(x, y);
    if (hitShip) {
      hitShip.hit(x, y);
      return true;
    } else {
      this.#misses.push(new Cell(x, y));
      return false;
    }
  }

  allShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk());
  }

  getShips() {
    return [...this.#ships];
  }

  getMisses() {
    return [...this.#misses];
  }

  getHits() {
    return this.#ships.flatMap((ship) => ship.getHits());
  }

  isShipOnCell(x, y) {
    return !!this.#getShipOnCell(x, y);
  }

  getCellAt(x, y) {
    return this.cells.find((cell) => cell.x === x && cell.y === y);
  }

  offsetCell(cell, x, y) {
    return this.getCellAt(cell.x + x, cell.y + y);
  }

  isExistingShot(x, y) {
    return !!this.#getHitOnCell(x, y) || !!this.#getMissOnCell(x, y);
  }

  getRandomPosition() {
    const x = getRandomInt(this.size);
    const y = getRandomInt(this.size);

    return [x, y];
  }

  reset() {
    this.#ships = [];
    this.#misses = [];
  }

  #createCells() {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const cell = new Cell(x, y);
        this.cells.push(cell);
      }
    }
  }

  #getHitOnCell(x, y) {
    const hits = this.getHits();
    return hits.find((cell) => x === cell.x && y === cell.y);
  }

  #getMissOnCell(x, y) {
    return this.#misses.find((cell) => x === cell.x && y === cell.y);
  }

  #getShipOnCell(x, y) {
    return this.#ships.find((ship) => {
      const shipBack = ship.back();
      const shipFront = ship.front();

      if (ship.orientation === 'horizontal') {
        return x >= shipBack.x && x <= shipFront.x && y === ship.y;
      } else if (ship.orientation === 'vertical') {
        return y >= shipBack.y && y <= shipFront.y && x === ship.x;
      }
    });
  }
}

export default Gameboard;
