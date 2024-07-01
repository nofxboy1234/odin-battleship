import Ship from '../src/logic/ship';
import Gameboard from '../src/logic/gameboard';
import Cell from '../src/logic/cell';

afterEach(() => {
  // restore the spy created with spyOn
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

  // expect(gameboard.cells).toEqual([
  //   [0, 0],
  //   [1, 0],
  //   [0, 1],
  //   [1, 1],
  // ]);
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

  const cell = new Cell(5, 4);

  expect(gameboard.getMisses()).toContainEqual(cell);
});

test('gameboard.receiveAttack() does not record the coordinates of a hit ship as a miss', () => {
  const ship = new Ship(1);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);

  expect(gameboard.getMisses()).not.toContainEqual([0, 0]);
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

test('gameboard.getShipOnCell() returns the ship that is covering a cell', () => {
  const ship = new Ship(2);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(gameboard.getShipOnCell(0, 0)).toBe(ship);
});

test('gameboard.getShipOnCell() returns the ship that is covering a cell', () => {
  const ship = new Ship(2);

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(gameboard.getShipOnCell(1, 0)).toBe(ship);
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
