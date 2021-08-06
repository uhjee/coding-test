# A를 #으로

대문자로  이루어진  영어단어가  입력되면  단어에  포함된  ‘A'를  모두  ’#‘으로  바꾸어  출력하는 
프로그램을 작성하세요.

### 입력설명
첫 번째 줄에 문자열이 입력된다.
### 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.
### 입력예제 1                                   
BANANA
### 출력예제 1
B#N#N#

## 풀이 1 정규표현식 사용

```js
function solution(s){
  return s.replace(/A/g, '#')
}

let str="BANANA";
console.log(solution(str));
```

- 정규 표현식 사용

  ## 풀이 2 반복문 사용
```js
function solution(s){
  let answer = '';
  for(const c of s){
    answer += c === 'A' ? '#' : c;
  }
  return answer;
}
```

- 문자열을 반복문 돌며, 한글자 한글자 비교해서 조합 후 반환

### 선생님 풀이

```js

```

