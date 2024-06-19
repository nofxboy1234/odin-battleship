import './style.css';
import Player from './logic/player';
import Ship from './logic/ship';
import GameboardElement from './dom/gameboard';
import Gameboard from './logic/gameboard';

function placeShips(gameboard) {
  gameboard.placeShip(new Ship(4), 0, 0);

  gameboard.placeShip(new Ship(3), 0, 2);
  gameboard.placeShip(new Ship(3), 4, 2);

  gameboard.placeShip(new Ship(2), 0, 4);
  gameboard.placeShip(new Ship(2), 3, 4);
  gameboard.placeShip(new Ship(2), 6, 4);

  gameboard.placeShip(new Ship(1), 0, 6);
  gameboard.placeShip(new Ship(1), 2, 6);
  gameboard.placeShip(new Ship(1), 4, 6);
  gameboard.placeShip(new Ship(1), 6, 6);
}

function newGame() {
  const humanGameboard = new Gameboard();
  placeShips(humanGameboard);
  const human = new Player(humanGameboard);
  const humanGameboardElement = new GameboardElement(humanGameboard);

  humanGameboardElement.disable();
  const humanContainer = document.getElementById('gameboard-container-human');
  humanContainer.appendChild(humanGameboardElement.render());

  const enemyGameboard = new Gameboard();
  placeShips(enemyGameboard);
  const enemy = new Player(enemyGameboard);
  const enemyGameboardElement = new GameboardElement(enemyGameboard);

  const enemyContainer = document.getElementById('gameboard-container-enemy');
  enemyContainer.appendChild(enemyGameboardElement.render());
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
