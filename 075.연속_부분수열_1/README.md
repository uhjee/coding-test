# 연속 부분수열 1

N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
`1 2 1 3 1 1 1 2`
합이 6이 되는 연속부분수열은 `{2, 1, 3}`, `{1, 3, 1, 1}`, `{3, 1, 1, 1}`로 총 3가지입니다.

### 입력설명

- 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
- 수열의 원소값은 1,000을 넘지 않는 자연수이다.

### 출력설명

- 첫째 줄에 경우의 수를 출력한다.

### 입력예제 1

- 8 6
- 1 2 1 3 1 1 1 2

### 출력예제 1

- 3

---

## 풀이

```js
function solution(arr1, arr2) {
  let answer = [];

  let sortedArr1 = arr1.sort((a, b) => a - b);
  let sortedArr2 = arr2.sort((a, b) => a - b);

  let n = arr1.length;
  let m = arr2.length;

  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    if (sortedArr1[p1] === sortedArr2[p2]) {
      answer.push(sortedArr1[p1]);
      p1++;
      p2++;
    } else if (sortedArr1[p1] < sortedArr2[p2]) p1++;
    else if (sortedArr1[p1] > sortedArr2[p2]) p2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
```

- 오름차순 정렬
- 이후 비교하며, arr1과 arr2의 값이 같을 경우, 두 포인터 모두 ++;
- 만약 같지 않다면, 값이 작은 쪽의 포인터 ++;
