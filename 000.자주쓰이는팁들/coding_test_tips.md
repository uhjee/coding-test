# 자주쓰이는 팁들

## 00. 객체
### 조건부 객체 병합
  - `&&` 연산자를 활용해 조건부 객체 병함

```js
const func = isMerge => {
  return {
    name: 'test', // 이름 속성
    , ...,
    ...(isMerge && { isMerge: true }), // 조건부 객체 병합: isMerge가 true일 때만 isMerge 속성 추가
  };
};

func(true);
// { name: 'test', age: 10, isMerge: true }
func(false);
// { name: 'test', age: 10 }
```

## 01. 배열

### 배열 생성1 
```js
const arr = Array.from({ length: 10 }, (_, i) => i);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 배열 생성2
```js
const arr2 = [...new Array(10)].map((_, i) => i);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 2차원 배열 생성
```js
const arr3 = Array.from({ length: 10 }).map((_, i) => new Array(i).fill(i));
// [
//   [],
//   [1],
//   [2, 2],
//   [3, 3, 3],
//   [4, 4, 4, 4],
//   [5, 5, 5, 5, 5],
//   [6, 6, 6, 6, 6, 6],
//   [7, 7, 7, 7, 7, 7, 7], ...
// ]
```

### 배열 중복 제거
```js
const arr4 = [1, 2, 2, 3, 4, 4, 5];
const arr5 = [...new Set(arr4)];
// [1, 2, 3, 4, 5]
```
