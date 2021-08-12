// function solution(s) {
//   let answer = '';
//   for (const idx in s) {
//     answer += idx > 0 && s[idx] === s[idx - 1] ? '' : s[idx];
//   }
//   return answer;
// }

function solution(s) {
  // let answer = '';

  // for (const c of s) {
  // if (!answer.includes(c)) answer += c; // indexOf 를 사용해도 좋다
  // }
  // return answer;

  return [...s].reduce((result, c) =>
    !result.includes(c) ? result + c : result,
  );
}
console.log(solution('kkseeekksettt'));
