// ? 풀이 1. 내 멋대로 풀이 - 2중 반복문으로 인해 시간복잡도 O(n^2)
// function solution(s, t) {
//   let answer = 0;
//   const map = new Map();
//   const arr = [...s];

//   for (let i = 0; i < arr.length; i++) {
//     [...t].forEach(c => map.set(c, 0));
//     for (let j = i; j < map.size + i; j++) {
//       if (map.has(arr[j])) map.set(arr[j], map.get(arr[j]) + 1);
//     }
//     // map 의 value가 모두 1개인지 여부를 반환하는 조건문
//     if ([...map.values()].reduce((result, cur) => result == true && cur == 1)) {
//       answer++;
//     }
//   }
//   return answer;
// }

// ? 풀이 2. 투 포인트, 슬라이딩 윈도우, 해쉬 사용 (선생님 풀이) - 시간 복잡도 O(n)

// map 2개 비교 (사이즈, key, value)
const compareMap = (map1, map2) => {
  console.log({ map1, map2 });
  if (map1.size !== map2.size) return false;

  for (const [key, val] of map2) {
    // console.log({ key, val });
    if (!map1.has(key) || map1.get(key) !== val) return false; // key, value 비교
  }
  return true;
};
const solution = (s, t) => {
  let answer = 0;

  let tH = new Map(); // 기준 문자열 Hash
  let sH = new Map(); // 비교하려는 sliding window 문자열 Hash
  for (let x of t) {
    // 있으면 count up;
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    // 없으면 set
    else tH.set(x, 1);
  }
  //  기준 문자열 hash 초기 세팅
  let tLen = t.length - 1;
  for (let i = 0; i < tLen; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  // 투 포인트
  let lt = 0;
  for (let rt = tLen; rt < s.length; rt++) {
    // 다음 인덱스의 rt 값 sH에 세팅
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    // sH, tH 해쉬 비교 후 카운팅
    if (compareMap(sH, tH)) answer++;

    // console.log({ answer });
    // lt 인덱스의 문자열을 해쉬에서 카운팅 -1
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]); // 값이 0이라면 key 삭제

    lt++;
  }
  return answer;
};

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
