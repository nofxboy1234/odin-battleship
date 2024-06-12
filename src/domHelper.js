function render(gameboard, targetID) {
  const container = document.getElementById(targetID);

  gameboard.getShips().forEach((ship) => {
    const div = document.createElement('div');
    div.textContent = [ship.x, ship.y, ship.length];
    container.appendChild(div);
  });
}

export default render;
