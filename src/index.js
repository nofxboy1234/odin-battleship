import './style.css';
import Gameboard from './gameboard';
import Player from './player';
import Ship from './ship';

const human = new Player();
const computer = new Player();

function newGame(event) {
  console.log(event);
  console.log('New game!');
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', (event) => {
  newGame(event);
});
