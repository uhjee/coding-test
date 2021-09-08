function solution(n, arr) {
  let max = {
    n: 0,
    sum: 0,
  };
  for (const n of arr) {
    const strArr = [...String(n)];
    let sum = 0;
    for (const ch of strArr) {
      sum += parseInt(ch, 10);
    }
    if (max.sum <= sum && max.n < n) {
      max = { n, sum };
    }
  }
  return max.n;
}

// 선생님 풀이
function solution1(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (const x of arr) {
    let sum = 0;
    let temp = x;
    // 숫자의 각 자리수의 값의 sum 을 구하는 방법
    while (temp) {
      sum += temp % 10; // 10의 자리로 나눈 나머지는 1의 자리 숫자
      temp = Math.floor(temp / 10); // 10의 자리로 나눈 값은  n의 자리 숫자~10의 자리 숫자
    }
    if (sum >=  max && x > answer) {
      answer = x;
      max = sum;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution1(7, arr));
