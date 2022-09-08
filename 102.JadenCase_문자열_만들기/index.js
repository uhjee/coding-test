function solution(s) {
  var answer = '';
  for (const c of s) {
    if (answer.length === 0 || answer[answer.length - 1] === ' ') {
      answer += c.toString().toUpperCase();
    } else if (c === ' ') {
      answer += c;
    } else {
      answer += c.toString().toLowerCase();
    }
  }
  return answer;
}

console.log(solution('3people unFollowed me'));
