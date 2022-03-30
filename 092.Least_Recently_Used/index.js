function solution(size, arr) {
  let answer = [];
  arr.forEach(i => {
    const cIndex = answer.findIndex(c => i === c);
    if (cIndex > -1) {
      // 히트
      const [value] = answer.splice(cIndex, 1);
      answer.unshift(value);
    } else {
      // 미스
      answer.unshift(i);
    }
    if (answer.length > size) answer.pop();
  });
  return answer;
}

const solution1 = (size, arr) => {
  // 배열 생성
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach(x => {
    // 히트 여부 판단할 index
    let pos = -1;
    for (let i = 0; i < size; i += 1) {
      if (x === answer[i]) pos = i;
      break;
    }
    // 미스
    if (pos === -1) {
      // 인덱스 0을 제외하고 한 칸씩 뒤로 밀기
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // 히트
      // 히트가 발생한 인덱스부터 앞의 요소들을 한 칸씩 뒤로 밀기
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
};

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution1(5, arr));
