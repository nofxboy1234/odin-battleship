class Ship {
  constructor() {
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }
}

// const ship1 = new Ship();
// ship1.showSecret();

export default Ship;
