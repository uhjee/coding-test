# 괄호 문자 제거

- 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

### 입력설명

- 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

### 출력설명

- 남은 문자만 출력한다.

### 입력예제 1

- (A(BC)D)EF(G(H)(IJ)K)LM(N)

### 출력예제 1

- EFLM

---

## 풀이

```js
function solution(s) {
  const stack = [];
  let answer = '';

  for (const c of s) {
    if (c === '(') stack.push(c);
    else if (c === ')') stack.pop();
    else {
      if (stack.length === 0) answer += c;
    }
  }
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
```

- `(` , `)`, 문자 세 가지로 분기
- 괄호일 경우 stack에 괄호를 넣거나 없애면서, stack.length로 괄호를 갖고있는 여부를 판단
- 괄호 stack의 length가 0일 경우 === 괄호 바깥에 있는 문자열
- 시간 복잡도 O(n)

## 선생님 풀이

```js
const solution1 = s => {
  const stack = [];
  for (const c of s) {
    if (c === ')') {
      while (stack.pop() !== '('); // 여는 괄호 만날 때까지 stack 위에서부터 pop
    } else {
      // 닫는 괄호를 제외한 나머지는 stack에 담기
      stack.push(c);
    }
  }

  return stack.join('');
};

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution1(str));
```

- 나는 괄호에만 집중해서 문제 접근했으나, 선생님은 괄호 안의 문자까지 stack에 함께 넣었음
- 따라서 stack에서 여는 괄호를 찾아야 하는 작업 발생(while문에서 실행)
- 정확도 측면에서는 이 방법이 좋을 듯 하다.
- 시간 복잡도 O(n^2)