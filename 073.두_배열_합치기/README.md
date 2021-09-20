# 두 배열 합치기(Two Pointers Algorithm)

오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

### 입력설명

- 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
- 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
- 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

### 출력설명

- 오름차순으로 정렬된 배열을 출력합니다.

### 입력예제 1 3

- 135
- 5
- 23679

### 출력예제 1

- 12335679

---

## 풀이

```js
function solution(arr1, arr2) {
  let answer = [];
  answer = [...arr1, ...arr2];
  return answer.sort((a, b) => a - b);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
```

- spread 연산자 사용해 두 배열을 하나의 배열로 합친다.
- 이후, 오름차순 정렬

- sort 함수 시간 복잡도 O(nlogn)

## 선생님 풀이

```js
function solution(arr1, arr2) {
  let answer = [];
  const n = arr1.length;
  const m = arr2.length;

  // 포인터 변수
  let p1 = 0;
  let p2 = 0;

  // 둘중에 하나라도 탐색이 끝나면 루프문 멈추도록
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // arr1 이 남은 경우, 나머지 push
  while (p1 < n) answer.push(arr1[p1++]);
  // arr2 이 남은 경우, 나머지 push
  while (p2 < m) answer.push(arr2[p2++]);
  
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

```

- Two pointers algorithm 으로 풀이
- 포인터 변수 선언
- 시간 복잡도 O(n+m)
