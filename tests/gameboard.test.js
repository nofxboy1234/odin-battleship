import Ship from '../src/logic/ship';
import Gameboard from '../src/logic/gameboard';
import Cell from '../src/logic/cell';

import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Submarine from '../src/logic/submarine';
import PatrolBoat from '../src/logic/patrolBoat';
import Player from '../src/logic/player';

afterEach(() => {
  jest.restoreAllMocks();
});

test('new Gameboard() creates a gameboard with a squared number of cells', () => {
  const gameboard = new Gameboard(2);

  expect(gameboard.cells).toEqual([
    new Cell(0, 0),
    new Cell(1, 0),
    new Cell(0, 1),
    new Cell(1, 1),
  ]);
});

test('gameboard.placeShip() calls ship.place()', () => {
  const ship = new Ship(1);
  const spy = jest.spyOn(ship, 'place');

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(spy).toHaveBeenCalled();
});

test('gameboard.placeShip() pushes the given ship to its .#ships property', () => {
  const ship = new Ship(2);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(gameboard.getShips()).toContain(ship);
});

test('gameboard.receiveAttack() records the coordinates of a missed shot', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(5, 4);
  const cell = gameboard.getCellAt(5, 4);

  expect(gameboard.getMisses()).toContain(cell);
});

test('gameboard.receiveAttack() does not record a miss as a hit', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(5, 4);
  const cell = gameboard.getCellAt(5, 4);

  expect(gameboard.getHits()).not.toContain(cell);
});

test('gameboard.receiveAttack() returns a result object with object.hit === false when a shot misses', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(gameboard.receiveAttack(5, 4)).toStrictEqual({
    hit: false,
    ship: undefined,
  });
});

test('gameboard.receiveAttack() records the coordinates of a shot that hits', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);
  const cell = gameboard.getCellAt(0, 0);

  expect(gameboard.getHits()).toContain(cell);
});

test('gameboard.receiveAttack() does not record a hit as a miss', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);
  const cell = gameboard.getCellAt(0, 0);

  expect(gameboard.getMisses()).not.toContain(cell);
});

test('gameboard.receiveAttack() returns a result object with object.hit === true when a shot hits', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(gameboard.receiveAttack(0, 0)).toStrictEqual({
    hit: true,
    ship: ship,
  });
});

test('gameboard.allShipsSunk() returns false when all ships are not sunk', () => {
  const ship1 = new Ship(1);
  const ship2 = new Ship(2);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 0, 0);
  gameboard.placeShip(ship2, 1, 2);

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 2);

  expect(gameboard.allShipsSunk()).toBe(false);
});

test('gameboard.allShipsSunk() returns true when all ships are sunk', () => {
  const ship1 = new Ship(1);
  const ship2 = new Ship(2);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 0, 0);
  gameboard.placeShip(ship2, 1, 2);

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 2);
  gameboard.receiveAttack(2, 2);

  expect(gameboard.allShipsSunk()).toBe(true);
});

test('gameboard.getShips() returns an empty array when gameboard is empty', () => {
  const gameboard = new Gameboard();
  expect(gameboard.getShips()).toEqual([]);
});

test('gameboard.getShips() returns an array of 3 ships when gameboard has 3 ships', () => {
  const ship1 = new Ship(1);
  const ship2 = new Ship(2);
  const ship3 = new Ship(3);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 0, 0);
  gameboard.placeShip(ship2, 4, 0);
  gameboard.placeShip(ship3, 8, 0);

  expect(gameboard.getShips()).toEqual([ship1, ship2, ship3]);
});

test('gameboard.getMisses() returns an empty array when gameboard is empty', () => {
  const gameboard = new Gameboard();
  expect(gameboard.getMisses()).toEqual([]);
});

test('gameboard.getMisses() returns an empty array when a shot hits', () => {
  const ship1 = new Ship(3);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 0, 0);
  gameboard.receiveAttack(0, 0);

  expect(gameboard.getMisses()).toEqual([]);
});

test('gameboard.getMisses() returns an array of 1 when a shot misses', () => {
  const ship1 = new Ship(3);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 0, 0);
  gameboard.receiveAttack(3, 0);

  const cell = new Cell(3, 0);

  expect(gameboard.getMisses()).toEqual([cell]);
});

test('gameboard.getHits() returns an empty array when gameboard is empty', () => {
  const gameboard = new Gameboard();
  expect(gameboard.getHits()).toEqual([]);
});

test('gameboard.getHits() returns an array of 1 when a shot hits', () => {
  const ship1 = new Ship(3);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 0, 0);
  gameboard.receiveAttack(1, 0);

  const cell = new Cell(1, 0);

  expect(gameboard.getHits()).toEqual([cell]);
});

