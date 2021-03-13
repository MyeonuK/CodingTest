function solution(bridge_length, weight, truck_weights) {

    let answer = 0;
    let temp = 0;

    let bridgeQueue = [[], []];
    let bridgeWeight = 0;

    do {
        if (bridgeQueue[1][0] == 0) {
            bridgeWeight -= bridgeQueue[0].shift();
            bridgeQueue[1].shift();
        }

        if (truck_weights[0] && bridgeWeight + truck_weights[0] <= weight && bridgeQueue[0].length <= bridge_length) {
            temp = truck_weights.shift();
            bridgeQueue[0].push(temp);
            bridgeQueue[1].push(bridge_length);
            bridgeWeight += temp;
        }
        else if (truck_weights[0]) {
            temp = bridgeQueue[1][0] - 1;
            for (let i in bridgeQueue[1]) {
                bridgeQueue[1][i] -= temp;
            }
            answer += temp;
        }

        for (let i in bridgeQueue[1]) {
            bridgeQueue[1][i]--;
        }

        answer++;
    } while (bridgeWeight)

    return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));