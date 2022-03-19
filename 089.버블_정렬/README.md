# 버블 정렬

N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 버블정렬입니다.

### 입력설명

- 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
- 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

### 출력설명

- 오름차순으로 정렬된 수열을 출력합니다.

### 입력예제 1

- 6
- 13 5 11 7 23 15

### 출력예제 1

- 5 7 11 13 15 23

---

## 풀이

```js
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

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
```

- 2중 loop문을 돌며, 다음 자리와 자신의 값 비교
- 선택 정렬과 유사한 듯..
- 바깥 loop문의 포인터와 값 교체
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
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
```

- 내부 loop문에서 매번 자리를 바꾸기 때문에 선택 정렬보다는 성능이 안좋다.
- 시간 복잡도 O(n^2)
