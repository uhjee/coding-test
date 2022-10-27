function solution(ingredient) {
  var answer = 0;
  const stack = [];
  for (const item of ingredient) {
    stack.push(item);
    console.log(stack);
    if (stack.length > 3) {
      if (
        stack[stack.length - 4] === 1 &&
        stack[stack.length - 3] === 2 &&
        stack[stack.length - 2] === 3 &&
        stack[stack.length - 1] === 1
      ) {
        answer++;
        stack.splice(stack.length - 4, 4);
      }
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
