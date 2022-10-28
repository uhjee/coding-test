function solution(distance, scope, times) {
  var answer = 0;

  for (let i = 1; i < distance + 1; i++) {
    const soldierIndex = scope.findIndex(
      ([start, end]) => i >= start && i <= end,
    );
    if (soldierIndex > -1) {
      const [workPeriod, restPeriod] = times[soldierIndex];
      const value = i % (workPeriod + restPeriod);
      if (value > 0 && value <= workPeriod) {
        return i;
      }
    }
    answer = i;
  }
  return answer;
}

console.log(
  solution(
    10,
    [
      [3, 4],
      [5, 8],
    ],
    [
      [2, 5],
      [4, 3],
    ],
  ),
);
console.log(
  solution(
    12,
    [
      [7, 8],
      [4, 6],
      [11, 10],
    ],
    [
      [2, 2],
      [2, 4],
      [3, 3],
    ],
  ),
);
