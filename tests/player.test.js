import Player from '../src/player';

test('player contains a gameboard', () => {
  const player = new Player();
  expect(player).toHaveProperty('gameboard');
});
