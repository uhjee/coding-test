function solution(need, plan) {
  const queue = [...need];
  for (let i = 0; i < plan.length; i++) {
    const cur = plan[i];
    if (queue[0] === cur) queue.shift();
  }
  return queue.length === 0 ? 'YES' : 'NO';
}

const solution1 = (need, plan) => {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    if (queue.includes(x)) {
      // queue 에는 있으나, 맨 앞이 아닌 경우
      if (x !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) answer = 'NO';
  return answer;
};

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution1(a, b));
