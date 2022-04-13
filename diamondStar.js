const drawDiamondStar = (n) => {
  let symbol = "*";
  let space = " ";
  for (let i = 1; i <= n; i++) {
    for (let j = n - i; j > 0; j--) {
      process.stdout.write(space);
    }
    console.log(symbol);
    symbol += "**";
  }

  symbol = symbol.slice(2);

  for (let i = 1; i < n; i++) {
    for (let j = n - i; j < n; j++) {
      process.stdout.write(space);
    }
    symbol = symbol.slice(2);
    console.log(symbol);
  }
};

drawDiamondStar(3);
