import { gameboardShips, hasAdjacentShips } from './rules';
import { hasOverlappingShips, hasOutOfBoundsShips } from './rules';

class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
    this.target = {
      ship: undefined,
      reset() {
        this.ship = undefined;
      },
    };
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
}

export default Player;
