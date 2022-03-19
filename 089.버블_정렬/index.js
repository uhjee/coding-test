/**
 * 버블 정렬
 *
 * 포인터가 돌며 다음 자리와 자신의 값 비교 후 자리 교체
 *
 */
function solution(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function solution1(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    // j는 arr 길이 - i - 1 까지만 돌면 된다. (-1 하는 이유는 j+1 와 비교하기 때문)
    for (let j = 0; j < arr.length - i - 1; j += 1) {
      // j가 루프를 도는 것 (옆 자리 숫자랑 비교)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution1(arr));
