function solution(n, words) {
  var answer = [0, 0];
  const stack = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      stack.includes(words[i])
    ) {
      answer = [(i % n) + 1, Math.floor(i / n) + 1];
      break;
    } else {
      stack.push(words[i]);
    }
  }
  return answer;
}

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ]),
); // [3, 3]