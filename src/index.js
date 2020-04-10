var tribonacci = function(n) {
  //somehow storing takes up less sapce and i don't understand
  let trib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    trib[i] = trib[i - 3] + trib[i - 2] + trib[i - 1];
  }
  return trib[n];
};

console.log(tribonacci(5));
console.log(tribonacci(36));
