function solution(songs, capacity) {
  let answer = 0;
  const arr = [...capacity];

  arr.sort((a, b) => a - b);

  let lt = arr[arr.length - 1];
  let rt = arr.reduce((sum, cur) => (sum += cur)) - lt;
  // console.log({ lt, rt });

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(mid, arr) <= songs) {
      rt = mid - 1;
      answer = mid;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
const count = (mid, arr) => {
  const answerArr = [];
  let sum = 0;
  arr.forEach(i => {
    if (sum + i > mid) {
      answerArr.push(sum);
      sum = i;
    } else {
      sum += i;
    }
  });
  if (sum > 0) {
    answerArr.push(sum);
  }
  return answerArr.length;
};

function count1(songs, capacity) {
  let cnt = 1; // dvd 기본 1장은 있다는 것으로 초기화
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution1(m, songs) {
  let answer;
  let lt = Math.max(...songs); // 가장 큰 값 할당
  let rt = songs.reduce((sum, cur) => (sum += cur)) - lt;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count1(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
