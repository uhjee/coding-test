// 정규 표현식 사용
// function solution(s){
//   return s.replace(/A/g, '#')
// }

// 반복문 돌며 한 문자씩 비교하기
function solution(s){
  let answer = '';
  for(const c of s){
    answer += c === 'A' ? '#' : c;
  }
  return answer;
}

let str="BANANAAA";
console.log(solution(str));

