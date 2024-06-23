import Ship from './ship';

class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  play(enemyGameboard) {
    const existingHits = enemyGameboard.getHits();
    const existingMisses = enemyGameboard.getMisses();
    const existingShots = existingHits.concat(existingMisses);
    // Get all cells that are NOT found inside existing hits or existing misses
    const remainingCells = enemyGameboard.cells.filter((cell) => {
      return !existingShots.find((existingShot) => {
        cell[0] === existingShot[0] && cell[1] === existingShot[1];
      });
    });
    const randomIndex = this.#getRandomInt(remainingCells.length);
    const randomCell = remainingCells[randomIndex];
    return randomCell;
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

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

export default Player;
