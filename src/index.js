import './style.css';
import Player from './logic/player';
import GameboardElement from './dom/gameboard';
import Gameboard from './logic/gameboard';
import message from './dom/message';

function removeGameboard(container) {
  const child = container.firstChild;
  if (child) {
    container.removeChild(child);
  }
}

function isPlayerClickingOwnGameboard(clickedGameboardElement, pointerType) {
  return (
    clickedGameboardElement.owner === currentPlayer ||
    (clickedGameboardElement.owner === human && pointerType === 'mouse') ||
    (clickedGameboardElement.owner === enemy && pointerType === '')
  );
}

function isHumanTakingAnotherShotAfterMissing(
  clickedGameboardElement,
  pointerType,
) {
  return (
    currentPlayer === enemy &&
    clickedGameboardElement.owner === enemy &&
    pointerType === 'mouse'
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

  if (currentPlayer === enemy) {
    message.setEnemyTurn();
    currentGameboardElement = humanGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.disableHoverOnAllCells();

    await delay(2000);
    enemyPlay();
  } else {
    message.setHumanTurn();
    currentGameboardElement = enemyGameboardElement;
    currentGameboardElement.enable();
  }
}

async function isShotInvalid({
  gameboard: gameboardElement,
  pointerType,
  cell,
}) {
  if (gameboardElement.disabled) {
    return true;
  }

  if (isHumanTakingAnotherShotAfterMissing(gameboardElement, pointerType)) {
    return true;
  }

  if (isPlayerClickingOwnGameboard(gameboardElement, pointerType)) {
    return true;
  }

  if (gameboardElement.controller.isExistingShot(cell.x, cell.y)) {
    return true;
  }

  return false;
}

function attackGameboard(gameboardElement, cell) {
  return gameboardElement.controller.receiveAttack(cell.x, cell.y);
}

async function handleTurn(clickData) {
  const { gameboard: gameboardElement, cell } = clickData;

  if (await isShotInvalid(clickData)) {
    if (currentPlayer === enemy) {
      await delay(2000);
      enemyPlay();
    }

    return;
  }

  const hit = attackGameboard(gameboardElement, cell);

  if (hit) {
    renderHit(cell);

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        message.setHumanWon();
        disableBothGameboards();
        return;
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        message.setEnemyWon();
        disableBothGameboards();
        return;
      }

      await delay(2000);
      enemyPlay();
    }
  } else {
    renderMiss(cell);

    if (currentPlayer === human) {
      currentPlayer = enemy;
    } else {
      currentPlayer = human;
    }

    await delay(2000);
    nextTurn();
  }
}

function disableBothGameboards() {
  enemyGameboardElement.disable();
  humanGameboardElement.disable();
}

function renderMiss(cell) {
  cell.enableMiss();
  cell.disableHover();
}

function renderHit(cell) {
  cell.enableHit();
  cell.disableHover();
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

  message.setInstruction();

  randomizeButton.disabled = false;
  playButton.disabled = false;
}

function play() {
  enemyGameboardElement.enable();
  message.setHumanTurn();
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

  enemy.placeRandomShips();
  enemyGameboardElement.createShips();
  enemyGameboardElement.renderShips();
  enemyContainer.appendChild(enemyGameboardElement.render());
}

function randomizeHumanGameboard() {
  humanGameboard.reset();
  humanGameboardElement.reset();

  human.placeRandomShips();
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
message.setElement(document.getElementById('message'));

newGame();
