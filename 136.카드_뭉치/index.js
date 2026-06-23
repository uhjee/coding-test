const solution = (cards1, cards2, goal) => {
  let result = 'YES';

  let cards1Cp = [...cards1];
  let cards2Cp = [...cards2];

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1Cp[0]) {
      cards1Cp.shift();
    } else if (goal[i] === cards2Cp[0]) {
      cards2Cp.shift();
    } else {
      result = 'No';
      break;
    }
    console.log(cards1Cp, cards2Cp);
  }
  return result;
};

const param1 = [
  ['i', 'drink', 'water'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water'],
];

const param2 = [
  ['i', 'water', 'drink'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water'],
];


console.log(solution(param1[0], param1[1], param1[2]));
console.log(solution(param2[0], param2[1], param2[2]));
