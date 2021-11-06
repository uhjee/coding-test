# 학급 회장(Hash Map)

학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

### 입력설명

- 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
- 두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.

### 출력설명

- 학급 회장으로 선택된 기호를 출력합니다.

### 입력예제 1

- 15
- -BACBACCACCBDEDE

### 출력예제 1

- C

---

## 풀이

```js
function solution(s) {
  const obj = [...s].reduce((obj, cur) => {
    if (obj[cur] === undefined) {
      obj[cur] = 0;
    } else {
      obj[cur]++;
    }
    return obj;
  }, {});

  // map에서 value 최대값인 key 구하기
  return Object.entries(obj).reduce(
    (max, cur) => (max[1] > cur[1] ? max : cur),
    0,
  )[0];
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
```

- 오랜만에 죄다 람다식으로 풀었다... 이렇게 의도한 문제는 아닌 것 같다.
- 자료구조 map을 사용해서 풀이
- 시간 복잡도 O(n)

## 선생님 풀이

```js
function solution1(s) {
  let answer;
  let m = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let i of s) {
    if (m.has(i)) m.set(i, m.get(i) + 1);
    else m.set(i, 0);
  }
  console.log(m);
  for (let [key, val] of m) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
```

- javascript에서 제공하는 Map api를 사용해서 풀이(로직은 동일)
- get(), set(), has() 사용