import Cell from '../src/logic/cell';
import Gameboard from '../src/logic/gameboard';
import Ship from '../src/logic/ship';

afterEach(() => {
  jest.restoreAllMocks();
});

test('hit() increases the number of hits', () => {
  const ship = new Ship();
  ship.hit(0, 0);
  expect(ship.getHits().length).toEqual(1);
});

test('ships have a length property', () => {
  const ship = new Ship();
  expect(ship).toHaveProperty('length');
});

test('isSunk() returns false when hits does not equal length', () => {
  const ship = new Ship();
  expect(ship.isSunk()).toBe(false);
});

test('isSunk() returns true when hits equals length', () => {
  const ship = new Ship(1);
  ship.hit(0, 0);
  expect(ship.isSunk()).toBe(true);
});

describe('When place() is called on a ship of length 3 with x: 0, y: 0 and a gameboard', () => {
  test('it sets the x and y co-ordinates to 0, 0', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    ship.place(0, 0, gameboard);
    expect(ship.x).toBe(0);
    expect(ship.y).toBe(0);
  });

  test('ship.cells has a length of 3', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    ship.place(0, 0, gameboard);
    expect(ship.cells.length).toBe(3);
  });

  test('it stores the gameboard cells that the ship occupies', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    ship.place(0, 0, gameboard);

    const cell1 = gameboard.getCellAt(0, 0);
    const cell2 = gameboard.getCellAt(1, 0);
    const cell3 = gameboard.getCellAt(2, 0);

    expect(ship.cells).toStrictEqual([cell1, cell2, cell3]);
    expect(ship.cells[0]).toBe(cell1);
    expect(ship.cells[1]).toBe(cell2);
    expect(ship.cells[2]).toBe(cell3);
  });
});

test('getHits() returns an array of 2 hits when ship has 2 hits', () => {
  const ship = new Ship(3);
  ship.hit(0, 0);
  ship.hit(1, 0);

  const cell1 = new Cell(0, 0);
  const cell2 = new Cell(1, 0);

  expect(ship.getHits()).toEqual([cell1, cell2]);
});

test('setVertical() sets orientation property to "vertical"', () => {
  const ship = new Ship(1);
  ship.setVertical();
  expect(ship.orientation).toEqual('vertical');
});

test('setHorizontal() sets orientation property to "horizontal"', () => {
  const ship = new Ship(1);
  ship.setVertical();
  ship.setHorizontal();
  expect(ship.orientation).toEqual('horizontal');
});

test('setRandomOrientation() sets orientation property to "horizontal" or "vertical"', () => {
  const ship = new Ship(1);
  ship.setRandomOrientation();
  expect(['horizontal', 'vertical']).toContainEqual(ship.orientation);
});

test('setRandomOrientation() calls Math.random', () => {
  const ship = new Ship(1);
  const spy = jest.spyOn(Math, 'random');
  ship.setRandomOrientation();
  expect(spy).toHaveBeenCalled();
});

test('setRandomOrientation() calls Math.floor', () => {
  const ship = new Ship(1);
  const spy = jest.spyOn(Math, 'floor');
  ship.setRandomOrientation();
  expect(spy).toHaveBeenCalled();
});

test('setRandomOrientation() sets orientation property to "vertical" when random number is 0.54321', () => {
  const ship = new Ship(1);
  jest.spyOn(Math, 'random').mockReturnValue(0.54321);
  ship.setRandomOrientation();
  expect(ship.orientation).toEqual('vertical');
});

test('setRandomOrientation() sets orientation property to "horizontal" when random number is 0.321', () => {
  const ship = new Ship(1);
  jest.spyOn(Math, 'random').mockReturnValue(0.321);
  ship.setRandomOrientation();
  expect(ship.orientation).toEqual('horizontal');
});

test('front() returns the Cell at the front of a ship', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  ship.place(3, 1, gameboard);
  const frontCell = new Cell(5, 1);

  expect(ship.front()).toEqual(frontCell);
});

test('back() returns the Cell at the back of a ship', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  ship.place(3, 1, gameboard);
  const backCell = new Cell(3, 1);

  expect(ship.back()).toEqual(backCell);
});
