# 주식가격 - 스택, 인덱스

## 문제 설명

초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

## 제한사항

- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다.

## 입출력 예

| prices          | return          |
| --------------- | --------------- |
| [1, 2, 3, 2, 3] | [4, 3, 1, 1, 0] |

### 입출력 예 설명

- 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
- 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
- 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
- 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
- 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

---

## 풀이

### 시간복잡도: O(N)

```js
const solution = (prices) => {
  const n = prices.length;
  const result = new Array(n).fill(0);

  const stack = [];
  for (let i = 0; i < n - 1; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  const lastIdx = n - 1;
  while (stack.length > 0) {
    const j = stack.pop();
    result[j] = lastIdx - j;
  }
  return result;
};
```
- 가장 최근 값과 비교하는 로직 => stack 활용
- 각 요소를 최대 한 번씩만 스탭에 넣고 빼기 때문에 O(2N) = O(N)

-  핵심 개념
   - 스택: 아직 가격이 떨어지지 않은 시점의 인덱스 저장
   - 목표: 각 시점에서 가격이 떨어지지 않고 유지된 기간 찾기

- 알고리즘 과정
1. 배열 한 번 순회하며 처리
2. 현재 가격이 스택 top의 가격보다 낮으면:
   ```javascript
   while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
     const j = stack.pop();
     result[j] = i - j; // 유지된 기간 계산
   }
   ```
3. 현재 인덱스 스택에 추가
4. 순회 후 스택에 남은 인덱스는 끝까지 가격 유지된 경우

## 시간복잡도
- O(n): 각 요소는 한 번만 스택에 들어가고 한 번만 나옴
- 이전 O(n²) 방식보다 훨씬 효율적

스택이 중요한 이유: 아직 처리되지 않은 이전 시점들 효율적으로 관리해 불필요한 반복 제거함

### 시간복잡도: O(N2)

```js
// 시간복잡도 O(N2)=> 성능이슈로 탈락
const solution1 = (prices) => {
  const result = [];

  let left = 0;
  let right = left + 1;
  let increasedSec = 0;

  while (left < prices.length) {
    if (prices[left] <= prices[right]) {
      increasedSec++;
    }

    right++;
    if (right > prices.length - 1) {
      result.push(increasedSec);
      increasedSec = 0;
      left++;
      right = left + 1;
    }
  }
  return result;
};
```

- prices의 길이가 최대 10만 건이므로 성능을 고려해야 함
