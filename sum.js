const getSum = (n) => {
  let resultSum = 0;
  let mutiple = 1;
  for (let i = 0; i < n; i++) {
    mutiple = mutiple * (i + 1);
    resultSum += mutiple;
  }
  console.log(resultSum % 2022);
};

getSum(6);
