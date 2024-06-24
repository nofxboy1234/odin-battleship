import Gameboard from '../src/logic/gameboard';
import Player from '../src/logic/player';
import Ship from '../src/logic/ship';

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

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

test('play() returns a new random shot from an available array of 1 after 1 hit and 2 misses', () => {
  const gameboard = new Gameboard(2);
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard(2);
  const ship = new Ship(1);
  enemyGameboard.placeShip(ship, 0, 0);
  enemyGameboard.receiveAttack(0, 0);
  enemyGameboard.receiveAttack(1, 0);
  enemyGameboard.receiveAttack(0, 1);

  expect(player.play(enemyGameboard)).toEqual([1, 1]);
  expect([
    [0, 0],
    [1, 0],
    [0, 1],
  ]).not.toContainEqual(player.play(enemyGameboard));
});

test('play() returns a new random shot from an available array of 3 after 1 hit', () => {
  const gameboard = new Gameboard(2);
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard(2);
  const ship = new Ship(1);
  enemyGameboard.placeShip(ship, 0, 0);
  enemyGameboard.receiveAttack(0, 0);

  expect([
    [1, 0],
    [0, 1],
    [1, 1],
  ]).toContainEqual(player.play(enemyGameboard));
  expect([[0, 0]]).not.toContainEqual(player.play(enemyGameboard));
});

test('play() returns a new random shot from an available array of 3 after 1 miss', () => {
  const gameboard = new Gameboard(2);
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard(2);
  const ship = new Ship(1);
  enemyGameboard.placeShip(ship, 0, 0);
  enemyGameboard.receiveAttack(0, 1);

  expect([
    [0, 0],
    [1, 0],
    [1, 1],
  ]).toContainEqual(player.play(enemyGameboard));
  expect([[0, 1]]).not.toContainEqual(player.play(enemyGameboard));
});

test('placeShips() to call gameboard.placeShip() 10 times', () => {
  const gameboard = new Gameboard();
  const spy = jest.spyOn(gameboard, 'placeShip');
  const player = new Player(gameboard);
  player.placeShips();

  expect(spy).toHaveBeenCalledTimes(10);
});

test('placeShips() to call gameboard.placeShip() 10 times', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);
  player.placeShips();

  expect(gameboard.getShips().length).toEqual(10);
});
