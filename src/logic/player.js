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

    const availableCells = enemyGameboard.cells.filter((cell) => {
      const found = shots.find((shot) => {
        return cell[0] === shot[0] && cell[1] === shot[1];
      });
      return !found;
    });

    const randomIndex = this.#getRandomInt(availableCells.length);
    const randomCell = availableCells[randomIndex];
    return randomCell;
  }

  placeShips() {
    this.gameboard.placeShip(new Ship(4, 'horizontal'), 0, 0);

    this.gameboard.placeShip(new Ship(3, 'vertical'), 0, 2);
    this.gameboard.placeShip(new Ship(3, 'vertical'), 2, 4);

    this.gameboard.placeShip(new Ship(2, 'horizontal'), 0, 6);
    this.gameboard.placeShip(new Ship(2, 'horizontal'), 3, 6);
    this.gameboard.placeShip(new Ship(2, 'horizontal'), 6, 6);

    this.gameboard.placeShip(new Ship(1, 'vertical'), 0, 8);
    this.gameboard.placeShip(new Ship(1, 'vertical'), 2, 8);
    this.gameboard.placeShip(new Ship(1, 'vertical'), 4, 8);
    this.gameboard.placeShip(new Ship(1, 'vertical'), 6, 8);
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

export default Player;
