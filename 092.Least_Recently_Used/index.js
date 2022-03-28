function solution(size, arr) {
  let answer = [];
  arr.forEach(i => {
    const cIndex = answer.findIndex(c => i === c);
    if (cIndex > -1) answer.splice(cIndex, 1);
    answer.unshift(i);
    if (answer.length > size) answer.pop();
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
