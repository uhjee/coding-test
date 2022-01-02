function solution(s, t) {
  let answer = 0;
  const map = new Map();
  const arr = [...s];

  for (let i = 0; i < arr.length; i++) {
    [...t].forEach(c => map.set(c, 0));
    for (let j = i; j < map.size + i; j++) {
      if (map.has(arr[j])) map.set(arr[j], map.get(arr[j]) + 1);
    }
    // map 의 value가 모두 1개인지 여부를 반환하는 조건문
    if ([...map.values()].reduce((result, cur) => result == true && cur == 1)) {
      answer++;
    }
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
