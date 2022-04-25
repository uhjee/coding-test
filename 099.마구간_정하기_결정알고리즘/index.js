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

function count1(stable, dist) {
  let cnt = 1;
  let endPosition = stable[0]; // 첫 번째 말은 무조건 넣는 것
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPosition >= dist) {
      cnt++;
      endPosition = stable[i];
    }
  }
  return cnt;
}

function solution1(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1]; // 맨 끝 (가장 큰 값)
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count1(stable, mid) >= c) {
      answer = mid; // 더 많이 들어갈 수 있는 경우는 정답의 범위에 포함
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution1(3, arr));
