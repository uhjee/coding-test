function solution(str1, str2) {
  let answer = 'NO';
  // map으로 변환
  const getCharCount = str => {
    const m = new Map();
    for (let c of str) {
      if (!m.has(c)) m.set(c, 0);
      else m.set(c, m.get(c) + 1);
    }
    return m;
  };

  const m1 = getCharCount(str1);
  const m2 = getCharCount(str2);

  // m1, m2 비교
  for (let [key, value] of m1) {
    if (value !== m2.get(key)) {
      break;
    }
    answer = 'YES';
  }
  return answer;
}
// let a = 'AbaAeCe';
// let b = 'baeeACA';

let a = 'abaCC';
let b = 'Caaab';
console.log(solution(a, b));
