# 최대 점수 구하기\_탐욕법

### 문제 설명

두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

### 제한 사항

- arr은 길이 1이상, 15이하인 배열입니다.
- arr의 원소는 100 이하인 자연수입니다.

### 입출력 예

| arr        | result |
| ---------- | ------ |
| [2,6,8,14] | 168    |
| [1,2,3]    | 6      |

---

## 풀이

```js
function solution(arr) {
  var answer = 0;
  arr.sort((a, b) => b - a);
  const [maxNum, ...rest] = arr;
  let cnt = 1;
  answer = maxNum;
  while (cnt < 1000000) {
    if (rest.every((i) => answer % i === 0)) {
      return answer;
    }
    cnt++;
    answer = maxNum * cnt;
  }
  return maxNum;
}
```

- 가장 큰 수를 곱해가며 그 수가 나머지 수로 모두 나누고 나머지가 0일 경우를 생각해 구현
- while문의 숫자는 의미 없음... 그냥 무한 루프 돌지 않도록 설정
