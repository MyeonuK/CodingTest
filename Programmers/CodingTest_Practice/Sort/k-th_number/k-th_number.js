function solution(array, commands) {
    return commands.reduce((arr, t) => {
        arr.push(array.slice(t[0] - 1, t[1]).sort((a, b) => a - b)[t[2] - 1]);

        return arr;
    }, []);
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));