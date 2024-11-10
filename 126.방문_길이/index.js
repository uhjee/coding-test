/**
 * 실패한 풀이

 */

function solution(dirs) {
  let answer = 0;

  const paths = [];
  let currCoord = [0, 0];
  for (const dir of dirs) {
    const path = {
      startX: currCoord[0],
      startY: currCoord[1],
      endX: currCoord[0],
      endY: currCoord[1],
    };
    switch (dir) {
      case 'U':
        path.endY++;
        break;
      case 'D':
        path.endY--;
        break;
      case 'R':
        path.endX++;
        break;
      case 'L':
        path.endX--;
        break;
      default:
        break;
    }
    if (Math.abs(path.endX) > 5 || Math.abs(path.endY) > 5) {
      continue;
    }
    currCoord = [path.endX, path.endY];
    paths.push(path);
  }
  const uniquePaths = paths.reduce((acc, cur) => {
    const isSame = acc.some(i => {
      return (
        i.startX === cur.startX &&
        i.startY === cur.startY &&
        i.endX === cur.endX &&
        i.endY === cur.endY
      );
    });
    const result = acc;
    if (!isSame) {
      result.push(cur);
    }
    return result;
  }, []);

  return uniquePaths.length;
}

/** 재풀이
 * - 경로의 역방향 고려
 * - 문자열 비교 시, 사전식 순서로 비교
 * - Set 자료구조 사용
 */
function solution(dirs) {
  let answer = 0;

  const paths = new Set();
  let currX = 0;
  let currY = 0;
  for (const dir of dirs) {
    let newX = currX;
    let newY = currY;

    switch (dir) {
      case 'U':
        newY++;
        break;
      case 'D':
        newY--;
        break;
      case 'R':
        newX++;
        break;
      case 'L':
        newX--;
        break;
      default:
        break;
    }
    if (Math.abs(newX) > 5 || Math.abs(newY) > 5) {
      continue;
    }
    const path = `${currX},${currY},${newX},${newY}`;
    const reversedPath = `${newX},${newY},${currX},${currY}`;
    paths.add(path > reversedPath ? path : reversedPath);

    currX = newX;
    currY = newY;
  }

  return paths.size;
}
