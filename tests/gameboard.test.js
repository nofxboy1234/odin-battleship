import Ship from '../src/ship';
import Gameboard from '../src/gameboard';

console.log('gameboard');

test('gameboard.placeShip() calls ship.place()', () => {
  const ship = new Ship();
  const place = jest.fn(ship.place);

  const gameboard = new Gameboard();
  gameboard.place(ship, 0, 0);

  expect(place).toHaveBeenCalled();
});
