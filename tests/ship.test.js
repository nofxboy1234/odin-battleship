import Ship from '../src/ship';

test('hit() increases the number of hits', () => {
  const ship1 = new Ship();
  expect(ship1.hit());
});
