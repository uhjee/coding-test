// function solution(arr) {
//   // 총 합계
//   const sum = arr.reduce((sum, item) => sum + item, 0);

//   // 순회하며, 제외할 2가지 숫자의 조합 구하기
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (sum - (arr[i] + arr[j]) === 100) {
//         // 해당하는 두 수를 제외한 배열 리턴
//         return arr.filter(item => item !== arr[i] && item !== arr[j]);
//       }
//     }
//   }
//   return [];
// }

function solution(arr) {
  let answer = arr;
  const sum = arr.reduce((sum, item) => sum + item, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // ! 뒷 index를 먼저 지운다.
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
