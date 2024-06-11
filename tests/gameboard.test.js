import Ship from '../src/ship';
import Gameboard from '../src/gameboard';

jest.mock('../src/ship');

test('gameboard.placeShip() calls ship.place()', () => {
  const ship = new Ship();
  // ship.place.mockImplementation(() => console.log('mock implementation'));
  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  expect(ship.place).toHaveBeenCalled();
});

test('gameboard.receiveAttack() records the coordinates of a missed shot', () => {
  // const ship = new Ship();
  // ship.place.mockImplementation(() => console.log('mock implementation'));
  const gameboard = new Gameboard();
  gameboard.receiveAttack(5, 4);

  expect(gameboard.misses).toContainEqual([5, 4]);
});
