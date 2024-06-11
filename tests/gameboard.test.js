import Ship from '../src/ship';
import Gameboard from '../src/gameboard';

jest.mock('../src/ship');

test('gameboard.placeShip() calls ship.place()', () => {
  const ship = new Ship();
  // const place = jest.fn(ship.place);
  // ship.place.mockImplementation();

  const gameboard = new Gameboard();
  gameboard.placeShip(ship, 0, 0);

  // place();

  expect(ship.place).toHaveBeenCalled();
});
