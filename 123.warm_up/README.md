# 123. 두 개 뽑아서 더하기

## 문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 제한사항
- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.

## 입출력 예

| numbers | result |
| ------- | ------ |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7] | [2,5,7,9,12] |

## 입출력 예 설명
입출력 예 #1

- 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
- 3 = 2 + 1 입니다.
- 4 = 1 + 3 입니다.
- 5 = 1 + 4 = 2 + 3 입니다.
- 6 = 2 + 4 입니다.
- 7 = 3 + 4 입니다.
- 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

입출력 예 #2

- 2 = 0 + 2 입니다.
- 5 = 5 + 0 입니다.
- 7 = 0 + 7 = 5 + 2 입니다.
- 9 = 2 + 7 입니다.
- 12 = 5 + 7 입니다.
- 따라서 [2,5,7,9,12] 를 return 해야 합니다.

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/68644)


### 내 풀이
```js
const solution = numbers => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const num1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (!result.includes(numbers[i] + numbers[j])) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
```
- 중복 제거는 `new Set()  ` 을 사용하여 쉽게 해결할 수 있음

---
# 수포자

## 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

- 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
- 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
- 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 조건
- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 입출력 예

| answers | return |
| ------- | ------ |
| [1,2,3,4,5] | [1] |
| [1,3,2,4,2] | [1,2,3] |

## 입출력 예 설명
입출력 예 #1

- 수포자 1은 모든 문제를 맞혔습니다.
- 수포자 2는 모든 문제를 틀렸습니다.
- 수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

- 모든 사람이 2문제씩을 맞췄습니다.

```js
const solution2 = answers => {
  const rightCnt = (answer, pattern) => {
    let cnt = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === pattern[i % pattern.length]) {
        cnt++;
      }
    }
    return cnt;
  };
  const student1 = rightCnt(answers, [1, 2, 3, 4, 5]);
  const student2 = rightCnt(answers, [2, 1, 2, 3, 2, 4, 2, 5]);
  const student3 = rightCnt(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  const maxScorers = [student1, student2, student3].reduce((acc, cur, idx) => {
    if (acc.length > 0 && acc[0].score < cur) {
      return [{ score: cur, idx }];
    } else if (acc.length > 0 && acc[0].score === cur) {
      acc.push({ score: cur, idx });
    } else if (acc.length === 0) {
      return [{ score: cur, idx }];
    }
    return acc;
  }, []);
  return maxScorers.map(v => v.idx + 1).sort((a, b) => a - b);
};
```
- Max 값을 별도로 할당하지 않고, 값으로 들고 다님
- 정렬을 따로 해주고 있음

```js

const solution3 = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],  
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [];
  for (pattern of patterns) { 
    scores.push(answers.filter((a, i) => a === pattern[i % pattern.length]).length);
  }
  const maxScore = Math.max(...scores);

  const result = [];
  for (const [index, score] of scores.entries()) { 
    if(score === maxScore) {
      result.push(index + 1);
    }
  }
  return result;
};
```
- max 값을 뽑은 뒤, 다시 요소와 max값을 비교
- 정렬을 따로 하지 않음