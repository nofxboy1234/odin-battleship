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

function noOverlappingShips(ships) {
  return false;

  const results = [];

  ships.forEach((ship) => {
    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const allCellsDifferent = otherShips.every((otherShip) => {
      return otherShip.cells !== ship.cells;
    });
    results.push(allCellsDifferent);
  });

  return results.every((result) => result);
}

export { gameboardShips, noOverlappingShips };
