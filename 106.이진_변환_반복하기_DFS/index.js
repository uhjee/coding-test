function solution(price, money, count) {
  var answer = -1;

  const DFS = (depth, change) => {
    console.log(depth, change);
    if (depth > count) {
      if (change < 0) {
        return change * -1;
      } else {
        return 0;
      }
    } else {
      change -= price * depth;
      return DFS(depth + 1, change);
    }
  };
  answer = DFS(1, money);

  return answer;
}


// 프로그래머스 고수 풀이
function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

console.log(solution('0111010'));
