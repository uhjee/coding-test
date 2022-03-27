function solution(arr) {
  let answer = [...arr];
  for (let i = 1; i < answer.length; i++) {
    let nextIndex = i;
    // j는 i-1 부터 0까지 전부 돈다.
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

const solution1 = arr => {
  let answer = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let tmp = answer[i];
    let j = null;
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > tmp) answer[j + 1] = answer[j];
      else break;
    }
    answer[j + 1] = tmp;
  }
  return answer;
};

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution1(arr));
