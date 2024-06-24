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

  placeShips() {
    // - don't overlap other ships
    // - don't let ship length go off board
    // - keep 1 space margin around each ship

    const shipOrientations = ['horizontal', 'vertical'];

    this.#shipTypes().forEach((shipType) => {
      for (let index = 0; index < shipType.count; index++) {
        const orientation = this.#getRandomShipOrientation(shipOrientations);
        const x = this.#getRandomShipXY();
        const y = this.#getRandomShipXY();
        this.gameboard.placeShip(new Ship(shipType.length, orientation), x, y);
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

  #getRandomShipXY() {
    return this.#getRandomInt(this.gameboard.size);
  }

  #getRandomShipOrientation(orientations) {
    const index = this.#getRandomInt(orientations.length);
    return orientations[index];
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

export default Player;
