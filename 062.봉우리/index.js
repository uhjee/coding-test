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
      if (item > Math.max(north, east, south, west)) {
        answer += 1;
      }
    }
  }
  return answer;
}

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

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution1(arr));
