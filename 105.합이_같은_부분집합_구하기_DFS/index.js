function solution(arr) {
    let answer = "NO";
    const checkMap = {};
    arr.forEach((value) => {
        checkMap[value] = 0;
    });

    const DFS = (depth) => {
        if (depth >= arr.length) {
            let includedNumsSum = 0;
            let excludedNumsSum = 0;
            Object.entries(checkMap).forEach(([key, value]) => {
                if (value === 0) {
                    excludedNumsSum += Number(key);
                } else {
                    includedNumsSum += Number(key);
                }
            });
            if (excludedNumsSum === includedNumsSum) {
                answer = 'YES';
            }
        } else {
            checkMap[arr[depth]] = 1;
            DFS(depth + 1);
            checkMap[arr[depth]] = 0;
            DFS(depth + 1);
        }
    };
    DFS(0);
    return answer;
}

const solution1 = (arr) => {
    let answer = 'NO';
    const total = arr.reduce((sum, cur) => sum + cur, 0);
    let flag = 0; // 하나라도 ? YES인 경우 체크 플래그
    /**
     * @param L 레벨
     * @param sum 지금까지의 총합
     * @constructor
     */
    const DFS = (L, sum) => {
        if (flag === 1) return;
        if (L === arr.length) {
            if (total - sum === sum) {
                answer = "YES";
                flag = 1;
            }
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    };
    DFS(0, 0);
    return answer;
};

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution1(arr));
