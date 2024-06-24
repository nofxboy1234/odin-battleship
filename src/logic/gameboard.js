class Gameboard {
  #ships = [];
  #misses = [];

  constructor(size = 10) {
    this.size = size;
    this.cells = this.#createCellArray(size);
  }

  placeShip(ship, x, y) {
    ship.place(x, y);
    this.#ships.push(ship);
  }

  receiveAttack(x, y) {
    const hitShip = this.getShipOnCell(x, y);
    if (hitShip) {
      hitShip.hit(x, y);
    } else {
      this.#misses.push([x, y]);
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
    return !!this.getShipOnCell(x, y);
  }

  getShipOnCell(x, y) {
    return this.#ships.find((ship) => {
      if (ship.orientation === 'horizontal') {
        const shipBack = ship.x;
        const shipFront = ship.x + ship.length;

        return x >= shipBack && x < shipFront && y === ship.y;
      } else if (ship.orientation === 'vertical') {
        const shipBack = ship.y;
        const shipFront = ship.y + ship.length;

        return y >= shipBack && y < shipFront && x === ship.x;
      }
    });
  }

  isExistingShot(x, y) {
    return !!this.#getHitOnCell(x, y) || !!this.#getMissOnCell(x, y);
  }

  #createCellArray(size) {
    const cellArray = [];

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        cellArray.push([x, y]);
      }
    }
    return cellArray;
  }

  #getHitOnCell(x, y) {
    const hits = this.getHits();
    return hits.find(([hitX, hitY]) => x === hitX && y === hitY);
  }

  #getMissOnCell(x, y) {
    return this.#misses.find(([missX, missY]) => x === missX && y === missY);
  }
}

export default Gameboard;
