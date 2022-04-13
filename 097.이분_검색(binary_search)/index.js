function solution(target, arr) {
  let answer = 0;
  let copiedArr = [...arr];

  copiedArr.sort((a, b) => a - b);
  const getMidNum = (start, end) => Math.round((end - start) / 2);
  let item = target;
  let midIndex = getMidNum(0, copiedArr.length - 1);
  let i = 0;
  while (i < 30) {
    if (item === copiedArr[midIndex]) {
      answer = midIndex;
      break;
    } else if (item < copiedArr[midIndex]) {
      copiedArr = copiedArr.slice(midIndex - (copiedArr.length - 1));
    } else {
      copiedArr = copiedArr.slice(midIndex);
    }
    midIndex = getMidNum(0, copiedArr.length - 1);

    i++;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
