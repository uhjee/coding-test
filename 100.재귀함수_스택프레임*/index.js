const counter = (i, last) => {
  if (i > last) return;
  let j = i;
  console.log(j++);
  counter(j, last);
};

const solution = n => {
  counter(1, n);
};

const n = 3;
console.log(solution(n));
