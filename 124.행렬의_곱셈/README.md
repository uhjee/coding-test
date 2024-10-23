# 행렬의 곱셈

## 문제 설명
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

## 제한 조건
- 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
- 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
- 곱할 수 있는 배열만 주어집니다.

## 입출력 예
| arr1 	| arr2 	| return 	|
|-------|-------|---------|
|   [[1, 4], [3, 2], [4, 1]] 	| [[3, 3], [3, 3]] 	| [[15, 15], [15, 15], [15, 15]] 	|
| [[2, 3, 2], [4, 2, 4], [3, 1, 4]] 	| [[5, 4, 3], [2, 4, 1], [3, 1, 1]] 	| [[22, 22, 11], [36, 28, 18], [29, 20, 14]] 	|


```js
const solution = (arr1, arr2) => {
  const solution = (arr1, arr2) => {
  const row1 = arr1.length;
  const column1 = arr1[0].length;
  const row2 = arr2.length;
  const column2 = arr2[0].length;

  // 결과 행렬 초기화
  const result = [];
  for (let i = 0; i < row1; i++) {
    result.push(new Array(column2).fill(0));
  }

  for (let i = 0; i < row1; i++) { 
    for (let j = 0; j < column2; j++) {
      for (let k = 0; k < column1; k++) { 
        const value = arr1[i][k] * arr2[k][j];
        result[i][j] += value;
      }
    }
  }

  return result;
}

console.log(solution([[1, 0], [0, 1], [1, 1]], [[4, 1], [0, 2]]));
}

```

- 00. 결과 행렬을 미리 초기화
  - 결과 행렬의 크기는 입력 행렬의 크기에 따라 결정됨
  - 결과 행렬의 각 원소는 0으로 초기화  
- 01. 행렬 곱셈 수행
  - 3중 for문을 사용하여 행렬 곱셈 수행
  - 첫 번째 for문은 첫 번째 행렬의 행을 순회
  - 두 번째 for문은 두 번째 행렬의 열을 순회
  - 세 번째 for문은 첫 번째 행렬의 열과 두 번째 행렬의 행을 곱셈
