# 졸업 선물(완전탐색)

선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.

### 입력설명

- 첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다. 두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 - 상품의 가격과 배송비가 입력됩니다. 상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

### 출력설명

- 첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

▣ 입력예제 1

- 예산(m)
  - 28
- product
  ```js
  const product = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
    [10, 8],
  ];
  ```

### 출력예제 1

- 4

### 출력설명

- (2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.

---

## 풀이

```js
function solution(m, product) {
  let answer = 0;
  let total = 0;
  // 1. 가장 비싼 제품 탐색 (반값할인하기 위해)
  const maxPrice = Math.max(...product.map(i => i[0]));
  const maxProducts = product.filter(i => i[0] === maxPrice);
  // 가장 비싼 가격의 상품이 2개 이상인 경우, 배송료가 저렴한 상품을 선택
  let maxProduct;
  if (maxProducts.length > 1) {
    maxProduct = maxProducts.filter(
      i => i[1] === Math.min(...maxProducts.map(i => i[1])),
    )[0];
  } else {
    maxProduct = maxProducts[0];
  }

  // 2. 상품가격과 배송비 합 및 오름차순 정렬
  const sums = product
    .map(i => {
      if (i[0] === maxProduct[0] && i[1] === maxProduct[1]) {
        return i[0] / 2 + i[1];
      }
      return i[0] + i[1];
    })
    .sort((a, b) => {
      return a - b;
    });

  // 3. 예산을 넘기지 않을 때까지 더하기(넘으면 break)
  for (const s of sums) {
    if (total + s > m) {
      break;
    } else {
      total += s;
      answer += 1;
    }
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
  [10, 8],
];
console.log(solution(28, arr));
```

- 대부분 람다함수로 풀이
- 아래와 같은 흐름으로 풀이
  1. 가장 높은 상품가격의 상품에 반값 할인을 하기 위해 가장 높은 가격을 가진 상품 탐색
  2. 반복문에서 상품가격과 배송비를 합하며, 오름차순으로 정렬
  3. 작은 값부터 예산을 초과하지 않는 선까지 더한다.
- 하지만, 가장 높은 상품 가격을 할인하는 것이 아니다.
- 모든 경우의 수를 다 따져야 한다...

- 시간 복잡도 O(n^2)

## 선생님 풀이

```js
function solution1(m, product) {
  let answer = 0;
  let n = product.length;

  // 1. 총 합으로 오름차순 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));


  // 할인 받는 상품에 대한 반복문
  for (let i = 0; i < n; i += 1) {
    // 할인 받은 상품 사기
    let money = m - (product[i][0] / 2 + product[i][1]); // 예산에서 삭감
    let cnt = 1;

    // 나머지 상품 구매
    for (let j = 0; j < n; j += 1) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      // 이미 할인 받아 구매받은 상품은 제외하기 &&  구매했을 때, 예산보다 작을 경우
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1]; // 예산에서 삭감
        cnt += 1;
      }
    }
    // cnt 가 가장 큰 값으로 answer 세팅
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
  [10, 8],
];
console.log(solution1(28, arr));
```

- 할인받는 상품은 모든 경우를 다 따져야 한다.(완전 탐색)
  1. 총합 오름차순 정렬
  2. 할인받는 상품 - 반복문
  3. 할인받는 상품을 제외한 것들 - 반복문
      - 예산을 초과하기 전까지 카운팅
  4. 가장 큰 cnt를 갖는 값 반환

- 시간복잡도 O(n^2)