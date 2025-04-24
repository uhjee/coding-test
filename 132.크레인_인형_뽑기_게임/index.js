// 스택 활용 2번
const solution = (board, moves) => {
  let result = 0;
  const stack = [];
  // 00. board를 row, col 변환하여 재구성
  const lanes = board.reduce((lanes, row) => {
    return row.map((_, colIdx) => [...(lanes[colIdx] || []), row[colIdx]]);
  }, []);
  // 01. 각 row의 인덱스 순서 역순 (Array.push, pop을 활용하기 위해서 )
  const reversed = lanes.map((row) => row.filter((i) => i !== 0).reverse());
  for (const m of moves) {
    const picked = reversed[m - 1].pop();
    if (picked == stack[stack.length - 1]) {
      stack.pop();
      result += 2;
    } else {
      stack.push(picked);
    }
  }
  return result;
};

// 스택 활용 1번
const solution1 = (board, moves) => {
  let result = 0;
  const stack = [];
  moves.forEach((m) => {
    for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
      if (board[rowIdx][m - 1] !== 0) {
        if (stack[stack.length - 1] === board[rowIdx][m - 1]) {
          stack.pop();
          result += 2;
        } else {
          stack.push(board[rowIdx][m - 1]);
        }
        board[rowIdx][m - 1] = 0;
        break;
      }
    }
  });

  return result;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
);
