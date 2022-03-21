# Special Sort(구글 인터뷰)

- N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
- 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

### 입력설명

- 첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진다. 숫자 0은 입력되지 않는다.

### 출력설명

- 정렬된 결과를 출력한다.

### 입력예제 1

- 8
- 1 2 3 -3 -2 5 6 -6

### 출력예제 1

- -3 -2 -6 1 2 3 5 6

## 풀이

```js
function solution(arr) {
  let answer = [...arr];
  let minusCnt = 0; // 요소가 음수인 Index +1
  // 음수를 가장 앞으로
  for (let i = 0; i < answer.length; i += 1) {
    if (answer[i] < 0) {
      [answer[minusCnt], answer[i]] = [answer[i], answer[minusCnt]];
      minusCnt++;
    }
  }
  // 양수 선택정렬
  for (let i = minusCnt + 1; i < answer.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < answer.length; j += 1) {
      if (answer[j] > 0 && answer[minIndex] > answer[j]) minIndex = j;
    }
    [answer[minIndex], answer[i]] = [answer[i], answer[minIndex]];
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
```

- 1. 음수인 경우 가장 앞으로 자리 교체
- 2. 이후 음수 다음 인덱스부터 선택정렬

- 음수만 stack 변수에 할당할까 고민했으나, 최대한 하나의 array 안에서 처리하고자 해봤다.
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
}
```

- 시간 복잡도 O(n^2)
