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

function enemyPlay() {
  const [x, y] = enemy.play(humanGameboard);
  const cellDOM = humanGameboardElement.getCellDOM(x, y);
  cellDOM.render().click();
}

async function delay(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

async function nextTurn() {
  currentGameboardElement.disable();
  if (currentGameboardElement === enemyGameboardElement) {
    currentPlayer = enemy;
    currentGameboardElement = humanGameboardElement;
    humanGameboardElement.enable();

    await delay(2000);
    enemyPlay();
  } else {
    currentPlayer = human;
    currentGameboardElement = enemyGameboardElement;
    enemyGameboardElement.enable();
  }
}

async function handleTurn(clickData) {
  const cell = clickData.cell;
  const gameboardElement = clickData.gameboard;

  if (gameboardElement.disabled) {
    return;
  }

  if (isPlayerClickingOwnGameboard(gameboardElement)) {
    return;
  }

  if (gameboardElement.controller.isExistingShot(cell.x, cell.y)) {
    if (currentPlayer === enemy) {
      await delay(2000);
      enemyPlay();
    }

    return;
  }

  gameboardElement.controller.receiveAttack(cell.x, cell.y);

  if (gameboardElement.controller.isShipOnCell(cell.x, cell.y)) {
    cell.enableHit();

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        console.log('human won!');
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        console.log('enemy won!');
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }

      await delay(2000);
      enemyPlay();
    }
  } else {
    cell.enableMiss();
    nextTurn();
  }
}

function newGame() {
  removeGameboard(enemyContainer);
  removeGameboard(humanContainer);

  enemyGameboard = new Gameboard();
  humanGameboard = new Gameboard();

  enemy = new Player(enemyGameboard, 'enemy');
  enemy.placeShipsRandomly();
  enemyGameboardElement = new GameboardElement(enemy, handleTurn);
  enemyGameboardElement.createShips();
  enemyGameboardElement.renderShips();
  enemyContainer.appendChild(enemyGameboardElement.render());

  human = new Player(humanGameboard, 'human');
  currentPlayer = human;
  currentGameboardElement = enemyGameboardElement;

  humanGameboardElement = new GameboardElement(human, handleTurn);
  humanGameboardElement.disable();
  humanContainer.appendChild(humanGameboardElement.render());

  addRandomizeButton();
}

function addRandomizeButton() {
  const randomizeButton = document.createElement('button');
  randomizeButton.textContent = 'Randomize';
  randomizeButton.id = 'randomize-btn';
  document.body.appendChild(randomizeButton);
  randomizeButton.addEventListener('click', () => {
    randomize();
  });
}

function randomize() {
  human.placeShipsRandomly();
  humanGameboardElement.createShips();
  humanGameboardElement.renderShips();
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  newGame();
});

let enemyGameboardElement;
let humanGameboardElement;
let currentGameboardElement;
let enemyGameboard;
let humanGameboard;
let enemy;
let human;
let currentPlayer;
const enemyContainer = document.getElementById('gameboard-container-enemy');
const humanContainer = document.getElementById('gameboard-container-human');
