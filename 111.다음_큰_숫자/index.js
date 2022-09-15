
/**
 * 이진수 변환 함수 구현
 */
// function solution(n) {
//   var answer = 0;
//   const binary = (num, result = '') => {
//     if (num / 2 < 1) {
//       return num % 2;
//     } else {
//       result += binary(Math.floor(num / 2), result);
//       result += num % 2;
//       return result;
//     }
//   };

//   const oneCount = [...binary(n).toString()].filter((i) => i === '1').length;

//   for (let i = n + 1; i < 1000000; i++) {
//     const binaryI = binary(i);
//     const iOneCount = [...binaryI].filter((i) => i === '1').length;
//     if (oneCount === iOneCount) {
//       answer = i;
//       break;
//     }
//   }
//   return answer;
// }


/**
 * toString 사용해 진수 변환
 */
function solution(n) {
  var answer = 0;

  const oneCount = [...n.toString(2)].filter((i) => i === '1').length;

  for (let i = n + 1; i < 1000000; i++) {
    const binaryI = i.toString(2);
    const iOneCount = [...binaryI].filter((i) => i === '1').length;
    if (oneCount === iOneCount) {
      answer = i;
      break;
    }
  }
  return answer;
}

console.log(solution(78)); //83