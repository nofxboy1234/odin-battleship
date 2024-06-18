// function clearChild(element) {
//   const child = element.firstChild;
//   if (child) {
//     element.removeChild(child);
//   }
// }

// function clearGameboards() {
//   const topLabelElements = document.getElementsByClassName(
//     'cell-labels-top-container',
//   );

//   [...topLabelElements].forEach((element) => {
//     clearChild(element);
//   });

//   const leftLabelElements = document.getElementsByClassName(
//     'cell-labels-left-container',
//   );

//   [...leftLabelElements].forEach((element) => {
//     clearChild(element);
//   });

//   const humanGameboard = document.getElementById('human-gameboard-container');
//   clearChild(humanGameboard);

//   const computerGameboard = document.getElementById(
//     'computer-gameboard-container',
//   );
//   clearChild(computerGameboard);
// }

// export {
//   renderGameboard,
//   createLabelsLeftCells,
//   createLabelsTopCells,
//   createCellLabelsTop,
//   createCellLabelsLeft,
//   clearChild,
//   clearGameboards,
// };
