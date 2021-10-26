# 연속 부분수열 1

N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
`12131112`
합이 6이 되는 연속부분수열은 `{2, 1, 3}`, `{1, 3, 1, 1}`, `{3, 1, 1, 1}`로 총 3가지입니다.

### 입력설명

- 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.

### 출력설명

- 첫째 줄에 경우의 수를 출력한다.

### 입력예제 1

- 86 12131112

### 출력예제 1

- 3

---

## 풀이

```js
function solution(m, arr) {
  const len = arr.length;
  let count = 0;
  // 시작 포인터
  let p1 = 0;
  while (p1 < len) {
    let sum = 0;
    let p2 = p1;
    while (sum < m && p2 < len) {
      sum += arr[p2];
      p2++;
    }
    if (sum === m) count++;
    p1++;
  }
  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
```

- p1은 outer loop문 포인터
- p2는 inner loop문 포인터
- sum 은 p1 부터 p2까지의 합
- p2는 p1부터 이동하며 합을 구한다. 이 합이 m보다 작을 경우 p2를 하나 증가시켜 다음 loop를 돈다


## 선생님 풀이
```js
// 선생님 풀이
function solution01(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}
```

- 기준이 되는 포인터(outer loop에서 사용되는 포인터)가 나는 앞 포인터(p1)였지만, 선생님은 rt라 부르는 오른쪽 포인터였다.
  