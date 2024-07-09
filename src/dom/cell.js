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

    this.#element.addEventListener('click', (event) => {
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

export default Cell;
