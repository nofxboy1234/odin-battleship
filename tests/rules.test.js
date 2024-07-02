import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Gameboard from '../src/logic/gameboard';
import PatrolBoat from '../src/logic/patrolBoat';
import Submarine from '../src/logic/submarine';
import {
  hasOverlappingShips,
  hasOutOfBoundsShips,
  hasAdjacentShips,
} from '../src/logic/rules';
import Player from '../src/logic/player';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('When there are 10 ships in valid positions', () => {
  let gameboard;
  let player;
  let ships;
  let ship1;
  let ship2;
  let ship3;
  let ship4;
  let ship5;
  let ship6;
  let ship7;
  let ship8;
  let ship9;
  let ship10;

  beforeEach(() => {
    gameboard = new Gameboard();
    player = new Player(gameboard);
    ships = [];

    ship1 = new Battleship();
    ship1.setHorizontal();
    ship1.place(0, 0, gameboard);
    ships.push(ship1);

    ship2 = new Destroyer();
    ship2.setVertical();
    ship2.place(3, 2, gameboard);
    ships.push(ship2);

    ship3 = new Destroyer();
    ship3.setHorizontal();
    ship3.place(1, 7, gameboard);
    ships.push(ship3);

    ship4 = new Submarine();
    ship4.setVertical();
    ship4.place(5, 4, gameboard);
    ships.push(ship4);

    ship5 = new Submarine();
    ship5.setHorizontal();
    ship5.place(6, 1, gameboard);
    ships.push(ship5);

    ship6 = new Submarine();
    ship6.setHorizontal();
    ship6.place(8, 3, gameboard);
    ships.push(ship6);

    ship7 = new PatrolBoat();
    ship7.setHorizontal();
    ship7.place(6, 7, gameboard);
    ships.push(ship7);

    ship8 = new PatrolBoat();
    ship8.setHorizontal();
    ship8.place(7, 5, gameboard);
    ships.push(ship8);

    ship9 = new PatrolBoat();
    ship9.setHorizontal();
    ship9.place(9, 7, gameboard);
    ships.push(ship9);

    ship10 = new PatrolBoat();
    ship10.setHorizontal();
    ship10.place(8, 9, gameboard);
    ships.push(ship10);
  });

  describe('When 1 ship shares some cells with another ship on the same board', () => {
    test('hasOverlappingShips() returns true', () => {
      ship2.place(3, 0, gameboard);
      expect(hasOverlappingShips(ships)).toEqual(true);
    });
  });

  describe('When every cell of every ship is different to every cell of all other ships', () => {
    test('hasOverlappingShips() returns false', () => {
      expect(hasOverlappingShips(ships)).toEqual(false);
    });
  });
});

describe('When all ships are in the bounds of the board', () => {
  test('hasOutOfBoundsShips() returns false', () => {
    const gameboard = new Gameboard();
    const ships = [];

    const battleship1 = new Battleship();
    battleship1.setHorizontal();
    battleship1.place(0, 0, gameboard);
    ships.push(battleship1);

    const destroyer1 = new Destroyer();
    destroyer1.setHorizontal();
    destroyer1.place(7, 3, gameboard);
    ships.push(destroyer1);

    const submarine1 = new Submarine();
    submarine1.setVertical();
    submarine1.place(9, 7, gameboard);
    ships.push(submarine1);

    expect(hasOutOfBoundsShips(ships, gameboard)).toEqual(false);
  });
});

describe('When a horizontal ship is out of bounds of the board', () => {
  test('hasOutOfBoundsShips() returns true', () => {
    const gameboard = new Gameboard();
    const ships = [];

    const battleship1 = new Battleship();
    battleship1.setHorizontal();
    battleship1.place(7, 0, gameboard);
    ships.push(battleship1);

    const destroyer1 = new Destroyer();
    destroyer1.setHorizontal();
    destroyer1.place(7, 3, gameboard);
    ships.push(destroyer1);

    const submarine1 = new Submarine();
    submarine1.setVertical();
    submarine1.place(9, 7, gameboard);
    ships.push(submarine1);

    expect(hasOutOfBoundsShips(ships, gameboard)).toEqual(true);
  });
});

describe('When a vertical ship is out of bounds of the board', () => {
  test('hasOutOfBoundsShips() returns true', () => {
    const gameboard = new Gameboard();
    const ships = [];

    const battleship1 = new Battleship();
    battleship1.setHorizontal();
    battleship1.place(0, 0, gameboard);
    ships.push(battleship1);

    const destroyer1 = new Destroyer();
    destroyer1.setHorizontal();
    destroyer1.place(7, 3, gameboard);
    ships.push(destroyer1);

    const submarine1 = new Submarine();
    submarine1.setVertical();
    submarine1.place(9, 9, gameboard);
    ships.push(submarine1);

    expect(hasOutOfBoundsShips(ships, gameboard)).toEqual(true);
  });
});

