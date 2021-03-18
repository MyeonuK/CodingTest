/*
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    })).reduce((result, c) => result *= c, 1) - 1;
}
*/

function solution(clothes) {
    let answer = 0;
    let len = clothes.length;
    let hash = [];

    for (let i = 0; i < len; i++) {
        if (hash[clothes[i][1]]) {
            hash[clothes[i][1]]++;
        }
        else {
            hash[clothes[i][1]] = 1;
        }
    }

    if (Object.keys(hash).length > 1) {
        answer = Object.values(hash).reduce((result, content) => result *= content + 1, 1);
        return answer - 1;
    }
    return Object.values(hash).reduce((result, content) => result += content, answer);
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]));