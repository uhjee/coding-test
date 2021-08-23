# 등수 구하기

N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

### 입력설명

- 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

### 출력설명

- 입력된 순서대로 등수를 출력한다.

### 입력예제 1

- 5
- 87 89 92 100 76

### 출력예제 1

- 43215

---

## 풀이 1

```js
function solution(arr) {
  const raw = [...arr];
  const sorted = arr.sort((a, b) => b - a);
  return raw.map(i => sorted.findIndex(si => si === i) + 1);
}

// let arr = [87, 89, 92, 100, 76];
let arr = [87, 89, 100, 100, 76];
console.log(solution(arr));
```

- 복잡하게 푼 것 같다...
- Array.prototype.sort 메소드를 사용해 뭔가 쉽게 푼 느낌...
- O(n^2) 인 듯...

## 선생님 풀이

```js
function solution(arr) {
  const answer = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}
```

- 미리 순서를 출력할 배열을 선언해둔다.
  - Array.from() 스태틱 메소드를 사용해 배열을 정의하는 것은 처음 보는 것 같다.
- 이중 loop문을 돌며, 자신보다 큰 수가 있는 경우 자신의 순서 배열을 하나씩 추가한다.
