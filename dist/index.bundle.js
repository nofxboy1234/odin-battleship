"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([[57],{

/***/ 527:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(509);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/logic/helpers.js
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

;// CONCATENATED MODULE: ./src/logic/ship.js

class Ship {
  #hits = [];
  constructor() {
    let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    this.length = length;
    this.orientation = 'horizontal';
    this.#hits = [];
  }
  hit(cell) {
    this.#hits.push(cell);
  }
  isSunk() {
    return this.#hits.length === this.length;
  }
  place(x, y, gameboard) {
    this.x = x;
    this.y = y;
    this.#setCells(gameboard);
  }
  getHits() {
    return this.#hits;
  }
  potentialHits(gameboard) {
    if (this.#hits.length === 1) {
      const onlyHit = this.#hits.at(0);
      const topCell = gameboard.offsetCell(onlyHit, 0, -1);
      const rightCell = gameboard.offsetCell(onlyHit, 1, 0);
      const bottomCell = gameboard.offsetCell(onlyHit, 0, 1);
      const leftCell = gameboard.offsetCell(onlyHit, -1, 0);
      const potentialHits = [topCell, rightCell, bottomCell, leftCell].filter(cell => gameboard.getAvailableCells().includes(cell));
      return potentialHits;
    }
    if (this.#hits.length > 1) {
      const sortedHits = this.getHits().toSorted((a, b) => Math.sign(a.x - b.x) || Math.sign(a.y - b.y));
      const firstHit = sortedHits.at(0);
      const lastHit = sortedHits.at(-1);
      if (this.orientation === 'horizontal') {
        const rightCell = gameboard.offsetCell(lastHit, 1, 0);
        const leftCell = gameboard.offsetCell(firstHit, -1, 0);
        const potentialHits = [rightCell, leftCell].filter(cell => gameboard.getAvailableCells().includes(cell));
        return potentialHits;
      }
      if (this.orientation === 'vertical') {
        const topCell = gameboard.offsetCell(firstHit, 0, -1);
        const bottomCell = gameboard.offsetCell(lastHit, 0, 1);
        const potentialHits = [topCell, bottomCell].filter(cell => gameboard.getAvailableCells().includes(cell));
        return potentialHits;
      }
    }
  }
  setVertical() {
    this.orientation = 'vertical';
  }
  setHorizontal() {
    this.orientation = 'horizontal';
  }
  setRandomOrientation() {
    const orientations = ['horizontal', 'vertical'];
    const index = getRandomInt(orientations.length);
    this.orientation = orientations[index];
  }
  front() {
    return this.cells.at(-1);
  }
  back() {
    return this.cells.at(0);
  }
  #setCells(gameboard) {
    this.cells = gameboard.cells.filter(cell => {
      if (this.orientation === 'horizontal') {
        const back = this.x;
        const front = this.x + this.length - 1;
        return cell.x >= back && cell.x <= front && cell.y === this.y;
      } else if (this.orientation === 'vertical') {
        const back = this.y;
        const front = this.y + this.length - 1;
        return cell.y >= back && cell.y <= front && cell.x === this.x;
      }
    });
  }
}
/* harmony default export */ const ship = (Ship);
;// CONCATENATED MODULE: ./src/logic/battleship.js

class Battleship extends ship {
  constructor() {
    super(4);
  }
}
/* harmony default export */ const battleship = (Battleship);
;// CONCATENATED MODULE: ./src/logic/destroyer.js

class Destroyer extends ship {
  constructor() {
    super(3);
  }
}
/* harmony default export */ const destroyer = (Destroyer);
;// CONCATENATED MODULE: ./src/logic/patrolBoat.js

class PatrolBoat extends ship {
  constructor() {
    super(1);
  }
}
/* harmony default export */ const patrolBoat = (PatrolBoat);
;// CONCATENATED MODULE: ./src/logic/submarine.js

class Submarine extends ship {
  constructor() {
    super(2);
  }
}
/* harmony default export */ const submarine = (Submarine);
;// CONCATENATED MODULE: ./src/logic/rules.js




