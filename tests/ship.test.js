import Ship from '../src/ship';

test('hit() increases the number of hits', () => {
  const ship1 = new Ship();
  ship1.hit();
  expect(ship1.hits).toEqual(1);
});

test('ships have a length property', () => {
  const ship1 = new Ship();
  expect(ship1).toHaveProperty('length');
});

test('isSunk() calculates whether a ship is considered sunk based on its length and the number of hits it has received', () => {
  const ship1 = new Ship();
  expect(ship1.isSunk()).toBe(false);
});
