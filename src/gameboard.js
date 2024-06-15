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
    const hitShip = this.#getShipOnCell(x, y);
    if (hitShip) {
      hitShip.hit(x, y);
    } else {
      const newShot = this.#isNewShot(x, y);
      if (newShot) {
        this.misses.push([x, y]);
      }
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
    return !this.#ships.find(
      (ship) => y === ship.y && ship.getHits().find((hit) => hit[0] === x),
    );
  }
}

export default Gameboard;
