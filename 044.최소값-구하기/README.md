# 1부터 N까지의 합 출력하기

7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
### 입력설명
- 첫 번째 줄에 7개의 수가 주어진다.
### 출력설명
- 첫 번째 줄에 가장 작은 값을 출력한다.
### 입력예제 1
5 3 7 11 2 15 17
### 출력예제 1 
2

## 단순하게 풀이
```js
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let index = 0;
  while (index < arr.length) {
    if (min > arr[index]) {
      min = arr[index];
    }
    index++;
  }
  return min;
}
```

- `Number.MAX_SAFE_INTEGER` : javascript Number 정수 중 가장 큰 수 // 9007199254740991

## 내장 함수 사용한 풀이
```js
function solution(arr) {
  return Math.min(...arr);
}
```
- Math.min() 사용
- 파라미터로 배열을 전달하는 방법 :  spread syntax 사용