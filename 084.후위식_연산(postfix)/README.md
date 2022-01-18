# 후위식 연산(postfix)

- 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
- 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

### 입력설명

- 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, \*, / 연산자로만 이루어진다.

### 출력설명

- 연산한 결과를 출력합니다.

### 입력예제 1

- 352+\*9-

### 출력예제 1

- 12

---

## 풀이

```js
function solution(s) {
  let answer;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const numberC = parseInt(c, 10);

    if (Number.isNaN(numberC)) {
      // console.log(`${c} is operation`);
      const lastNum = stack.pop();
      const prevNum = stack.pop();
      let operationResult;
      switch (c) {
        case '+':
          operationResult = prevNum + lastNum;
          break;
        case '-':
          operationResult = prevNum - lastNum;
          break;
        case '*':
          operationResult = prevNum * lastNum;
          break;
        case '/':
          operationResult = prevNum / lastNum;
          break;

        default:
          throw new Error('사칙연산이 아닙니다.');
      }
      // console.log({ operationResult });
      if (!Number.isNaN(operationResult)) stack.push(operationResult);
    } else {
      // console.log(`${numberC} is number`);
      stack.push(numberC);
    }
    // console.log(stack);
    if (i === s.length - 1) answer = stack.pop();
  }
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
```

- 사칙 연산의 분기 처리: switch문 사용
- string to number : parseInt() 사용
- 마지막 index 계산을 위해 기본 for문 사용
- 시간 복잡도 O(n)

## 선생님 풀이

```js
function solution1(s) {
  let answer;
  const stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack.pop();
  return answer;
}

let str = '352+*9-';
console.log(solution1(str));
```

- isNaN 은 전역 함수... => Number.isNaN() 할 필요가 없다.
- string to number : Number({[string]}) 사용
- 시간 복잡도 O(n)
