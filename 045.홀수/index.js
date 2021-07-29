function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let oddSum = 0;
  let index = 0;
  while (index < arr.length) {
    const value = arr[index];
    if (value % 2 === 1) {
      oddSum += value;
      if (min > value) {
        min = value;
      }
    }
    index++;
  }
  return { min, oddSum };
}

function solution(arr) {
  const odds = arr.filter(i => i % 2 === 1);
  return {
    min: Math.min(...odds),
    oddSum: odds.reduce((sum, i) => sum + i, 0),
  };
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
