function solution(k, arr) {
  const len = arr.length;
  let max = 0;

  for (let rt = k; rt < len; rt++) {
    let lt = rt - k;
    let sum = 0;
    while (lt < rt) {
      sum += arr[lt];
      lt++;
    }
    max = max < sum ? sum : max
    // console.log({ sum, rt });
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
