function solution(arr) {
  let answer = [...arr];
  let minusCnt = 0; // 요소가 음수인 Index +1
  // 음수를 가장 앞으로
  for (let i = 0; i < answer.length; i += 1) {
    if (answer[i] < 0) {
      [answer[minusCnt], answer[i]] = [answer[i], answer[minusCnt]];
      minusCnt++;
    }
  }
  // 양수 선택정렬
  for (let i = minusCnt + 1; i < answer.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < answer.length; j += 1) {
      if (answer[j] > 0 && answer[minIndex] > answer[j]) minIndex = j;
    }
    [answer[minIndex], answer[i]] = [answer[i], answer[minIndex]];
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
