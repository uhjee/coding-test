function solution(n, k, card) {
  let sums = [];

  for (let i = 0; i < n; i += 1) {
    const tempCard = [...card];
    const first = tempCard[i];
    tempCard.splice(i, 1);
    for (let j = 0; j < tempCard.length; j += 1) {
      const second = tempCard[j];
      tempCard.splice(j, 1);
      for (let k = 0; k < tempCard.length; k += 1) {
        const third = tempCard[k];
        sums.push(first + second + third);
      }
    }
  }
  // sotring + unique(중복 제거)
  const sortedSums = [...new Set(sums)].sort((a, b) => b - a);
  return sortedSums[k - 1];
}

function solution1(n, k, card) {
  let answer;
  let temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let arr = Array.from(temp).sort((a, b) => b - a);
  return arr[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution1(10, 3, arr));
