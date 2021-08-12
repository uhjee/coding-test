# 중복 단어 제거

N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.

### 입력설명

- 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
- 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.

### 출력설명

- 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.

### 입력예제 1 5

- good
- time
- good time student

### 출력예제 1

- good
- time
- student

---

## 풀이 1 반복문 사용

```js
function solution(s) {
  let answer = [];
  for (const w of s) {
    if (!answer.includes(w)) answer.push(w);
  }
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
```

## 선생님 풀이

```js

```
