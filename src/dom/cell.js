class Cell {
  #element = document.createElement('div');

  constructor(x, y, gameboardDOM) {
    this.x = x;
    this.y = y;

    this.#element.classList.add('gameboard-1-1-cell');
    this.#element.textContent = `${x}, ${y}`;

    if (gameboardDOM.isDisabled()) {
      this.disableHover();
    } else {
      this.enableHover();
    }
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
}

export default Cell;
