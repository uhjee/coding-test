- ### 행렬의 덧셈

  행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

  ##### 제한 조건
  
  - 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
  
  ##### 입출력 예
  
  | arr1          | arr2          | return        |
  | ------------- | ------------- | ------------- |
  | [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
  | [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |

[출처: 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12950/solution_groups?language=javascript)

---

### 나의 풀이

javascript

```js
function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i< arr1.length; i++ ){
        answer.push([]);
        for(let j = 0; j< arr1[0].length ; j++){
            answer[i].push([]);
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}
```

- 행렬과 같이 depth가 들어가는 구조에 대해 내가 약하다는 걸 깨달았다.
- 구조가 머리 속에 잘 그려지지 않아, 이터레이터 함수 대신 단순 for문으로 진행했다.

```js
function solution(arr1, arr2) {
	return arr1.map(((i, iIndex) => i.map((j, jIndex) => j + arr2[iIndex][jIndex])));  
}
```

- index를 활용해 이터레이터 함수로 해결
