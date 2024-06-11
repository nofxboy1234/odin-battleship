class Gameboard {
  constructor() {
    this.misses = [];
  }

  placeShip(ship, x, y) {
    ship.place(x, y);
  }

  receiveAttack(x, y) {
    this.misses.push([x, y]);
  }
}

export default Gameboard;