test('gameboard.isShipOnCell() returns true if a ship is covering a cell', () => {
  const ship1 = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 1, 2);

  expect(gameboard.isShipOnCell(1, 2)).toBe(true);
});

test('gameboard.isShipOnCell() returns false if a ship is not covering a cell', () => {
  const ship1 = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship1, 1, 2);

  expect(gameboard.isShipOnCell(0, 0)).toBe(false);
});

test('gameboard.isExistingShot() returns false if a shot does not exist for the given co-ords', () => {
  const ship = new Ship(3);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 5, 5);
  gameboard.receiveAttack(2, 3);

  expect(gameboard.isExistingShot(5, 5)).toBe(false);
});

test('gameboard.isExistingShot() returns true if a shot exists for the given co-ords', () => {
  const ship = new Ship(3);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 5, 5);
  gameboard.receiveAttack(5, 5);

  expect(gameboard.isExistingShot(5, 5)).toBe(true);
});

test('gameboard.cells returns an array of all the cells in its grid', () => {
  const gameboard = new Gameboard();

  expect(gameboard.cells.length).toEqual(100);
});

test('gameboard.getRandomPosition() returns an array of length 2', () => {
  const gameboard = new Gameboard();

  expect(gameboard.getRandomPosition().length).toEqual(2);
});

test('gameboard.getRandomPosition() to call Math.random', () => {
  const gameboard = new Gameboard();
  const spy = jest.spyOn(Math, 'random');
  gameboard.getRandomPosition();
  expect(spy).toHaveBeenCalled();
});

test('gameboard.getRandomPosition() to call Math.floor', () => {
  const gameboard = new Gameboard();
  const spy = jest.spyOn(Math, 'floor');
  gameboard.getRandomPosition();
  expect(spy).toHaveBeenCalled();
});

test('gameboard.getCellAt() returns the cell at a position', () => {
  const gameboard = new Gameboard();
  const cell = new Cell(0, 0);
  expect(gameboard.getCellAt(0, 0)).toEqual(cell);
});

test('offsetCell() returns a Cell on a board, offset from the given Cell by x and y', () => {
  const board = new Gameboard();
  const cell = board.getCellAt(3, 4);
  const offsetCell = board.getCellAt(4, 6);

  expect(board.offsetCell(cell, 1, 2)).toBe(offsetCell);
});

describe('When a board has ships and misses stored', () => {
  test('reset() resets `ships` property', () => {
    const board = new Gameboard();
    const ship = new Ship(3);
    board.placeShip(ship, 0, 0);
    board.receiveAttack(5, 5);
    board.reset();

    expect(board.getShips()).toEqual([]);
  });

  test('reset() resets `misses` property', () => {
    const board = new Gameboard();
    const ship = new Ship(3);
    board.placeShip(ship, 0, 0);
    board.receiveAttack(5, 5);
    board.reset();

    expect(board.getMisses()).toEqual([]);
  });
});

describe('getAllSunkShips()', () => {
  describe('when there are no sunk ships', () => {
    test('it returns an empty array', () => {
      const gameboard = new Gameboard();
      expect(gameboard.getAllSunkShips()).toEqual([]);
    });
  });

  describe('when there is 1 sunk ship', () => {
    test('it returns an array of 1 ship', () => {
      const gameboard = new Gameboard();
      const ship = new Ship(2);
      gameboard.placeShip(ship, 3, 4);
      gameboard.receiveAttack(3, 4);
      gameboard.receiveAttack(4, 4);
      expect(gameboard.getAllSunkShips()).toEqual([ship]);
    });
  });

  describe('when there are 2 sunk ships', () => {
    test('it returns an array of 2 ships', () => {
      const gameboard = new Gameboard();

      const ship1 = new Ship(2);
      gameboard.placeShip(ship1, 3, 4);
      gameboard.receiveAttack(3, 4);
      gameboard.receiveAttack(4, 4);

      const ship2 = new Ship(1);
      gameboard.placeShip(ship2, 0, 0);
      gameboard.receiveAttack(0, 0);

      expect(gameboard.getAllSunkShips()).toEqual([ship1, ship2]);
    });
  });
});

