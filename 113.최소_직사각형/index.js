function solution(sizes) {
  var answer = 0;
  const arr = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
  arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return 1;
    }
  });
  const [first, ...rest] = arr;
  rest.sort((a, b) => b[1] - a[1]);
  const second = rest.find(([f, s]) => s > first[1]);

  console.log(first, second);
  answer = first[0] * (!second ? first[1] : second[1]);
  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
); //4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]),
); //120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ]),
); //133
