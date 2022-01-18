// function solution(s) {
//   let answer;
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     const numberC = parseInt(c, 10);

//     if (Number.isNaN(numberC)) {
//       // console.log(`${c} is operation`);
//       const lastNum = stack.pop();
//       const prevNum = stack.pop();
//       let operationResult;
//       switch (c) {
//         case '+':
//           operationResult = prevNum + lastNum;
//           break;
//         case '-':
//           operationResult = prevNum - lastNum;
//           break;
//         case '*':
//           operationResult = prevNum * lastNum;
//           break;
//         case '/':
//           operationResult = prevNum / lastNum;
//           break;

//         default:
//           throw new Error('사칙연산이 아닙니다.');
//       }
//       // console.log({ operationResult });
//       if (!Number.isNaN(operationResult)) stack.push(operationResult);
//     } else {
//       // console.log(`${numberC} is number`);
//       stack.push(numberC);
//     }
//     // console.log(stack);
//     if (i === s.length - 1) answer = stack.pop();
//   }
//   return answer;
// }

function solution1(s) {
  let answer;
  const stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack.pop();
  return answer;
}

let str = '352+*9-';
console.log(solution1(str));
