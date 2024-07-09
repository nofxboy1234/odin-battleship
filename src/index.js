import './style.css';
import Player from './logic/player';
import GameboardElement from './dom/gameboard';
import Gameboard from './logic/gameboard';
import message from './dom/message';

function isPlayerClickingOwnGameboard(clickedGameboardElement, clicker) {
  const humanClickedOwnGameboard =
    clickedGameboardElement.owner === human && clicker === human;

  const computerClickedOwnGameboard =
    clickedGameboardElement.owner === enemy && clicker === enemy;

  return humanClickedOwnGameboard || computerClickedOwnGameboard;
}

function enemyPlay() {
  enemy.play(humanGameboard, humanGameboardElement);
}

async function delay(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
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

    await delay(2000);
    enemyPlay();
  } else {
    message.setHumanTurn();
    currentGameboardElement = enemyGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
  }
}

function validateShot({
  gameboard: gameboardElement,
  pointerType,
  cell: cellDOM,
}) {
  const result = {
    valid: true,
  };

  if (pointerType === 'mouse') {
    result.clicker = human;
  } else if (pointerType === '') {
    result.clicker = enemy;
  }

  const playerClickingOwnGameboard = isPlayerClickingOwnGameboard(
    gameboardElement,
    result.clicker,
  );

  if (playerClickingOwnGameboard) {
    result.valid = false;
    result.reason = 'playerClickingOwnGameboard';
    return result;
  }

  const isExistingShot = gameboardElement.controller.isExistingShot(
    cellDOM.x,
    cellDOM.y,
  );

  if (isExistingShot) {
    result.valid = false;
    result.reason = 'isExistingShot';
    return result;
  }

  const adjacentCells =
    gameboardElement.controller.getAllSunkShipsAdjacentCells();
  const cell = gameboardElement.controller.getCellAt(cellDOM.x, cellDOM.y);
  const isAdjacentCell = adjacentCells.includes(cell);
  if (isAdjacentCell) {
    result.valid = false;
    result.reason = 'isAdjacentCell';
    return result;
  }

  return result;
}

function attackGameboard(gameboardElement, cell) {
  return gameboardElement.controller.receiveAttack(cell.x, cell.y);
}

async function handleTurn(clickData) {
  const { gameboard: gameboardElement, cell } = clickData;

  if (!cell) {
    return;
  }

  const validityResult = validateShot(clickData);

  if (!validityResult.valid) {
    if (validityResult.reason === 'playerClickingOwnGameboard') {
      if (validityResult.clicker === enemy) {
        await delay(2000);
        enemyPlay();
        return;
      }

      if (validityResult.clicker === human) {
        return;
      }
    }

    if (validityResult.reason === 'isExistingShot') {
      message.setExistingShot(cell, currentPlayer, currentGameboardElement);

      if (validityResult.clicker === enemy) {
        await delay(2000);
        enemyPlay();
        return;
      }

      if (validityResult.clicker === human) {
        return;
      }
    }

    if (validityResult.reason === 'isAdjacentCell') {
      message.setAdjacentCell(cell, currentPlayer, currentGameboardElement);

      if (validityResult.clicker === enemy) {
        await delay(2000);
        enemyPlay();
        return;
      }

      if (validityResult.clicker === human) {
        return;
      }
    }
  }

  const attackResult = attackGameboard(gameboardElement, cell);

  if (attackResult.hit) {
    renderShot(cell);
    delay(1000).then(() => renderHit(cell));
    message.setCellHit(cell, currentPlayer, currentGameboardElement);

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        currentGameboardElement.setShipSunk(attackResult.ship);
        message.setHumanWon();
        disableBothGameboards();
        return;
      } else {
        if (attackResult.ship.isSunk()) {
          currentGameboardElement.setShipSunk(attackResult.ship);
          message.setShipSunk(cell, currentPlayer, currentGameboardElement);
        }
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        currentGameboardElement.setShipSunk(attackResult.ship);
        message.setEnemyWon();
        disableBothGameboards();
        return;
      } else {
        if (attackResult.ship.isSunk()) {
          enemy.target.reset();
          currentGameboardElement.setShipSunk(attackResult.ship);
          message.setShipSunk(cell, currentPlayer, currentGameboardElement);
        } else {
          enemy.target.ship = attackResult.ship;
        }

        await delay(2000);
        enemyPlay();
      }
    }
  } else {
    renderShot(cell);
    delay(1000).then(() => renderMiss(cell));
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
