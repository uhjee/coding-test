# 재귀함수와 스택프레임 \*\*\*

자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

### 입력설명

- 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

### 출력설명

- 첫째 줄에 출력한다.

### 입력예제 1

- 3

### 출력예제 1

- 123

---

## 풀이

```js
const counter = (i, last) => {
  if (i > last) return;
  let j = i;
  console.log(j++);
  counter(j, last);
};

const solution = n => {
  counter(1, n);
};

const n = 3;
console.log(solution(n));
```

- 재귀 함수로 호출되는 counter 함수 생성
- i 파라미터로 인덱스를 다음 재귀함수 호출 시 전달


### 선생님 풀이

```js

```

- 이분 검색 사용
