const array2D = [
  [1, 7, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const findMin = (arr2d) => {
  let min = arr2d[0][0];
  let arrResult = [];
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
      if (arr2d[i][j] < min) {
        min = arr2d[i][j];
      }
    }
  }
  arrResult.push(min);

  let min1 = arr2d[0][1];
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
      if (arr2d[i][j] < min1 && arr2d[i][j] !== min) {
        min1 = arr2d[i][j];
      }
    }
  }
  arrResult.push(min1);

  console.log(arrResult);
};

findMin(array2D);
