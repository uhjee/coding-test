# 공통원소 구하기(Two Pointers Algorithm)

A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.

### 입력설명

- 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
- 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
- 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 각 집합의 원소는 1,000,000,000이하의 자연수입니다.

### 출력설명

- 두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

### 입력예제 1 5

- 13952
- 5
- 32578

### 출력예제 1 235

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
