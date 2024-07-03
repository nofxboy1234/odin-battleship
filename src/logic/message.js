const message = {
  element: document.getElementById('message'),
  setEnemyTurn: function () {
    this.element.textContent = "Enemy's turn!";
  },
  setHumanTurn: function () {
    this.element.textContent = 'Your turn!';
  },
  setEnemyWon: function () {
    this.element.textContent = 'Enemy won!';
  },
  setHumanWon: function () {
    this.element.textContent = 'You won!';
  },
  setInstruction: function () {
    this.element.textContent =
      "Randomize your ships until you're happy with their positions, then press Play!";
  },
};

export default message;
