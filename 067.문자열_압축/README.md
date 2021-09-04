# 문자열 압축

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

### 입력설명

- 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

### 출력설명

- 첫 줄에 압축된 문자열을 출력한다.

### 입력예제 1

- KKHSSSSSSSE

### 출력예제 1

- K2HS7E

---

## 풀이 1

```js
function solution(s) {
  let answer = '';
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (i > 0 && s[i - 1] === s[i]) {
      count += 1;
      if (i === s.length - 1) {
        answer += count;
      }
    } else {
      answer += count > 1 ? `${count}${ch}` : ch;
      count = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
```

- 루프문을 돌며, 이전 값과 같다면, count +1
- 이전값과 다르면 answer에 count와 문자를 덧붙인 뒤 count를 초기화한다.
- 가장 마지막 인덱스의 경우, 이전 값과 같다면, count를 따로 덧붙인다.
- 시간 복잡도 O(n)

## 선생님 풀이

```js
function solution1(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }
  return answer;
}
```

- 나는 기준을 뒤 문자로 잡아 앞의 문자와 비교했지만, 선생님은 앞 문자 기준으로 뒷 문자와 비교를 했다.
- 마지막 인덱스의 문자 처리를 위해, ' 'nullString을 추가하는 부분이 신기했다.