/**
 * 선택 정렬
 *
 * 가장 작은 숫자와 기준 포인터의 값을 교체
 * 기준 포인터는 하나씩 증가
 *
 */
function solution(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      minIndex = arr[minIndex] < arr[j] ? minIndex : j;
    }
    // 자리 값 변경
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    console.log({ arr });
  }
}

function solution1(arr) {
  let = answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 자리 바꾸기 (배열 구조 분해 할당)
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
