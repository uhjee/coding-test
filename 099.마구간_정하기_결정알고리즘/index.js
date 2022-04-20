function count(stable, dist) {
  let result = 1;
  let prevIndex = stable[0];
  for (let x of stable) {
    if (x - prevIndex > dist) {
      result++;
      prevIndex = x;
    }
  }
  return result;
}

function solution(c, arr) {
  let answer = 0;

  // 01. sorting
  arr.sort((a, b) => a - b);

  let lt = arr[0];
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    // mid = 거리
    let mid = parseInt((lt + rt) / 2);
    const countResult = count(arr, mid);
    if (countResult >= c) {
      lt = mid + 1;
    } else {
      answer = mid;
      rt = mid - 1;
    }
    // console.log(mid);
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
