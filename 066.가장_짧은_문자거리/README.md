# 가장 짧은 문자거리

한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

### 입력설명

- 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
- 문자열의 길이는 100을 넘지 않는다.

### 출력설명

- 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

### 입력예제 1

- teachermode e

### 출력예제 1

- 1 0 1 2 1 0 1 2 2 1 0

---

## 풀이 1

```js
function solution(str, ch) {
  return [...str]
    .map((item, index) => {
      if (item === ch) return 0;
      for (let i = 1; i < str.length; i++) {
        if (str[index - i] === ch || str[index + i] === ch) {
          return i;
        }
      }
    })
    .join('');
}

const str = 'teachermode';
const ch = 'e';

console.log(solution(str, ch));
```

- 각 글자마다 루프문을 돌며, 자신의 바로 옆자리부터 문자가 일치하는 지 확인한다.
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
function solution1(str, ch) {
  let leftCnt = 1000; // 왼쪽으로부터 ch와 떨어진 거리
  let rightCnt = 1000; // 오른쪽으로부터 ch와 떨어진 거리

  let arr = [];
  // 왼쪽으로부터 루프
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      leftCnt = 0;
    } else {
      leftCnt += 1;
    }
    arr.push(leftCnt);
  }
  // 오른쪽으로부터 루프
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ch) {
      rightCnt = 0;
    } else {
      rightCnt += 1;
    }
    // 왼쪽으로부터의 거리와 오른쪽으로부터의 거리 중 작은 값
    arr[i] = Math.min(arr[i], rightCnt);
  }
  ``;
  return arr.join('');
}
```

- 왼쪽으로부터 특정 문자(ch)와 떨어진 거리를 배열에 넣는다
- 오른쪽으로부터 특정 문자(ch)와 떨어진 거리가 왼쪽으로 특정문자와 떨어진 거리보다 작으면, 교체한다.
- 시간 복잡도 O(n)
