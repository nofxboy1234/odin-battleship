import Gameboard from '../src/logic/gameboard';
import Player from '../src/logic/player';
import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Submarine from '../src/logic/submarine';
import PatrolBoat from '../src/logic/patrolBoat';
import Ship from '../src/logic/ship';

afterEach(() => {
  jest.restoreAllMocks();
});

test('player contains a gameboard', () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);

  expect(player).toHaveProperty('gameboard');
});

describe('When there are 10 ships', () => {
  let gameboard;
  let player;
  let ships;
  let ship1;
  let ship2;
  let ship3;
  let ship4;
  let ship5;
  let ship6;
  let ship7;
  let ship8;
  let ship9;
  let ship10;

  beforeEach(() => {
    gameboard = new Gameboard();
    player = new Player(gameboard);
    ships = [];

    ship1 = new Battleship();
    ship1.setHorizontal();
    ship1.place(0, 0, gameboard);
    ships.push(ship1);

    ship2 = new Destroyer();
    ship2.setVertical();
    ship2.place(3, 2, gameboard);
    ships.push(ship2);

    ship3 = new Destroyer();
    ship3.setHorizontal();
    ship3.place(1, 7, gameboard);
    ships.push(ship3);

    ship4 = new Submarine();
    ship4.setVertical();
    ship4.place(5, 4, gameboard);
    ships.push(ship4);

    ship5 = new Submarine();
    ship5.setHorizontal();
    ship5.place(6, 1, gameboard);
    ships.push(ship5);

    ship6 = new Submarine();
    ship6.setHorizontal();
    ship6.place(8, 3, gameboard);
    ships.push(ship6);

    ship7 = new PatrolBoat();
    ship7.setHorizontal();
    ship7.place(6, 7, gameboard);
    ships.push(ship7);

    ship8 = new PatrolBoat();
    ship8.setHorizontal();
    ship8.place(7, 5, gameboard);
    ships.push(ship8);

    ship9 = new PatrolBoat();
    ship9.setHorizontal();
    ship9.place(9, 7, gameboard);
    ships.push(ship9);

    ship10 = new PatrolBoat();
    ship10.setHorizontal();
    ship10.place(8, 9, gameboard);
    ships.push(ship10);
  });

  describe('When all ships are in valid positions', () => {
    test('placeShips() adds 10 ships to the player gameboard', () => {
      player.placeShips(ships);
      expect(gameboard.getShips().length).toEqual(10);
    });

    test('placeShips() returns true', () => {
      expect(player.placeShips(ships)).toEqual(true);
    });

    test('placeShips() calls gameboard.placeShip() 10 times', () => {
      const spy = jest.spyOn(gameboard, 'placeShip');
      player.placeShips(ships);
      expect(spy).toHaveBeenCalledTimes(10);
    });
  });

  describe('When 1 ship is in an invalid position', () => {
    beforeEach(() => {
      ship2.place(3, 1, gameboard);
    });

    test('placeShips() does not add 10 ships to the player gameboard', () => {
      player.placeShips(ships);
      expect(gameboard.getShips().length).toEqual(0);
    });

    test('placeShips() returns true', () => {
      expect(player.placeShips(ships)).toEqual(false);
    });

    test('placeShips() calls gameboard.placeShip() 0 times', () => {
      const spy = jest.spyOn(gameboard, 'placeShip');
      player.placeShips(ships);
      expect(spy).not.toHaveBeenCalled();
    });
  });
});

describe('resetTarget()', () => {
  test('it sets the target to undefined', () => {
    const gameboard = new Gameboard();
    const player = new Player(gameboard, 'player');
    const target = new Ship();
    player.target = target;

    expect(player.target).toBe(target);
    player.resetTarget();
    expect(player.target).toBe(undefined);
  });
});
