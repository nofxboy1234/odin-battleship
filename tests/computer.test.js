import Computer from '../src/logic/computer';
import Gameboard from '../src/logic/gameboard';

import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Submarine from '../src/logic/submarine';
import PatrolBoat from '../src/logic/patrolBoat';
import Player from '../src/logic/player';
import Cell from '../src/logic/cell';
import Ship from '../src/logic/ship';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('When there are 10 ships on the human gameboard', () => {
  let computerGameboard;
  let computer;
  let humanGameboard;
  let human;

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
    computerGameboard = new Gameboard();
    computer = new Computer(computerGameboard, 'computer');
    humanGameboard = new Gameboard();
    human = new Player(humanGameboard, 'human');
    ships = [];

    ship1 = new Battleship();
    ship1.setHorizontal();
    ship1.place(0, 0, humanGameboard);
    ships.push(ship1);

    ship2 = new Destroyer();
    ship2.setVertical();
    ship2.place(3, 2, humanGameboard);
    ships.push(ship2);

    ship3 = new Destroyer();
    ship3.setHorizontal();
    ship3.place(1, 7, humanGameboard);
    ships.push(ship3);

    ship4 = new Submarine();
    ship4.setVertical();
    ship4.place(5, 4, humanGameboard);
    ships.push(ship4);

    ship5 = new Submarine();
    ship5.setHorizontal();
    ship5.place(6, 1, humanGameboard);
    ships.push(ship5);

    ship6 = new Submarine();
    ship6.setHorizontal();
    ship6.place(8, 3, humanGameboard);
    ships.push(ship6);

    ship7 = new PatrolBoat();
    ship7.setHorizontal();
    ship7.place(6, 7, humanGameboard);
    ships.push(ship7);

    ship8 = new PatrolBoat();
    ship8.setHorizontal();
    ship8.place(7, 5, humanGameboard);
    ships.push(ship8);

    ship9 = new PatrolBoat();
    ship9.setHorizontal();
    ship9.place(9, 7, humanGameboard);
    ships.push(ship9);

    ship10 = new PatrolBoat();
    ship10.setHorizontal();
    ship10.place(8, 9, humanGameboard);
    ships.push(ship10);

    human.placeShips(ships);
  });

  describe('getNextShot()', () => {
    describe('when the computer has no target', () => {
      test('it returns a random Cell for the next shot that is available', async () => {
        await expect(
          computer.getNextShot(humanGameboard),
        ).resolves.toBeInstanceOf(Cell);
      });

      test('it does not call ship.potentialHits()', async () => {
        const spy = jest.spyOn(Ship.prototype, 'potentialHits');

        await computer.getNextShot(humanGameboard);
        expect(spy).not.toHaveBeenCalled();
      });
    });

    describe('when the computer has a target', () => {
      test('it returns a random Cell for the next shot that is available', async () => {
        const { ship } = humanGameboard.receiveAttack(3, 4);
        computer.target = ship;

        const nextShot = await computer.getNextShot(humanGameboard);

        const cell1 = new Cell(3, 3);
        const cell2 = new Cell(4, 4);
        const cell3 = new Cell(3, 5);
        const cell4 = new Cell(2, 4);

        expect([cell1, cell2, cell3, cell4]).toContainEqual(nextShot);
      });

      test('it calls ship.potentialHits() once', async () => {
        const { ship } = humanGameboard.receiveAttack(3, 4);
        computer.target = ship;
        const spy = jest.spyOn(ship, 'potentialHits');

        await computer.getNextShot(humanGameboard);
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
