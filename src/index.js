import './style.css';
import Player from './player';
import Ship from './ship';
import {
  createLabelsLeft,
  createLabelsTop,
  renderGameboard,
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

function clearGameboards() {
  const topLabelElements = document.getElementsByClassName('cell-labels-top');

  [...topLabelElements].forEach((element) => {
    const child = element.firstChild;
    if (child) {
      element.removeChild(child);
    }
  });

  const leftLabelElements = document.getElementsByClassName('cell-labels-left');

  [...leftLabelElements].forEach((element) => {
    const child = element.firstChild;
    if (child) {
      element.removeChild(child);
    }
  });

  const humanGameboard = document.getElementById('human-gameboard-container');
  const humanChild = humanGameboard.firstChild;
  if (humanChild) {
    humanGameboard.removeChild(humanChild);
  }

  const computerGameboard = document.getElementById(
    'computer-gameboard-container',
  );
  const computerChild = computerGameboard.firstChild;
  if (computerChild) {
    computerGameboard.removeChild(computerChild);
  }
}

function newGame() {
  console.log('New game!');

  clearGameboards();

  createLabelsTop();
  createLabelsLeft();

  const human = new Player();
  placePlayerShips(human);
  renderGameboard('human-gameboard-container', human.gameboard);

  const computer = new Player();
  placePlayerShips(computer);
  renderGameboard('computer-gameboard-container', computer.gameboard);
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
