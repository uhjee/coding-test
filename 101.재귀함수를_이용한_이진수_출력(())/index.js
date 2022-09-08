function solution(n) {
    const DFS = (L) => {
        let result = '';
        if (Math.floor(L / 2) < 2) {
            result += L;
            return result;
        } else {
            result += DFS(Math.floor(L / 2));
            return result;
        }
    };
    return DFS(n);
}

console.log(solution(11));
