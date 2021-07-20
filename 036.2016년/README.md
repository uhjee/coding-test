- ### 2016년

  2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT`
  
  입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
  
  ##### 제한 조건
  
  - 2016년은 윤년입니다.
  - 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
  
  #### 입출력 예
  
  | a    | b    | result |
  | ---- | ---- | ------ |
  | 5    | 24   | "TUE"  |

[출처: 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12901/solution_groups?language=javascript)

---

### 나의 풀이

javascript

```js
function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = [ 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED' ];
    let monthDays = 0;
    for(let i = 0; i < a-1 ; i++){
        monthDays += month[i];
    }
    return days[(monthDays + b)%7];
}
```

- 상수로 각 월의 일수와 요일을 배열로 만들어 두고, index로 접근했다.
- 요일 등의 반복되는 상수를 구할 때에는 나머지 값을 활용.



### Date 객체를 사용한 풀이

```js
function solution(a, b) {
    const date = new Date(2016, a-1, b);
    return date.toString().split(' ')[0].toUpperCase();
}
```

- 타인이 멋지게 푼 것 같아 참조했지만, node.js의 locale에 따라 다른 값이 나올 수 있다고 한다...
