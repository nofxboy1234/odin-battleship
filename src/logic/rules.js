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
  // ----- horizontal ships
  // if collision on right:
  // - get ship front
  const someShipIsToTheRight = ships.some((ship) => {
    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const shipFrontX = ship.x + ship.length;
    const shipFrontY = ship.y;
    // -- check if (x + 1, y - 1) has no ship cell, unless (x === board.size - ship.length)
    const marginCell = gameboard.getCellAt(shipFrontX + 1, shipFrontY - 1);
    const someShipCellIsToTheRight = otherShips.some((otherShip) => {
      return otherShip.cells.includes(marginCell);
    });

    // -- check if (x + 1, y) has no ship cell, unless (x === board.size - ship.length)
    // -- check if (x + 1, y + 1) has no ship cell, unless (x === board.size - ship.length)
    return someShipCellIsToTheRight;
    //
  });
  // if collision on left:
  // - get ship back
  // -- check if (x - 1, y - 1) has no ship cell, unless (x === 0)
  // -- check if (x - 1, y) has no ship cell, unless (x === 0)
  // -- check if (x - 1, y + 1) has no ship cell, unless (x === 0)
  //
  // if collision on top:
  // - for each ship-body-cell
  // -- check if (x, y - 1) has no ship cell, unless (y === 0)
  //
  // if collision on bottom:
  // - for each ship-body-cell
  // -- check if (x, y + 1) has no ship cell, unless (y === board.size - ship.length)

  return false;
}

export {
  gameboardShips,
  hasOverlappingShips,
  hasOutOfBoundsShips,
  hasAdjacentShips,
};
