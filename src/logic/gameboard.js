import Cell from './cell';
import getRandomInt from './helpers';
import {
  getCellsAtTheBottom,
  getCellsAtTheTop,
  getCellsToTheLeft,
  getCellsToTheRight,
} from './rules';

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
      hitShip.hit(this.getCellAt(x, y));
      return { hit: true, ship: hitShip };
    } else {
      this.#misses.push(this.getCellAt(x, y));
      return { hit: false, ship: undefined };
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

  getAllSunkShips() {
    return this.#ships.filter((ship) => ship.isSunk());
  }

  getShipAdjacentCells(ship) {
    const topCells = getCellsAtTheTop(this, ship);
    const rightCells = getCellsToTheRight(this, ship);
    const bottomCells = getCellsAtTheBottom(this, ship);
    const leftCells = getCellsToTheLeft(this, ship);
    const adjacentCells = topCells.concat(rightCells, bottomCells, leftCells);

    const validAdjacentCells = adjacentCells.filter(
      (cell) => cell !== undefined,
    );

    validAdjacentCells.sort(
      (a, b) => Math.sign(a.x - b.x) || Math.sign(a.y - b.y),
    );

    return validAdjacentCells;
  }

  getAllSunkShipsAdjacentCells() {
    const sunkShips = this.getAllSunkShips();
    return sunkShips.flatMap((ship) => this.getShipAdjacentCells(ship));
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
