function solution(s) {
  let answer = '';
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (i > 0 && s[i - 1] === s[i]) {
      count += 1;
      if (i === s.length - 1) {
        answer += count;
      }
    } else {
      answer += count > 1 ? `${count}${ch}` : ch;
      count = 1;
    }
  }
  return answer;
}

function solution1(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSEE';
console.log(solution1(str));
