function solution(need, plan) {
  const queue = [...need];
  for (let i = 0; i < plan.length; i++) {
    const cur = plan[i];
    if (queue[0] === cur) queue.shift();
  }
  return queue.length === 0 ? 'YES' : 'NO';
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
