function solution(citations) {
    let answer = citations.sort((a, b) => a - b).reverse();
    let len = answer.length;

    for (let i = 0; i < len; i++) {
        if (answer[i] <= i + 1 && len - i - 1 < answer[i]) {
            return i;
        }
    }

    return 0;
}

console.log(solution([5]));