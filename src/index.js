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

function isPlayerClickingOwnGameboard(clickedGameboardElement, pointerType) {
  return (
    clickedGameboardElement.player === currentPlayer ||
    (clickedGameboardElement.player === human && pointerType === 'mouse') ||
    (clickedGameboardElement.player === enemy && pointerType === '')
  );
}

function enemyPlay() {
  const cell = enemy.play(humanGameboard);
  const cellDOM = humanGameboardElement.getCellDOM(cell.x, cell.y);
  cellDOM.render().click();
}

async function delay(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

async function nextTurn() {
  currentGameboardElement.disable();
  if (currentGameboardElement === enemyGameboardElement) {
    currentPlayer = enemy;
    message.textContent = "Enemy's turn!";
    currentGameboardElement = humanGameboardElement;
    humanGameboardElement.enable();
    humanGameboardElement.disableHoverOnAllCells();

    await delay(2000);
    enemyPlay();
  } else {
    currentPlayer = human;
    message.textContent = 'Your turn!';
    currentGameboardElement = enemyGameboardElement;
    enemyGameboardElement.enable();
  }
}

async function handleTurn(clickData) {
  const cell = clickData.cell;
  const gameboardElement = clickData.gameboard;
  const pointerType = clickData.pointerType;

  if (gameboardElement.disabled) {
    return;
  }

  if (isPlayerClickingOwnGameboard(gameboardElement, pointerType)) {
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
        message.textContent = 'You won!';
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        message.textContent = 'Enemy won!';
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

  setupComputerPlayer();
  setupComputerGameboardElement();
  randomizeComputerGameboard();

  setupHumanPlayer();
  setupHumanGameboardElement();
  randomizeHumanGameboard();

  message.textContent =
    "Randomize your ships until you're happy with their positions, then press Play!";

  randomizeButton.disabled = false;
  playButton.disabled = false;
}

function play() {
  enemyGameboardElement.enable();
  message.textContent = 'Your turn!';

  randomizeButton.disabled = true;
  playButton.disabled = true;
}

function setupHumanGameboardElement() {
  humanGameboardElement = new GameboardElement(human, handleTurn);
  humanGameboardElement.disable();
}

function setupComputerGameboardElement() {
  enemyGameboardElement = new GameboardElement(enemy, handleTurn);
  enemyGameboardElement.disable();
  currentGameboardElement = enemyGameboardElement;
}

function setupComputerPlayer() {
  enemyGameboard = new Gameboard();
  enemy = new Player(enemyGameboard, 'enemy');
}

function setupHumanPlayer() {
  humanGameboard = new Gameboard();
  human = new Player(humanGameboard, 'human');
  currentPlayer = human;
}

function randomizeComputerGameboard() {
  enemyGameboard.reset();
  enemyGameboardElement.reset();

  enemy.placeShips();
  enemyGameboardElement.createShips();
  enemyGameboardElement.renderShips();
  enemyContainer.appendChild(enemyGameboardElement.render());
}

function randomizeHumanGameboard() {
  humanGameboard.reset();
  humanGameboardElement.reset();

  human.placeShips();
  humanGameboardElement.createShips();
  humanGameboardElement.renderShips();
  humanContainer.appendChild(humanGameboardElement.render());
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  newGame();
  console.log('New game done!');
});

const randomizeButton = document.getElementById('randomize-btn');
randomizeButton.addEventListener('click', () => {
  randomizeHumanGameboard();
});

const message = document.getElementById('message');

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', play);

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

newGame();
