class Cell {
  #element = undefined;

  constructor(gameboard, x, y, filled) {
    this.#element = document.createElement('div');

    this.#element.textContent = `${x}, ${y}`;

    this.#element.classList.add('cell');
    if (!gameboard.isDisabled()) {
      this.#element.classList.add('cell-hover');
    }

    if (filled) {
      this.#element.classList.add('cell-filled');
    }

    this.#element.addEventListener('click', () => {
      this.handleClick(gameboard, x, y, this.#element);
    });
  }

  render() {
    return this.#element;
  }

  renderHit() {
    this.#element.classList.add('hit');
  }

  renderMiss(div) {
    this.#element.classList.add('miss');
  }

  handleClick(gameboard, x, y, div) {
    if (gameboard.isDisabled()) {
      return;
    }

    gameboard.receiveAttack(x, y);

    if (gameboard.isShipOnCell(x, y)) {
      renderHit(div);
    } else {
      renderMiss(div);
      gameboard.disable();

      const container = document.getElementById('gameboard-container-computer');
      renderAsDisabled(container);
    }
  }
}

export default Cell;
