function solution(day, arr) {
  let answer = 0;
  for (const x of arr) {
    if (x % 10 === day) answer += 1;
  }
  return answer;
}

function solution(day, arr) {
  return arr.filter(i => i % 10 === day).length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
