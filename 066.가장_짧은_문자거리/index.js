function solution(str, ch) {
  return [...str]
    .map((item, index) => {
      if (item === ch) return 0;
      for (let i = 1; i < str.length; i++) {
        if (str[index - i] === ch || str[index + i] === ch) {
          return i;
        }
      }
    })
    .join('');
}

function solution1(str, ch) {
  let leftCnt = 1000; // 왼쪽으로부터 ch와 떨어진 거리
  let rightCnt = 1000; // 오른쪽으로부터 ch와 떨어진 거리

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      leftCnt = 0;
    } else {
      leftCnt += 1;
    }
    arr.push(leftCnt);
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ch) {
      rightCnt = 0;
    } else {
      rightCnt += 1;
    }
    arr[i] = Math.min(arr[i], rightCnt);
  }
  ``;
  return arr.join('');
}

const str = 'teachermode';
const ch = 'e';

console.log(solution1(str, ch));