describe('horizontal ships: adjacent-right ships', () => {
  describe('When there are 2 horizontal ships, with one ship being adjacent-right to the other', () => {
    test('hasAdjacentShips() returns true', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(5, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(true);
    });
  });

  describe('When there are 2 horizontal ships, with the ships not being adjacent-right to one another', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(6, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 horizontal ships, with the ships not being adjacent-right to one another and one ship against the right wall of the gameboard', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(7, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 horizontal ships, with the ships not being adjacent-right to one another and one ship against the right wall of the gameboard', () => {
    test('hasAdjacentShips() does not call gameboard.offsetCell()', () => {
      const gameboard = new Gameboard();
      const spy = jest.spyOn(gameboard, 'offsetCell');
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(7, 1, gameboard);
      ships.push(destroyer1);

      expect(spy).not.toBeCalled();
    });
  });

  describe('When there is 1 horizontal ship with a margin of at least 1 empty cell around its perimeter', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });
});

describe('horizontal ships: adjacent-top ships', () => {
  describe('When there are 2 horizontal ships, with one ship being adjacent-top to the other', () => {
    test('hasAdjacentShips() returns true', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(1, 2, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(true);
    });
  });

  describe('When there are 2 horizontal ships, with the ships not being adjacent-top to one another', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(1, 3, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 horizontal ships, with the ships not being adjacent-top to one another and one ship against the top wall of the gameboard', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 0, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(1, 2, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 horizontal ships, with the ships not being adjacent-top to one another and one ship against the top wall of the gameboard', () => {
    test('hasAdjacentShips() does not call gameboard.offsetCell()', () => {
      const gameboard = new Gameboard();
      const spy = jest.spyOn(gameboard, 'offsetCell');
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 0, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(1, 2, gameboard);
      ships.push(destroyer1);

      expect(spy).not.toBeCalled();
    });
  });

  describe('When there is 1 horizontal ship with a margin of at least 1 empty cell around its perimeter', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });
});

describe('vertical ships: adjacent-right ships', () => {
  describe('When there are 2 vertical ships, with one ship being adjacent-right to the other', () => {
    test('hasAdjacentShips() returns true', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(2, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(true);
    });
  });

  describe('When there are 2 vertical ships, with the ships not being adjacent-right to one another', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(3, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 vertical ships, with the ships not being adjacent-right to one another and one ship against the right wall of the gameboard', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(9, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 vertical ships, with the ships not being adjacent-right to one another and one ship against the right wall of the gameboard', () => {
    test('hasAdjacentShips() does not call gameboard.offsetCell()', () => {
      const gameboard = new Gameboard();
      const spy = jest.spyOn(gameboard, 'offsetCell');
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setHorizontal();
      destroyer1.place(9, 1, gameboard);
      ships.push(destroyer1);

      expect(spy).not.toBeCalled();
    });
  });

  describe('When there is 1 vertical ship with a margin of at least 1 empty cell around its perimeter', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });
});

describe('vertical ships: adjacent-top ships', () => {
  describe('When there are 2 vertical ships, with one ship being adjacent-top to the other', () => {
    test('hasAdjacentShips() returns true', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(1, 5, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(true);
    });
  });

  describe('When there are 2 vertical ships, with the ships not being adjacent-top to one another', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(3, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 vertical ships, with the ships not being adjacent-top to one another and one ship against the top wall of the gameboard', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 0, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(3, 1, gameboard);
      ships.push(destroyer1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });

  describe('When there are 2 vertical ships, with the ships not being adjacent-top to one another and one ship against the top wall of the gameboard', () => {
    test('hasAdjacentShips() does not call gameboard.offsetCell()', () => {
      const gameboard = new Gameboard();
      const spy = jest.spyOn(gameboard, 'offsetCell');
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setVertical();
      battleship1.place(1, 0, gameboard);
      ships.push(battleship1);

      const destroyer1 = new Destroyer();
      destroyer1.setVertical();
      destroyer1.place(3, 1, gameboard);
      ships.push(destroyer1);

      expect(spy).not.toBeCalled();
    });
  });

  describe('When there is 1 vertical ship with a margin of at least 1 empty cell around its perimeter', () => {
    test('hasAdjacentShips() returns false', () => {
      const gameboard = new Gameboard();
      const ships = [];

      const battleship1 = new Battleship();
      battleship1.setHorizontal();
      battleship1.place(1, 1, gameboard);
      ships.push(battleship1);

      expect(hasAdjacentShips(ships, gameboard)).toEqual(false);
    });
  });
});
