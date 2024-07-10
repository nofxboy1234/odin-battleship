function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export { getRandomInt, delay };
