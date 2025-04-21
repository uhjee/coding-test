# 짝지어 제거하기

## 문제 설명

알파벳 소문자로 구성된 문자열에서 같은 알파벳이 2개 *붙어 있는 짝*을 찾습니다.
짝을 찾은 다음에는 그 두을 제거한 뒤 앞뒤로 문자열을 이어붙입니다.
이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다.
문자열 S가 주어졌을 때 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성하세요.
성공적으로 수행할 수 있으면 1을, 아니면 0을 반환해주면 됩니다.

예를 들어 문자열 S가 'baabaa'라면
  1. baabaa
  2. bbaa
  3. aa
순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

## 제한사항
- 문자열의 길이: 1,000,000 이하의 자연수
- 문자열은 모두 소문자로 이루어져 있습니다.

## 입출력 예

| s  | result |
| -------- | ------ |
| "baabaa" | 1      |
| "cdcd" | 0      |


---

## 풀이

```js
const solution = (s) => {
  const stack = [];
  for (const c of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== c) {
      stack.push(c);
    } else if (stack[stack.length - 1] === c) {
      stack.pop();
    }
    // console.log(stack);
  }
  return stack.length === 0 ? 1 : 0;
};

console.log(solution('baabaa'));
console.log(solution('cdcd'));

```
- 가장 최근의 문자와 비교하는 로직 => stack
- 가장 최근에 탐색한 데이터와 먼저 비교 => stack

- 시간 복잡도
  - N은 s의 길이
  - 따라서 O(N)
