import Cell from '../src/logic/cell';
import Gameboard from '../src/logic/gameboard';

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

describe('isAgainstTopWall()', () => {
  describe('when a cell is against the top wall of a gameboard', () => {
    test('it returns true', () => {
      const cell = new Cell(6, 0);
      expect(cell.isAgainstTopWall()).toBe(true);
    });
  });

  describe('when a cell is not against the top wall of a gameboard', () => {
    test('it returns false', () => {
      const cell = new Cell(6, 1);
      expect(cell.isAgainstTopWall()).toBe(false);
    });
  });
});

describe('isAgainstRightWall()', () => {
  describe('when a cell is against the right wall of a gameboard', () => {
    test('it returns true', () => {
      const cell = new Cell(9, 1);
      const gameboard = new Gameboard();
      expect(cell.isAgainstRightWall(gameboard)).toBe(true);
    });
  });

  describe('when a cell is not against the right wall of a gameboard', () => {
    test('it returns false', () => {
      const cell = new Cell(8, 1);
      const gameboard = new Gameboard();
      expect(cell.isAgainstRightWall(gameboard)).toBe(false);
    });
  });
});

describe('isAgainstBottomWall()', () => {
  describe('when a cell is against the bottom wall of a gameboard', () => {
    test('it returns true', () => {
      const cell = new Cell(3, 9);
      const gameboard = new Gameboard();
      expect(cell.isAgainstBottomWall(gameboard)).toBe(true);
    });
  });

  describe('when a cell is not against the bottom wall of a gameboard', () => {
    test('it returns false', () => {
      const cell = new Cell(3, 8);
      const gameboard = new Gameboard();
      expect(cell.isAgainstBottomWall(gameboard)).toBe(false);
    });
  });
});

describe('isAgainstLeftWall()', () => {
  describe('when a cell is against the left wall of a gameboard', () => {
    test('it returns true', () => {
      const cell = new Cell(0, 3);
      const gameboard = new Gameboard();
      expect(cell.isAgainstLeftWall(gameboard)).toBe(true);
    });
  });

  describe('when a cell is not against the left wall of a gameboard', () => {
    test('it returns false', () => {
      const cell = new Cell(1, 3);
      expect(cell.isAgainstLeftWall()).toBe(false);
    });
  });
});
