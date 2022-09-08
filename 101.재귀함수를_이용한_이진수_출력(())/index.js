function solution(n) {
  const notation = 2; // 2진법: n진법이면 숫자만 바꾸면 됨

  const DFS = (L) => {
    const devided = Math.floor(L / notation); // 소수점 이하는 버린 나눈 몫
    const remainder = L % notation; // 나머지 값
    // console.log(L, devided, remainder);
    if (devided === 0) {
      return remainder;
    } else {
      return `${DFS(devided)}${remainder}`;
    }
  };

  return Number(DFS(n));
}

function solution1(n) {
  let answer = '';
  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  };
  DFS(n);

  return answer;
}

console.log(solution1(11));
