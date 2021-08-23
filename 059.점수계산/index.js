function solution(arr) {
  let answer = 0;
  let count = 0;
  for (const i of arr) {
    if (i === 1) {
      count += 1;
    } else {
      count = 0;
    }
    answer += count;
    // console.log({ answer, count });
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

// PS C:\personal\coding-test> node .\059.점수계산\
// { answer: 1, count: 1 }
// { answer: 1, count: 0 }
// { answer: 2, count: 1 }
// { answer: 4, count: 2 }
// { answer: 7, count: 3 }
// { answer: 7, count: 0 }
// { answer: 7, count: 0 }
// { answer: 8, count: 1 }
// { answer: 10, count: 2 }
// { answer: 10, count: 0 }
// 10
