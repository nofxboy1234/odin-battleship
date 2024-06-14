import './style.css';
import Player from './player';
import Ship from './ship';
import {
  createLabelsLeftCells,
  createLabelsTopCells,
  renderGameboard,
  createCellLabelsTop,
  createCellLabelsLeft,
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

function clearChild(element) {
  const child = element.firstChild;
  if (child) {
    element.removeChild(child);
  }
}

function clearGameboards() {
  const topLabelElements = document.getElementsByClassName(
    'cell-labels-top-container',
  );

  [...topLabelElements].forEach((element) => {
    clearChild(element);
  });

  const leftLabelElements = document.getElementsByClassName(
    'cell-labels-left-container',
  );

  [...leftLabelElements].forEach((element) => {
    clearChild(element);
  });

  const humanGameboard = document.getElementById('human-gameboard-container');
  clearChild(humanGameboard);

  const computerGameboard = document.getElementById(
    'computer-gameboard-container',
  );
  clearChild(computerGameboard);
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
