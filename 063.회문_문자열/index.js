function solution(s) {
  let fromFirst = '';
  let fromLast = '';
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    fromFirst += s[i];
    fromLast += s[s.length - 1 - i];
  }
  console.log({ fromFirst, fromLast });
  return fromFirst.toUpperCase() === fromLast.toUpperCase() ? 'YES' : 'NO';
}

const solution1 = s => {
  let answer = 'YES';
  s = s.toUpperCase();
  let len = s.lnegth;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return 'NO';
  }
  return answer;
};

// reverse() 사용
const solution2 = s => {
  s = s.toUpperCase();
  return s !== [...s].reverse().join('') ? 'NO' : 'YES';
};

let str = 'goo4ooG';
console.log(solution2(str));
