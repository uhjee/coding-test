# 문자 찾기

한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.

### 입력설명

첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.

### 출력설명

첫 줄에 해당 문자의 개수를 출력한다.

### 입력예제 1

COMPUTERPROGRAMMING
R

### 출력예제 1

3

## 풀이 1 정규표현식 사용

```js
function solution(s, t) {
  // 정규표현식 내에서 js 변수를 사용하기 위해서는 new RegExp 객체로 생성해야한다.
  // 정규식 리터럴 / /gi 사용 x
  const regex = new RegExp(t, 'g');
  // mathch 메소드는 String prototype의 메소드
  return s.match(regex).length;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
```

- 정규 표현식 사용
- 정규 표현식 내에서 동적으로 구성하기 위해 js 변수를 사용하기 위해서는 `/ /`를 활용한 정규식리터럴로 만들어선 안된다.
- RegExp 객체로 생성해야, 변수 사용 가능

  ## 풀이 2 반복문 사용

```js
// 반복문 돌며 한 글자씩 비교
function solution(s, t) {
  let count = 0;
  for (const c of s) {
    if (c === t) count++;
  }
  return count;
}
```

- 문자열을 반복문 돌며, 한글자 한글자 비교해서 카운팅 후 반환

### 선생님 풀이

```js
// 해당 문자를 구분자로 사용해 배열의 길이 -1로 계산
function solution(s, t) {
  return s.split(t).length - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
```

- 해당 문자를 구분자로 사용해, 분리된 배열 길이 -1 로 게산
