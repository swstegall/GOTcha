export const goodCode = (code: string, lowestWin: number) => {
  let counter: number = 0;
  for (let i: number = 0; i < code.length; ++i) {
    counter += parseInt(code[i]);
    if (counter >= 10) {
      counter %= 10;
    }
  }
  return counter >= lowestWin;
}