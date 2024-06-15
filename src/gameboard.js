class Gameboard {
  #ships = [];

  constructor() {
    this.misses = [];
  }

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
      this.misses.push([x, y]);
    }
  }

  allShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk());
  }

  getShips() {
    return [...this.#ships];
  }

  isShipOnCell(x, y) {
    return !!this.#getShipOnCell(x, y);
  }

  #getShipOnCell(x, y) {
    return this.#ships.find((ship) => {
      const shipBack = ship.x;
      const shipFront = ship.x + ship.length;

      return x >= shipBack && x < shipFront && y === ship.y;
    });
  }

  #isNewShot(x, y) {
    return !this.#ships.find((ship) =>
      ship.getHits().find(([hitX, hitY]) => x === hitX && y === hitY),
    );
  }
}

export default Gameboard;
