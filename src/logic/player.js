import getRandomInt from './helpers';
import { gameboardShips, hasAdjacentShips } from './rules';
import { hasOverlappingShips, hasOutOfBoundsShips } from './rules';

class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  play(oppositionGameboard) {
    const hits = oppositionGameboard.getHits();
    const misses = oppositionGameboard.getMisses();
    const shots = hits.concat(misses);
    const availableCells = this.#getAvailableCells(oppositionGameboard, shots);

    const randomIndex = getRandomInt(availableCells.length);
    const randomCell = availableCells[randomIndex];
    return randomCell;
  }

  placeShips(ships) {
    if (this.#allShipsInValidPositions(ships)) {
      ships.forEach((ship) => this.gameboard.placeShip(ship, ship.x, ship.y));
      return true;
    }

    return false;
  }

  placeRandomShips() {
    let shipsInValidPosition = false;

    while (!shipsInValidPosition) {
      const ships = this.#createRandomShips();

      if (this.#allShipsInValidPositions(ships)) {
        shipsInValidPosition = true;
        ships.forEach((ship) => this.gameboard.placeShip(ship, ship.x, ship.y));
      }
    }
  }

  #allShipsInValidPositions(ships) {
    return (
      !hasOverlappingShips(ships) &&
      !hasOutOfBoundsShips(ships, this.gameboard) &&
      !hasAdjacentShips(ships, this.gameboard)
    );
  }

  #createRandomShips() {
    const ships = [];

    gameboardShips.forEach((boardShip) => {
      for (let index = 0; index < boardShip.count; index++) {
        const ship = this.#createShipWithRandomOrientation(boardShip);
        const [x, y] = this.gameboard.getRandomPosition();
        ship.place(x, y, this.gameboard);
        ships.push(ship);
      }
    });

    return ships;
  }

  #createShipWithRandomOrientation(boardShip) {
    const ship = new boardShip.type();
    ship.setRandomOrientation();
    return ship;
  }

  #getAvailableCells(gameboard, shots) {
    return gameboard.cells.filter((cell) => {
      const found = shots.find((shot) => {
        return cell.x === shot.x && cell.y === shot.y;
      });
      return !found;
    });
  }
}

export default Player;
