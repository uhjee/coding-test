# 연속 부분수열 2

- N개의 수로 이루어진 수열이 주어집니다.
- 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
- 만약 N=5, M=5이고 수열이 다음과 같다면, `1 3 1 2 3`
- 합이 5이하가 되는 연속부분수열은 `{1}`, `{3}`, `{1}`, `{2}`, `{3}`, `{1, 3}`, `{3, 1}`, `{1, 2}`, `{2, 3}`,`{1, 3, 1}`로 총 10가지입니다.

### 입력설명

- 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
- 수열의 원소값은 1,000을 넘지 않는 자연수이다.

### 출력설명

- 첫째 줄에 경우의 수를 출력한다.

### 입력예제 1

- 5 5
- 1 3 1 2 3

### 출력예제 1

- 10

---

## 풀이

```js
function solution(m, arr) {
  const len = arr.length;
  let count = 0;
  let p1 = 0;

  while (p1 < len) {
    let p2 = p1;
    let sum = 0;
    while (p2 < len && sum < m) {
      sum += arr[p2];
      if (sum <= m) count++;
      p2++;
    }
    p1++;
  }
  return count;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
```

- p1을 기준으로 오른쪽으로 p2를 증가시키며, 상태 관찰
- 앞서 푼 '연속 부분 수열1'과 동일한 방식으로 해결

## 선생님 풀이

```js
// 선생님 풀이
function solution1(m, arr) {
  const len = arr.length;
  let count = 0;
  let lt = 0; // move last
  let rt = 0; // move first
  let sum = 0;
  while (rt < len) {
    sum += arr[rt];

    while (sum > m) {
      sum -= arr[lt];
      lt++;
    }
    if (sum <= m) count += rt - lt + 1; //  ! rt - lt + 1 그 수까지 포함한 수열의 개수
    rt++;
  }
  return count;
}
```

- `rt - lt + 1` 은 rt까지 포함한 수열의 개수를 나타낸다.