function solution(m, arr) {
  const len = arr.length;
  let count = 0;
  // outer loop 포인터
  let p1 = 0;
  while (p1 < len) {
    let sum = 0;
    let p2 = p1; // inner loop 포인터
    while (sum < m && p2 < len) {
      sum += arr[p2];
      p2++;
    }
    if (sum === m) count++;
    p1++;
  }
  return count;
}

// 선생님 풀이
function solution01(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution01(6, a));
