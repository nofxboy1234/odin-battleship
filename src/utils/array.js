function zipArrays() {
  const cellArray = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      cellArray.push([x, y]);
    }
  }
  return cellArray;
}

export { zipArrays };
