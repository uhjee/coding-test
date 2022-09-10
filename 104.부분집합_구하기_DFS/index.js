function solution(n) {
    let answer = [];

    // check 배열: 0, 1로 부분집합에 포함할 것인지 여부를 체크하는 배열
    const checkIndex = Array.from({length: n + 1}, () => 0);
    const DFS = (v) => {
        // depth n일 경우: 종착
        if (v === n + 1) {
            console.log(checkIndex);
            const result = [];
            for (let i = 1; i <= n; i++) {
                if (checkIndex[i] === 1) result.push(i);
            }
            if (result.length > 0) {
                answer.push(result);
            }
        } else {
            // 현재 depth의 포함 여부 세팅해서 이진트리로 DFS
            checkIndex[v] = 1;
            DFS(v + 1);
            checkIndex[v] = 0;
            DFS(v + 1);
        }
    };
    DFS(1);
    return answer;
}

console.log(solution(3));
