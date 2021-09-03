function solution(str) {
  return parseInt(str.replace(/[\D]/g, ''));
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
