import Ship from './ship';

class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  play(enemyGameboard) {
    const hits = enemyGameboard.getHits();
    const misses = enemyGameboard.getMisses();
    const shots = hits.concat(misses);

    // return shots;

    // return shots.find((shot) => {
    //   return !(1 === shot[0]) && !(1 === shot[1]);
    // });

    // return [[1, 1]];

    const availableCells = enemyGameboard.cells.filter((cell) => {
      const found = shots.find((shot) => {
        return cell[0] === shot[0] && cell[1] === shot[1];
      });
      return !found;
    });
    return availableCells;

    // const availableCells = enemyGameboard.cells.filter((cell) => {
    //   return cell[0] === 1 && cell[1] === 1;
    // });
    // return availableCells;

    // const randomIndex = this.#getRandomInt(remainingCells.length);
    // const randomCell = remainingCells[randomIndex];
    // return randomCell;
  }

  placeShips() {
    this.gameboard.placeShip(new Ship(4), 0, 0);

    this.gameboard.placeShip(new Ship(3), 0, 2);
    this.gameboard.placeShip(new Ship(3), 4, 2);

    this.gameboard.placeShip(new Ship(2), 0, 4);
    this.gameboard.placeShip(new Ship(2), 3, 4);
    this.gameboard.placeShip(new Ship(2), 6, 4);

    this.gameboard.placeShip(new Ship(1), 0, 6);
    this.gameboard.placeShip(new Ship(1), 2, 6);
    this.gameboard.placeShip(new Ship(1), 4, 6);
    this.gameboard.placeShip(new Ship(1), 6, 6);
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

export default Player;
