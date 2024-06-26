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

function hasOverlappingShips(ships) {
  const results = [];

  const ship1 = ships[0];

  return ships.some((ship) => {
    const otherShips = ships.filter((otherShip) => otherShip !== ship);

    const someCellsOverlap = otherShips.some((otherShip) => {
      return otherShip.cells.some((cell) => ship.cells.includes(cell));
    });

    return someCellsOverlap;
  });

  // const ship2 = ships[1];
  // const someCellsOverlap = ship2.cells.some((cell) =>
  //   ship1.cells.includes(cell),
  // );
  // return someCellsOverlap;

  // ------------------------------------

  // const results = [];

  // ships.forEach((ship) => {
  //   const otherShips = ships.filter((otherShip) => otherShip !== ship);

  //   const allCellsDifferent = otherShips.every((otherShip) => {
  //     return otherShip.cells !== ship.cells;
  //   });
  //   results.push(allCellsDifferent);
  // });

  // return results.every((result) => result);
}

export { gameboardShips, hasOverlappingShips };
