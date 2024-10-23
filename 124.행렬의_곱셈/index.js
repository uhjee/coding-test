const solution = (arr1, arr2) => {
  // 입력 행렬의 크기 정의
  const row1 = arr1.length;
  const column1 = arr1[0].length;
  const row2 = arr2.length;
  const column2 = arr2[0].length;

  // 결과 행렬 초기화
  const result = [];
  for (let i = 0; i < row1; i++) {
    result.push(new Array(column2).fill(0));
  }

  // 행렬 곱셈 수행
  // 첫 번째 행렬의 행을 순회
  for (let i = 0; i < row1; i++) {
    // 두 번째 행렬의 열을 순회
    for (let j = 0; j < column2; j++) {
      // 첫 번째 행렬의 열과 두 번째 행렬의 행을 곱셈
      for (let k = 0; k < column1; k++) {
        // 현재 위치의 결과값에 두 행렬의 해당 요소를 곱한 값을 더함
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
};

// 테스트 케이스 실행
console.log(
  solution(
    [
      [1, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [4, 1],
      [0, 2],
    ],
  ),
);
