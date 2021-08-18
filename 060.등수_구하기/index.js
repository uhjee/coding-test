// function solution(arr) {
//   const raw = [...arr];
//   const sorted = arr.sort((a, b) => b - a);
//   return raw.map(i => sorted.findIndex(si => si === i) + 1);
// }
function solution(arr) {
  const answer = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// let arr = [87, 89, 92, 100, 76];
let arr = [87, 89, 100, 100, 76];
console.log(solution(arr));
