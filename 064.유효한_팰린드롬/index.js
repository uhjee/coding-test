function solution(s) {
  let answer = 'YES';
  const newS = s.match(/[a-zA-Z]/gi).join('').toUpperCase();

  for (let i = 0; i < Math.floor(newS.length / 2); i++) {
    if (newS[i] !== newS[newS.length - 1 - i]) {
      return 'NO';
    }
  }
  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
