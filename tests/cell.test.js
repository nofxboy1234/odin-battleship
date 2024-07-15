import Cell from '../src/logic/cell';

test('offset() returns a new Cell at the specified positive x and y offset', () => {
  const cell = new Cell(3, 4);
  const offsetCell = new Cell(4, 6);

  expect(cell.offset(1, 2)).toEqual(offsetCell);
});

test('offset() returns a new Cell at the specified negative x and y offset', () => {
  const cell = new Cell(7, 9);
  const offsetCell = new Cell(6, 1);

  expect(cell.offset(-1, -8)).toEqual(offsetCell);
});
