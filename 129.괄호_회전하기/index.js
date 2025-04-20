const solution = (s) => {
  let rightCnt = 0;
  let converted = [...s];

  const isRightArr = (arr) => {
    const stack = [];

    for (const c of arr) {
      if (['[', '{', '('].includes(c)) {
        stack.push(c);
      } else {
        const top = stack.pop();
        if (
          (c === ']' && top !== '[') ||
          (c === '}' && top !== '{') ||
          (c === ')' && top !== '(')
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

  for (let i = 0; i < s.length - 1; i += 1) {
    if (isRightArr(converted)) {
      rightCnt++;
    }

    // 회전
    const first = converted.shift();
    converted.push(first);
  }
  return rightCnt;
};

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
