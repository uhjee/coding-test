function solution(a, b, c) {
  // const max = Math.max(...[a, b, c]);
  let max = 0;
  let restSum = 0;
  if (a > b) {
    max = a;
    restSum += b;
  } else {
    max = b;
    restSum += a;
  }
  if (c > max) {
    max = c;
    restSum += b;
  } else {
    restSum += c;
  }

  return restSum > max ? 'YES' : 'NO';
}

function solution1(a, b, c) {
  const max = Math.max(...[a, b, c]);

  return (a + b + c) - max > max ? 'YES' : 'NO';
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));

console.log(solution1(13, 33, 17));
console.log(solution1(6, 7, 11));
