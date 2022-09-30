function solution(n) {
  var answer = 0;

  const DFS = (rest) => {
    if (rest <= 0) {
      if (rest === 0) answer++;
      return;
    } else {
      DFS(rest - (1 % 1234567));
      DFS(rest - (2 % 1234567));
    }
  };
  DFS(n % 1234567);
  return answer;
}

console.log(solution(3)); // 3
console.log(solution(4)); // 5
