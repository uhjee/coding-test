# 중복 문자 제거

소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

### 입력설명

- 첫 줄에 문자열이 입력됩니다.

### 출력설명

- 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

### 입력예제 1

- ksekkset

### 출력예제 1

- kset

---

## 풀이 1 반복문 사용

```js
function solution(s) {
  let answer = '';
  for (const idx in s) {
    answer += idx > 0 && s[idx] === s[idx - 1] ? '' : s[idx];
  }
  return answer;
}
console.log(solution('kkseeekksettt'));
```

- 내부 로직을 이해하기 위해 reduce 사용 x
- 문자열의 각 자리를 반복문 돌면서, 앞자리의 문자와 비교 후, 같다면 자신을 덧붙이지 않는다.
- 문제를 잘못 이해했다. 앞뒷자리가 아니라, 전체의 중복을 체크해야함

## 풀이 2 진짜 정답 제출

```js
function solution(s) {
  // let answer = '';

  // for (const c of s) {
  //   if (!answer.includes(c)) answer += c;
  // }
  // return answer;

  return [...s].reduce((result, c) =>
    !result.includes(c) ? result + c : result,
  );
}
```

- 루프문 내부에서 결과로 내보낼 문자열에 현재 문자가 없다면, 덧붙이는 방법

## 선생님 풀이
