# 자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

### 입력설명

- 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.

### 출력설명

- 자릿수의 합이 최대인 자연수를 출력한다.

### 입력예제 1

- 7
- 128 460 603 40 521 137 123

### 출력예제 1

- 137

---

## 풀이 1

```js
function solution(n, arr) {
  let max = {
    n: 0,
    sum: 0,
  };
  for (const n of arr) {
    const strArr = [...String(n)];
    let sum = 0;
    for (const ch of strArr) {
      sum += parseInt(ch, 10);
    }
    if (max.sum <= sum && max.n < n) {
      max = { n, sum };
    }
  }
  return max.n;
}
```

- max 값을 객체 형태로 저장(n 값과 sum(각 자릿수의 합)값을 모두 비교해야 하기 때문에)
- 루프문을 돌며 각 숫자의 합을 구한다
- sum값과 n값을 비교해 max를 교체한다.

- 시간 복잡도 O(n^2)

## 선생님 풀이 1

```js
// 선생님 풀이
function solution1(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (const x of arr) {
    let sum = 0;
    let temp = x;
    // 숫자를 뒤집은 값의 sum 을 구하는 방법
    while (temp) {
      sum += temp % 10; // 10의 자리로 나눈 나머지는 1의 자리 숫자
      temp = Math.floor(temp / 10); // 10의 자리로 나눈 값은  n의 자리 숫자~10의 자리 숫자
    }
    if (sum >= max && x > answer) {
      answer = x;
      max = sum;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution1(7, arr));
```

- 각 자리수의 합을 구하는 코드
  - 10으로 나눈 값은 10의 자리 이상의 수
  - 10으로 나눈 나머지는 1의 자리 수