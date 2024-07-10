import Cell from '../src/logic/cell';
import Computer from '../src/logic/computer';
import Gameboard from '../src/logic/gameboard';
import Human from '../src/logic/human';
import Shot from '../src/logic/shot';

describe('isValid()', () => {
  describe('when a shot is valid', () => {
    test('it returns true', () => {
      const cell = new Cell(0, 0);
      const enemyGameboard = new Gameboard();
      const enemy = new Computer(enemyGameboard, 'enemy');
      const humanGameboard = new Gameboard();
      const human = new Human(humanGameboard, 'human');

      const clickData = {
        cell: cell,
        gameboard: {
          controller: enemyGameboard,
          owner: enemy,
          disabled: false,
        },
        pointerType: 'mouse',
        humanPlayer: human,
        enemyPlayer: enemy,
      };

      const shot = new Shot(clickData);

      expect(shot.isValid()).toBe(true);
    });
  });
});
