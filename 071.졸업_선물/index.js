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
// 선생님 풀이
function solution1(m, product) {
  let answer = 0;
  let n = product.length;

  // 1. 총 합으로 오름차순 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

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
