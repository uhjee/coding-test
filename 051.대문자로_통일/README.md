# 대문자로 통일

대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

### 입력설명

- 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

### 출력설명

- 첫 줄에 대문자로 통일된 문자열이 출력된다.

### 입력예제 1

- ItisTimeToStudy

### 출력예제 1

- ITISTIMETOSTUDY

---

## 풀이 1 반복문 사용

```js
function solution(s) {
  let answer = '';

  for (const c of s) {
    answer += c === c.toUpperCase() ? c : c.toUpperCase();
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
```

- 정규표현식 사용

## 선생님 풀이 - 아스키코드 사용

```js
// 해당 문자를 구분자로 사용해 배열의 길이 -1로 계산
// 아스키코드 사용
// 대문자 65 - 90
// 소문자 97 - 122
function solution(s) {
  let answer = '';
  for (const c of s) {
    const num = c.charCodeAt();
    answer += num > 96 && num < 123 ? String.fromCharCode(num - 32) : c;
  }
  return answer;
}
```

- 아스키코드 사용
  - 대문자: 65 ~ 90
  - 소문자: 97 ~ 122
