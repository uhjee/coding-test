- ### 핸드폰 번호 가리기

  프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 `*`으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
  
  ##### 제한 조건
  
  - s는 길이 4 이상, 20이하인 문자열입니다.
  
  ##### 입출력 예
  
  | phone_number  | return        |
  | ------------- | ------------- |
  | "01033334444" | "*******4444" |
  | "027778888"   | "*****8888"   |
  
  

[출처: 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12948/solution_groups?language=javascript&type=my)

---

### 나의 풀이

javascript

```js
function solution(phone_number) {
   return phone_number.replace(/(?=.{5})./gm, '*');
}
```

- 정규표현식 중 '전방탐색', '후방탐색' 표현식이 있다는 것을 알게 되었다.
- 위에서 사용한 전방탐색 표현식은 `.{5}` 에 해당하는 글자 전의 문자열을 선택한다.
