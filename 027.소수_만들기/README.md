## 소수 만들기

주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

##### 제한사항

- nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
- nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

------

##### 입출력 예

| nums        | result |
| ----------- | ------ |
| [1,2,3,4]   | 1      |
| [1,2,7,6,4] | 4      |

##### 입출력 예 설명

입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.

[출처: 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12977/solution_groups?language=javascript)

---

### 나의 풀이

javascript

```js
function solution(nums) {
  // 조합을 만들어주는 함수
  const getCombination = (arr, count) => {
    if (count === 1) return arr.map(i => [i]);
    let result = [];
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombination(rest, count - 1);
      const attached = combinations.map(c => [fixed, ...c]);
      result.push(...attached);
    });
    return result;
  };
  // 소수인지 판별해주는 함수
  const isPrime = num => {
    if (num === 2) return true; // 2는 무조건 소수니까 true 반환 (이번 문제에선 해당은 안됨)
    if (num % 2 === 0) return false; // 짝수는 무조건 소수가 아니므로 ealry return
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const combinationArr = getCombination(nums, 3);
  const sumArr = combinationArr
    .map(i => [...i].reduce((sum, i) => (sum += i)), 0)
    .filter(i => isPrime(i));

  return sumArr.length;
}
```

- 조합
  - 주어진 수들 중에서 3가지의 수만 뽑아내야 한다는 말은 '조합'을 의미하는 것이었다.
    - 조합: 수의 순서는 상관 없음 `4C3`
    - 순열: 수의 순서가 상관 있음  `4C3 * 3!`
  - 이전에 '조합' 의 개념을 모른채로 시도하다가 실패한 기억이 있다. 최근 '조합' 과 '순열'을 공부하고 재도전했다.
  - 조합을 만드는 함수를 선언
    - 핵심은 가장 앞의 수는 고정시키고, 나머지 수들의 조합을 다시 구해서 다시 합치는 로직이다.(재귀 사용)
- 소수 
  - 이전에 봤었는데 기억을 못했다...
  - 소수를 구하기 위해, 수들을 직접 나눠봐야한다. (나누어 떨어지는 게 1이랑 자기 자신뿐이어야 하기 때문)
  - 많은 방법들이 있었으나... 결국 제곱근까지만 나눠보면 볼장 다 보는 것이었다.
  - 따라서 n의 수의 소수 판단을 하기 위해 `n`까지 나눌 필요가 없고, `n/2`까지 나눌 필요가 없다.
  - `Math.floor(Math.sqrt(n))` 까지 체크를 해보면 된다.