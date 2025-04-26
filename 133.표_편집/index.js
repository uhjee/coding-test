// Linked List 처럼 연결되는 좌표값을 갖도록 풀이
const solution = (n, k, cmd) => {
  let p = k + 1;
  const up = Array.from({ length: n + 2 }, (_, i) => i - 1); // '위'의 좌표 배열 (최상단, 최하단에 가상공간 추가)
  const down = Array.from({ length: n + 1 }, (_, i) => i + 1); // '아래'의 좌표 배열 (최상단, 최하단에 가상공간 추가)
  const trashHistory = [];

  for (const cmdItem of cmd) {
    const [char, distance] = cmdItem.split(' ');
    if (char === 'Z') {
      const last = trashHistory.pop();
      // 복원
      down[up[last]] = last;
      up[down[last]] = last;
    } else if (char === 'U') {
      for (let d = 0; d < distance; d++) {
        p = up[p];
      }
    } else if (char === 'D') {
      for (let d = 0; d < distance; d++) {
        p = down[p];
      }
    } else if (char === 'C') {
      trashHistory.push(p);
      // 삭제: 위의 아래 좌표를 k의 아래 좌표로 / 아래의 위 좌표를 k의 위 좌표로 대체
      up[down[p]] = up[p];
      down[up[p]] = down[p];
      p = n < down[p] ? up[p] : down[p];
    }
  }
  const result = new Array(n).fill('O');
  trashHistory.forEach((trashP) => (result[trashP - 1] = 'X'));
  return result.join('');
};

const solution1 = (n, k, cmd) => {
  const result = new Array(n).fill('O');
  const trashHistory = [];
  const cmdArr = cmd.map((c) => {
    const item = c.split(' ');
    return [item[0], !!item[1] ? parseInt(item[1]) : null];
  });
  let p = k;

  const move = ([direction, distance]) => {
    let cnt = distance;
    const unit = direction === 'U' ? -1 : 1;
    while (cnt > 0) {
      p += unit;
      if (result[p] !== 'X') {
        cnt -= 1;
      }
    }
  };

  for (const item of cmdArr) {
    const char = item[0];
    if (char === 'Z') {
      const cIndex = trashHistory.pop();
      result[cIndex] = 'O';
    } else if (['D', 'U'].includes(char)) {
      move(item);
    } else if (char === 'C') {
      result[p] = 'X';
      trashHistory.push(p);
      if (p === n - 1) {
        move(['U', 1]);
      } else {
        move(['D', 1]);
      }
    }
  }
  return result.join('');
};

console.log(
  solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']),
); // "OOOOXOOO"
console.log(
  solution(8, 2, [
    'D 2',
    'C',
    'U 3',
    'C',
    'D 4',
    'C',
    'U 2',
    'Z',
    'Z',
    'U 1',
    'C',
  ]),
); // "OOXOOO"
