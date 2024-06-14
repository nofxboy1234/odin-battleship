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

test('gameboard.receiveAttack() does not record a miss if a shot is the same as an old hit', () => {
  const ship = new Ship();

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);
  gameboard.receiveAttack(0, 0);
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
  gameboard.placeShip(ship1);
  gameboard.placeShip(ship2);
  gameboard.placeShip(ship3);

  expect(gameboard.getShips()).toEqual([ship1, ship2, ship3]);
});
