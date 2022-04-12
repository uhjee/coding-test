function solution(times) {
  let answer = 0;
  const timeline = [];
  times.forEach(person => {
    timeline.push([person[0], 'start']);
    timeline.push([person[1], 'end']);
  });

  // console.log(timeline);
  timeline.sort((a, b) => {
    if (a[0] === b[0]) return a[1] === 'end' ? -1 : 1;
    // if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()``;
    else return a[0] - b[0];
  });

  console.log(timeline);
  let count = 0;
  timeline.forEach(i => {
    if (i[1] === 'start') count++;
    else count--;
    answer = Math.max(answer, count);
  });
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
