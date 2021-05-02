function solution(n, lost, reserve) {
  let answer = 0;

  for (let i in lost) {
    if (reserve.includes(lost[i])) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
    }
  }

  answer = n - lost.length;

  for (let i in lost) {
    let temp = lost[i];
    if (reserve.includes(temp - 1)) {
      reserve.splice(0, reserve.indexOf(temp - 1) + 1);
      answer++;
    } else if (reserve.includes(temp + 1)) {
      reserve.splice(0, reserve.indexOf(temp + 1) + 1);
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
