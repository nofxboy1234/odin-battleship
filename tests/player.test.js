import Cell from '../src/logic/cell';
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

test('play() returns a Cell', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard();

  expect(player.play(enemyGameboard)).toBeInstanceOf(Cell);
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

  const cell4 = new Cell(1, 1);

  expect(player.play(enemyGameboard)).toEqual(cell4);
});

test('play() returns a new random shot from an available array of 3 after 1 hit', () => {
  const gameboard = new Gameboard(2);
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard(2);
  const ship = new Ship(1);
  enemyGameboard.placeShip(ship, 0, 0);
  enemyGameboard.receiveAttack(0, 0);

  const cell1 = new Cell(0, 0);
  const cell2 = new Cell(1, 0);
  const cell3 = new Cell(0, 1);
  const cell4 = new Cell(1, 1);

  expect([cell2, cell3, cell4]).toContainEqual(player.play(enemyGameboard));
  expect([cell1]).not.toContainEqual(player.play(enemyGameboard));
});

test('play() returns a new random shot from an available array of 3 after 1 miss', () => {
  const gameboard = new Gameboard(2);
  const player = new Player(gameboard);
  const enemyGameboard = new Gameboard(2);
  const ship = new Ship(1);
  enemyGameboard.placeShip(ship, 0, 0);
  enemyGameboard.receiveAttack(0, 1);

  const cell1 = new Cell(0, 0);
  const cell2 = new Cell(1, 0);
  const cell3 = new Cell(0, 1);
  const cell4 = new Cell(1, 1);

  expect([cell1, cell2, cell4]).toContainEqual(player.play(enemyGameboard));
  expect([cell3]).not.toContainEqual(player.play(enemyGameboard));
});

test('placeShipsRandomly() adds 10 ships to the player gameboard', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);
  player.placeShipsRandomly();

  expect(gameboard.getShips().length).toEqual(10);
});

test.skip('placeShipsRandomly() calls gameboard.getRandomPosition() 10 times', () => {
  const gameboard = new Gameboard();
  const spy = jest.spyOn(gameboard, 'getRandomPosition');
  const player = new Player(gameboard);
  player.placeShipsRandomly();

  expect(spy).toHaveBeenCalledTimes(10);
});

test.skip('placeShipsRandomly() calls gameboard.placeShip() 10 times', () => {
  const gameboard = new Gameboard();
  const spy = jest.spyOn(gameboard, 'placeShip');
  const player = new Player(gameboard);
  player.placeShipsRandomly();

  expect(spy).toHaveBeenCalledTimes(10);
});
