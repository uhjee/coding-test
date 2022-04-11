# 회의실 배정(greedy)

한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들 려고 한다. 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하 면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 단, 회의는 한번 시작하면 중간에 중 단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

### 입력설명

첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다. 둘째 줄부터 n+1 줄까지 각 회의의 정 보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다. 회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.

### 출력설명

첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라.

### 입력예제 1

- 5
- 1 4
- 2 3
- 3 5
- 4 6
- 5 7

### 출력예제 1

- 3

### 예제설명

- (2, 3), (3, 5), (5, 7)이 회의실을 이용할 수 있다.

### 입력예제 2

- 3
- 3 3
- 1 3
- 2 3

### 출력예제 2

- 2

---

## 풀이

```js
function solution(meeting) {
  let answer = 0;
  // 01. 그리드 정렬 - 시작 시간 -> 끝나는 시간
  meeting.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  console.log({ meeting });
  // 02. 인덱스 별로 자신 뒤에 올 수 있는 요소 배열로 담기
  for (let i = 0; i < meeting.length; i++) {
    let arr = [meeting[i]];
    for (let j = i + 1; j < meeting.length; j++) {
      if (meeting[j][0] >= arr[arr.length - 1][1]) {
        arr.push(meeting[j]);
      }
    }
    console.log(i, arr);

    // 03. 배열 길이가 가장 큰 수를 answer에 할당
    answer = arr.length >= answer ? arr.length : answer;
  }
  return answer;
}
```

- 정렬 기준: 시작 시간 -> 끝나는 시간
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
const solution1 = meeting => {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]; // 시작시간 비교
    else return a[1] - b[1]; // 끝시간 비교
  });
  let endTime = 0; // 끝나는 시간

  for (let x of meeting) {
    // x는 다음 회의
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1]; // 끝나는 시간 할당
    }
  }

  return answer;
};
```
- Greedy 의 대표 문제
- 정렬 기준: 끝나는 시간 -> 시작 시간
- 다음 회의 가능 판단 기준: x 번째의 끝나는 시간 <= x+1 번째의 시작 시간
- 정렬 후, 첫 번째 포인터는 무조건 회의실 배정
