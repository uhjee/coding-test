# 일곱 난쟁이

왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시 오.

### 입력설명

- 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

### 출력설명

- 입력된 순서대로 일곱 난쟁이의 키를 출력한다.

### 입력예제 1

20 7 23 19 10 15 25 8 13

### 출력예제 1

20 7 23 19 10 8 13

## 풀이

```js
function solution(arr) {
  // 총 합계
  const sum = arr.reduce((sum, item) => sum + item, 0);

  // 순회하며, 제외할 2가지 숫자의 조합 구하기
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        // 해당하는 두 수를 제외한 배열 리턴
        return arr.filter(item => item !== arr[i] && item !== arr[j]);
      }
    }
  }
  return [];
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
```

- 9가지 수 중에 7개만 뽑아내는 문제(조합)
- 반대로 여기서는 제외할 2가지 수를 구하는 방법으로 풀이
- spilce 메소드를 사용하려했지만, 엉뚱한 index가 삭제되므로 둘을 걸러내는 filter 함수 사용


### 선생님 풀이

```js
function solution(arr) {
  let answer = arr;
  const sum = arr.reduce((sum, item) => sum + item, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // ! 뒷 index를 먼저 지운다.
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}
```

- 
