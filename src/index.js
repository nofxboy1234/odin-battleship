import './style.css';
import Player from './player';
import Ship from './ship';
import {
  createLabelsLeftCells,
  createLabelsTopCells,
  renderGameboard,
  createCellLabelsTop,
  createCellLabelsLeft,
  clearChild,
  clearGameboards,
} from './domHelper';

function placePlayerShips(player) {
  player.gameboard.placeShip(new Ship(4), 0, 0);

  player.gameboard.placeShip(new Ship(3), 0, 2);
  player.gameboard.placeShip(new Ship(3), 4, 2);

  player.gameboard.placeShip(new Ship(2), 0, 4);
  player.gameboard.placeShip(new Ship(2), 3, 4);
  player.gameboard.placeShip(new Ship(2), 6, 4);

  player.gameboard.placeShip(new Ship(1), 0, 6);
  player.gameboard.placeShip(new Ship(1), 2, 6);
  player.gameboard.placeShip(new Ship(1), 4, 6);
  player.gameboard.placeShip(new Ship(1), 6, 6);
}

function newGame() {
  clearGameboards();

  createCellLabelsTop();
  createLabelsTopCells();
  createCellLabelsLeft();
  createLabelsLeftCells();

  const human = new Player();
  placePlayerShips(human);
  renderGameboard('human-gameboard-container', human.gameboard);

  const computer = new Player();
  placePlayerShips(computer);
  renderGameboard('computer-gameboard-container', computer.gameboard);

  let winner = false;
  while (winner === false) {
    console.log('human player turn: choose a square');
    winner = true;
  }
  console.log('You won!');
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
