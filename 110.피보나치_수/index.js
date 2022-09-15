function solution(n) {
  var answer = 0;

  const arr = new Array(n + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  answer = arr[n];
  return answer;
}

console.log(solution(3)); // 2