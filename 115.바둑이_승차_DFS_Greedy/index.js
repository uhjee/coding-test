function solution(c, arr) {
    let answer = 0;
    const DFS = (L, sum) => {
        if (sum > c) return; // 더 이상 재귀가 뻗어나가지 못하도록 처리

        // 종착되는 시점
        if (L === arr.length) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + arr[L]); // 태우는 경우의 수
            DFS(L + 1, sum); // 태우지 않는 경우의 수
        }
    };
    DFS(0, 0);ㄴ
    return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
