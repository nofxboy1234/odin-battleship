import Gameboard from '../src/logic/gameboard';
import Player from '../src/logic/player';

test('player contains a gameboard', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);

  expect(player).toHaveProperty('gameboard');
});

test('play() returns an array of length 2', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard();

  expect(player.play(enemyGameboard).length).toBe(2);
});
