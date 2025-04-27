// Queue 구현 - 연결 리스트처럼 구현
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.head) {
      return null;
    }

    const removeNode = this.head;
    this.head = removeNode.next;

    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return removeNode.data;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const solution = (n, k) => {
  const queue = new Queue();
  for (let i = 1; i < n + 1; i++) {
    queue.push(i);
  }

  while (queue.size > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }
  return queue.pop();
};

console.log(solution(5, 2));
