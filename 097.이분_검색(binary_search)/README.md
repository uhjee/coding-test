# 이분 검색 (binary search)

임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 단 중복값은 존재하지 않습니다.

### 입력설명

- 첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다.
- 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.

### 출력설명

- 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

### 입력예제 1

- 8 32
- 23 87 65 12 57 32 99 81

### 출력예제 1

- 3

---

## 풀이

```js
function solution(target, arr) {
  let answer = 0;
  let copiedArr = [...arr];

  copiedArr.sort((a, b) => a - b);
  let i = 0; // 혹시 모를 infinite loop을 위해 제한

  // searching boundary
  let lt = 0;
  let rt = copiedArr.length - 1;

  while (i < 30) {
    midIndex = Math.round((lt + rt) / 2);

    if (target === copiedArr[midIndex]) {
      answer = midIndex;
      break;
    } else if (target < copiedArr[midIndex]) {
      rt = midIndex - 1;
    } else {
      lt = midIndex;
    }
    console.log({ midIndex });

    i++;
  }

  return answer + 1;
}
```

### 선생님 풀이

```js
const solution1 = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b); // 이분 검색은 선 정렬 필수

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
};

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution1(32, arr));
```

- 이분 검색
  - 시간 복잡도: O(logN)

- 순차 검색
  - 시간 복잡도: O(N)

- lt, rt 를 포인터로 두어, 검색 범위를 좁힌다.
- while문의 조건으로 lt 가 rt보다 작거나 같을 동안만 loop