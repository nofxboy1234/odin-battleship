import getRandomInt from './helpers';
import { gameboardShips } from './rules';
import { hasOverlappingShips, hasOutOfBoundsShips } from './rules';

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
    // - keep 1 space margin around each ship

    let shipsInValidPosition = false;

    while (!shipsInValidPosition) {
      const ships = [];

      gameboardShips.forEach((boardShip) => {
        for (let index = 0; index < boardShip.count; index++) {
          const ship = this.#createShipWithRandomOrientation(boardShip);
          const [x, y] = this.gameboard.getRandomPosition();
          ship.place(x, y, this.gameboard);
          ships.push(ship);
        }
      });

      if (
        !hasOverlappingShips(ships) &&
        !hasOutOfBoundsShips(ships, this.gameboard)
      ) {
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
}

export default Player;
