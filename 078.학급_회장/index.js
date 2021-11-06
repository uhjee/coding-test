function solution(s) {
  const obj = [...s].reduce((obj, cur) => {
    if (obj[cur] === undefined) {
      obj[cur] = 0;
    } else {
      obj[cur]++;
    }
    return obj;
  }, {});
  return Object.entries(obj).reduce(
    (max, cur) => (max[1] > cur[1] ? max : cur),
    0,
  )[0];
}

// ! 선생님 코드 Map 사용
function solution1(s) {
  let answer;
  let m = new Map();
  let max = Number.MIN_SAFE_INTEGER;

  for (let i of s) {
    if (m.has(i)) m.set(i, m.get(i) + 1);
    else m.set(i, 0);
  }
  console.log(m);
  for (let [key, val] of m) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution1(str));
