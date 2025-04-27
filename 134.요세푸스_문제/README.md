# 요세푸스 문제 - 큐

## 문제 설명

N명의 사람이 원 형태로 서 있습니다.
각 사람은 1부터 N까지 번호표를 갖고 있습니다.
그리고 임의의 숫자 `k`가 주어졌을 때 다음과 같이 사람을 없앱니다.

- 1번 번호표를 가진 사람을 기준으로 k번째 사람을 없앱니다.
- 없앤 사람 다음 사람을 기준으로 하고, 다시 k번째 사람을 없앱니다.

n과 k가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution() 함수를 구현해주세요.

### 제약조건

- `n`과 `k`는 1 이상 1000이하의 자연수입니다.

## 입출력 예

| N   | K   | return |
| --- | --- | ------ |
| 5   | 2   | 3      |

---

## 풀이

```js
// Queue 구현
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
```

- n은 n의 길이
- k는 k의 수
- Queue의 push, pop 연산은 모두 O(1)의 시간 복잡도
