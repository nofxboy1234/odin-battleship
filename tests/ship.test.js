import Ship from '../src/logic/ship';

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

test('place() sets the x and y co-ordinates', () => {
  // [0, 0] [1, 0], [2, 0]
  const ship = new Ship(3);
  ship.place(0, 0);
  expect(ship.x).toBe(0);
  expect(ship.y).toBe(0);
});

test('getHits() returns an array of 2 hits when ship has 2 hits', () => {
  const ship = new Ship(3);
  ship.hit(0, 0);
  ship.hit(1, 0);

  expect(ship.getHits()).toEqual([
    [0, 0],
    [1, 0],
  ]);
});
