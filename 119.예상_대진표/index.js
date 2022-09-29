function solution(n, a, b) {
  var answer = 0;

  // a와 b 오름차순으로 할당
  let first = Math.min(a, b);
  let second = Math.max(a, b);

  const maxCnt = Math.log2(n); // 반복문이 돌 횟수 (2의 지수)

  for (let i = 1; i < maxCnt + 1; i++) {
    // first가 홀수여야 하고, 차이값이 1일 경우 => 둘이 붙게되는 경우
    if (first % 2 === 1 && second - first === 1) return i;
    first = Math.ceil(first / 2);
    second = Math.ceil(second / 2);
  }
  return answer;
}

console.log(solution(8, 4, 7)); // 3
console.log(solution(16, 1, 16)); // 4
console.log(solution(16, 9, 12)); // 2
console.log(solution(8, 4, 5)); // 3
