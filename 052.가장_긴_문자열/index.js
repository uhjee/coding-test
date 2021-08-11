function solution(s) {
  let answer = '';
  for (const w of s) {
    if (w.length > answer.length) answer = w;
  }
  return answer;
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
console.log(solution(str) === 'beautiful');
