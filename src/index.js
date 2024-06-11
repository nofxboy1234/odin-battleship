import './style.css';
import Gameboard from './gameboard';
import Player from './player';
import Ship from './ship';

const human = new Player();
const computer = new Player();

console.log('hello!');

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  console.log('New game!');
});
