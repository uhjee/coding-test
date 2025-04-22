const solution = (prices) => {
  const n = prices.length;
  const result = new Array(n).fill(0);

  const stack = [];
  for (let i = 0; i < n - 1; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  const lastIdx = n - 1;
  while (stack.length > 0) {
    const j = stack.pop();
    result[j] = lastIdx - j;
  }
  return result;
};

// 시간복잡도 O(N2)=> 성능이슈로 탈락
const solution1 = (prices) => {
  const result = [];

  let left = 0;
  let right = left + 1;
  let increasedSec = 0;

  while (left < prices.length) {
    if (prices[left] <= prices[right]) {
      increasedSec++;
    }

    right++;
    if (right > prices.length - 1) {
      result.push(increasedSec);
      increasedSec = 0;
      left++;
      right = left + 1;
    }
  }
  return result;
};

console.log(solution([1, 2, 3, 2, 3]));
console.log(solution([1, 6, 9, 5, 3, 2, 7]));
