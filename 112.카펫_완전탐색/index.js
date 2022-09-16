function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow;
  for (let i = 3; i < sum; i++) {
    if ((i - 2) * (sum / i - 2) === yellow) {
      answer[0] = sum / i;
      answer[1] = i;
      break;
    }
  }
  return answer;
}

// console.log(solution(10, 2)); // [4,3]
console.log(solution(24, 24)); // [8,6]