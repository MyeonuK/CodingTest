function solution(brown, yellow) {
  for (let i = 1; i <= Math.ceil(yellow / 2); i++) {
    if ((yellow / i + 2) * (i + 2) == brown + yellow) {
      return [yellow / i + 2, i + 2];
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
