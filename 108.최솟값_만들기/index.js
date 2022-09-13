function solution(A, B) {
  var answer = 0;

  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  for (let i = 0; i < sortedA.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }
  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
