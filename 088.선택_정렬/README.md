# 선택 정렬

N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 선택정렬입니다.

### 입력설명

첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에
있습니다.

### 출력설명

오름차순으로 정렬된 수열을 출력합니다.

### 입력예제 1

- 6
  13 5 11 7 23 15

### 출력예제 1

- 5 7 11 13 15 23

---

## 풀이

```js
/**
 * 선택 정렬
 *
 * 가장 작은 숫자와 기준 포인터의 값을 교체
 * 기준 포인터는 하나씩 증가
 *
 * 외부 포인터 i, 내부 포인터 j 인 경우
 * i를 기준으로 j 중 가장 작은 값을 찾은 뒤 자리 교체
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

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
```

- 2중 loop문을 돌며, 바깥 loop마다 최소값 구함
- 바깥 loop문의 포인터와 값 교체
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
function solution1(arr) {
  let = answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 자리 바꾸기 (iterator 사용.. 신박하다)
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}
```

- 개념은 똑같음
- 배열의 인덱스 값을 바꾸는 방법 신기(배열 구조 분해 할당 사용)
- 시간 복잡도 O(n^2)
