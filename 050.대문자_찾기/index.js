// 정규식 사용
// function solution(s) {
//   const regex = new RegExp(`[A-Z]{1}`, 'g');
//   return s.match(regex);
// }

// String.prototype.toUpperCase() 사용
// function solution(s) {
//   return [...s].filter(c => c === c.toUpperCase()).length;
// }

// 아스키코드 사용
// 대문자 65 - 90
// 소문자 97 - 122
function solution(s) {
  return [...s].filter(c => c.charCodeAt() > 64 && c.charCodeAt() < 91).length;
}

let str = 'KoreaTimeGGood';
console.log(solution(str));
