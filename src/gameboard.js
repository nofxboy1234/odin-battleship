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
        if (x >= ship.x && x <= ship.x + (ship.length - 1)) {
          hitShip = ship;
        }
      }
    });
    return hitShip;
  }
}

export default Gameboard;
