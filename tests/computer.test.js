import Computer from '../src/logic/computer';
import Gameboard from '../src/logic/gameboard';

import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Submarine from '../src/logic/submarine';
import PatrolBoat from '../src/logic/patrolBoat';
import Player from '../src/logic/player';
import Cell from '../src/logic/cell';

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

  describe('play()', () => {
    describe('when the computer has no target', () => {
      test('it returns a random Cell for the next shot', async () => {
        await expect(computer.play(humanGameboard)).resolves.toBeInstanceOf(
          Cell,
        );
      });

      test.skip('it returns a random Cell for the next shot that is available', async () => {
        const misses = [];
        const miss1 = new Cell(0, 0);
        misses.push(miss1);
        const miss2 = new Cell(5, 5);
        misses.push(miss2);
        const miss3 = new Cell(9, 9);
        misses.push(miss3);

        humanGameboard.receiveAttack(4, 0);
        humanGameboard.receiveAttack(8, 5);

        const result = await computer.play(humanGameboard);

        expect(misses).toContainEqual(result);
      });
    });
  });
});
