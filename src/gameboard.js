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
      hitShip.hit();
    } else {
      this.misses.push([x, y]);
    }
  }

  #wasShipHit(x, y) {
    let hitShip;
    this.#ships.forEach((ship) => {
      if (y === ship.y) {
        if (this.shotHitsHorizontalLength(x, ship)) {
          hitShip = ship;
        }
      }
    });

    return hitShip;
  }

  shotHitsHorizontalLength(x, ship) {
    const shipBack = ship.x;
    const shipFront = ship.x + (ship.length - 1);

    return x >= shipBack && x <= shipFront;
  }
}

export default Gameboard;
