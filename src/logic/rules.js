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
    someShipIsAtTheTop(ships, gameboard) ||
    someShipIsToTheRight(ships, gameboard) ||
    someShipIsAtTheBottom(ships, gameboard) ||
    someShipIsToTheLeft(ships, gameboard)
  );
}

function someShipIsToTheRight(ships, gameboard) {
  return ships.some((ship) => {
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
  });
}

function getCellsToTheRight(gameboard, ship) {
  const rightCells = [];
  let rightCell;

  if (ship.orientation === 'horizontal') {
    const shipFront = ship.front();

    rightCell = gameboard.offsetCell(shipFront, 1, -1);
    rightCells.push(rightCell);

    rightCell = gameboard.offsetCell(shipFront, 1, 0);
    rightCells.push(rightCell);

    rightCell = gameboard.offsetCell(shipFront, 1, 1);
    rightCells.push(rightCell);

    return rightCells;
  } else if (ship.orientation === 'vertical') {
    ship.cells.forEach((cell) => {
      rightCell = gameboard.offsetCell(cell, 1, 0);
      rightCells.push(rightCell);
    });

    return rightCells;
  }
}

function someShipIsToTheLeft(ships, gameboard) {
  return ships.some((ship) => {
    if (shipAgainstLeftWall(ship)) {
      return false;
    }

    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const leftCells = getCellsToTheLeft(gameboard, ship);

    const someShipCellIsToTheLeft = otherShips.some((otherShip) => {
      return leftCells.some((leftCell) => otherShip.cells.includes(leftCell));
    });

    return someShipCellIsToTheLeft;
  });
}

function getCellsToTheLeft(gameboard, ship) {
  const leftCells = [];
  let leftCell;

  if (ship.orientation === 'horizontal') {
    const shipBack = ship.back();

    leftCell = gameboard.offsetCell(shipBack, -1, -1);
    leftCells.push(leftCell);

    leftCell = gameboard.offsetCell(shipBack, -1, 0);
    leftCells.push(leftCell);

    leftCell = gameboard.offsetCell(shipBack, -1, 1);
    leftCells.push(leftCell);

    return leftCells;
  } else if (ship.orientation === 'vertical') {
    ship.cells.forEach((cell) => {
      leftCell = gameboard.offsetCell(cell, -1, 0);
      leftCells.push(leftCell);
    });

    return leftCells;
  }
}

function someShipIsAtTheTop(ships, gameboard) {
  return ships.some((ship) => {
    if (shipAgainstTopWall(ship)) {
      return false;
    }

    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const topCells = getCellsAtTheTop(gameboard, ship);

    const someShipCellIsAtTheTop = otherShips.some((otherShip) => {
      return topCells.some((topCell) => otherShip.cells.includes(topCell));
    });

    return someShipCellIsAtTheTop;
  });
}

function getCellsAtTheTop(gameboard, ship) {
  const topCells = [];
  let topCell;

  if (ship.orientation === 'horizontal') {
    ship.cells.forEach((cell) => {
      topCell = gameboard.offsetCell(cell, 0, -1);
      topCells.push(topCell);
    });

    return topCells;
  } else if (ship.orientation === 'vertical') {
    const shipBack = ship.back();

    topCell = gameboard.offsetCell(shipBack, -1, -1);
    topCells.push(topCell);

    topCell = gameboard.offsetCell(shipBack, 0, -1);
    topCells.push(topCell);

    topCell = gameboard.offsetCell(shipBack, 1, -1);
    topCells.push(topCell);

    return topCells;
  }
}

function someShipIsAtTheBottom(ships, gameboard) {
  return ships.some((ship) => {
    if (shipAgainstBottomWall(ship, gameboard)) {
      return false;
    }

    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const bottomCells = getCellsAtTheBottom(gameboard, ship);

    const someShipCellIsAtTheBottom = otherShips.some((otherShip) => {
      return bottomCells.some((bottomCell) =>
        otherShip.cells.includes(bottomCell),
      );
    });

    return someShipCellIsAtTheBottom;
  });
}

function getCellsAtTheBottom(gameboard, ship) {
  const bottomCells = [];
  let bottomCell;

  if (ship.orientation === 'horizontal') {
    ship.cells.forEach((cell) => {
      bottomCell = gameboard.offsetCell(cell, 0, 1);
      bottomCells.push(bottomCell);
    });

    return bottomCells;
  } else if (ship.orientation === 'vertical') {
    const shipFront = ship.front();

    bottomCell = gameboard.offsetCell(shipFront, -1, 1);
    bottomCells.push(bottomCell);

    bottomCell = gameboard.offsetCell(shipFront, 0, 1);
    bottomCells.push(bottomCell);

    bottomCell = gameboard.offsetCell(shipFront, 1, 1);
    bottomCells.push(bottomCell);

    return bottomCells;
  }
}

function shipAgainstTopWall(ship) {
  return ship.y === 0;
}

function shipAgainstRightWall(ship, gameboard) {
  return ship.front().x === gameboard.size - 1;
}

function shipAgainstBottomWall(ship, gameboard) {
  return ship.front().y === gameboard.size - 1;
}

function shipAgainstLeftWall(ship) {
  return ship.x === 0;
}

export {
  gameboardShips,
  hasOverlappingShips,
  hasOutOfBoundsShips,
  hasAdjacentShips,
  shipAgainstTopWall,
  shipAgainstRightWall,
  shipAgainstBottomWall,
  shipAgainstLeftWall,
  getCellsAtTheTop,
  getCellsToTheRight,
  getCellsAtTheBottom,
  getCellsToTheLeft,
};
