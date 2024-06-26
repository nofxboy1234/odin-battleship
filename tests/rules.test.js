import Battleship from '../src/logic/battleship';
import Gameboard from '../src/logic/gameboard';
import { noOverlappingShips } from '../src/logic/rules';

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('When no ships overlap one another', () => {
  test.skip('noOverlappingShips() returns true', () => {
    const gameboard = new Gameboard();
    const ships = [];
    const ship = new Battleship();
    ship.setHorizontal();
    ship.place(0, 0, gameboard);
    ships.push(ship);

    expect(noOverlappingShips(ships)).toBe(true);
  });
});
