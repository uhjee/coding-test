// 정답은 맞으나 O(n^2)
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);

  while (people.length > 0) {
    if (people.length === 1) {
      answer++;
      break;
    }
    let currentWeight = people.shift();
    if (currentWeight > limit - 40) {
      answer++;
      continue;
    }

    for (let i = people.length - 1; i > -1; i--) {
      if (currentWeight + people[i] <= limit) {
        currentWeight += people.splice(i, 1)[0];
        answer++;
        break;
      } else {
        answer++;
        break;
      }
    }
  }
  return answer;
}

/** Two pointer로 해결... greedy 문제라는데.. */
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  let p1 = 0;
  let p2 = people.length - 1;

  while (p1 < people.length && p2 > 0 && p1 <= p2) {
    if (people[p1] + people[p2] <= limit && p1 < p2) {
      answer++;
      p2--;
    } else {
      answer++;
    }
    p1++;
  }

  return answer;
}
