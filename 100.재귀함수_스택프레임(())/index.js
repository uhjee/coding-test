const counter = (i, last) => {
  if (i > last) return;
  let j = i;
  console.log(j++);
  counter(j, last);
};

const solution = n => {
  counter(1, n);
};

//--------------------------------
function solution1(n) {
  /**
   * DFS:  깊이 우선 탐색 - 재귀함수
   * @param   {[type]}  L  level 약자
   * @return  {[type]}     [return description]
   */
  function DFS(L) {
    if (L == 0) return; // 재귀 호출 break;
    else {
      DFS(L - 1); // 내부 호출부터 실행
      console.log(L); 
    }
  }
  DFS(n);
}

const n = 3;
console.log(solution1(n));
