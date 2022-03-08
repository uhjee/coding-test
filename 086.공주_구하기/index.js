function solution(n, k) {
  const arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  while (arr.length > 1) {
    for (let i = 0; i < k; i++) {
      const [turn] = arr.splice(0, 1);
      if (i !== k - 1) {
        arr.push(turn);
      }
    }
  }
  return arr[0];
}

const solution1 = (n, k) => {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => ++i); // 1~8 까지 배열 생성

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift(); // k번째 요소 빼기
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
};

console.log(solution1(8, 3));
