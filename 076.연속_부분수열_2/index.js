function solution(m, arr) {
  const len = arr.length;
  let count = 0;
  let p1 = 0;

  while (p1 < len) {
    let p2 = p1;
    let sum = 0;
    while (p2 < len && sum < m) {
      sum += arr[p2];
      if (sum <= m) count++;
      p2++;
    }
    p1++;
  }
  return count;
}

// 선생님 풀이
function solution1(m, arr) {
  const len = arr.length;
  let count = 0;
  let lt = 0; // move last
  let rt = 0; // move first
  let sum = 0;
  while (rt < len) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    count += rt - lt + 1; //  ! rt - lt + 1 그 수까지 포함한 수열의 개수 (rt의 loop 한번이 끝날 때 무조건 실행)
    rt++;
  }
  return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution1(5, a));
