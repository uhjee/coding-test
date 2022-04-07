const solution = arr => {
  let answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j][0] < answer[minIndex][0]) minIndex = j;
      else if (answer[j][0] === answer[minIndex][0]) {
        if (answer[j][1] < answer[minIndex][1]) {
          minIndex = j;
        }
      }
    }
    [answer[minIndex], answer[i]] = [answer[i], answer[minIndex]];
  }
  return answer;
};

const solution1 = arr => {
  let answer = [...arr];

  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
};

let arr = [
  [2, 7],
  [1, 3],
  [3, 6],
  [1, 2],
  [2, 5],
];
console.log(solution1(arr));
