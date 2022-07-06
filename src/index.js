module.exports = function reverse (n) {
  const numModule = Math.abs(n);
  const numStr = String(numModule);
  let i = 0;
  let result = '';
  while (i < numStr.length) {
    result = `${numStr[i]}${result}`;
    i += 1;
  }
  return Number(result);

}
