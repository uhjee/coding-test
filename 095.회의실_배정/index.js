function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  console.log({ meeting });
  for (let i = 0; i < meeting.length; i++) {
    let arr = [meeting[i]];
    for (let j = i + 1; j < meeting.length; j++) {
      if (meeting[j][0] >= arr[arr.length - 1][1]) {
        arr.push(meeting[j]);
      }
    }
    console.log(i, arr);
    answer = arr.length >= answer ? arr.length : answer;
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
