import Ship from './ship';

class Player {
  constructor(gameboard) {
    this.gameboard = gameboard;
  }

  play() {
    const x = this.#getRandomInt();
    const y = this.#getRandomInt();
    return [x, y];
  }

  placeShips() {
    this.gameboard.placeShip(new Ship(4), 0, 0);

    this.gameboard.placeShip(new Ship(3), 0, 2);
    this.gameboard.placeShip(new Ship(3), 4, 2);

    this.gameboard.placeShip(new Ship(2), 0, 4);
    this.gameboard.placeShip(new Ship(2), 3, 4);
    this.gameboard.placeShip(new Ship(2), 6, 4);

    this.gameboard.placeShip(new Ship(1), 0, 6);
    this.gameboard.placeShip(new Ship(1), 2, 6);
    this.gameboard.placeShip(new Ship(1), 4, 6);
    this.gameboard.placeShip(new Ship(1), 6, 6);
  }

  #getRandomInt() {
    return Math.floor(Math.random() * 10);
  }
}

export default Player;
