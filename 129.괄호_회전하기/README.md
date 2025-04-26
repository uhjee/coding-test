# 괄호 회전하기 - 스택

## 문제 설명

다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

- "()", "[]", '{}' 은 모두 올바른 괄호 문자열입니다.
- 만약 A가 올바른 괄호 문자열이라면, "(A)", "[A]", "{A}"도 올바른 괄호 문자열입니다. 예를 들어 "[]" 가 올바른 괄호 문자열이므로, "([])"도 올바른 괄호 문자열입니다.
- 만약 A, B가 올바른 괄호 문자열이라면, AB도 올바른 괄호 문자열입니다. 예를 들어 "{}"와 "([])"가 올바른 괄호 문자열이므로, "{}([])"도 올바른 괄호 문자열입니다.

대괄호, 중괄호 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x(0<= x <(s의 길이))칸만큼 회전시켰을 때, s가 올바른 괄호 문자열이 되게하는 x의 개수를 반환하는 `solution()` 함수를 완성하세요.

## 제한사항

- s의 길이는 1이상 1000 이하입니다.

## 입출력 예

| decimal  | 반환값 |
| -------- | ------ |
| "[](){}" | 3      |
| "}]()[{" | 2      |
| "[)(]"   | 0      |
| "}}}"    | 0      |

## 테스트 케이스

다음표는 회전시킨 모습을 나타낸 겁니다. 올바른 괄호 문자열이 되는 x가 3개이므로 3을 반환합니다.
| | s를 왼쪽으로 x칸만큼 회전 | 올바른 괄호 문자열 여부 |
|---|---|---|
|0 | "[](){}" |O |
|1 | "](){}[" |X |
|2 | "(){}[]" |O |
|3 | "){}[](" |X |
|4 | "{}[]()" |O |
|5 | "}[](){" |X |

---

## 풀이

```js
const solution = (s) => {
  let rightCnt = 0;
  let converted = [...s];

  const isRightArr = (arr) => {
    const stack = [];

    for (const c of arr) {
      if (['[', '{', '('].includes(c)) {
        stack.push(c);
      } else {
        const top = stack.pop();
        if (
          (c === ']' && top !== '[') ||
          (c === '}' && top !== '{') ||
          (c === ')' && top !== '(')
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

  for (let i = 0; i < s.length - 1; i += 1) {
    if (isRightArr(converted)) {
      rightCnt++;
    }

    // 회전
    const first = converted.shift();
    converted.push(first);
  }
  return rightCnt;
};

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
```

- 시간 복잡도
  - 회전 연산:
    - shift(): O(n)
    - push(): O(1)
  - 따라서 전체 시간복잡도는:
    - 외부 순회 O(n) × (isRightArr O(n) + 회전 연산 O(n))
      = O(n) × O(n)
      = O(n²)
  - 현재 구현은 O(n²)의 시간복잡도
