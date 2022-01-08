# 올바른 괄호

- 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
- `(())()` 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

### 입력설명

- 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

### 출력설명

- 첫 번째 줄에 YES, NO를 출력한다.

### 입력예제 1

- (()(()))(()

### 출력예제 1

- NO

---

## 풀이

```js
function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.splice(stack.length - 1, 1);
      }
    }
  }
  console.log(stack);
  return stack.length === 0 ? 'YES' : 'NO';
}

let a = '(()(()))(()'; // NO
// let a = '(())()'; // YES
console.log(solution(a));
```

- 배열을 stack으로 취급해서 풀이
- `(` 인 경우, 계속 배열에 push
- `)` 인 경우, 배열의 마지막 요소가 `(` 인 경우 pop (Array.prototype.splice 사용)
  - Array.prototype.pop() api 가 있다.
- 짝이 맞는다면, 마지막 stack length 가 0일 것이므로, `YES` 반환
- 시간 복잡도 O(n)

## 선생님 풀이

```js
// 선생님 풀이
const solution1 = s => {
  let answer = 'YES';
  const stack = [];

  for (const x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO'; // 짝이 안맞을 경우, early return 'NO'
      stack.pop();
    }
  }
  if (stack.length > 0) {
    answer = 'NO';
  }

  return answer;
};

// let a = '(()(()))(()'; // NO
let a = '(())()'; // YES
console.log(solution1(a));
```

- 크게 다를 것은 없으나, 괄호의 짝은 맞으나, `(` 가 먼저 입력되는 경우에는 early return 'NO'
