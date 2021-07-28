
# 삼각형 판별하기

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
### 입력설명
- 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
### 출력설명
- 첫 번째 줄에 “YES", "NO"를 출력한다.
### 입력예제 1 
- 6 7 11
### 출력예제 1 
- YES
### 입력예제 1 
- 13 33 17
### 출력예제 1 
- NO

## 나의 풀이
```js
function solution(a, b, c) {
  // const max = Math.max(...[a, b, c]);
  let max = 0;
  let restSum = 0;
  if (a > b) {
    max = a;
    restSum += b;
  } else {
    max = b;
    restSum += a;
  }
  if (c > max) {
    max = c;
    restSum += b;
  } else {
    restSum += c;
  }

  return restSum > max ? 'YES' : 'NO';
}
```

## 선생의 풀이
```js
function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO"; 
    return answer;
}
```

- 가장 큰 수를 제외한 두 수의 합에 대해 고민을 했었는데, 애초에 다 더해버리고, 가장 큰 수를 빼는 식으로 진행했다...
- 그렇다면 다음과 같은 풀이가 가능해진다.

```js
function solution1(a, b, c) {
  const max = Math.max(...[a, b, c]);

  return (a + b + c) - max > max ? 'YES' : 'NO';
}
```