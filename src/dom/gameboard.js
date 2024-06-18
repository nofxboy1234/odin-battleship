import { zipArrays, createXArray, createYArray } from '../utils/array';
import Cell from './cell';

class Gameboard {
  #element = undefined;
  #disabled = false;
  #cells = [];
  #ships = [];

  constructor(controller) {
    this.#element = document.createElement('div');
    this.#element.classList.add('gameboard');

    const xArray = createXArray();
    const yArray = createYArray();
    const xyArray = zipArrays(xArray, yArray);

    this.createCellLabelsLeft();
    this.createLabelsLeftCells();
    this.createCellLabelsTop();
    this.createLabelsTopCells();
    this.createCells(xyArray, controller);
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

  createCellLabelsLeft() {
    const containers = document.getElementsByClassName(
      'cell-labels-left-container',
    );
    [...containers].forEach((parent) => {
      const div = document.createElement('div');
      div.classList.add('cell-labels-left');
      parent.appendChild(div);
    });
  }

  createLabelsLeftCells() {
    const cellLabelElementsLeft =
      document.getElementsByClassName('cell-labels-left');
    const labels = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    [...cellLabelElementsLeft].forEach((element) => {
      for (let index = 0; index < labels.length; index++) {
        const div = document.createElement('div');

        if (index === 0) {
          div.classList.add('cell-label');
        } else {
          div.classList.add('cell-label', 'right-border');
        }

        div.textContent = labels[index];
        element.appendChild(div);
      }
    });
  }

  createCellLabelsTop() {
    const div = document.createElement('div');
    div.classList.add('cell-labels-top');
    this.appendChild(div);
  }

  createLabelsTopCells() {
    const cellLabelElementsTop =
      document.getElementsByClassName('cell-labels-top');
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    [...cellLabelElementsTop].forEach((element) => {
      for (let index = 0; index < labels.length; index++) {
        const div = document.createElement('div');
        div.classList.add('cell-label', 'bottom-border');
        div.textContent = labels[index];
        element.appendChild(div);
      }
    });
  }

  createCells(xyArray, controller) {
    for (let index = 0; index < 100; index++) {
      const x = xyArray[index][0];
      const y = xyArray[index][1];
      const cell = new Cell(x, y, controller, this);
      this.#cells.push(cell);
    }
  }

  renderShips() {
    // this.#cells.forEach((cell) => {
    //   const x = xyArray[index][0];
    //   const y = xyArray[index][1];
    //   const cell = new Cell(x, y, controller, this);
    //   this.#cells.push(cell);
    // });
  }
}
