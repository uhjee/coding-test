function solution(arr1, arr2) {
  let answer = [];
  const n = arr1.length;
  const m = arr2.length;

  // 포인터 변수
  let p1 = 0;
  let p2 = 0;

  // 둘중에 하나라도 탐색이 끝나면 루프문 멈추도록
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // arr1 이 남은 경우, 나머지 push
  while (p1 < n) answer.push(arr1[p1++]);
  // arr2 이 남은 경우, 나머지 push
  while (p2 < m) answer.push(arr2[p2++]);
  
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
