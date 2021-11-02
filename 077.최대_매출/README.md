# 최대 매출

현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
`12 15 11 20 25 10 20 19 13 15`
연속된 3일간의 최대 매출액은 `11`+`20`+`25`=`56`만원입니다. 여러분이 현수를 도와주세요.

### 입력설명

- 첫 줄에 N(5<=N<=100,000)과 M(2<=K<=N)가 주어집니다.
- 두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.

### 출력설명

- 첫 줄에 최대 매출액을 출력합니다.

### 입력예제 1

- 10 3
- 12 15 11 20 25 10 20 19 13 15

### 출력예제 1

- 56

---

## 풀이

```js
function solution(k, arr) {
  const len = arr.length;
  let max = 0;

  for (let rt = k; rt < len; rt++) {
    let lt = rt - k;
    let sum = 0;
    while (lt < rt) {
      sum += arr[lt];
      lt++;
    }
    max = max < sum ? sum : max;
    // console.log({ sum, rt });
  }
  return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
```

- rt를 k로 잡고, outer loop으로 arr 돌리기
- lt를 rt-k로 잡고, inner loop으로 sum 구하기
- 시간 복잡도 O(n^2)...............

# sliding window
- 쫙 밀어버리는 알고리즘
1. 처음에 k만큼의 수의 합을 갖고 있다.
2. 한 칸씩 우측으로 밀리면서 가장 우측 방향의 다음 수는 더하고, 가장 좌측의 가지고 있던 수는 뺀다.
## 선생님 풀이

```js
/**
 * !Sliding Window 활용 - 내 코드
 */
function solution1(k, arr) {
  let sum = arr.reduce((sum, cur, idx) => (idx < k ? (sum += cur) : sum)); //  초기 k자리까지의 합
  let max = sum; // 초기 max === 초기 sum

  console.log({ init: sum });
  for (let i = 0; i < arr.length - k; i++) {
    sum -= arr[i];
    sum += arr[i + k];
    console.log({ sum });
    max = max < sum ? sum : max;
  }
  return max;
}
/**
 * !Sliding Window 활용 - 선생님 코드
 */
const solution2 = (k, arr) => {
  let answer;
  let sum = 0;
  // 초기 k까지의 합
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  //main loop
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(sum, answer);  // 최대값 Math.max() 잊지말자
  }

  return answer;
};
```

- 시간복잡도 O(n)!!!
- 2개의 포인터를 잘 쓰면(loop의 기준점), 이중포문 없이 loop를 돌 수 있다. 꼭 기억하자.