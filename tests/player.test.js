import Player from '../src/logic/player';

test('player contains a gameboard', () => {
  const player = new Player();
  expect(player).toHaveProperty('gameboard');
});
