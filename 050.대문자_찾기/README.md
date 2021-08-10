# 대문자 찾기

한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
### 입력설명
- 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
### 출력설명
- 첫 줄에 대문자의 개수를 출력한다.
### 입력예제 1 
KoreaTimeGood
### 출력예제 1 
3

---


## 풀이 1 정규표현식 사용

```js
function solution(s, t) {
  // 정규식 사용
function solution(s) {
  const regex = new RegExp(`[A-Z]{1}`, 'g');
  return s.match(regex);
}

let str = 'KoreaTimeGGood';
console.log(solution(str));

```
- 정규표현식 사용

## 풀이 2 반복문 사용

```js
// String.prototype.toUpperCase() 사용
function solution(s) {
  return [...s].filter(c => c === c.toUpperCase()).length;
}

```

- String.prototype.toUpperCase() 는 새로운 값을 출력한다.

## 선생님 풀이 - 아스키코드 사용

```js
// 해당 문자를 구분자로 사용해 배열의 길이 -1로 계산
// 아스키코드 사용
// 대문자 65 - 90
// 소문자 97 - 122
function solution(s) {
  return [...s].filter(c => c.charCodeAt() > 64 && c.charCodeAt() < 91).length;
}
```

- 아스키코드 사용
  - 대문자: 65 ~ 90
  - 소문자: 97 ~ 122
