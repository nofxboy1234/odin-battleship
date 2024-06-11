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
