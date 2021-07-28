function solution(a, b, c) {
  let min = 0;
  min = a < b ? a : b;
  min = min < c ? min : c;
  return min;
}

console.log(solution(2, 5, 1));