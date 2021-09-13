function solution(test) {
  let answer = 0;
  m = test.length; // 행의 개수(테스트 수)
  n = test[0].length; // 열의 길이(학생 수)

  // 첫 번째 학생 i, loop
  for (let i = 1; i <= n; i++) {
    // 두 번째 학생 j, loop
    for (let j = 1; j <= n; j++) {
      let cnt = 0; // i학생이 j학생보다 앞선 경우 counting

      // 테스트 loop
      for (let k = 0; k < m; k++) {
        let pi = 0; // 테스트 마다 i 학생 점수의 인덱스
        let pj = 0; // 테스트 마다 j 학생 점수의 인덱스

        // 테스트 안의 사람들 loop
        for (let s = 0; s < n; s++) {
          // 각 학생들의 인덱스 매칭
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        // i 학생이 j 학생보다 앞선 경우(여기서 학생 자신이 겹치는 경우도 제외됨) cnt++
        if (pi < pj) cnt++;
      }
      // i 학생이 j 학생보다 앞선 경우가 모든 테스트의 수와 같은 경우(모든 테스트에서 i 학생이 앞선 경우)
      if (cnt === m) {
        answer++;
        console.log({ i, j });
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
