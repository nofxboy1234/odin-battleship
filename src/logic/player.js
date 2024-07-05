import getRandomInt from './helpers';
import { gameboardShips, hasAdjacentShips } from './rules';
import {
  hasOverlappingShips,
  hasOutOfBoundsShips,
  shipAgainstTopWall,
  shipAgainstRightWall,
  shipAgainstBottomWall,
  shipAgainstLeftWall,
} from './rules';

class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
    this.shipToSink = {
      ship: undefined,
      shots: [],
      reset() {
        this.ship = undefined;
        this.shots.length = 0;
      },
    };
  }

  play(targetGameboard, targetGameboardElement) {
    const ship = this.shipToSink.ship;
    let nextShot;

    if (ship) {
      const hits = ship.getHits();
      if (hits.length === 1) {
        const onlyHit = hits.at(0);
        const top = targetGameboard.offsetCell(onlyHit, 0, -1);
        const right = targetGameboard.offsetCell(onlyHit, 1, 0);
        const bottom = targetGameboard.offsetCell(onlyHit, 0, 1);
        const left = targetGameboard.offsetCell(onlyHit, -1, 0);

        const potentialHits = [];
        if (!shipAgainstTopWall(ship)) {
          potentialHits.push(top);
        }
        if (!shipAgainstRightWall(ship, targetGameboard)) {
          potentialHits.push(right);
        }
        if (!shipAgainstBottomWall(ship, targetGameboard)) {
          potentialHits.push(bottom);
        }
        if (!shipAgainstLeftWall(ship)) {
          potentialHits.push(left);
        }

        const randomIndex = getRandomInt(potentialHits.length);
        nextShot = potentialHits[randomIndex];
      } else {
        // --if hit array length is > 1
        if (ship.orientation === 'horizontal') {
          // ---order hits by x
          const xHits = hits.toSorted((a, b) => Math.sign(a.x - b.x));
          // ---attack left of first hit in array || right of last hit in array
          const firstHit = xHits.at(0);
          const lastHit = xHits.at(-1);
          const left = targetGameboard.offsetCell(firstHit, -1, 0);
          const right = targetGameboard.offsetCell(lastHit, 1, 0);

          const potentialHits = [];
          if (!shipAgainstLeftWall(ship)) {
            potentialHits.push(left);
          }
          if (!shipAgainstRightWall(ship, targetGameboard)) {
            potentialHits.push(right);
          }

          const randomIndex = getRandomInt(potentialHits.length);
          nextShot = potentialHits[randomIndex];
        }

        if (ship.orientation === 'vertical') {
          // ---order hits by y
          const yHits = hits.toSorted((a, b) => Math.sign(a.y - b.y));
          // ---attack left of first hit in array || right of last hit in array
          const firstHit = yHits.at(0);
          const lastHit = yHits.at(-1);
          const top = targetGameboard.offsetCell(firstHit, 0, -1);
          const bottom = targetGameboard.offsetCell(lastHit, 0, 1);

          const potentialHits = [];
          if (!shipAgainstTopWall(ship)) {
            potentialHits.push(top);
          }
          if (!shipAgainstBottomWall(ship, targetGameboard)) {
            potentialHits.push(bottom);
          }

          const randomIndex = getRandomInt(potentialHits.length);
          nextShot = potentialHits[randomIndex];
        }
      }

      this.shipToSink.shots.push(nextShot);
    } else {
      const hits = targetGameboard.getHits();
      const misses = targetGameboard.getMisses();
      const shots = hits.concat(misses);
      const availableCells = this.#getAvailableCells(targetGameboard, shots);

      const randomIndex = getRandomInt(availableCells.length);
      nextShot = availableCells[randomIndex];
    }

    const cellDOM = targetGameboardElement.getCellDOM(nextShot.x, nextShot.y);
    cellDOM.render().click();
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
