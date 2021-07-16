# 두 개 뽑아서 더하기

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

------

##### 제한사항

- numbers의 길이는 2 이상 100 이하입니다.
  - numbers의 모든 수는 0 이상 100 이하입니다.

------

##### 입출력 예

| numbers       | result          |
| ------------- | --------------- |
| `[2,1,3,4,1]` | `[2,3,4,5,6,7]` |
| `[5,0,2,7]`   | `[2,5,7,9,12]`  |

------

##### 입출력 예 설명

입출력 예 #1

- 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
- 3 = 2 + 1 입니다.
- 4 = 1 + 3 입니다.
- 5 = 1 + 4 = 2 + 3 입니다.
- 6 = 2 + 4 입니다.
- 7 = 3 + 4 입니다.
- 따라서 `[2,3,4,5,6,7]` 을 return 해야 합니다.

입출력 예 #2

- 2 = 0 + 2 입니다.
- 5 = 5 + 0 입니다.
- 7 = 0 + 7 = 5 + 2 입니다.
- 9 = 2 + 7 입니다.
- 12 = 5 + 7 입니다.
- 따라서 `[2,5,7,9,12]` 를 return 해야 합니다.

[출처: 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/68644/solution_groups?language=javascript)

---

### 나의 풀이

javascript

```js
function solution(numbers) {
  const getCombi = (arr, n) => {
    if (n === 1) return arr.map(i => [i]);
    const result = [];
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combis = getCombi(rest, n - 1);
      const attached = combis.map(c => [fixed, ...c]);
      result.push(...attached);
    });
    return result;
  };

  const result = getCombi(numbers, 2)
    .map(arr => arr.reduce((sum, cur) => (sum += cur)), 1)
    .sort((a, b) => a - b);

  return [...new Set(result)];
}
```

- 조합을 구해서 더한 뒤에 정렬을 해주면 될 듯 했다.
- 하지만 더한 값들 중에서 또 중복이 생기기 때문에, 굳이 '조합'을 만드는 수고를 하지 않아도 될 듯 했다.
- 너무 꼬아서 생각한 것 같다. 요즘 조합에 빠져있어서....

- Set 은 새로운 타입이기 때문에, 구조분해할당이든 form 메소드든 Array로 다시 만들어 주어야 한다.

  ```js
  console.log(Array.isArray(new Set(result))); // false
  ```

  ```js
  console.log(Array.from(new Set(result))); // Set to Array
  console.log([...new Set(result)]);  // Set to Array
  ```

  



## 조합을 사용하지 않고 모든 더한 경우 다 뽑아서 중복 제거하는 방법

```js
function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result)]
           .sort((a, b) => a - b);
}
```

