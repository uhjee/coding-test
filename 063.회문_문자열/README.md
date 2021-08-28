# 회문 문자열

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 아니라면 "NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

### 입력설명

- 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

### 출력설명

- 첫 번째 줄에 회문 문자열인지의 결과를 나타내는 YES, NO로 출력합니다.

### 입력예제 1 5

- `gooG`

### 출력예제 1

- `YES`

---

## 풀이 1

```js
function solution(s) {
  let fromFirst = '';
  let fromLast = '';
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    fromFirst += s[i];
    fromLast += s[s.length - 1 - i];
  }
  console.log({ fromFirst, fromLast });
  return fromFirst.toUpperCase() === fromLast.toUpperCase() ? 'YES' : 'NO';
}

let str = 'goo4ooG';
console.log(solution(str));
```

- 중간값까지 for문을 돌며, 앞에서부터 덧붙이는 문자열, 뒤에서부터 덧붙이는 문자열에 문자를 넣는다
- 출력시 toUpperCase()로 대문자로 변환 후, 삼항 연산자로 출력

## 선생님 풀이

```js
const solution1 = s => {
  let answer = 'YES';
  s = s.toUpperCase();
  let len = s.lnegth;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return 'NO';
  }
  return answer;
};

let str = 'goo4ooG';
console.log(solution1(str));
```

- 처음부터 toUpperCase()를 적용한다. 이점이 더 효율적.
- 개별 요소 하나별로 for문 안에서 비교한다.
- 다르다면 바로 return 한다..
- 효율성 측면에서 훨씬 좋은 것 같다.

## 선생님 풀이 2 (reverse() 사용)

```js
// reverse() 사용
const solution2 = s => {
  s = s.toUpperCase();
  return s !== [...s].reverse().join('') ? 'NO' : 'YES';
};

let str = 'goo4ooG';
console.log(solution2(str));
```

- String.prototype.reverse()를 사용