function solution(priorities, location) {
    let temp = new Array(9).fill(0);
    let printQueue = Array.from(Array(2), () => Array());
    let resultQueue = new Array();

    for (let i in priorities) {
        temp[priorities[i] - 1]++;
        printQueue[0].push(priorities[i]);
        printQueue[1].push(Number(i));
    }

    for (let i = 8; i >= 0; i--) {
        while (temp[i]) {
            if (printQueue[0][0] != Number(i) + 1) {
                printQueue[0].push(printQueue[0].shift());
                printQueue[1].push(printQueue[1].shift());
            }
            else {
                printQueue[0].shift();
                resultQueue.push(printQueue[1].shift());
                temp[i]--;
            }
        }
    }

    return resultQueue.indexOf(location) + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));