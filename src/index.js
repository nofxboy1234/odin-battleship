import './style.css';
import Computer from './logic/computer';
import Human from './logic/human';
import GameboardElement from './dom/gameboard';
import Gameboard from './logic/gameboard';
import message from './dom/message';
import Shot from './logic/shot';
import { delay } from './logic/helpers';

async function nextTurn() {
  currentGameboardElement.disable();
  setNextPlayer();

  if (currentPlayer === enemy) {
    message.setEnemyTurn();
    currentGameboardElement = humanGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
    currentGameboardElement.disableHoverOnAllCells();

    currentPlayer.play(currentGameboardElement);
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

async function handleShot(attackResult, cell) {
  if (attackResult.hit) {
    message.setCellHit(cell, currentPlayer, currentGameboardElement);
    await delay(1000);
    currentGameboardElement.renderHit(cell);

    if (attackResult.ship.isSunk()) {
      currentPlayer.target.reset();

      if (currentGameboardElement.controller.allShipsSunk()) {
        currentGameboardElement.disableClick();
        message.setWon(currentPlayer);
        await delay(1000);
        currentGameboardElement.setShipSunk(attackResult.ship);
        return;
      } else {
        message.setShipSunk(cell, currentPlayer, currentGameboardElement);
        await delay(1000);
        currentGameboardElement.setShipSunk(attackResult.ship);
      }
    } else {
      currentPlayer.target.ship = attackResult.ship;
    }

    currentPlayer.play(currentGameboardElement);
  } else {
    message.setCellMiss(cell, currentPlayer, currentGameboardElement);
    currentGameboardElement.disableClick();
    await delay(1000);
    currentGameboardElement.renderMiss(cell);

    await delay(1000);
    nextTurn();
  }
}

function handleTurn(clickData) {
  clickData.humanPlayer = human;
  clickData.enemyPlayer = enemy;

  const { gameboard: gameboardElement, cell } = clickData;

  if (!cell) {
    console.log('undefined cell');
    return;
  }

  const shot = new Shot(clickData);

  if (shot.isOnOwnGameboard()) {
    return;
  }

  if (!shot.isValid()) {
    currentPlayer.play(currentGameboardElement);
    return;
  }

  const attackResult = attackGameboard(gameboardElement, cell);
  currentGameboardElement.renderShot(cell);

  handleShot(attackResult, cell);
}

function setNextPlayer() {
  if (currentPlayer === human) {
    currentPlayer = enemy;
  } else {
    currentPlayer = human;
  }
}

function startGame() {
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
  enemy = new Computer(enemyGameboard, 'enemy');
}

function setupHumanPlayer() {
  humanGameboard = new Gameboard();
  human = new Human(humanGameboard, 'human');
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
playButton.addEventListener('click', startGame);

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