describe('getShipAdjacentCells()', () => {
  describe('when the ship is not against any walls of the board', () => {
    test('it returns an array of all the cells adjacent to the ship cells', () => {
      const gameboard = new Gameboard();
      const ship = new Ship(2);
      gameboard.placeShip(ship, 3, 3);

      const cell1 = new Cell(2, 2);
      const cell2 = new Cell(2, 3);
      const cell3 = new Cell(2, 4);

      const cell4 = new Cell(3, 2);
      const cell5 = new Cell(3, 4);

      const cell6 = new Cell(4, 2);
      const cell7 = new Cell(4, 4);

      const cell8 = new Cell(5, 2);
      const cell9 = new Cell(5, 3);
      const cell10 = new Cell(5, 4);

      expect(gameboard.getShipAdjacentCells(ship)).toEqual([
        cell1,
        cell2,
        cell3,
        cell4,
        cell5,
        cell6,
        cell7,
        cell8,
        cell9,
        cell10,
      ]);
    });
  });

  describe('when the ship is against a wall of the board', () => {
    test('it returns an array of all the cells adjacent to the ship cells', () => {
      const gameboard = new Gameboard();
      const ship = new Ship(2);
      gameboard.placeShip(ship, 0, 0);

      const cell1 = new Cell(0, 1);
      const cell2 = new Cell(1, 1);

      const cell3 = new Cell(2, 0);
      const cell4 = new Cell(2, 1);

      expect(gameboard.getShipAdjacentCells(ship)).toEqual([
        cell1,
        cell2,
        cell3,
        cell4,
      ]);
    });
  });
});

describe('getAllSunkShipsAdjacentCells()', () => {
  describe('when there are no sunk ships', () => {
    test('it returns an empty array', () => {
      const gameboard = new Gameboard();
      expect(gameboard.getAllSunkShipsAdjacentCells()).toEqual([]);
    });
  });

  describe('when there is 1 sunk ship', () => {
    test('it returns an array of all the cells adjacent to the ship cells', () => {
      const gameboard = new Gameboard();
      const ship = new Ship(2);
      gameboard.placeShip(ship, 3, 3);

      const cell1 = new Cell(2, 2);
      const cell2 = new Cell(2, 3);
      const cell3 = new Cell(2, 4);

      const cell4 = new Cell(3, 2);
      const cell5 = new Cell(3, 4);

      const cell6 = new Cell(4, 2);
      const cell7 = new Cell(4, 4);

      const cell8 = new Cell(5, 2);
      const cell9 = new Cell(5, 3);
      const cell10 = new Cell(5, 4);

      expect(gameboard.getShipAdjacentCells(ship)).toEqual([
        cell1,
        cell2,
        cell3,
        cell4,
        cell5,
        cell6,
        cell7,
        cell8,
        cell9,
        cell10,
      ]);
    });
  });

  describe('when there are 2 sunk ships', () => {
    test('it returns an array of all the cells adjacent to the 2 ships cells', () => {
      const gameboard = new Gameboard();

      const ship1 = new Ship(1);
      gameboard.placeShip(ship1, 0, 0);
      gameboard.receiveAttack(0, 0);

      const ship2 = new Ship(1);
      gameboard.placeShip(ship2, 3, 1);
      gameboard.receiveAttack(3, 1);

      const cell1 = new Cell(0, 1);
      const cell2 = new Cell(1, 0);
      const cell3 = new Cell(1, 1);

      const cell4 = new Cell(2, 0);
      const cell5 = new Cell(2, 1);
      const cell6 = new Cell(2, 2);
      const cell7 = new Cell(3, 0);
      const cell8 = new Cell(3, 2);
      const cell9 = new Cell(4, 0);
      const cell10 = new Cell(4, 1);
      const cell11 = new Cell(4, 2);

      expect(gameboard.getAllSunkShipsAdjacentCells()).toEqual([
        cell1,
        cell2,
        cell3,
        cell4,
        cell5,
        cell6,
        cell7,
        cell8,
        cell9,
        cell10,
        cell11,
      ]);
    });
  });
});

