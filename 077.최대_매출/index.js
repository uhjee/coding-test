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
    max = max < sum ? sum : max;
    // console.log({ sum, rt });
  }
  return max;
}

/**
 * !Sliding Window 활용
 */
function solution1(k, arr) {
  let sum = arr.reduce((sum, cur, idx) => (idx < k ? (sum += cur) : sum)); //  초기 k자리까지의 합
  let max = sum; // 초기 max === 초기 sum

  console.log({ init: sum });
  for (let i = 0; i < arr.length - k; i++) {
    sum -= arr[i];
    sum += arr[i + k];
    console.log({ sum });
    max = max < sum ? sum : max;
  }
  return max;
}
/**
 * !Sliding Window 활용 - 선생님 코드
 */
const solution2 = (k, arr) => {
  let answer;
  let sum = 0;
  // 초기 k까지의 합
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  //main loop
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(sum, answer);  // 최대값 Math.max() 잊지말자
  }

  return answer;
};

// let a = [12, 15, 11, 1, 2, 1, 2, 1, 1, 1];
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(3, a));
