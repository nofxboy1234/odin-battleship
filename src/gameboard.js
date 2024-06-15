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
    const hitShip = this.#wasShipHit(x, y);
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
    return true;
  }

  #wasShipHit(x, y) {
    let hitShip;
    this.#ships.forEach((ship) => {
      if (y === ship.y) {
        if (this.#shotHitsHorizontalLength(x, ship)) {
          hitShip = ship;
        }
      }
    });

    return hitShip;
  }

  #shotHitsHorizontalLength(x, ship) {
    const shipBack = ship.x;
    const shipFront = ship.x + (ship.length - 1);

    return x >= shipBack && x <= shipFront;
  }

  #isNewShot(x, y) {
    return !this.#ships.find(
      (ship) => y === ship.y && ship.getHits().find((hit) => hit[0] === x),
    );
  }
}

export default Gameboard;
