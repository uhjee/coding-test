function solution(arr) {
  let count = 0;
  let max = 0;
  for (const x of arr) {
    if (x > max) {
      max = x;
      count += 1;
    }
  }
  return count;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
