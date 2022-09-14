# 숫자의 표현 (two pointer)

### 문제 설명

Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

- 1 + 2 + 3 + 4 + 5 = 15
- 4 + 5 + 6 = 15
- 7 + 8 = 15
- 15 = 15
  자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

### 제한사항

- n은 10,000 이하의 자연수 입니다.

### 입출력 예

| n   | result |
| --- | ------ |
| 15  | 4      |

#### 입출력 예 설명

#### 입출력 예#1

## 문제의 예시와 같습니다.

## 풀이

```js
function solution(n) {
  var answer = 0;
  let p1 = 1;
  let p2 = 2;
  let sum = p1;
  while (p1 <= n) {
    if (sum < n) {
      sum += p2++;
    } else if (sum > n) {
      sum -= p1++;
    } else {
      sum += p2++;
      sum -= p1++;
      answer++;
    }
  }
  return answer;
}

console.log(solution(15)); // 4
```

- 두 개의 포인터를 두어 윈도우 슬라이딩 방식으로 풀이
- 두 개의 포인터 사이의 모든 숫자들의 sum을 오른쪽으로 쭉 밀고가는 방법
- 이중 반복문을 사용하지 않을 수 있어서 다행


### 고수 풀이

```js
function expressions(num) {
    var answer = 0;

  for(var i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}
```

- `num` 의 약수 중에 홀수만 카운팅한다.
- 문제에서 원하는 개수와 같다고 한다.....수학 만세