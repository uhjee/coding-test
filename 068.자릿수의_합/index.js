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

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
