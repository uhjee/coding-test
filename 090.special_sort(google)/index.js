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

// 선생님 풀이 - 버블정렬
const solution1 = arr => {
  let answer = [...arr];
  for (let i = 0; i < answer.length - 1; i += 1) {
    for (let j = 0; j < answer.length - i - 1; j += 1) {
      // 버블 정렬:: j+1 인덱스가 음수라면 앞자리와 교체
      if (answer[j] > 0 && answer[j + 1] < 0)
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }
  return answer;
};

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution1(arr));
