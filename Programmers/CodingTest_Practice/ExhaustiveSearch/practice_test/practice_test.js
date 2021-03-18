function solution(answers) {
    let answer = [];
    let len = answers.length;
    let highScore = -1;
    let patternsArr = [[1, 2, 3, 4, 5],
                        [2, 1, 2, 3, 2, 4, 2, 5],
                        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    for (let i = 0; i < 3; i++) {
        let patternNum = patternsArr[i].length;
        let score = 0;

        for (let j = 0; j < len; j++) {
            if (answers[j] === patternsArr[i][j%patternNum]) {
                score++;
            }
        }

        if (highScore == score) {
            answer.push(i + 1);
        }
        else if (highScore < score) {
            while (answer.length != 0) {
                answer.pop();
            }
            answer.push(i + 1);
            highScore = score;
        }
    }

    return answer;
}


console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));