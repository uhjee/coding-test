// 정규 표현식 사용
function solution(s, t) {
  // 정규표현식 내에서 js 변수를 사용하기 위해서는 new RegExp 객체로 생성해야한다.
  // 정규식 리터럴 / /gi 사용 x
  const regex = new RegExp(t, 'g');
  // mathch 메소드는 String prototype의 메소드
  return s.match(regex).length;
}

// 반복문 돌며 한 글자씩 비교
function solution(s, t) {
  let count = 0;
  for (const c of s) {
    if (c === t) count++;
  }
  return count;
}
// 해당 문자를 구분자로 사용해 배열의 길이 -1로 계산
function solution(s, t) {
  return s.split(t).length - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
