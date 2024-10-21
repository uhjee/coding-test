// 00. 두 개 뽑아서 더하기

const solution = numbers => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const num1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (!result.includes(numbers[i] + numbers[j])) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
};

// console.log(solution([2, 1, 3, 4, 1]));
// console.log(solution([5, 0, 2, 7]));

console.log([1, 2, 3, 4, 5].length % 2);

// 01. 모의고사
const solution2 = answers => {
  const rightCnt = (answer, pattern) => {
    let cnt = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === pattern[i % pattern.length]) {
        cnt++;
      }
    }
    return cnt;
  };
  const student1 = rightCnt(answers, [1, 2, 3, 4, 5]);
  const student2 = rightCnt(answers, [2, 1, 2, 3, 2, 4, 2, 5]);
  const student3 = rightCnt(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  const maxScorers = [student1, student2, student3].reduce((acc, cur, idx) => {
    if (acc.length > 0 && acc[0].score < cur) {
      return [{ score: cur, idx }];
    } else if (acc.length > 0 && acc[0].score === cur) {
      acc.push({ score: cur, idx });
    } else if (acc.length === 0) {
      return [{ score: cur, idx }];
    }
    return acc;
  }, []);
  return maxScorers.map(v => v.idx + 1).sort((a, b) => a - b);
};

const solution3 = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],  
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [];
  for (pattern of patterns) { 
    scores.push(answers.filter((a, i) => a === pattern[i % pattern.length]).length);
  }
  const maxScore = Math.max(...scores);

  const result = [];
  for (const [index, score] of scores.entries()) { 
    if(score === maxScore) {
      result.push(index + 1);
    }
  }
  return result;
};

console.log(solution3([1, 2, 3, 4, 5]));
console.log(solution3([1, 3, 2, 4, 2]));
