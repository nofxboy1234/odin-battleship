import './style.css';
import Player from './player';
import Ship from './ship';
import { renderGameboard, renderShips } from './domHelper';

function placePlayerShips(player) {
  player.gameboard.placeShip(new Ship(4), 0, 0);

  player.gameboard.placeShip(new Ship(3), 0, 2);
  player.gameboard.placeShip(new Ship(3), 4, 2);

  player.gameboard.placeShip(new Ship(2), 0, 4);
  player.gameboard.placeShip(new Ship(2), 3, 4);
  player.gameboard.placeShip(new Ship(2), 6, 4);

  player.gameboard.placeShip(new Ship(1), 0, 6);
  player.gameboard.placeShip(new Ship(1), 2, 6);
  player.gameboard.placeShip(new Ship(1), 4, 6);
  player.gameboard.placeShip(new Ship(1), 6, 6);
}

function newGame(event) {
  console.log('New game!');

  const human = new Player();
  placePlayerShips(human);
  renderGameboard('human-gameboard');
  renderShips(human.gameboard.getShips(), 'human-gameboard');

  const computer = new Player();
  placePlayerShips(computer);

  // renderShips(computer.gameboard, 'computer-gameboard');
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
