class Cell {
  #element = document.createElement('div');

  constructor(x, y, gameboard, gameboardDOM) {
    this.#element.classList.add('gameboard-1-1-cell');
    this.#element.textContent = `${x}, ${y}`;

    if (gameboardDOM.isDisabled()) {
      this.disableHover();
    }

    this.#element.addEventListener('click', () => {
      this.handleClick(x, y, gameboard, gameboardDOM);
    });
  }

  render() {
    return this.#element;
  }

  enableFill() {
    this.#element.classList.add('fill');
  }

  disableFill() {
    this.#element.classList.remove('fill');
  }

  enableMiss() {
    this.#element.classList.add('miss');
  }

  disableMiss() {
    this.#element.classList.remove('miss');
  }

  enableHit() {
    this.#element.classList.add('hit');
  }

  disableHit() {
    this.#element.classList.remove('hit');
  }

  enableHover() {
    this.#element.classList.add('hover');
  }

  disableHover() {
    this.#element.classList.remove('hover');
  }

  toggleHover() {
    this.#element.classList.toggle('hover');
  }

  handleClick(x, y, gameboard, gameboardDOM) {
    if (gameboardDOM.isDisabled()) {
      return;
    }

    gameboard.receiveAttack(x, y);

    if (gameboard.isShipOnCell(x, y)) {
      this.enableHit();
    } else {
      this.enableMiss();
      gameboardDOM.disable();
    }
  }
}

export default Cell;