const gameboardShips = [{
  count: 1,
  type: battleship
}, {
  count: 2,
  type: destroyer
}, {
  count: 3,
  type: submarine
}, {
  count: 4,
  type: patrolBoat
}];
function hasOutOfBoundsShips(ships, gameboard) {
  const someShipGoesOutOfBounds = ships.some(ship => {
    if (ship.orientation === 'horizontal') {
      return ship.x > gameboard.size - ship.length;
    } else if (ship.orientation === 'vertical') {
      return ship.y > gameboard.size - ship.length;
    }
  });
  return someShipGoesOutOfBounds;
}
function hasOverlappingShips(ships) {
  const someShipOverlapsAnotherShip = ships.some(ship => {
    const otherShips = ships.filter(otherShip => otherShip !== ship);
    const someCellsOverlap = otherShips.some(otherShip => {
      return otherShip.cells.some(cell => ship.cells.includes(cell));
    });
    return someCellsOverlap;
  });
  return someShipOverlapsAnotherShip;
}
function hasAdjacentShips(ships, gameboard) {
  return someShipIsAtTheTop(ships, gameboard) || someShipIsToTheRight(ships, gameboard) || someShipIsAtTheBottom(ships, gameboard) || someShipIsToTheLeft(ships, gameboard);
}
function someShipIsToTheRight(ships, gameboard) {
  return ships.some(ship => {
    if (shipAgainstRightWall(ship, gameboard)) {
      return false;
    }
    const otherShips = ships.filter(otherShip => otherShip !== ship);
    const rightCells = getCellsToTheRight(gameboard, ship);
    const someShipCellIsToTheRight = otherShips.some(otherShip => {
      return rightCells.some(rightCell => otherShip.cells.includes(rightCell));
    });
    return someShipCellIsToTheRight;
  });
}
function getCellsToTheRight(gameboard, ship) {
  const rightCells = [];
  let rightCell;
  if (ship.orientation === 'horizontal') {
    const shipFront = ship.front();
    rightCell = gameboard.offsetCell(shipFront, 1, -1);
    rightCells.push(rightCell);
    rightCell = gameboard.offsetCell(shipFront, 1, 0);
    rightCells.push(rightCell);
    rightCell = gameboard.offsetCell(shipFront, 1, 1);
    rightCells.push(rightCell);
    return rightCells;
  } else if (ship.orientation === 'vertical') {
    ship.cells.forEach(cell => {
      rightCell = gameboard.offsetCell(cell, 1, 0);
      rightCells.push(rightCell);
    });
    return rightCells;
  }
}
function someShipIsToTheLeft(ships, gameboard) {
  return ships.some(ship => {
    if (shipAgainstLeftWall(ship)) {
      return false;
    }
    const otherShips = ships.filter(otherShip => otherShip !== ship);
    const leftCells = getCellsToTheLeft(gameboard, ship);
    const someShipCellIsToTheLeft = otherShips.some(otherShip => {
      return leftCells.some(leftCell => otherShip.cells.includes(leftCell));
    });
    return someShipCellIsToTheLeft;
  });
}
function getCellsToTheLeft(gameboard, ship) {
  const leftCells = [];
  let leftCell;
  if (ship.orientation === 'horizontal') {
    const shipBack = ship.back();
    leftCell = gameboard.offsetCell(shipBack, -1, -1);
    leftCells.push(leftCell);
    leftCell = gameboard.offsetCell(shipBack, -1, 0);
    leftCells.push(leftCell);
    leftCell = gameboard.offsetCell(shipBack, -1, 1);
    leftCells.push(leftCell);
    return leftCells;
  } else if (ship.orientation === 'vertical') {
    ship.cells.forEach(cell => {
      leftCell = gameboard.offsetCell(cell, -1, 0);
      leftCells.push(leftCell);
    });
    return leftCells;
  }
}
function someShipIsAtTheTop(ships, gameboard) {
  return ships.some(ship => {
    if (shipAgainstTopWall(ship)) {
      return false;
    }
    const otherShips = ships.filter(otherShip => otherShip !== ship);
    const topCells = getCellsAtTheTop(gameboard, ship);
    const someShipCellIsAtTheTop = otherShips.some(otherShip => {
      return topCells.some(topCell => otherShip.cells.includes(topCell));
    });
    return someShipCellIsAtTheTop;
  });
}
function getCellsAtTheTop(gameboard, ship) {
  const topCells = [];
  let topCell;
  if (ship.orientation === 'horizontal') {
    ship.cells.forEach(cell => {
      topCell = gameboard.offsetCell(cell, 0, -1);
      topCells.push(topCell);
    });
    return topCells;
  } else if (ship.orientation === 'vertical') {
    const shipBack = ship.back();
    topCell = gameboard.offsetCell(shipBack, -1, -1);
    topCells.push(topCell);
    topCell = gameboard.offsetCell(shipBack, 0, -1);
    topCells.push(topCell);
    topCell = gameboard.offsetCell(shipBack, 1, -1);
    topCells.push(topCell);
    return topCells;
  }
}
function someShipIsAtTheBottom(ships, gameboard) {
  return ships.some(ship => {
    if (shipAgainstBottomWall(ship, gameboard)) {
      return false;
    }
    const otherShips = ships.filter(otherShip => otherShip !== ship);
    const bottomCells = getCellsAtTheBottom(gameboard, ship);
    const someShipCellIsAtTheBottom = otherShips.some(otherShip => {
      return bottomCells.some(bottomCell => otherShip.cells.includes(bottomCell));
    });
    return someShipCellIsAtTheBottom;
  });
}
function getCellsAtTheBottom(gameboard, ship) {
  const bottomCells = [];
  let bottomCell;
  if (ship.orientation === 'horizontal') {
    ship.cells.forEach(cell => {
      bottomCell = gameboard.offsetCell(cell, 0, 1);
      bottomCells.push(bottomCell);
    });
    return bottomCells;
  } else if (ship.orientation === 'vertical') {
    const shipFront = ship.front();
    bottomCell = gameboard.offsetCell(shipFront, -1, 1);
    bottomCells.push(bottomCell);
    bottomCell = gameboard.offsetCell(shipFront, 0, 1);
    bottomCells.push(bottomCell);
    bottomCell = gameboard.offsetCell(shipFront, 1, 1);
    bottomCells.push(bottomCell);
    return bottomCells;
  }
}
function shipAgainstTopWall(ship) {
  return ship.y === 0;
}
function shipAgainstRightWall(ship, gameboard) {
  return ship.front().x === gameboard.size - 1;
}
function shipAgainstBottomWall(ship, gameboard) {
  return ship.front().y === gameboard.size - 1;
}
function shipAgainstLeftWall(ship) {
  return ship.x === 0;
}

