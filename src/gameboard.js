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
    const wasHit = this.#wasShipHit(x, y);
    if (wasHit) {
      //
    } else {
      this.misses.push([x, y]);
    }
  }

  #wasShipHit(x, y) {
    let wasHit = false;
    this.#ships.forEach((ship) => {
      if (y === ship.y) {
        if (x >= ship.x && x <= ship.x + (ship.length - 1)) {
          wasHit = true;
        }
      }
    });
    return wasHit;
  }
}

export default Gameboard;
