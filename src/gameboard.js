class Gameboard {
  #ships = [];
  #misses = [];
  constructor() {}

  placeShip(ship, x, y) {
    ship.place(x, y);
    this.#ships.push(ship);
  }

  receiveAttack(x, y) {
    if (!this.#isNewShot(x, y)) {
      console.log('You have already shot there!');
      return;
    }

    const hitShip = this.#getShipOnCell(x, y);
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

  isShipOnCell(x, y) {
    return !!this.#getShipOnCell(x, y);
  }

  disable() {
    //
  }

  isDisabled() {
    return true;
  }

  #getShipOnCell(x, y) {
    return this.#ships.find((ship) => {
      const shipBack = ship.x;
      const shipFront = ship.x + ship.length;

      return x >= shipBack && x < shipFront && y === ship.y;
    });
  }

  #getHitOnCell(x, y) {
    const hits = this.#ships.flatMap((ship) => ship.getHits());
    return hits.find(([hitX, hitY]) => x === hitX && y === hitY);
  }

  #getMissOnCell(x, y) {
    return this.#misses.find(([missX, missY]) => x === missX && y === missY);
  }

  #isNewShot(x, y) {
    return !this.#getHitOnCell(x, y) && !this.#getMissOnCell(x, y);
  }
}

export default Gameboard;
