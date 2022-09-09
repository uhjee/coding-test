/**
 * @param n : 트리의 root 인덱스
 * @returns {string}
 */
function solution(n) {
    let answer = "";

    const DFS = (v) => {
        if (v > 7) {
            return;
        } else {
            console.log(v); // 전위 순회
            DFS(v * 2); // 왼쪽 자식 방향
            // console.log(v); // 중위 순회
            DFS(v * 2 + 1); // 오른쪽 자식 방향
            // console.log(v); // 후위 순회
        }
    };

    DFS(n);

    return answer;
}

console.log(solution(1));
