function solution(n) {
  var answer = 0;
  let p1 = 1;
  let p2 = 2;
  let sum = p1;
  while (p1 <= n) {
    if (sum < n) {
      sum += p2++;
    } else if (sum > n) {
      sum -= p1++;
    } else {
      sum += p2++;
      sum -= p1++;
      answer++;
    }
  }
  return answer;
}

console.log(solution(15)); // 4