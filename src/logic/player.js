import Ship from './ship';

class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  play(enemyGameboard) {
    const hits = enemyGameboard.getHits();
    const misses = enemyGameboard.getMisses();
    const shots = hits.concat(misses);

    const availableCells = enemyGameboard.cells.filter((cell) => {
      const found = shots.find((shot) => {
        return cell[0] === shot[0] && cell[1] === shot[1];
      });
      return !found;
    });

    const randomIndex = this.#getRandomInt(availableCells.length);
    const randomCell = availableCells[randomIndex];
    return randomCell;
  }

  placeShipsRandomly() {
    // - don't overlap other ships
    // - don't let ship length go off board
    // - keep 1 space margin around each ship
    this.#shipTypes().forEach((shipType) => {
      for (let index = 0; index < shipType.count; index++) {
        const ship = this.#createShip(shipType);
        const [x, y] = this.gameboard.getRandomPosition();
        this.gameboard.placeShip(ship, x, y);
      }
    });
  }

  #shipTypes() {
    const ships = [
      {
        count: 1,
        length: 4,
      },
      {
        count: 2,
        length: 3,
      },
      {
        count: 3,
        length: 2,
      },
      {
        count: 4,
        length: 1,
      },
    ];

    return ships;
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  #createShip(shipType) {
    const ship = new Ship(shipType.length);
    ship.setRandomOrientation();
    return ship;
  }
}

export default Player;
