// 01. Arrays.shift() 사용: 시간 복잡도:O(N²)
const solution1 = (cards1, cards2, goal) => {
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

// 02. Queue 구현 - 시간복잡도 O(N)

class Queue {
  items = [];
  front = 0;
  rear = 0;

  constructor(arr) {
    this.items = arr;
    this.rear = arr.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const solution = (cards1, cards2, goal) => {
  let result = 'Yes';
  const cards1Q = new Queue(cards1);
  const cards2Q = new Queue(cards2);
  const goalQ = new Queue(goal);

  while (!goalQ.isEmpty()) {
    if (goalQ.first() === cards1Q.first()) {
      cards1Q.pop();
    } else if (goalQ.first() === cards2Q.first()) {
      cards2Q.pop();
    } else {
      result = 'No';
      break;
    }
    goalQ.pop();
  }

  return result;
};

// Test
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
