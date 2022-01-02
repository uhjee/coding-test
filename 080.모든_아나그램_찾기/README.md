# 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

- S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

### 입력설명

- 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.

- S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

### 출력설명

- S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

### 입력예제 1

- bacaAacba abc

### 출력예제 1

- 3

### 출력설명

- {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다

---

## 풀이

```js
function solution(s, t) {
  let answer = 0;
  const map = new Map();
  const arr = [...s];

  for (let i = 0; i < arr.length; i++) {
    [...t].forEach(c => map.set(c, 0));
    for (let j = i; j < map.size + i; j++) {
      if (map.has(arr[j])) map.set(arr[j], map.get(arr[j]) + 1);
    }
    // map 의 value가 모두 1개인지 여부를 반환하는 조건문
    if ([...map.values()].reduce((result, cur) => result == true && cur == 1)) {
      answer++;
    }
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
```

- Map api를 사용해서 풀이
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js

```
