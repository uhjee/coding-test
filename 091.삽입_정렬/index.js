function solution(arr) {
  let answer = [...arr];
  for (let i = 1; i < answer.length; i++) {
    let nextIndex = i;
    for (let j = i - 1; j > -1; j--) {
      if (answer[j] > answer[i]) {
        nextIndex = j;
      }
    }
    const [iValue] = answer.splice(i, 1);
    answer.splice(nextIndex, 0, iValue);
    console.log(answer);
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
