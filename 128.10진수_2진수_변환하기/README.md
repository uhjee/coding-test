# 10진수를 2진수로 변환하기 - 스택

## 문제 설명

10진수를 입력받아 2진수로 변환해 반환하는 `solution()` 함수를 구현하세요.

## 제한사항

- decimal은 1이상 10억 미만의 자연수

## 입출력 예

| decimal | 반환값         |
| ------- | -------------- |
| 10      | 1010           |
| 27      | 11011          |
| 12345   | 11000000111001 |

---

## 풀이

```js
const solution = (decimal) => {
  const restStack = [];
  let value = decimal;
  while (value > 0) {
    restStack.push(value % 2);
    value = Math.floor(value / 2);
  }
  return parseInt(restStack.reverse().join(''), 10);
};

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
```

- 시간 복잡도
  - N은 2진수로 변환할 숫자
  - N을 2진수로 변환하는 과정은 N이 1이 될 때까지 계속되므로 연산횟수는 O(logN)
  - 최종 시간 복잡도 = O(logN)
