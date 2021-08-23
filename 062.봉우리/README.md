# 봉우리

지도 정보가 N\*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
격자의 가장자리는 0으로 초기화 되었다고 가정한다.
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

### 입력설명

- 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
- 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.

### 출력설명

- 봉우리의 개수를 출력하세요.

### 입력예제 1 5

```js
[
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
```

### 출력예제 1

- 10

---

## 풀이 1

```js
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const item = arr[i][j];
      const north = j === 0 ? 0 : arr[i][j - 1];
      const east = i === n - 1 ? 0 : arr[i + 1][j] || 0;
      const south = j === n - 1 ? 0 : arr[i][j + 1];
      const west = i === 0 ? 0 : arr[i - 1][j];
      if (item > ) {
        answer += 1;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
```

- 가로값, 세로값을 각각 sum1, sum2 의 값으로 구한다.
- 개중에 가장 큰 값을 answer에 할당
- 대각선의 값을 for문 하나로 구하는 방법이 신기하다

## 선생님 풀이

```js
// 선생님 코드
function solution1(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let topFlag = true;

      // k for문으로 상하좌우 좌표 조회
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 확인하려는 행 좌표
        let ny = j + dy[k]; // 확인하려는 열 좌표
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          topFlag = false;
          break;
        }
      }
      if (topFlag) answer += 1;
    }
  }
  return answer;
}
```

- k for문으로 상하좌우의 배열을 두 개 만들어서 사용
  - dx, dy 그리고 k for문 사용