;// CONCATENATED MODULE: ./src/logic/player.js


class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
    this.target = undefined;
  }
  resetTarget() {
    this.target = undefined;
  }
  placeShips(ships) {
    if (this.#allShipsInValidPositions(ships)) {
      ships.forEach(ship => this.gameboard.placeShip(ship, ship.x, ship.y));
      return true;
    }
    return false;
  }
  placeRandomShips() {
    let shipsInValidPosition = false;
    while (!shipsInValidPosition) {
      const ships = this.#createRandomShips();
      if (this.#allShipsInValidPositions(ships)) {
        shipsInValidPosition = true;
        ships.forEach(ship => this.gameboard.placeShip(ship, ship.x, ship.y));
      }
    }
  }
  #allShipsInValidPositions(ships) {
    return !hasOverlappingShips(ships) && !hasOutOfBoundsShips(ships, this.gameboard) && !hasAdjacentShips(ships, this.gameboard);
  }
  #createRandomShips() {
    const ships = [];
    gameboardShips.forEach(boardShip => {
      for (let index = 0; index < boardShip.count; index++) {
        const ship = this.#createShipWithRandomOrientation(boardShip);
        const [x, y] = this.gameboard.getRandomPosition();
        ship.place(x, y, this.gameboard);
        ships.push(ship);
      }
    });
    return ships;
  }
  #createShipWithRandomOrientation(boardShip) {
    const ship = new boardShip.type();
    ship.setRandomOrientation();
    return ship;
  }
}
/* harmony default export */ const player = (Player);
;// CONCATENATED MODULE: ./src/logic/computer.js



