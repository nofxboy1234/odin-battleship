import Battleship from './battleship';
import Destroyer from './destroyer';
import PatrolBoat from './patrolBoat';
import Submarine from './submarine';

const gameboardShips = [
  {
    count: 1,
    type: Battleship,
  },
  {
    count: 2,
    type: Destroyer,
  },
  {
    count: 3,
    type: Submarine,
  },
  {
    count: 4,
    type: PatrolBoat,
  },
];

function hasOutOfBoundsShips(ships, gameboard) {
  const someShipGoesOutOfBounds = ships.some((ship) => {
    if (ship.orientation === 'horizontal') {
      return ship.x > gameboard.size - ship.length;
    } else if (ship.orientation === 'vertical') {
      return ship.y > gameboard.size - ship.length;
    }
  });

  return someShipGoesOutOfBounds;
}

function hasOverlappingShips(ships) {
  const someShipOverlapsAnotherShip = ships.some((ship) => {
    const otherShips = ships.filter((otherShip) => otherShip !== ship);

    const someCellsOverlap = otherShips.some((otherShip) => {
      return otherShip.cells.some((cell) => ship.cells.includes(cell));
    });

    return someCellsOverlap;
  });

  return someShipOverlapsAnotherShip;
}

function hasAdjacentShips(ships, gameboard) {
  return (
    someShipIsToTheRight(ships, gameboard) ||
    someShipIsAtTheTop(ships, gameboard)
  );
}

function someShipIsToTheRight(ships, gameboard) {
  return ships.some((ship) => {
    if (ship.orientation === 'horizontal') {
      if (shipAgainstRightWall(ship, gameboard)) {
        return false;
      }

      const otherShips = ships.filter((otherShip) => otherShip !== ship);
      const rightCells = getCellsToTheRight(gameboard, ship);

      const someShipCellIsToTheRight = otherShips.some((otherShip) => {
        return rightCells.some((rightCell) =>
          otherShip.cells.includes(rightCell),
        );
      });

      return someShipCellIsToTheRight;
    }
  });
}

function getCellsToTheRight(gameboard, ship) {
  const shipFront = ship.front();

  const rightCells = [];
  let rightCell;
  rightCell = gameboard.offsetCell(shipFront, 1, -1);
  rightCells.push(rightCell);

  rightCell = gameboard.offsetCell(shipFront, 1, 0);
  rightCells.push(rightCell);

  rightCell = gameboard.offsetCell(shipFront, 1, 1);
  rightCells.push(rightCell);

  return rightCells;
}

function someShipIsAtTheTop(ships, gameboard) {
  return ships.some((ship) => {
    if (ship.orientation === 'horizontal') {
      if (shipAgainstTopWall(ship)) {
        return false;
      }

      const otherShips = ships.filter((otherShip) => otherShip !== ship);
      const topCells = [];
      let topCell;
      ship.cells.forEach((cell) => {
        topCell = gameboard.getCellAt(cell.x, cell.y - 1);
        topCells.push(topCell);
      });

      const someShipCellIsAtTheTop = otherShips.some((otherShip) => {
        return topCells.some((topCell) => otherShip.cells.includes(topCell));
      });

      return someShipCellIsAtTheTop;
    }
  });
}

function shipAgainstRightWall(ship, gameboard) {
  return ship.front().x === gameboard.size - 1;
}

function shipAgainstTopWall(ship) {
  return ship.y === 0;
}

export {
  gameboardShips,
  hasOverlappingShips,
  hasOutOfBoundsShips,
  hasAdjacentShips,
};
