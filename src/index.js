import './style.css';
import Player from './logic/player';
import Gameboard from './dom/gameboard';

function newGame() {
  const enemy = new Player();
  enemy.placeShips();
  const enemyGameboard = new Gameboard(enemy, false);
  enemyContainer.appendChild(enemyGameboard.render());

  const human = new Player();
  human.placeShips();
  const humanGameboard = new Gameboard(human, true);
  humanContainer.appendChild(humanGameboard.render());
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});

const enemyContainer = document.getElementById('gameboard-container-enemy');
const humanContainer = document.getElementById('gameboard-container-human');
