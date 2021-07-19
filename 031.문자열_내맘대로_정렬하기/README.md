- ### 문자열 내 마음대로 정렬하기

  문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

  ##### 제한 조건

  - strings는 길이 1 이상, 50이하인 배열입니다.
  - strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
  - strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
  - 모든 strings의 원소의 길이는 n보다 큽니다.
  - 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
  
  ##### 입출력 예
  
  | strings                 | n    | return                  |
  | ----------------------- | ---- | ----------------------- |
  | ["sun", "bed", "car"]   | 1    | ["car", "bed", "sun"]   |
  | ["abce", "abcd", "cdx"] | 2    | ["abcd", "abce", "cdx"] |
  
  ##### 입출력 예 설명
  
  **입출력 예 1**
  "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.
  
  **입출력 예 2**
  "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

[출처: 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12915/solution_groups?language=javascript)

---

### 나의 풀이

javascript

```js
function solution(strings, n) {
  return strings.sort((a, b) => {

    if(a[n] > b[n])return 1;
    else if(a[n] < b[n]) return -1;
    else {
      return [a, b].sort()[0] === a ? -1 : 1;
    }
  });
}
```

- 고민했던 것은 비교하는 두 문자열의 인덱스가 같은 경우 였다.
  - 이 경우 사전순으로 우선순위가 정해지기 때문에, 문자열 정렬을 위해 sort()의 기본 조건이 문자열이라는 것을 사용해 풀이했다.

  - 생각해보니, 굳이 sort() 메소드를 쓰지 않고, 아래와 같이 문자열 자체의 대소를 비교해도 되었을 것 같다.

    ```js
    ''' // 위의 else 문 내부
    	else {
          return a > b ? 1 : -1;
        }
    '''
    ```

    

### 타인의 풀이

```js
function solution(strings, n) {
  return strings.sort((a, b) => 
    a[n] === b[n] 
      ? a.localeCompare(b) 
      : a[n].localeCompare(b [n]));
}
```



- String.prototype.localeCompare()
  - locale 문자끼리 비교해 1, 0, -1을 반환한다.
  - 이를 사용하면 너무 간단히 문자열 비교 내부 로직을 구현하지 않고 풀이 가능...

