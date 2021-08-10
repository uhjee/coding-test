// function solution(s) {
//   let answer = '';

//   for (const c of s) {
//     answer += c === c.toUpperCase() ? c : c.toUpperCase();
//   }
//   return answer;
// }

function solution(s) {
  let answer = '';
  for (const c of s) {
    const num = c.charCodeAt();
    answer += num > 96 && num <123 ? String.fromCharCode(num - 32) : c;
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