class Computer extends player {
  async getNextShot(targetGameboard) {
    await delay(500);
    if (this.target) {
      const potentialHits = this.target.potentialHits(targetGameboard);
      const randomIndex = getRandomInt(potentialHits.length);
      return potentialHits.at(randomIndex);
    }
    const availableCells = targetGameboard.getAvailableCells();
    const randomIndex = getRandomInt(availableCells.length);
    return availableCells.at(randomIndex);
  }
}
/* harmony default export */ const computer = (Computer);
;// CONCATENATED MODULE: ./src/logic/human.js

class Human extends player {
  async getNextShot(targetGameboard) {}
}
/* harmony default export */ const human = (Human);
;// CONCATENATED MODULE: ./src/dom/cell.js
class Cell {
  #element = document.createElement('div');
  constructor(x, y, disabled) {
    this.x = x;
    this.y = y;
    this.#element.classList.add('gameboard-1-1-cell');
    // this.#element.textContent = `${x}, ${y}`;

    if (disabled) {
      this.disableHover();
    } else {
      this.enableHover();
    }
    this.#element.addEventListener('click', event => {
      this.#handleClick(event);
    });
  }
  render() {
    return this.#element;
  }
  enableFill() {
    this.#element.classList.add('fill');
  }
  enableMiss() {
    this.#element.classList.add('miss');
  }
  enableHit() {
    this.#element.classList.add('hit');
  }
  enableHover() {
    this.#element.classList.add('hover');
  }
  disableHover() {
    this.#element.classList.remove('hover');
  }
  reset() {
    this.#disableFill();
    this.#disableHit();
    this.#disableMiss();
    this.#disableSunk();
    this.#disableSunkAdjacent();
  }
  enableShot() {
    this.#element.classList.add('shot');
  }
  disableShot() {
    this.#element.classList.remove('shot');
  }
  enableSunk() {
    this.#element.classList.add('ship-sunk');
  }
  enableSunkAdjacent() {
    this.#element.classList.add('ship-sunk-adjacent');
  }
  #disableSunk() {
    this.#element.classList.remove('ship-sunk');
  }
  #disableSunkAdjacent() {
    this.#element.classList.remove('ship-sunk-adjacent');
  }
  #handleClick(event) {
    event.cell = this;
  }
  #disableFill() {
    this.#element.classList.remove('fill');
  }
  #disableMiss() {
    this.#element.classList.remove('miss');
  }
  #disableHit() {
    this.#element.classList.remove('hit');
  }
}
/* harmony default export */ const dom_cell = (Cell);
;// CONCATENATED MODULE: ./src/dom/ship.js
class ship_Ship {
  constructor(x, y, length, cells) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.cells = cells;
  }
  setSunk() {
    this.cells.forEach(cell => {
      cell.enableSunk();
    });
  }
}
/* harmony default export */ const dom_ship = (ship_Ship);
;// CONCATENATED MODULE: ./src/dom/gameboard.js



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
    this.#cells.forEach(cellDOM => {
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
    this.#labelsTop.forEach(label => {
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
    this.gameboard_1_1.addEventListener('click', event => {
      this.#handleClick(event);
    });
  }
  createShips() {
    const ships = this.controller.getShips();
    ships.forEach(ship => {
      const cellDOMs = this.#getShipCellDOMs(ship);
      const shipDOM = new dom_ship(ship.x, ship.y, ship.length, cellDOMs);
      this.#ships.push(shipDOM);
    });
  }
  getCellDOM(x, y) {
    return this.#cells.find(cellDOM => {
      return cellDOM.x === x && cellDOM.y === y;
    });
  }
  renderCells() {
    this.#cells.forEach(cellDOM => {
      this.gameboard_1_1.appendChild(cellDOM.render());
    });
  }
  renderShips() {
    this.#ships.forEach(shipDOM => {
      const cellDOMs = shipDOM.cells;
      cellDOMs.forEach(cellDOM => {
        cellDOM.enableFill();
      });
    });
  }
  reset() {
    this.#ships = [];
    this.#cells.forEach(cellDOM => cellDOM.reset());
  }
  renderSunkShip(ship) {
    const shipDOM = this.#getShipAt(ship.x, ship.y);
    shipDOM.setSunk();
  }
  renderAdjacentCells(ship) {
    const adjacentCells = this.controller.getShipAdjacentCells(ship);
    adjacentCells.forEach(cell => {
      const cellDOM = this.getCellDOM(cell.x, cell.y);
      cellDOM.enableSunkAdjacent();
      cellDOM.disableHover();
    });
  }
  async renderShot(attackResult, cell) {
    cell.disableHover();
    cell.enableShot();
    if (attackResult.hit) {
      await delay(500);
      this.renderHit(cell);
      if (attackResult.ship.isSunk()) {
        if (this.controller.allShipsSunk()) {
          this.disableClick();
          await delay(500);
          this.renderSunkShip(attackResult.ship);
          this.renderAdjacentCells(attackResult.ship);
        } else {
          await delay(500);
          this.renderSunkShip(attackResult.ship);
          this.renderAdjacentCells(attackResult.ship);
        }
      }
    } else {
      this.disableClick();
      await delay(500);
      this.renderMiss(cell);
    }
  }
  renderMiss(cell) {
    cell.disableShot();
    cell.enableMiss();
  }
  renderHit(cell) {
    cell.disableShot();
    cell.enableHit();
  }
  #createCells() {
    const cells = this.controller.cells;
    cells.forEach(cell => {
      const x = cell.x;
      const y = cell.y;
      const cellDOM = new dom_cell(x, y, this.isDisabled());
      this.#cells.push(cellDOM);
    });
  }
  #enableHoverOnAllOpenCells() {
    this.#cells.forEach(cellDOM => {
      const isExistingShot = this.controller.isExistingShot(cellDOM.x, cellDOM.y);
      const adjacentCells = this.controller.getAllSunkShipsAdjacentCells();
      const cell = this.controller.getCellAt(cellDOM.x, cellDOM.y);
      const isAdjacentCell = adjacentCells.includes(cell);
      if (!isExistingShot && !isAdjacentCell) {
        cellDOM.enableHover();
      }
    });
  }
  #getShipCellDOMs(ship) {
    const shipBack = ship.back();
    const shipFront = ship.front();
    return this.#cells.filter(cellDOM => {
      if (ship.orientation === 'horizontal') {
        return cellDOM.x >= shipBack.x && cellDOM.x <= shipFront.x && cellDOM.y === ship.y;
      } else if (ship.orientation === 'vertical') {
        return cellDOM.y >= shipBack.y && cellDOM.y <= shipFront.y && cellDOM.x === ship.x;
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
      disabled: this.isDisabled()
    };
    clickData.pointerType = event.pointerType;
    this.handleTurnCallback(clickData);
  }
  #getShipAt(x, y) {
    return this.#ships.find(ship => ship.x === x && ship.y === y);
  }
}
/* harmony default export */ const gameboard = (Gameboard);
;// CONCATENATED MODULE: ./src/logic/cell.js
class cell_Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  offset(x, y) {
    return new cell_Cell(this.x + x, this.y + y);
  }
}
/* harmony default export */ const logic_cell = (cell_Cell);
;// CONCATENATED MODULE: ./src/logic/gameboard.js



