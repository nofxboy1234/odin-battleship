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

test('place() sets the x and y co-ordinates', () => {
  const ship = new Ship(3);
  ship.place(0, 0);
  expect(ship.x).toBe(0);
  expect(ship.y).toBe(0);
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

test('getCells() returns the cells of a gameboard that a ship is composed of', () => {
  const ship = new Ship(3);
  ship.place(0, 0);
  const gameboard = new Gameboard();

  expect(ship.getCells(gameboard)).toEqual([
    new Cell(0, 0),
    new Cell(1, 0),
    new Cell(2, 0),
  ]);
});
