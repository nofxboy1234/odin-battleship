import Battleship from './battleship';
import Destroyer from './destroyer';
import PatrolBoat from './patrolBoat';
import Submarine from './submarine';

const gameboardShips = [
  {
    count: 1,
    Battleship,
  },
  {
    count: 2,
    Destroyer,
  },
  {
    count: 3,
    Submarine,
  },
  {
    count: 4,
    PatrolBoat,
  },
];

export default gameboardShips;
