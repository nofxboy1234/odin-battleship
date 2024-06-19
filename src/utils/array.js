function zipArrays(arrayA, arrayB) {
  return arrayA.map((element, index) => [element, arrayB[index]]);
}

function createXArray() {
  const xArray = [];

  for (let value = 0; value < 10; value++) {
    for (let index = 0; index < 10; index++) {
      xArray.push(index);
    }
  }
  return xArray;
}

function createYArray() {
  const yArray = [];

  for (let value = 0; value < 10; value++) {
    for (let index = 0; index < 10; index++) {
      yArray.push(value);
    }
  }
  return yArray;
}

export { zipArrays, createXArray, createYArray };
