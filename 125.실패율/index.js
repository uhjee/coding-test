const solution = (n, stages) => {
  const cnts = Array.from({ length: n }, (_, i) => ({
    stage: i + 1,
    passed: 0,
    current: 0,
  }));

  for (const stage of stages) {
    for (let i = 0; i < cnts.length; i++) {
      if (cnts[i].stage <= stage) cnts[i].passed++;
      if (cnts[i].stage === stage) cnts[i].current++;
    }
  }
  const resultMap = cnts
    .map(i => ({
      ...i,
      failRate: i.current / i.passed,
    }))
    .sort((a, b) => {
      if (a.failRate < b.failRate) return 1;
      else if (a.failRate > b.failRate) return -1;
      else {
        if (a.stage < b.stage) return -1;
        else if (a.stage > b.stage) return 1;
      }
    });
  // console.log(resultMap);
  return resultMap.map(i => i.stage);
};


console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
