function solution(n, k) {
  const arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  while (arr.length > 0) {
    for (let i = 0; i < k; i++) {
      const [turn] = arr.splice(0, 1);
      // console.log({ i, bool: i !== k - 1 });
      if (i !== k - 1) {
        arr.push(turn);
      }
      // console.log(arr);
    }
  }
  console.log(arr);
}

console.log(solution(8, 3));