class gameboard_Gameboard {
  #ships = [];
  #misses = [];
  constructor() {
    let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    this.size = size;
    this.cells = [];
    this.#createCells();
  }
  placeShip(ship, x, y) {
    ship.place(x, y, this);
    this.#ships.push(ship);
  }
  receiveAttack(x, y) {
    const hitShip = this.#getShipOnCell(x, y);
    if (hitShip) {
      hitShip.hit(this.getCellAt(x, y));
      return {
        hit: true,
        ship: hitShip
      };
    } else {
      this.#misses.push(this.getCellAt(x, y));
      return {
        hit: false,
        ship: undefined
      };
    }
  }
  allShipsSunk() {
    return this.#ships.every(ship => ship.isSunk());
  }
  getShips() {
    return [...this.#ships];
  }
  getMisses() {
    return [...this.#misses];
  }
  getHits() {
    return this.#ships.flatMap(ship => ship.getHits());
  }
  isShipOnCell(x, y) {
    return !!this.#getShipOnCell(x, y);
  }
  getCellAt(x, y) {
    return this.cells.find(cell => cell.x === x && cell.y === y);
  }
  offsetCell(cell, x, y) {
    return this.getCellAt(cell.x + x, cell.y + y);
  }
  isExistingShot(x, y) {
    return !!this.#getHitOnCell(x, y) || !!this.#getMissOnCell(x, y);
  }
  getRandomPosition() {
    const x = getRandomInt(this.size);
    const y = getRandomInt(this.size);
    return [x, y];
  }
  reset() {
    this.#ships = [];
    this.#misses = [];
  }
  getAllSunkShips() {
    return this.#ships.filter(ship => ship.isSunk());
  }
  getShipAdjacentCells(ship) {
    const topCells = getCellsAtTheTop(this, ship);
    const rightCells = getCellsToTheRight(this, ship);
    const bottomCells = getCellsAtTheBottom(this, ship);
    const leftCells = getCellsToTheLeft(this, ship);
    const adjacentCells = topCells.concat(rightCells, bottomCells, leftCells);
    const validAdjacentCells = adjacentCells.filter(cell => cell !== undefined);
    validAdjacentCells.sort((a, b) => Math.sign(a.x - b.x) || Math.sign(a.y - b.y));
    return validAdjacentCells;
  }
  getAllSunkShipsAdjacentCells() {
    const sunkShips = this.getAllSunkShips();
    return sunkShips.flatMap(ship => this.getShipAdjacentCells(ship));
  }
  getAvailableCells() {
    return this.cells.filter(cell => {
      const allHits = this.getHits();
      const allMisses = this.getMisses();
      const allShots = allHits.concat(allMisses);
      const allAdjacentCells = this.getAllSunkShipsAdjacentCells();
      const foundInShots = allShots.find(shot => {
        return cell.x === shot.x && cell.y === shot.y;
      });
      const foundInAdjacentCells = allAdjacentCells.find(adjacentCell => {
        return cell.x === adjacentCell.x && cell.y === adjacentCell.y;
      });
      const found = foundInShots || foundInAdjacentCells;
      return !found;
    });
  }
  #createCells() {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const cell = new logic_cell(x, y);
        this.cells.push(cell);
      }
    }
  }
  #getHitOnCell(x, y) {
    const hits = this.getHits();
    return hits.find(cell => x === cell.x && y === cell.y);
  }
  #getMissOnCell(x, y) {
    return this.#misses.find(cell => x === cell.x && y === cell.y);
  }
  #getShipOnCell(x, y) {
    return this.#ships.find(ship => {
      const shipBack = ship.back();
      const shipFront = ship.front();
      if (ship.orientation === 'horizontal') {
        return x >= shipBack.x && x <= shipFront.x && y === ship.y;
      } else if (ship.orientation === 'vertical') {
        return y >= shipBack.y && y <= shipFront.y && x === ship.x;
      }
    });
  }
}
/* harmony default export */ const logic_gameboard = (gameboard_Gameboard);
;// CONCATENATED MODULE: ./src/dom/message.js
let message_element;
function setText(text) {
  message_element.textContent = text;
}
const message = {
  setElement(div) {
    message_element = div;
  },
  setEnemyTurn() {
    setText("Enemy's turn!");
  },
  setHumanTurn() {
    setText('Your turn!');
  },
  setWon(player) {
    setText(`${player.name} won!`);
  },
  setInstruction() {
    setText("Randomize your ships until you're happy with their positions, then press Play!");
  },
  setLoadingShips() {
    setText('Loading random ships...');
  },
  setCellHit(cell, player, gameboardElement) {
    setText(`${player.name} hit a ship at ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`);
  },
  setCellMiss(cell, player, gameboardElement) {
    setText(`${player.name} missed at ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. End of turn.`);
  },
  setShipSunk(cell, player, gameboardElement) {
    setText(`${player.name} sunk a ship after hitting ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`);
  },
  setExistingShot(cell, player, gameboardElement) {
    setText(`Invalid shot: ${player.name} repeated a shot at ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`);
  },
  setAdjacentCell(cell, player, gameboardElement) {
    setText(`Invalid shot: ${player.name} shot at adjacent cell: ${gameboardElement.labelTopAt(cell.x) + gameboardElement.labelLeftAt(cell.y)}. Attack again.`);
  },
  text() {
    return message_element.textContent;
  }
};
/* harmony default export */ const dom_message = (message);
;// CONCATENATED MODULE: ./src/logic/shot.js
class Shot {
  constructor(_ref) {
    let {
      gameboard: gameboardElement,
      pointerType,
      cell: cellDOM,
      humanPlayer: human,
      enemyPlayer: enemy
    } = _ref;
    this.gameboardElement = gameboardElement;
    this.pointerType = pointerType;
    this.cellDOM = cellDOM;
    this.human = human;
    this.enemy = enemy;
    if (this.pointerType === 'mouse') {
      this.clicker = this.human;
    } else if (this.pointerType === '') {
      this.clicker = this.enemy;
    }
  }
  isValid() {
    return !this.#isExistingShot() && !this.#isAdjacentCell();
  }
  isOnOwnGameboard() {
    const result = this.gameboardElement.owner === this.clicker;
    if (result) {
      console.log('PlayerClickingOwnGameboard');
    }
    return result;
  }
  #isExistingShot() {
    const result = this.gameboardElement.controller.isExistingShot(this.cellDOM.x, this.cellDOM.y);
    if (result) {
      console.log('isExistingShot');
    }
    return result;
  }
  #isAdjacentCell() {
    const adjacentCells = this.gameboardElement.controller.getAllSunkShipsAdjacentCells();
    const cell = this.gameboardElement.controller.getCellAt(this.cellDOM.x, this.cellDOM.y);
    const isAdjacentCell = adjacentCells.includes(cell);
    if (isAdjacentCell) {
      console.log('isAdjacentCell');
    }
    return isAdjacentCell;
  }
}
/* harmony default export */ const logic_shot = (Shot);
;// CONCATENATED MODULE: ./src/index.js








