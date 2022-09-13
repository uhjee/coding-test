function solution(s) {
  var answer = [0, 0];

  // 이진법 변환 재귀함수
  const binary = (num, result = '') => {
    if (num / 2 < 1) {
      return (result += num % 2);
    } else {
      result = binary(Math.floor(num / 2), result); // 재귀함수 호출
      result += num % 2;
      return result;
    }
  };
  // 전체 흐름 반복 재귀함수
  const dfs = (s) => {
    if (String(s) === '1') return;
    else {
      answer[0]++;
      let strWithout0 = '';
      [...s].forEach((c) => {
        if (c === '0') {
          answer[1]++;
        } else {
          strWithout0 += c;
        }
      });
      // 이진수 변환
      const result = binary(Number(strWithout0.length));
      dfs(result);
    }
  };
  dfs(s);
  return answer;
}


// 프로그래머스 고수 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++; // 회사 카운팅
    answer[1] += (s.match(/0/g) || []).length; // 0의 개수 카운팅
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}

console.log(solution('0111010'));
