import Cell from '../src/logic/cell';
import Gameboard from '../src/logic/gameboard';
import Player from '../src/logic/player';
import Ship from '../src/logic/ship';
import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Submarine from '../src/logic/submarine';
import PatrolBoat from '../src/logic/patrolBoat';

import {
  hasAdjacentShips,
  hasOutOfBoundsShips,
  hasOverlappingShips,
} from '../src/logic/rules';

jest.mock('../src/logic/rules', () => ({
  ...jest.requireActual('../src/logic/rules'),
  hasOverlappingShips: jest.fn(),
  hasAdjacentShips: jest.fn(),
  hasOutOfBoundsShips: jest.fn(),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe('placeRandomShips()', () => {
  // describe('adds 10 ships to the player gameboard', () => {
  //   const gameboard = new Gameboard();
  //   const player = new Player(gameboard);
  //   player.placeRandomShips();
  //   expect(gameboard.getShips().length).toEqual(10);
  // });

  describe('when there are overlapping ships once', () => {
    test('it adds 10 ships to the player gameboard', () => {
      hasOverlappingShips.mockReturnValue(false).mockReturnValueOnce(true);
      hasOutOfBoundsShips.mockReturnValue(false);
      hasAdjacentShips.mockReturnValue(false);
      const gameboard = new Gameboard();
      const player = new Player(gameboard);
      player.placeRandomShips();
      expect(gameboard.getShips().length).toEqual(10);
    });
  });
});