async function nextTurn() {
  currentGameboardElement.disable();
  setNextPlayer();
  if (currentPlayer === enemy) {
    dom_message.setEnemyTurn();
    currentGameboardElement = humanGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
    currentGameboardElement.disableHoverOnAllCells();
    const nextShot = await currentPlayer.getNextShot(currentGameboardElement.controller);
    clickCell(nextShot);
  } else {
    dom_message.setHumanTurn();
    currentGameboardElement = enemyGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
  }
}
function clickCell(nextShot) {
  const cellDOM = currentGameboardElement.getCellDOM(nextShot.x, nextShot.y);
  cellDOM.render().click();
}
function attackGameboard(gameboardElement, cell) {
  return gameboardElement.controller.receiveAttack(cell.x, cell.y);
}
async function handleTurn(clickData) {
  clickData.humanPlayer = src_human;
  clickData.enemyPlayer = enemy;
  const {
    gameboard: gameboardElement,
    cell
  } = clickData;
  if (!cell) {
    console.log('undefined cell');
    return;
  }
  const shot = new logic_shot(clickData);
  if (shot.isOnOwnGameboard()) {
    return;
  }
  if (!shot.isValid()) {
    const nextShot = await currentPlayer.getNextShot(currentGameboardElement.controller);
    if (currentPlayer === enemy) {
      clickCell(nextShot);
    }
    return;
  }
  const attackResult = attackGameboard(gameboardElement, cell);
  updatePlayerState(attackResult);
  renderMessage(attackResult, cell);
  currentGameboardElement.renderShot(attackResult, cell);
  if (currentGameboardElement.controller.allShipsSunk()) {
    return;
  }
  if (attackResult.hit) {
    const nextShot = await currentPlayer.getNextShot(currentGameboardElement.controller);
    if (currentPlayer === enemy) {
      clickCell(nextShot);
    }
  } else {
    await delay(1000);
    nextTurn();
  }
}
function updatePlayerState(attackResult) {
  if (attackResult.hit) {
    if (attackResult.ship.isSunk()) {
      currentPlayer.resetTarget();
    } else {
      currentPlayer.target = attackResult.ship;
    }
  }
}
function renderMessage(attackResult, cell) {
  if (attackResult.hit) {
    dom_message.setCellHit(cell, currentPlayer, currentGameboardElement);
    if (attackResult.ship.isSunk()) {
      if (currentGameboardElement.controller.allShipsSunk()) {
        dom_message.setWon(currentPlayer);
      } else {
        dom_message.setShipSunk(cell, currentPlayer, currentGameboardElement);
      }
    }
  } else {
    dom_message.setCellMiss(cell, currentPlayer, currentGameboardElement);
  }
}
function setNextPlayer() {
  if (currentPlayer === src_human) {
    currentPlayer = enemy;
  } else {
    currentPlayer = src_human;
  }
}
function startGame() {
  enemyGameboardElement.enable();
  enemyGameboardElement.enableClick();
  dom_message.setHumanTurn();
  randomizeButton.disabled = true;
  playButton.disabled = true;
}
function setupHumanGameboardElement() {
  humanGameboardElement = new gameboard(src_human, handleTurn);
  humanContainer.appendChild(humanGameboardElement.render());
}
function setupComputerGameboardElement() {
  enemyGameboardElement = new gameboard(enemy, handleTurn);
  enemyContainer.appendChild(enemyGameboardElement.render());
}
function setupComputerPlayer() {
  enemyGameboard = new logic_gameboard();
  enemy = new computer(enemyGameboard, 'enemy');
}
function setupHumanPlayer() {
  humanGameboard = new logic_gameboard();
  src_human = new human(humanGameboard, 'human');
}
function randomizeGameboard(gameboardElement) {
  let renderShips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  dom_message.setLoadingShips();
  setTimeout(() => {
    gameboardElement.controller.reset();
    gameboardElement.reset();
    gameboardElement.owner.placeRandomShips();
    gameboardElement.createShips();
    if (renderShips) {
      gameboardElement.renderShips();
    }
  });
  setTimeout(() => dom_message.setInstruction());
}
function setupGame() {
  currentPlayer = src_human;
  enemyGameboardElement.disable();
  humanGameboardElement.disable();
  currentGameboardElement = enemyGameboardElement;
  randomizeButton.disabled = false;
  playButton.disabled = false;
  randomizeGameboard(enemyGameboardElement, false);
  randomizeGameboard(humanGameboardElement);
}
const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  setupGame();
});
const randomizeButton = document.getElementById('randomize-btn');
randomizeButton.addEventListener('click', () => {
  randomizeGameboard(humanGameboardElement);
});
const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', startGame);
let enemyGameboardElement;
let humanGameboardElement;
let currentGameboardElement;
let enemyGameboard;
let humanGameboard;
let enemy;
let src_human;
let currentPlayer;
const enemyContainer = document.getElementById('gameboard-container-enemy');
const humanContainer = document.getElementById('gameboard-container-human');
dom_message.setElement(document.getElementById('message'));
setupHumanPlayer();
setupComputerPlayer();
setupComputerGameboardElement();
setupHumanGameboardElement();
setupGame();

/***/ }),

/***/ 509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(527));
/******/ }
]);
//# sourceMappingURL=index.bundle.js.map