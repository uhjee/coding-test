function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let index = 0;
  while (index < arr.length) {
    if (min > arr[index]) {
      min = arr[index];
    }
    index++;
  }
  return min;
}
// function solution(arr) {
//   return Math.min(...arr);
// }

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
