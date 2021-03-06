# Least Recently Used(카카오 캐시 문제 변형)

캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 CPU가 처리할 작업 을 저장해 놓았다가 필요할 바로 사용해서 처리속도를 높이는 장치이다. 워낙 비싸고 용량이 작아 효율적으로 사용해야 한다. 철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU 알고리즘을 따 른다. LRU 알고리즘은 **Least Recently Used** 의 약자로 직역하자면 가장 최근에 사용되지 않 은 것 정도의 의미를 가지고 있습니다. 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다.

만약 캐시의 사이즈가 5이고 작업이 2 3 1 6 7 순으로 저장되어 있다면, (맨 앞이 가장 최근에 쓰인 작업이고, 맨 뒤는 가장 오랫동안 쓰이지 않은 작업이다.)

1. Cache Miss : 해야할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작 업을 CPU가 사용한다면 Cache miss가 되고 모든 작업이 뒤로 밀리고 5번작업은 캐시의 맨
   앞에위치한다. 5 2 3 1 6 (7번작업은캐시에서삭제된다.)
1. Cache Hit : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용
   한다면 Cache Hit가 되고, 63번 앞에 있는 5, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으
   로 위치하게 된다. 5 2 3 1 6 ---> 3 5 2 1 6
   캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면 N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.

### 입력설명

- 첫 번째 줄에 캐시의 크기인 S(3<=S<=10)와 작업의 개수 N(5<=N<=1,000)이 입력된다. 두 번째 줄에 N개의 작업번호가 처리순으로 주어진다. 작업번호는 1 ~100 이다.

### 출력설명

- 마지막 작업 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례로 출력합니다.

### 입력예제 1

- 5, 9
- 123262357

### 출력예제 1

- 75326

---

## 풀이

```js
function solution(size, arr) {
  let answer = [];
  arr.forEach(i => {
    const cIndex = answer.findIndex(c => i === c);
    if (cIndex > -1) {
      const [value] = answer.splice(cIndex, 1);
      answer.unshift(value);
    } else {
      answer.unshift(i);
    }
    if (answer.length > size) answer.pop();
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
```

- 작업 배열을 loop 돌며 기존 캐시 배열에 현 작업 값이 있다면, 해당 자리 삭제 후, 해당 값을 가장 앞으로 삽입
- 캐시 배열이 길이가 주어진 size 보다 클 경우 pop() 호출하며 사이즈 유지
- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
const solution1 = (size, arr) => {
  // 배열 생성
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach(x => {
    // 히트 여부 판단할 index
    let pos = -1;
    for (let i = 0; i < size; i += 1) {
      if (x === answer[i]) pos = i;
      break;
    }
    // 미스
    if (pos === -1) {
      // 인덱스 0을 제외하고 한 칸씩 뒤로 밀기
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // 히트
      // 히트가 발생한 인덱스부터 앞의 요소들을 한 칸씩 뒤로 밀기
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
};
```

- 구현력을 키우기 위해 Arrays.prototype.unshift() 를 사용하지 않고, 직접 한 칸씩 뒤로 밀어주는 로직 실행
- unshift() 또한 내부적으로 loop문이 도는 것으로 알고 있음(인덱스 하나씩 밀어내는...)
- 시간 복잡도 O(n^3)
