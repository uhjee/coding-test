# 격자판 최대합

5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.

### 입력설명

- 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
- 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.

### 출력설명 최대합을 출력합니다.

### 입력예제 1

[
[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19],
];

### 출력예제 1

- 155

---

## 풀이 1

```js
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0; // 가로 합
  let sum2 = 0; // 세로 합

  for (let i = 0; i < n; i++) {
    // 초기화
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      // i는 고정, j가 변동
      sum1 += arr[i][j]; // 가로
      sum2 += arr[j][i]; // 세로
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = 0;
  sum2 = 0;

  // 대각선
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; //    '\' 방향
    sum2 += arr[i][n - i - 1]; // '/' 방향
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
```

- 가로값, 세로값을 각각 sum1, sum2 의 값으로 구한다.
- 개중에 가장 큰 값을 answer에 할당
- 대각선의 값을 for문 하나로 구하는 방법이 신기하다
