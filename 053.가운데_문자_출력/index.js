function solution(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}
console.log(solution('study'));
console.log(solution('good'));

function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
console.log(solution('study'));
