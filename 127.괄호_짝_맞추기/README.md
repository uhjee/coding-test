# 괄호 짝 맞추기

## 문제 설명

소괄호는 짝을 맞춘 열린 괄호 '(', ')' 로 구성합니다.
문제에서 열린 괄호와 닫힌 괄호가 마구 뒤섞인 문자열을 줍니다. 이때 소괄호 정상으로 열고 닫혔는지 판별하는 `solution()` 함수를 구현하세요.
만약 소괄호가 정상적으로 열고 닫혔다면 `true`를, 그렇지 않다면 `false`를 반환하면 됩니다.

## 제한사항

- 열린 괄호는 자신과 가장 가까운 닫힌 괄호를 만나면 상쇄됩니다.
- 상쇄 조건은 열린 괄호가 먼저 와야 하고, 열린 괄호와 닫힌 괄호 사이에 아무것도 없어야 합니다.
- 더 상쇄할 괄호가 없을 때까지 상쇄를 반복합니다.

## 입출력 예

| s            | 반환값 |
| ------------ | ------ |
| "(())()"     | true   |
| "((())())))" | false  |

---

## 풀이

```js
const solution = (s) => {
  let result = true;
  const stack = [];
  for (const char of s) {
    if (char === '(') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== '(') {
        return false;
      }
    }
    // console.log(stack);
  }

  return stack.length === 0;
};

console.log(solution('(())()'));
console.log(solution('((())()'));
console.log(solution(')'));
console.log(solution('('));
```

- 시간 복잡도
  - N은 s의 길이, 따라서 O(N)
  - Array.push(), Array.pop()은 시간 복잡도 O(1)
