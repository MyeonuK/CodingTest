function solution(progresses, speeds) {
    let answer = [];
    let progressArr = [];
    let count = 0;

    for (let i in progresses) {
        progressArr.push([100 - progresses[i], speeds[i]]);
    }

    while (progressArr.length) {
        let temp = Math.ceil(progressArr[0][0] / progressArr[0][1]);

        for (let i in progressArr) {
            if (0 < progressArr[i][0]) {
                progressArr[i][0] -= progressArr[i][1] * temp;
            }
        }

        for (let i = 0; i < progressArr.length; i++) {
            if (progressArr[i][0] <= 0) {
                progressArr.shift();
                count++;
                i--;
            }
            else {
                break;
            }
        }

        /*
        while (progressArr[0][0] <= 0) {
            progressArr.shift();
            count++;
        }
        */

        if (count) {
            answer.push(count);
            count = 0;
        }
    }

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));