describe('When there are 10 ships on the human gameboard', () => {
  let humanGameboard;
  let human;

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
    humanGameboard = new Gameboard();
    human = new Player(humanGameboard, 'human');

    ships = [];

    ship1 = new Battleship();
    ship1.setHorizontal();
    ship1.place(0, 0, humanGameboard);
    ships.push(ship1);

    ship2 = new Destroyer();
    ship2.setVertical();
    ship2.place(3, 2, humanGameboard);
    ships.push(ship2);

    ship3 = new Destroyer();
    ship3.setHorizontal();
    ship3.place(1, 7, humanGameboard);
    ships.push(ship3);

    ship4 = new Submarine();
    ship4.setVertical();
    ship4.place(5, 4, humanGameboard);
    ships.push(ship4);

    ship5 = new Submarine();
    ship5.setHorizontal();
    ship5.place(6, 1, humanGameboard);
    ships.push(ship5);

    ship6 = new Submarine();
    ship6.setHorizontal();
    ship6.place(8, 3, humanGameboard);
    ships.push(ship6);

    ship7 = new PatrolBoat();
    ship7.setHorizontal();
    ship7.place(6, 7, humanGameboard);
    ships.push(ship7);

    ship8 = new PatrolBoat();
    ship8.setHorizontal();
    ship8.place(7, 5, humanGameboard);
    ships.push(ship8);

    ship9 = new PatrolBoat();
    ship9.setHorizontal();
    ship9.place(9, 7, humanGameboard);
    ships.push(ship9);

    ship10 = new PatrolBoat();
    ship10.setHorizontal();
    ship10.place(8, 9, humanGameboard);
    ships.push(ship10);

    human.placeShips(ships);
  });

  describe('getAvailableCells()', () => {
    describe('when there are no shots on the board', () => {
      test('it returns an array of all Cells on the board', async () => {
        expect(humanGameboard.getAvailableCells()).toEqual(
          humanGameboard.cells,
        );
      });
    });

    describe('when there is a miss on the board', () => {
      test('it returns an array of all Cells on the board excluding the miss', () => {
        const miss = new Cell(4, 0);
        humanGameboard.receiveAttack(miss.x, miss.y);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(miss);
      });

      test('it returns an array of length 99', () => {
        const miss = new Cell(4, 0);
        humanGameboard.receiveAttack(miss.x, miss.y);
        expect(humanGameboard.getAvailableCells().length).toBe(99);
      });
    });

    describe('when there is a hit on the board', () => {
      test('it returns an array of all Cells on the board excluding the hit', () => {
        const hit = new Cell(1, 0);
        humanGameboard.receiveAttack(hit.x, hit.y);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit);
      });

      test('it returns an array of length 99', () => {
        const miss = new Cell(4, 0);
        humanGameboard.receiveAttack(miss.x, miss.y);
        expect(humanGameboard.getAvailableCells().length).toBe(99);
      });
    });

    describe('when there is a sunk ship on the board', () => {
      let hit1;
      let hit2;
      let hit3;
      let hit4;

      beforeEach(() => {
        hit1 = new Cell(0, 0);
        humanGameboard.receiveAttack(hit1.x, hit1.y);
        hit2 = new Cell(1, 0);
        humanGameboard.receiveAttack(hit2.x, hit2.y);
        hit3 = new Cell(2, 0);
        humanGameboard.receiveAttack(hit3.x, hit3.y);
        hit4 = new Cell(3, 0);
        humanGameboard.receiveAttack(hit4.x, hit4.y);
      });

      test('it returns an array of all Cells on the board excluding the sunk ship cells', () => {
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit1);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit2);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit3);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit4);
      });

      test('it returns an array of all Cells on the board excluding the sunk ship adjacent cells', () => {
        const adjacentCell1 = new Cell(0, 1);
        const adjacentCell2 = new Cell(1, 1);
        const adjacentCell3 = new Cell(2, 1);
        const adjacentCell4 = new Cell(3, 1);
        const adjacentCell5 = new Cell(4, 0);
        const adjacentCell6 = new Cell(4, 1);

        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell1,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell2,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell3,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell4,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell5,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell6,
        );
      });

      test('it returns an array of length 90', () => {
        expect(humanGameboard.getAvailableCells().length).toBe(90);
      });
    });

    describe('when there is a miss, a hit and a sunk ship on the board', () => {
      let miss;
      let hit0;

      let hit1;
      let hit2;
      let hit3;
      let hit4;

      beforeEach(() => {
        miss = new Cell(9, 5);
        humanGameboard.receiveAttack(miss.x, miss.y);
        hit0 = new Cell(8, 3);
        humanGameboard.receiveAttack(hit0.x, hit0.y);

        hit1 = new Cell(0, 0);
        humanGameboard.receiveAttack(hit1.x, hit1.y);
        hit2 = new Cell(1, 0);
        humanGameboard.receiveAttack(hit2.x, hit2.y);
        hit3 = new Cell(2, 0);
        humanGameboard.receiveAttack(hit3.x, hit3.y);
        hit4 = new Cell(3, 0);
        humanGameboard.receiveAttack(hit4.x, hit4.y);
      });

      test('it returns an array of all Cells on the board excluding the miss', () => {
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(miss);
      });

      test('it returns an array of all Cells on the board excluding the hit', () => {
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit0);
      });

      test('it returns an array of all Cells on the board excluding the sunk ship cells', () => {
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit1);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit2);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit3);
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(hit4);
      });

      test('it returns an array of all Cells on the board excluding the sunk ship adjacent cells', () => {
        const adjacentCell1 = new Cell(0, 1);
        const adjacentCell2 = new Cell(1, 1);
        const adjacentCell3 = new Cell(2, 1);
        const adjacentCell4 = new Cell(3, 1);
        const adjacentCell5 = new Cell(4, 0);
        const adjacentCell6 = new Cell(4, 1);

        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell1,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell2,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell3,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell4,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell5,
        );
        expect(humanGameboard.getAvailableCells()).not.toContainEqual(
          adjacentCell6,
        );
      });

      test('it returns an array of length 88', () => {
        expect(humanGameboard.getAvailableCells().length).toBe(88);
      });
    });
  });
});
