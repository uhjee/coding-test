function solution(arr) {
  const answer = [];
  for (const item of arr) {
    const reverseNum = parseInt([...String(item)].reverse().join(''), 10);
    let count = 0;
    for (let i = 1; i < Math.sqrt(reverseNum); i++) {
      if (reverseNum % i === 0) count += 1;
      if (count > 1) {
        break;
      }
    }
    if (count === 1) {
      answer.push(reverseNum);
      count = 0;
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
