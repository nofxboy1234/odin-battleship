import Gameboard from '../src/logic/gameboard';
import Player from '../src/logic/player';
import Ship from '../src/logic/ship';

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

test('play() returns a new shot', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard();
  const ship = new Ship(3);
  enemyGameboard.placeShip(ship, 0, 0);
  enemyGameboard.receiveAttack(0, 0);
  enemyGameboard.receiveAttack(5, 5);

  expect(player.play(enemyGameboard).length).toBe(2);
});
