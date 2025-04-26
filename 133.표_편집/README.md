# 표 편집 - 스택, 연결리스트

## 문제 설명

- [본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

업무용 소프트웨어를 개발하는 니니즈웍스의 인턴인 앙몬드는 명령어 기반으로 표의 행을 선택, 삭제, 복구하는 프로그램을 작성하는 과제를 맡았습니다. 세부 요구 사항은 다음과 같습니다

![table_1.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/d8e89054-53ba-4222-a485-dc56893f45e4/table_1.png)

위 그림에서 파란색으로 칠해진 칸은 현재 선택된 행을 나타냅니다. 단, 한 번에 한 행만 선택할 수 있으며, 표의 범위(0행 ~ 마지막 행)를 벗어날 수 없습니다. 이때, 다음과 같은 명령어를 이용하여 표를 편집합니다.

- `"U X"`: 현재 선택된 행에서 X칸 위에 있는 행을 선택합니다.
- `"D X"`: 현재 선택된 행에서 X칸 아래에 있는 행을 선택합니다.
- `"C"` : 현재 선택된 행을 삭제한 후, 바로 아래 행을 선택합니다. 단, 삭제된 행이 가장 마지막 행인 경우 바로 윗 행을 선택합니다.
- `"Z"` : 가장 최근에 삭제된 행을 원래대로 복구합니다. 단, 현재 선택된 행은 바뀌지 않습니다.

예를 들어 위 표에서 `"D 2"`를 수행할 경우 아래 그림의 왼쪽처럼 4행이 선택되며, `"C"`를 수행하면 선택된 행을 삭제하고, 바로 아래 행이었던 "네오"가 적힌 행을 선택합니다(4행이 삭제되면서 아래 있던 행들이 하나씩 밀려 올라오고, 수정된 표에서 다시 4행을 선택하는 것과 동일합니다).

![table_2.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/453bbb71-df69-4be2-a223-67361878202c/table_2.png)

다음으로 `"U 3"`을 수행한 다음 `"C"`를 수행한 후의 표 상태는 아래 그림과 같습니다.

![table_3.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/61261fa2-701d-4db5-9aa2-a56dd85a3dbf/table_3.png)

다음으로 `"D 4"`를 수행한 다음 `"C"`를 수행한 후의 표 상태는 아래 그림과 같습니다. 5행이 표의 마지막 행 이므로, 이 경우 바로 윗 행을 선택하는 점에 주의합니다.

![table_4.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b1a63278-be97-4e3a-a653-5a6aa0f477ba/table_4.png)

다음으로 `"U 2"`를 수행하면 현재 선택된 행은 2행이 됩니다.

![table_5.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b1189eff-e4ee-4119-bb55-a1f06e388c29/table_5.png)

위 상태에서 `"Z"`를 수행할 경우 가장 최근에 제거된 "라이언"이 적힌 행이 원래대로 복구됩니다.

![table_6.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/0a386d19-0391-46a7-8086-9f36db31940d/table_6.png)

다시한번 `"Z"`를 수행하면 그 다음으로 최근에 제거된 "콘"이 적힌 행이 원래대로 복구됩니다. 이때, 현재 선택된 행은 바뀌지 않는 점에 주의하세요.
![table_7.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/8900360f-bf0b-449b-a508-98918a14ef1d/table_7.png)

이때, 최종 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 `"O"`, 삭제된 행은 `"X"`로 표시하면 다음과 같습니다.

![table_8.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/87a31aeb-50fb-4c0d-9f6b-8427632b582e/table_8.png)

처음 표의 행 개수를 나타내는 정수 n, 처음에 선택된 행의 위치를 나타내는 정수 k, 수행한 명령어들이 담긴 문자열 배열 cmd가 매개변수로 주어질 때, 모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 O, 삭제된 행은 X로 표시하여 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

## 제한사항

- 5 ≤ n ≤ 1,000,000
- 0 ≤ k < n
- 1 ≤ cmd의 원소 개수 ≤ 200,000
  - cmd의 각 원소는 "U X", "D X", "C", "Z" 중 하나입니다.
  - X는 1 이상 300,000 이하인 자연수이며 0으로 시작하지 않습니다.
    -X가 나타내는 자연수에 ',' 는 주어지지 않습니다. 예를 들어 123,456의 경우 123456으로 주어집니다.
  - cmd에 등장하는 모든 X들의 값을 합친 결과가 1,000,000 이하인 경우만 입력으로 주어집니다.
  - 표의 모든 행을 제거하여, 행이 하나도 남지 않는 경우는 입력으로 주어지지 않습니다.
  - 본문에서 각 행이 제거되고 복구되는 과정을 보다 자연스럽게 보이기 위해 "이름" 열을 사용하였으나, "이름"열의 내용이 실제 문제를 푸는 과정에 필요하지는 않습니다. "이름"열에는 - 서로 다른 이름들이 중복없이 채워져 있다고 가정하고 문제를 해결해 주세요.
  - 표의 범위를 벗어나는 이동은 입력으로 주어지지 않습니다.
  - 원래대로 복구할 행이 없을 때(즉, 삭제된 행이 없을 때) "Z"가 명령어로 주어지는 경우는 없습니다.
  - 정답은 표의 0행부터 n - 1행까지에 해당되는 O, X를 순서대로 이어붙인 문자열 형태로 return 해주세요.

### 정확성 테스트 케이스 제한 사항

- 5 ≤ n ≤ 1,000
- 1 ≤ cmd의 원소 개수 ≤ 1,000

### 효율성 테스트 케이스 제한 사항

- 주어진 조건 외 추가 제한사항 없습니다.

---

## 풀이

```js
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
```

- 연결 리스트와 같이 해당 좌표 p 의 '위'좌표를 모아두는 배열 up, '아래'좌표를 모아두는 배열 down을 둠
- 삭제 로직은 실제로 배열을 조작하는 것이 아님
  - _삭제_ : 연결 리스트에서 k를 배제하는 것으로 삭제 로직 구현
    - k의 위의 아래 좌표 대체: k => k의 아래
    - k의 아래의 위의 좌표 대체: k => k의 위
- 시간 복잡도: O(N \* N)
  - N은 n의 길이 (최대 1,000,000)
  - M은 cmd의 길이 (최대 200,000)

---

```js
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
```

- move() 함수가 비효율적임
  - 최악의 경우 O(n) 시간이 필요
- 시간 복잡도: O(N \* N)
  - N은 n의 길이 (최대 1,000,000)
  - M은 cmd의 길이 (최대 200,000)
