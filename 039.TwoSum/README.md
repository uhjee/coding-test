### Two Sum

1. Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

   You may assume that each input would have ***exactly\* one solution**, and you may not use the *same* element twice.

   You can return the answer in any order.

    

   **Example 1:**

   ```
   Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
   Output: Because nums[0] + nums[1] == 9, we return [0, 1].
   ```

   **Example 2:**

   ```
   Input: nums = [3,2,4], target = 6
   Output: [1,2]
   ```

   **Example 3:**

   ```
   Input: nums = [3,3], target = 6
   Output: [0,1]
   ```

    

   **Constraints:**

   - `2 <= nums.length <= 104`
   - `-109 <= nums[i] <= 109`
   - `-109 <= target <= 109`
   - **Only one valid answer exists.**

   

[출처: leetcode](https://leetcode.com/problems/two-sum/)

---

### 나의 풀이

javascript

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.slice(i + 1);
    for (let j = 0; j < rest.length; j++) {
      if (nums[i] + rest[j] === target) return [i, i + 1 + j];
    }
  }
  return [];
};
```

- leetcode로 넘어왔다...

- 주어진 배열에서 2개의 수를 뽑아 그 합이 주어진 `target` 과 같다면, 그 인덱스를 배열에 넣어 리턴하는 문제

- 조합의 로직과 비슷하게 풀이했다.

  - loop문을 돌며 배열의 가장 앞의 수를 고정(`fixed`)시키고, 나머지를 다시 loop문 돌린다.
  - 내부 loop문 안에서 fixed와 내부 loop의 수와 더해서 `target` 과 같아질 경우, 바로 리턴한다.

- 바로 리턴할 수 있는 이유는 문제에서 다음과 같이 볼드체로 강하게 강조했기 때문

  > ***exactly\* one solution**,

