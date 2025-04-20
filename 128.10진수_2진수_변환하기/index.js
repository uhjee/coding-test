const solution = (decimal) => {
  const restStack = [];
  let value = decimal;
  while (value > 0) {
    restStack.push(value % 2);
    value = Math.floor(value / 2);
  }
  return parseInt(restStack.reverse().join(''), 10);
};

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
