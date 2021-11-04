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

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
