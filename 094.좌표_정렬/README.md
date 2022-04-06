# 좌표 정렬

- N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.

### 입력설명

- 첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
- 두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.

### 출력설명

- N개의 좌표를 정렬하여 출력하세요.

### 입력예제 1

- 5
- 2 7
- 1 3
- 1 2
- 2 5
- 3 6

### 출력예제 1

- 1 2
- 1 3
- 2 5
- 2 7
- 3 6

---

## 풀이

```js
const solution = arr => {
  let answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j][0] < answer[minIndex][0]) minIndex = j;
      else if (answer[j][0] === answer[minIndex][0]) {
        if (answer[j][1] < answer[minIndex][1]) {
          minIndex = j;
        }
      }
    }
    [answer[minIndex], answer[i]] = [answer[i], answer[minIndex]];
  }
  return answer;
};

let arr = [
  [2, 7],
  [1, 3],
  [3, 6],
  [1, 2],
  [2, 5],
];
console.log(solution(arr));

```

- 선택정렬(최소값)으로 풀이
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js

```

