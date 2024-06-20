import './style.css';
import Player from './logic/player';

import GameboardElement from './dom/gameboard';
import Gameboard from './logic/gameboard';

function removeGameboard(container) {
  const child = container.firstChild;
  if (child) {
    container.removeChild(child);
  }
}

function isPlayerClickingOwnGameboard(clickedGameboardElement) {
  return clickedGameboardElement.player === currentPlayer;
}

function nextTurn() {
  currentGameboardElement.disable();
  if (currentGameboardElement === enemyGameboardElement) {
    currentGameboardElement = humanGameboardElement;
    humanGameboardElement.enable();
  } else {
    currentGameboardElement = enemyGameboardElement;
    enemyGameboardElement.enable();
  }
}

function handleTurn(clickData) {
  const cell = clickData.cell;
  const gameboardElement = clickData.gameboard;

  if (gameboardElement.disabled) {
    return;
  }

  if (isPlayerClickingOwnGameboard(gameboardElement)) {
    return;
  }

  if (gameboardElement.controller.isExistingShot(cell.x, cell.y)) {
    return;
  }

  gameboardElement.controller.receiveAttack(cell.x, cell.y);

  if (gameboardElement.controller.isShipOnCell(cell.x, cell.y)) {
    cell.enableHit();
  } else {
    cell.enableMiss();
    nextTurn();
  }
}

function newGame() {
  removeGameboard(enemyContainer);
  removeGameboard(humanContainer);

  const enemyGameboard = new Gameboard();
  const humanGameboard = new Gameboard();

  const enemy = new Player(enemyGameboard);
  enemy.placeShips();
  const human = new Player(humanGameboard);
  currentPlayer = human;
  human.placeShips();

  enemyGameboardElement = new GameboardElement(enemy, handleTurn);
  currentGameboardElement = enemyGameboardElement;
  humanGameboardElement = new GameboardElement(human, handleTurn);
  humanGameboardElement.disable();

  enemyContainer.appendChild(enemyGameboardElement.render());
  humanContainer.appendChild(humanGameboardElement.render());
}

const newGameButton = document.getElementById('new-game-btn');

newGameButton.addEventListener('click', () => {
  newGame();
});

let enemyGameboardElement;
let humanGameboardElement;
let currentGameboardElement;
let currentPlayer;
const enemyContainer = document.getElementById('gameboard-container-enemy');
const humanContainer = document.getElementById('gameboard-container-human');
