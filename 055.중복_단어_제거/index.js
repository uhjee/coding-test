function solution(s) {
  let answer = [];
  for (const w of s) {
    if (!answer.includes(w)) answer.push(w);
  }
  return answer;
}

function solution(s) {
  return [...new Set(s)];
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
