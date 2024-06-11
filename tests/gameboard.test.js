import Ship from '../src/ship';
import Gameboard from '../src/gameboard';

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test('gameboard.placeShip() calls ship.place()', () => {
  const ship = new Ship();
  const spy = jest.spyOn(ship, 'place');

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(spy).toHaveBeenCalled();
});

test('gameboard.receiveAttack() records the coordinates of a missed shot', () => {
  const ship = new Ship();

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(5, 4);

  expect(gameboard.misses).toContainEqual([5, 4]);
});

test('gameboard.receiveAttack() does not record the coordinates of a hit ship as a miss', () => {
  const ship = new Ship();

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);

  expect(gameboard.misses).not.toContainEqual([0, 0]);
});

test('gameboard.receiveAttack() calls ship.hit() when a ship is hit', () => {
  const ship = new Ship();
  const spy = jest.spyOn(ship, 'hit');

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);

  expect(spy).toHaveBeenCalled();
});

test.skip('gameboard.allShipsSunk() returns true when all ships are sunk', () => {
  const ship = new Ship();
  const spy = jest.spyOn(ship, 'hit');

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);

  expect(spy).toHaveBeenCalled();
});
