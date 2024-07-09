import Cell from './cell';
import Ship from './ship';

class Gameboard {
  #element = document.createElement('div');
  #disabled = true;
  #disableClick = true;
  #cells = [];
  #ships = [];
  controller = undefined;
  #labelsLeft = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  #labelsTop = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  constructor(owner, handleTurnCallback) {
    this.owner = owner;
    this.controller = owner.gameboard;
    this.handleTurnCallback = handleTurnCallback;

    this.#element.classList.add('gameboard');

    this.createLabelsLeftContainer();
    this.createLabelsLeft();

    this.createGameboard1();

    this.createLabelsTopContainer();
    this.createLabelsTop();

    this.createGrid();
    this.#createCells();
    this.renderCells();
  }

  render() {
    return this.#element;
  }

  appendChild(element) {
    this.#element.appendChild(element);
  }

  disableClick() {
    this.#disableClick = true;
  }

  enableClick() {
    this.#disableClick = false;
  }

  disable() {
    this.#disabled = true;
    this.#element.classList.add('disabled');

    this.disableHoverOnAllCells();
  }

  disableHoverOnAllCells() {
    this.#cells.forEach((cellDOM) => {
      cellDOM.disableHover();
    });
  }

  enable() {
    this.#disabled = false;
    this.#element.classList.remove('disabled');

    this.#enableHoverOnAllOpenCells();
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

  labelLeftAt(y) {
    return this.#labelsLeft.at(y + 1);
  }

  labelTopAt(x) {
    return this.#labelsTop.at(x);
  }

  createLabelsLeft() {
    this.#labelsLeft.forEach((label, index) => {
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

    this.gameboard_1 = element;
  }

  createLabelsTopContainer() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1-0');
    this.gameboard_1.appendChild(element);

    this.labelsTopContainer = element;
  }

  createLabelsTop() {
    this.#labelsTop.forEach((label) => {
      const element = document.createElement('div');

      element.classList.add('gameboard-1-0-label');

      element.textContent = label;
      this.labelsTopContainer.appendChild(element);
    });
  }

  createGrid() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1-1');
    this.gameboard_1.appendChild(element);

    this.gameboard_1_1 = element;

    this.gameboard_1_1.addEventListener('click', (event) => {
      this.#handleClick(event);
    });
  }

  createShips() {
    const ships = this.controller.getShips();
    ships.forEach((ship) => {
      const cellDOMs = this.#getShipCellDOMs(ship);
      const shipDOM = new Ship(ship.x, ship.y, ship.length, cellDOMs);
      this.#ships.push(shipDOM);
    });
  }

  getCellDOM(x, y) {
    return this.#cells.find((cellDOM) => {
      return cellDOM.x === x && cellDOM.y === y;
    });
  }

  renderCells() {
    this.#cells.forEach((cellDOM) => {
      this.gameboard_1_1.appendChild(cellDOM.render());
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

  reset() {
    this.#ships = [];
    this.#cells.forEach((cellDOM) => cellDOM.reset());
  }

  setShipSunk(ship) {
    const shipDOM = this.#getShipAt(ship.x, ship.y);
    shipDOM.setSunk();
  }

  #createCells() {
    const cells = this.controller.cells;

    cells.forEach((cell) => {
      const x = cell.x;
      const y = cell.y;
      const cellDOM = new Cell(x, y, this.isDisabled());
      this.#cells.push(cellDOM);
    });
  }

  #enableHoverOnAllOpenCells() {
    this.#cells.forEach((cellDOM) => {
      if (!this.controller.isExistingShot(cellDOM.x, cellDOM.y)) {
        cellDOM.enableHover();
      }
    });
  }

  #getShipCellDOMs(ship) {
    const shipBack = ship.back();
    const shipFront = ship.front();

    return this.#cells.filter((cellDOM) => {
      if (ship.orientation === 'horizontal') {
        return (
          cellDOM.x >= shipBack.x &&
          cellDOM.x <= shipFront.x &&
          cellDOM.y === ship.y
        );
      } else if (ship.orientation === 'vertical') {
        return (
          cellDOM.y >= shipBack.y &&
          cellDOM.y <= shipFront.y &&
          cellDOM.x === ship.x
        );
      }
    });
  }

  #handleClick(event) {
    if (this.#disableClick) {
      return;
    }

    const clickData = {};
    clickData.cell = event.cell;
    clickData.gameboard = {
      controller: this.controller,
      owner: this.owner,
      disabled: this.isDisabled(),
    };
    clickData.pointerType = event.pointerType;

    this.handleTurnCallback(clickData);
  }

  #getShipAt(x, y) {
    return this.#ships.find((ship) => ship.x === x && ship.y === y);
  }
}

export default Gameboard;
