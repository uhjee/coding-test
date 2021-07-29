# 홀수

7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
```
77 + 41 + 53 + 85 = 256
```
이 되고,
```
41 < 53 < 77 < 85
```
이므로 홀수들 중 최소값은 41이 된다.
### 입력설명
- 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
### 출력설명
- 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
### 입력예제 1
- 12 77 38 41 53 92 85
### 출력예제 1 
- 256
- 41

## 단순하기 풀기
```
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let oddSum = 0;
  let index = 0;
  while (index < arr.length) {
    const value = arr[index];
    if (value % 2 === 1) {
      oddSum += value;
      if (min > value) {
        min = value;
      }
    }
    index++;
  }
  return { min, oddSum };
}
```
- 시간 복잡도가 O(n)


## 내장함수 풀기
```
function solution(arr) {
  const odds = arr.filter(i => i % 2 === 1);
  return {
    min: Math.min(...odds),
    oddSum: odds.reduce((sum, i) => sum + i, 0),
  };
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

```
- 간단해 보이지만, 추정컨데 시간 복잡도가 O(3n)??