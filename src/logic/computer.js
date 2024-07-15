import Player from './player';
import { getRandomInt } from './helpers';
import { delay } from './helpers';

class Computer extends Player {
  async getNextShot(targetGameboard) {
    await delay(500);

    if (this.target) {
      const potentialHits = this.target.potentialHits(targetGameboard);
      const randomIndex = getRandomInt(potentialHits.length);
      return potentialHits.at(randomIndex);
    }

    const availableCells = targetGameboard.getAvailableCells();
    const randomIndex = getRandomInt(availableCells.length);
    return availableCells.at(randomIndex);
  }
}

export default Computer;
