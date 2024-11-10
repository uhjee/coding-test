# 방문 길이

## 문제 설명
게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

- U: 위쪽으로 한 칸 가기
- D: 아래쪽으로 한 칸 가기
- R: 오른쪽으로 한 칸 가기
- L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

![방문길이2_lezmdo.png](https://school.programmers.co.kr/learn/courses/30/lessons/49994?language=javascript#:~:text=https%3A//grepp%2Dprogrammers.s3.ap%2Dnortheast%2D2.amazonaws.com/files/production/ace0e7bc%2D9092%2D4b95%2D9bfb%2D3a55a2aa780e/%25E1%2584%2587%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%2586%25E1%2585%25AE%25E1%2586%25AB%25E1%2584%2580%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25B51_qpp9l3.png)

예를 들어, "ULURRDLLU"로 명령했다면

![방문길이2_lezmdo.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/668c7458-e184-472d-9d32-f5d2acca759a/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B52_lezmdo.png)

- 1번 명령어부터 7번 명령어까지 다음과 같이 움직입니다.

![방문길이3_sootjd.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/08558e36-d667-4160-bfec-b754c78a7d85/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B53_sootjd.png)

- 8번 명령어부터 9번 명령어까지 다음과 같이 움직입니다.

![방문길이4_hlpiej.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/a52af28e-5835-438b-9f40-5467ebf9bf03/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B54_hlpiej.png)

- 이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)

- 단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

예를 들어, "LULLLLLLU"로 명령했다면

![방문길이5_nitjwj.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f631f005-f8de-4392-a76c-a9ef64b6de08/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B55_nitjwj.png)

- 1번 명령어부터 6번 명령어대로 움직인 후, 7, 8번 명령어는 무시합니다. 다시 9번 명령어대로 움직입니다.

![방문길이6_nzhumd.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/35e62f0a-43c6-4142-bec6-6d28fbc57216/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B56_nzhumd.png)

이때 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.

명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

## 제한사항
- dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
- dirs의 길이는 500 이하의 자연수입니다.

## 입출력 예

| dirs | answer |
| "ULURRDLLU" | 7 |
| "LULLLLLLU" | 7 |

## 입출력 예 설명

### 입출력 예 #1
문제의 예시와 같습니다.

###   입출력 예 #2
문제의 예시와 같습니다.


```js
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
```
- 경로의 역방향을 고려하지 않음
- 중복 제거 로직을 이중 반복문으로 구현하여 성능 저하


```js
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

```
- 경로의 역방향 고려
- 문자열 비교 시, 사전식 순서로 비교
- Set 자료구조 사용하여 중복 제거