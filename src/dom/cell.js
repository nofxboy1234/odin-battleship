class Cell {
  #element = document.createElement('div');

  constructor(x, y, gameboard, gameboardDOM) {
    this.#element.classList.add('gameboard-1-1-cell');
    this.#element.textContent = `${x}, ${y}`;

    if (gameboardDOM.isDisabled()) {
      this.toggleHover();
    }

    this.#element.addEventListener('click', () => {
      this.handleClick(x, y, gameboard, gameboardDOM);
    });
  }

  render() {
    return this.#element;
  }

  toggleFilled() {
    this.#element.classList.toggle('fill');
  }

  toggleMiss() {
    this.#element.classList.toggle('miss');
  }

  toggleHit() {
    this.#element.classList.toggle('hit');
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
      this.toggleHit();
    } else {
      this.toggleMiss();
      gameboardDOM.disable();
    }
  }
}

export default Cell;
