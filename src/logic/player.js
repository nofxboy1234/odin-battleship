import Ship from './ship';
import getRandomInt from './helpers';
import gameboardShips from './rules';

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
        return cell.x === shot.x && cell.y === shot.y;
      });
      return !found;
    });

    const randomIndex = getRandomInt(availableCells.length);
    const randomCell = availableCells[randomIndex];
    return randomCell;
  }

  placeShipsRandomly() {
    // - don't overlap other ships
    // -- None of a ship's cells should be the same as another ship's cells

    // - don't let ship length go off board

    // - keep 1 space margin around each ship

    let shipsInValidPosition = false;
    while (!shipsInValidPosition) {
      console.log('checking ship positions');
      const ships = [];

      gameboardShips.forEach((boardShip) => {
        for (let index = 0; index < boardShip.count; index++) {
          const ship = this.#createShipWithRandomOrientation(boardShip);
          const [x, y] = this.gameboard.getRandomPosition();
          ship.place(x, y);
          ships.push(ship);
        }
      });

      if (this.#noShipsOverlapping(ships)) {
        shipsInValidPosition = true;
        ships.forEach((ship) => this.gameboard.placeShip(ship, ship.x, ship.y));
      }
    }
  }

  #createShipWithRandomOrientation(boardShip) {
    const ship = new boardShip.type();
    ship.setRandomOrientation();
    return ship;
  }

  #noShipsOverlapping(ships) {
    const results = [];

    ships.forEach((ship) => {
      const otherShips = ships.filter((otherShip) => otherShip !== ship);

      const allCellsDifferent = otherShips.every((otherShip) => {
        return (
          otherShip.getCells(this.gameboard) !== ship.getCells(this.gameboard)
        );
      });

      results.push(allCellsDifferent);
    });

    return results.every((result) => result);
  }
}

export default Player;
