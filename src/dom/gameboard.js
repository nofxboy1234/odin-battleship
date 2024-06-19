import { zipArrays, createXArray, createYArray } from '../utils/array';
import Cell from './cell';
import Ship from './ship';

class Gameboard {
  #element = document.createElement('div');
  #disabled = false;
  #cells = [];
  #ships = [];
  #controller = undefined;

  constructor(controller) {
    this.#controller = controller;
    this.#element.classList.add('gameboard');

    this.createLabelsLeftContainer();
    this.createLabelsLeft();

    this.createGameboard1();

    this.createLabelsTopContainer();
    this.createLabelsTop();

    this.createGrid();
    this.createCells();
    this.renderCells();
    this.createShips();
    this.renderShips();
  }

  render() {
    return this.#element;
  }

  appendChild(element) {
    this.#element.appendChild(element);
  }

  disable() {
    this.#disabled = true;
    this.#element.classList.add('disabled');
  }

  enable() {
    this.#disabled = false;
    this.#element.classList.remove('disabled');
  }

  isDisabled() {
    return this.#disabled;
  }

  createLabelsLeftContainer() {
    const element = document.createElement('div');
    element.classList.add('gameboard-0');
    this.appendChild(element);

    this.labelsLeftContainer = element;
  }

  createLabelsLeft() {
    const labels = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    labels.forEach((label, index) => {
      const element = document.createElement('div');

      if (index === 0) {
        element.classList.add('gameboard-0-blank');
      } else {
        element.classList.add('gameboard-0-label');
      }

      element.textContent = label;
      this.labelsLeftContainer.appendChild(element);
    });
  }

  createGameboard1() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1');
    this.appendChild(element);

    this.gameboard1 = element;
  }

  createLabelsTopContainer() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1-0');
    this.gameboard1.appendChild(element);

    this.labelsTopContainer = element;
  }

  createLabelsTop() {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    labels.forEach((label) => {
      const element = document.createElement('div');

      element.classList.add('gameboard-1-0-label');

      element.textContent = label;
      this.labelsTopContainer.appendChild(element);
    });
  }

  createGrid() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1-1');
    this.gameboard1.appendChild(element);

    this.gameboard11 = element;
  }

  createCells() {
    const xyArray = zipArrays(createXArray(), createYArray());

    for (let index = 0; index < 100; index++) {
      const x = xyArray[index][0];
      const y = xyArray[index][1];
      const cellDOM = new Cell(x, y, this.#controller, this);
      this.#cells.push(cellDOM);
    }
  }

  createShips() {
    const ships = this.#controller.getShips();
    ships.forEach((ship) => {
      const cellDOMs = this.getShipCellDOMs(ship);
      const shipDOM = new Ship(ship.x, ship.y, ship.length, cellDOMs);
      this.#ships.push(shipDOM);
    });
  }

  getShipCellDOMs(ship) {
    return this.#cells.filter((cellDOM) => {
      const shipBack = ship.x;
      const shipFront = ship.x + ship.length;

      return (
        cellDOM.x >= shipBack && cellDOM.x < shipFront && cellDOM.y === ship.y
      );
    });
  }

  renderCells() {
    this.#cells.forEach((cellDOM) => {
      this.gameboard11.appendChild(cellDOM.render());
    });
  }

  renderShips() {
    this.#ships.forEach((shipDOM) => {
      const cellDOMs = shipDOM.cells;
      cellDOMs.forEach((cellDOM) => {
        cellDOM.enableFill();
      });
    });
  }
}

export default Gameboard;
