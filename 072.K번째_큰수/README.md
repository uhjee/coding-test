# k번째 큰 수(완전탐색)

현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.

### 입력설명

- 첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력 된다.

### 출력설명

- 첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.

### 입력예제 1

- 10 3
- 13 15 34 23 45 65 33 11 26 42

### 출력예제 1

- 143

---

## 풀이

```js
function solution(n, k, card) {
  let sums = [];

  for (let i = 0; i < n; i += 1) {
    const tempCard = [...card];
    const first = tempCard[i];
    tempCard.splice(i, 1);
    for (let j = 0; j < tempCard.length; j += 1) {
      const second = tempCard[j];
      tempCard.splice(j, 1);
      for (let k = 0; k < tempCard.length; k += 1) {
        const third = tempCard[k];
        sums.push(first + second + third);
      }
    }
  }
  // sotring + unique(중복 제거)
  const sortedSums = [...new Set(sums)].sort((a, b) => b - a);
  return sortedSums[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
```

- 3개의 숫자를 더하기 위해 3중 for문
- 이후, 중복 제거 후 내림차순 정렬

- 시간 복잡도 O(n^3)

## 선생님 풀이

```js
function solution1(n, k, card) {
  let answer;
  let temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let arr = Array.from(temp).sort((a, b) => b - a);
  return arr[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution1(10, 3, arr));

```

- 중복, 순서에 대한 개념이 없는 자료구조 `Set`
- 위처럼 3중 for문을 돌아도 모든 경우의 수가 뽑힌다고 한다...