function solution(str, ch) {
  return [...str]
    .map((item, index) => {
      if (item === ch) return 0;
      for (let i = 1; i < str.length; i++) {
        if (str[index - i] === ch || str[index + i] === ch) {
          return i;
        }
      }
    })
    .join('');
}

const str = 'teachermode';
const ch = 'e';

console.log(solution(str, ch));
