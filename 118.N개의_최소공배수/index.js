function solution(arr) {
    var answer = 0;
    arr.sort((a, b) => b - a);
    const [maxNum, ...rest] = arr;
    let cnt = 1;
    answer = maxNum;
    while (cnt < 1000000) {
      if (rest.every((i) => answer % i === 0)) {
        return answer;
      }
      cnt++;
      answer = maxNum * cnt;
    }
    return maxNum;
  }


  
console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
console.log(solution([3, 4, 9, 16])); // 144
