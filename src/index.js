import './style.css';
import Player from './logic/player';
import GameboardElement from './dom/gameboard';
import Gameboard from './logic/gameboard';
import message from './dom/message';
import ShotChecker from './shotChecker';

async function enemyPlay() {
  await delay(2000);
  enemy.play(humanGameboard, humanGameboardElement);
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function nextTurn() {
  currentGameboardElement.disable();
  setNextPlayer();

  if (currentPlayer === enemy) {
    message.setEnemyTurn();
    currentGameboardElement = humanGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
    currentGameboardElement.disableHoverOnAllCells();

    enemyPlay();
  } else {
    message.setHumanTurn();
    currentGameboardElement = enemyGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
  }
}

function attackGameboard(gameboardElement, cell) {
  return gameboardElement.controller.receiveAttack(cell.x, cell.y);
}

async function handleTurn(clickData) {
  clickData.humanPlayer = human;
  clickData.enemyPlayer = enemy;

  const { gameboard: gameboardElement, cell } = clickData;

  if (!cell) {
    return;
  }

  const shotChecker = new ShotChecker(clickData);
  const result = shotChecker.check();

  if (!result.valid) {
    if (result.reason === 'playerClickingOwnGameboard') {
      if (result.clicker === enemy) {
        enemyPlay();
        return;
      }

      if (result.clicker === human) {
        return;
      }
    }

    if (result.reason === 'isExistingShot') {
      message.setExistingShot(cell, currentPlayer, currentGameboardElement);

      if (result.clicker === enemy) {
        enemyPlay();
        return;
      }

      if (result.clicker === human) {
        return;
      }
    }

    if (result.reason === 'isAdjacentCell') {
      message.setAdjacentCell(cell, currentPlayer, currentGameboardElement);

      if (result.clicker === enemy) {
        enemyPlay();
        return;
      }

      if (result.clicker === human) {
        return;
      }
    }
  }

  const attackResult = attackGameboard(gameboardElement, cell);

  if (attackResult.hit) {
    renderShot(cell);
    delay(1000).then(() => {
      renderHit(cell);
    });

    message.setCellHit(cell, currentPlayer, currentGameboardElement);

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        await delay(2000);

        currentGameboardElement.setShipSunk(attackResult.ship);
        message.setHumanWon();
        disableBothGameboards();
        return;
      } else {
        if (attackResult.ship.isSunk()) {
          await delay(2000);

          currentGameboardElement.setShipSunk(attackResult.ship);
          message.setShipSunk(cell, currentPlayer, currentGameboardElement);
        }
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        await delay(2000);

        currentGameboardElement.setShipSunk(attackResult.ship);
        message.setEnemyWon();
        disableBothGameboards();
        return;
      } else {
        if (attackResult.ship.isSunk()) {
          await delay(2000);

          enemy.target.reset();
          currentGameboardElement.setShipSunk(attackResult.ship);
          message.setShipSunk(cell, currentPlayer, currentGameboardElement);
        } else {
          enemy.target.ship = attackResult.ship;
        }

        enemyPlay();
      }
    }
  } else {
    renderShot(cell);
    delay(1000).then(() => {
      renderMiss(cell);
    });

    message.setCellMiss(cell, currentPlayer, currentGameboardElement);
    currentGameboardElement.disableClick();
    await delay(2000);
    nextTurn();
  }
}

function setNextPlayer() {
  if (currentPlayer === human) {
    currentPlayer = enemy;
  } else {
    currentPlayer = human;
  }
}

function disableBothGameboards() {
  enemyGameboardElement.disable();
  enemyGameboardElement.disableClick();
  humanGameboardElement.disable();
  humanGameboardElement.disableClick();
}

function renderShot(cell) {
  cell.disableHover();
  cell.enableShot();
}

function renderMiss(cell) {
  cell.disableShot();
  cell.enableMiss();
}

function renderHit(cell) {
  cell.disableShot();
  cell.enableHit();
}

function play() {
  enemyGameboardElement.enable();
  enemyGameboardElement.enableClick();
  message.setHumanTurn();
  randomizeButton.disabled = true;
  playButton.disabled = true;
}

function setupHumanGameboardElement() {
  humanGameboardElement = new GameboardElement(human, handleTurn);
  humanContainer.appendChild(humanGameboardElement.render());
}

function setupComputerGameboardElement() {
  enemyGameboardElement = new GameboardElement(enemy, handleTurn);
  enemyContainer.appendChild(enemyGameboardElement.render());
}

function setupComputerPlayer() {
  enemyGameboard = new Gameboard();
  enemy = new Player(enemyGameboard, 'enemy');
}

function setupHumanPlayer() {
  humanGameboard = new Gameboard();
  human = new Player(humanGameboard, 'human');
}

function randomizeGameboard(gameboardElement, renderShips = true) {
  message.setLoadingShips();
  setTimeout(() => {
    gameboardElement.controller.reset();
    gameboardElement.reset();

    gameboardElement.owner.placeRandomShips();
    gameboardElement.createShips();

    if (renderShips) {
      gameboardElement.renderShips();
    }
  });
  setTimeout(() => message.setInstruction());
}

function setupGame() {
  currentPlayer = human;
  enemyGameboardElement.disable();
  humanGameboardElement.disable();
  currentGameboardElement = enemyGameboardElement;

  randomizeButton.disabled = false;
  playButton.disabled = false;

  randomizeGameboard(enemyGameboardElement, true);
  randomizeGameboard(humanGameboardElement);
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  setupGame();
});

const randomizeButton = document.getElementById('randomize-btn');
randomizeButton.addEventListener('click', () => {
  randomizeGameboard(humanGameboardElement);
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

setupHumanPlayer();
setupComputerPlayer();
setupComputerGameboardElement();
setupHumanGameboardElement();

setupGame();
