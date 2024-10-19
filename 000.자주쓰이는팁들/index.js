// 00. 객체 병함
const func = isMerge => {
  return {
    name: 'test', // 이름 속성
    age: 10, // 나이 속성
    ...(isMerge && { isMerge: true }), // 조건부 객체 병합: isMerge가 true일 때만 isMerge 속성 추가
  };
};

// 함수 호출 결과 출력
// console.log(func(true)); // isMerge가 true인 경우 결과 출력
// console.log(func(false)); // isMerge가 false인 경우 결과 출력

// 01. 배열 생성
// 방법 1
const arr = Array.from({ length: 10 }, (_, i) => i);
console.log(arr);

// 방법 2
const arr2 = [...new Array(10)].map((_, i) => i);
console.log(arr2);

// 2차원 배열 생성
const arr3 = Array.from({ length: 10 }).map((_, i) => new Array(i).fill(i));
console.log(arr3);

// 02. 배열 중복 제거
const arr4 = [1, 2, 2, 3, 4, 4, 5];
const arr5 = [...new Set(arr4)];
console.log(arr5);
