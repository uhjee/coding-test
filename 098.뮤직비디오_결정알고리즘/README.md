# 이분 검색 (binary search)

지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지 되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기 로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

### 입력설명

- 첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.

### 출력설명

- 첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.

### 입력예제 1

- 9 3
- 123456789

### 출력예제 1

- 17
- 설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.

---

## 풀이

```js
function solution(songs, capacity) {
  let answer = 0;
  const arr = [...capacity];

  arr.sort((a, b) => a - b);

  let lt = arr[arr.length - 1];
  let rt = arr.reduce((sum, cur) => (sum += cur)) - lt;
  // console.log({ lt, rt });

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(mid, arr) <= songs) {
      rt = mid - 1;
      answer = mid;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
const count = (mid, arr) => {
  const answerArr = [];
  let sum = 0;
  arr.forEach(i => {
    if (sum + i > mid) {
      answerArr.push(sum);
      sum = i;
    } else {
      sum += i;
    }
  });
  if (sum > 0) {
    answerArr.push(sum);
  }
  return answerArr.length;
};
```

- 이분 검색 사용(mid)
- 초기값
  - lt: 가장 큰 값(결과의 최솟값)'
  - rt: 나머지 모두 더한 값
  - mid: (lt + rt) /2
- count 함수
  - mid를 초과하지 않도록 arr를 더한 값의 뭉텅이 갯수
- count <= capacity 라면,
  - 정답이 될 가능성 존재
  - rt = mid - 1 (범위 좁히기)
- count > capacity 라면,
  - 정담될 가능성 존재 X
  - lt = mid + 1 (범위 좁히기)

### 선생님 풀이

```js
function count1(songs, capacity) {
  let cnt = 1; // dvd 기본 1장은 있다는 것으로 초기화
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution1(m, songs) {
  let answer;
  let lt = Math.max(...songs); // 가장 큰 값 할당
  let rt = songs.reduce((sum, cur) => (sum += cur)) - lt;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count1(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
```
