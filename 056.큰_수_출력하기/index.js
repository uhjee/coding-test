function solution(arr) {
  const answer = [];
  for (const i in arr) {
    if (i === '0' || arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
