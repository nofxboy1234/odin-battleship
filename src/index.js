import './style.css';
import Gameboard from './gameboard';
import Player from './player';
import Ship from './ship';

function newGame(event) {
  console.log('New game!');

  const human = new Player();

  const ship1 = new Ship(4);
  human.gameboard.placeShip(ship1, 0, 0);

  const ship2 = new Ship(3);
  human.gameboard.placeShip(ship2, 0, 2);
  const ship3 = new Ship(3);
  human.gameboard.placeShip(ship3, 4, 2);

  const ship4 = new Ship(2);
  human.gameboard.placeShip(ship4, 0, 4);
  const ship5 = new Ship(2);
  human.gameboard.placeShip(ship5, 3, 4);
  const ship6 = new Ship(2);
  human.gameboard.placeShip(ship6, 6, 4);

  const ship7 = new Ship(1);
  human.gameboard.placeShip(ship7, 0, 6);
  const ship8 = new Ship(1);
  human.gameboard.placeShip(ship8, 2, 6);
  const ship9 = new Ship(1);
  human.gameboard.placeShip(ship9, 4, 6);
  const ship10 = new Ship(1);
  human.gameboard.placeShip(ship10, 6, 6);

  // const computer = new Player();
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
