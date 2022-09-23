# 최대 점수 구하기\_탐욕법

이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다. 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다. 제한시간 M안에 N개의 문제 중
최대점수를 얻을 수 있도록 해야 합니다. (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

### 입력설명

첫 번째 줄에 문제의 개수N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다.
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

### 출력설명

첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.

### 입력예제 1

- 문제의 개수: 5
- 제한시간: 20

|점수| 푸는데 걸리는 시간 |
|---|------------|
|10| 5          |
|25| 12         |
|15| 8          |
|6| 3          |
|7 | 4          |

▣ 출력예제 1

- 최대 점수: 41

---

## 풀이

```js
function solution(m, ps, pt) {
    let answer = 0;

    const DFS = (L, scoreSum, timeSum) => {
        if (timeSum > m) {
            return;
        } else {
            console.log({L, scoreSum, timeSum});
            if (scoreSum > answer) {
                answer = scoreSum;
            }
        }
        if (L < ps.length) {
            DFS(L + 1, scoreSum, timeSum);
            DFS(L + 1, scoreSum + ps[L], timeSum + pt[L]);
        }
    };
    DFS(0, 0, 0);
    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));

```

- DFS, 재귀함수, 이진트리의 부분집합, 완전 탐색을 사용해서 풀이
- 분기가 지저분한 것 같다.

### 선생님 풀이

```js
function solution1(m, ps, pt) {
    let answer = 0;
    let n = ps.length;

    function DFS(L, sum, time) {
        console.log({L, sum, time});
        if (time > m) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + ps[L], time + pt[L]);
            DFS(L + 1, sum, time);
        }
    }

    DFS(0, 0, 0);
    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution1(20, ps, pt));
```

- 이해가 잘 안되는 부분은 DFS 함수 내부 초기에 `time > m` 조건으로 바로 return 하는데도, `L`이 `n`과 같아지는 수준이 되는가하는 부분이었다.
- 다행히 모든 경우의 수를 찍어보니 출력되는 것으로 확인됨
