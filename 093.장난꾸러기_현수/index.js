function solution(arr) {
  let bigIdxs = [];
  let smallIdxs = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= arr[i + 1] && arr[i] > arr[i - 1]) bigIdxs.push(i + 1);
    if (arr[i] <= arr[i - 1]) smallIdxs.push(i + 1);
  }
  return `${bigIdxs[0]}${smallIdxs[smallIdxs.length - 1]}`;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
console.log(solution(arr2));
