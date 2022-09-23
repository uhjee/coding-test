function solution(m, ps, pt) {
    let answer = 0;

    const DFS = (L, scoreSum, timeSum) => {
        if (timeSum > m) {
            return;
        } else {
            console.log({L, scoreSum, timeSum});
            if (scoreSum > answer) {
                answer = scoreSum;
            }
        }
        if (L < ps.length) {
            DFS(L + 1, scoreSum, timeSum);
            DFS(L + 1, scoreSum + ps[L], timeSum + pt[L]);
        }
    };
    DFS(0, 0, 0);
    return answer;
}

function solution1(m, ps, pt) {
    let answer = 0;
    let n = ps.length;

    function DFS(L, sum, time) {
        console.log({L, sum, time});

        if (time > m) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + ps[L], time + pt[L]);
            DFS(L + 1, sum, time);
        }
    }

    DFS(0, 0, 0);
    return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution1(20, ps, pt));
