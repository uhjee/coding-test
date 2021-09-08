function solution(arr) {
  const answer = [];
  for (const item of arr) {
    const reverseNum = parseInt([...String(item)].reverse().join(''), 10);
    let count = 0;
    for (let i = 1; i < Math.sqrt(reverseNum); i++) {
      if (reverseNum % i === 0) count += 1;
      if (count > 1) {
        break;
      }
    }
    if (count === 1) {
      answer.push(reverseNum);
      count = 0;
    }
  }
  return answer;
}

/**
 * 소수 판별 함수
 *
 * @param {Number}
 * @returns {Boolean}
 */
const isPrime = num => {
  if (num === 1) return false; // 1은 무조건 소수가 아니기 때문에 아웃
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false; // 2~제곱근 까지 하나라도 나눠서 떨어지면, 소수가 아니다.
  }
  return true;
};

function solution1(arr) {
  const answer = [];
  for (let x of arr) {
    let reverseNum = 0;
    let temp = x;
    // 숫자로 뒤집기
    while (temp !== 0) {
      let one = temp % 10;
      reverseNum = reverseNum * 10 + one;
      temp = Math.floor(temp / 10);
    }
    if (isPrime(reverseNum)) answer.push(reverseNum);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100, 202];
console.log(solution1(arr));
