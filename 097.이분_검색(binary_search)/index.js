function solution(target, arr) {
  let answer = 0;
  let copiedArr = [...arr];

  copiedArr.sort((a, b) => a - b);
  let i = 0; // 혹시 모를 infinite loop을 위해 제한

  // searching boundary
  let lt = 0;
  let rt = copiedArr.length - 1;

  while (i < 30) {
    midIndex = Math.round((lt + rt) / 2);

    if (target === copiedArr[midIndex]) {
      answer = midIndex;
      break;
    } else if (target < copiedArr[midIndex]) {
      rt = midIndex - 1;
    } else {
      lt = midIndex;
    }
    console.log({ midIndex });

    i++;
  }

  return answer + 1;
}

const solution1 = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b); // 이분 검색은 선 정렬 필수

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
};

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution1(32, arr));
