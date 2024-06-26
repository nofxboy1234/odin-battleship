import Battleship from '../src/logic/battleship';
import Destroyer from '../src/logic/destroyer';
import Gameboard from '../src/logic/gameboard';
import PatrolBoat from '../src/logic/patrolBoat';
import { hasOverlappingShips } from '../src/logic/rules';
import Submarine from '../src/logic/submarine';

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('When 2 ships have the same cells', () => {
  test('hasOverlappingShips() returns true', () => {
    const gameboard = new Gameboard();
    const ships = [];

    const battleship1 = new Battleship();
    battleship1.setHorizontal();
    battleship1.place(0, 0, gameboard);
    ships.push(battleship1);

    const destroyer1 = new Destroyer();
    destroyer1.setHorizontal();
    destroyer1.place(0, 0, gameboard);
    ships.push(destroyer1);

    const destroyer2 = new Destroyer();
    destroyer2.setHorizontal();
    destroyer2.place(0, 2, gameboard);
    ships.push(destroyer2);

    const submarine1 = new Submarine();
    submarine1.setHorizontal();
    submarine1.place(0, 3, gameboard);
    ships.push(submarine1);

    const submarine2 = new Submarine();
    submarine2.setHorizontal();
    submarine2.place(0, 4, gameboard);
    ships.push(submarine2);

    const submarine3 = new Submarine();
    submarine3.setHorizontal();
    submarine3.place(0, 5, gameboard);
    ships.push(submarine3);

    const patrolboat1 = new PatrolBoat();
    patrolboat1.setHorizontal();
    patrolboat1.place(0, 6, gameboard);
    ships.push(patrolboat1);

    const patrolboat2 = new PatrolBoat();
    patrolboat2.setHorizontal();
    patrolboat2.place(0, 7, gameboard);
    ships.push(patrolboat2);

    const patrolboat3 = new PatrolBoat();
    patrolboat3.setHorizontal();
    patrolboat3.place(0, 8, gameboard);
    ships.push(patrolboat3);

    const patrolboat4 = new PatrolBoat();
    patrolboat4.setHorizontal();
    patrolboat4.place(0, 9, gameboard);
    ships.push(patrolboat4);

    expect(hasOverlappingShips(ships)).toEqual(true);
  });
});

describe('When 3 ships have the same cells', () => {
  test('hasOverlappingShips() returns true', () => {
    const gameboard = new Gameboard();
    const ships = [];

    const battleship1 = new Battleship();
    battleship1.setHorizontal();
    battleship1.place(0, 0, gameboard);
    ships.push(battleship1);

    const destroyer1 = new Destroyer();
    destroyer1.setHorizontal();
    destroyer1.place(0, 1, gameboard);
    ships.push(destroyer1);

    const destroyer2 = new Destroyer();
    destroyer2.setHorizontal();
    destroyer2.place(0, 0, gameboard);
    ships.push(destroyer2);

    const submarine1 = new Submarine();
    submarine1.setHorizontal();
    submarine1.place(0, 3, gameboard);
    ships.push(submarine1);

    const submarine2 = new Submarine();
    submarine2.setHorizontal();
    submarine2.place(0, 3, gameboard);
    ships.push(submarine2);

    const submarine3 = new Submarine();
    submarine3.setHorizontal();
    submarine3.place(0, 5, gameboard);
    ships.push(submarine3);

    const patrolboat1 = new PatrolBoat();
    patrolboat1.setHorizontal();
    patrolboat1.place(0, 6, gameboard);
    ships.push(patrolboat1);

    const patrolboat2 = new PatrolBoat();
    patrolboat2.setHorizontal();
    patrolboat2.place(0, 7, gameboard);
    ships.push(patrolboat2);

    const patrolboat3 = new PatrolBoat();
    patrolboat3.setHorizontal();
    patrolboat3.place(0, 9, gameboard);
    ships.push(patrolboat3);

    const patrolboat4 = new PatrolBoat();
    patrolboat4.setHorizontal();
    patrolboat4.place(0, 9, gameboard);
    ships.push(patrolboat4);

    expect(hasOverlappingShips(ships)).toEqual(true);
  });
});

describe('When every cell of every ship is different to every cell of all other ships', () => {
  test('hasOverlappingShips() returns false', () => {
    const gameboard = new Gameboard();
    const ships = [];

    const battleship1 = new Battleship();
    battleship1.setHorizontal();
    battleship1.place(0, 0, gameboard);
    ships.push(battleship1);

    const destroyer1 = new Destroyer();
    destroyer1.setHorizontal();
    destroyer1.place(0, 1, gameboard);
    ships.push(destroyer1);

    const destroyer2 = new Destroyer();
    destroyer2.setHorizontal();
    destroyer2.place(0, 2, gameboard);
    ships.push(destroyer2);

    const submarine1 = new Submarine();
    submarine1.setHorizontal();
    submarine1.place(0, 3, gameboard);
    ships.push(submarine1);

    const submarine2 = new Submarine();
    submarine2.setHorizontal();
    submarine2.place(0, 4, gameboard);
    ships.push(submarine2);

    const submarine3 = new Submarine();
    submarine3.setHorizontal();
    submarine3.place(0, 5, gameboard);
    ships.push(submarine3);

    const patrolboat1 = new PatrolBoat();
    patrolboat1.setHorizontal();
    patrolboat1.place(0, 6, gameboard);
    ships.push(patrolboat1);

    const patrolboat2 = new PatrolBoat();
    patrolboat2.setHorizontal();
    patrolboat2.place(0, 7, gameboard);
    ships.push(patrolboat2);

    const patrolboat3 = new PatrolBoat();
    patrolboat3.setHorizontal();
    patrolboat3.place(0, 8, gameboard);
    ships.push(patrolboat3);

    const patrolboat4 = new PatrolBoat();
    patrolboat4.setHorizontal();
    patrolboat4.place(0, 9, gameboard);
    ships.push(patrolboat4);

    expect(hasOverlappingShips(ships)).toEqual(false);
  });
});
