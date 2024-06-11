import './style.css';
import Gameboard from './gameboard';
import Player from './player';
import Ship from './ship';

function newGame(event) {
  console.log('New game!');

  const human = new Player();

  human.gameboard.placeShip(new Ship(4), 0, 0);

  human.gameboard.placeShip(new Ship(3), 0, 2);
  human.gameboard.placeShip(new Ship(3), 4, 2);

  human.gameboard.placeShip(new Ship(2), 0, 4);
  human.gameboard.placeShip(new Ship(2), 3, 4);
  human.gameboard.placeShip(new Ship(2), 6, 4);

  human.gameboard.placeShip(new Ship(1), 0, 6);
  human.gameboard.placeShip(new Ship(1), 2, 6);
  human.gameboard.placeShip(new Ship(1), 4, 6);
  human.gameboard.placeShip(new Ship(1), 6, 6);

  // const computer = new Player();
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
