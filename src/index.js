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

function nextTurn(currentGameboardElement) {
  currentGameboardElement.disable();
  if (currentGameboardElement === enemyGameboardElement) {
    humanGameboardElement.enable();
  } else {
    enemyGameboardElement.enable();
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
  human.placeShips();

  enemyGameboardElement = new GameboardElement(enemy, nextTurn);
  humanGameboardElement = new GameboardElement(human, nextTurn);
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
const enemyContainer = document.getElementById('gameboard-container-enemy');
const humanContainer = document.getElementById('gameboard-container-human');
