# 마구간*정하기*결정알고리즘

N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마 구간간에 좌표가 중복되는 일은 없습니다.
현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

### 입력설명

- 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다. 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

### 출력설명

- 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.

### 입력예제 1

- 53
- 12849

### 출력예제 1

- 3

---

## 풀이

```js
function count(stable, dist) {
  let result = 1;
  let prevIndex = stable[0];
  for (let x of stable) {
    if (x - prevIndex > dist) {
      result++;
      prevIndex = x;
    }
  }
  return result;
}

function solution(c, arr) {
  let answer = 0;

  // 01. sorting
  arr.sort((a, b) => a - b);

  let lt = arr[0];
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    // mid = 거리
    let mid = parseInt((lt + rt) / 2);
    const countResult = count(arr, mid);
    if (countResult >= c) {
      lt = mid + 1;
    } else {
      answer = mid;
      rt = mid - 1;
    }
    // console.log(mid);
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
```

- 이분 검색 사용(mid)
- mid: 거리
- lt: 가능 최소의 거리(1)
- rt: 가능한 최대의 거리(가장 큰 좌표)
- count 함수
  - 주어진 mid값(거리)로 말을 넣을 수 있는 좌표의 개수 리턴

### 선생님 풀이

```js
function count1(stable, dist) {
  let cnt = 1;
  let endPosition = stable[0]; // 첫 번째 말은 무조건 넣는 것
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPosition >= dist) {
      cnt++;
      endPosition = stable[i];
    }
  }
  return cnt;
}

function solution1(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1]; // 맨 끝 (가장 큰 값)
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count1(stable, mid) >= c) {
      answer = mid; // 더 많이 들어갈 수 있는 경우는 정답의 범위에 포함
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution1(3, arr));

```
- 이분 검색 사용
- count 함수
  - endPoint: 이전에 말이 자리한 마구간 좌표
- count 의 결과가 주어진 말의 마리 수보다 크거나 같은 경우는 정답의 범주에 포함