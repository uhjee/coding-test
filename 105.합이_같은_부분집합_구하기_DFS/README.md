# 합이 같은 부분집합 구하기(DFS)

N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을
작성하세요.

둘로 나뉘는 두 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어 합니다.

예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.

### 입력설명

- 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
- 두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않으며, 그 크기는 1,000,000 이하입니다.

### 출력설명

- 첫 번째 줄에 “YES" 또는 ”NO"를 출력한다.

### 입력예제 1

- 6
- 1 3 5 6 7 10

### 출력예제 1

- YES

---

## 풀이

```js
function solution(arr) {
    let answer = "NO";
    const checkMap = {};
    arr.forEach((value) => {
        checkMap[value] = 0;
    });

    const DFS = (depth) => {
        if (depth >= arr.length) {
            let includedNumsSum = 0;
            let excludedNumsSum = 0;
            Object.entries(checkMap).forEach(([key, value]) => {
                if (value === 0) {
                    excludedNumsSum += Number(key);
                } else {
                    includedNumsSum += Number(key);
                }
            });
            if (excludedNumsSum === includedNumsSum) {
                answer = 'YES';
            }
        } else {
            checkMap[arr[depth]] = 1;
            DFS(depth + 1);
            checkMap[arr[depth]] = 0;
            DFS(depth + 1);
        }
    };
    DFS(0);
    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
```

- 이진트리로 해결
- 각 숫자들이 포함되는지 여부를 체크하는 Map(Object) 생성
- 트리 분기하며, 해당 depth(index)에 해당하는 숫자가 포함되는지 체크
- 마지막 depth(index)에 갔을 경우, 서로소 집합으로 분리됨


### 선생님 풀이
```js
const solution1 = (arr) => {
    let answer = 'NO';
    const total = arr.reduce((sum, cur) => sum + cur, 0);
    let flag = 0; // 하나라도 ? YES인 경우 체크 플래그
    /**
     * @param L 레벨
     * @param sum 지금까지의 총합
     * @constructor
     */
    const DFS = (L, sum) => {
        if (flag === 1) return;
        if (L === arr.length) {
            if (total - sum === sum) {
                answer = "YES";
                flag = 1;
            }
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    };
    DFS(0, 0);
    return answer;
};

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution1(arr));
```

- 재귀함수의 파라미터로 sum을 전달
- 체크 여부를 관리하는 별도의 map 또는 배열을 두지 않고, 재귀 함수 내에서 sum에 바로 더해줌
- 플래그를 두어 하나라도 `YES`인 경우, 재귀를 돌지 않도록 분기 처리
