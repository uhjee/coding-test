const solution = (progresses, speeds) => {
  const answer = [];
  const n = progresses.length;
  // 각 작업의 배포 가능일 계산
  const dayLeft = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  console.log(dayLeft);

  let count = 0; // 배포될 작업의 수
  let maxDay = dayLeft[0]; // 현재 배포될 작업 중 가장 빠르게 배포 되어야 하는 일수

  for (let i = 0; i < n; i++) {
    // 현재 작업이 가장 빠르게 배포되어야 하는 요소보다 빠른 경우 => 같이 배포될 수 있음
    if (dayLeft[i] <= maxDay) {
      count++;
      // 현재 작업이 가장 빨리 배포되어야 하는 요소보다 늦은 경우 => 같이 배포될 수 없음
    } else {
      answer.push(count);
      count = 1;
      maxDay = dayLeft[i];
    }
  }
  answer.push(count);
  return answer;
};

// 예전에 내가 푼거
function solution2(progresses, speeds) {
  let requiredDays = progresses.map((prog, index) => {
    // ceil 나머지 버리기
    return Math.ceil((100 - prog) / speeds[index]);
  });
  // index 0에 숫자를 넣어두지 않으면, += 연산자 때문에 NaN 발생
  let answer = [0];
  let maxDay = requiredDays[0];
  for (let i = 0, j = 0; i < requiredDays.length; i++) {
    if (requiredDays[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = requiredDays[i];
      answer[++j] = 1;
    }
  }
  console.log(answer);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
