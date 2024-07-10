import Cell from '../src/logic/cell';
import Gameboard from '../src/logic/gameboard';
import Player from '../src/logic/player';
import ShotChecker from '../src/shotChecker';

describe('check()', () => {
  describe('when a shot is valid', () => {
    test('it returns an object specifying that the shot is valid', () => {
      const cell = new Cell(0, 0);
      const enemyGameboard = new Gameboard();
      const enemy = new Player(enemyGameboard, 'enemy');
      const humanGameboard = new Gameboard();
      const human = new Player(humanGameboard, 'human');

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

      const shotChecker = new ShotChecker(clickData);

      const result = {
        clicker: human,
        valid: true,
      };

      expect(shotChecker.check()).toEqual(result);
    });
  });
});
